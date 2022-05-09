let stompClient = null;

function connect() {
    const socket = new SockJS('/chat');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function () {
        stompClient.subscribe("/topic/chat", function (message) {
            showMessage(JSON.parse(message.body));
        });
    });
}

function showMessage(message) {
    let content = message.content;
    let htmlClass = message.htmlClass;
    if (htmlClass === 'welcome') {
        $("#chat-body").append("<div class='welcome-message'>" + content + " joined to chat</div>");
    } else {
        if (sessionStorage.getItem("nickname") === message.sender) {
            $("#chat-body").append("<div class='sender-message'>" +
                    "<span class='sender-message-content'>" +
                        content +
                    "</span>" +
                "</div>");
        } else {
            $("#chat-body").append("<div class='receiver-message'>" +
                    "<span class='receiver-message-nickname'>" +
                        sessionStorage.getItem("nickname") + ":" +
                    "</span>" +
                    "</br>" +
                    "<span class='receiver-message-content'>" +
                        content +
                    "</span>" +
                "</div>");
        }
    }
}

function sendMessage() {
    stompClient.send("/app/message",
        {},
        JSON.stringify({
            'content': $("#message").val(),
            "htmlClass": "message",
            "sender": sessionStorage.getItem("nickname")
        }));
}

function sendWelcomeMessage() {
    let nickname = sessionStorage.getItem("nickname");
    stompClient.send("/app/welcome",
        {},
        JSON.stringify({"nickname": nickname, "htmlClass": "welcome"}));
}

function myOnLoad() {
    if (sessionStorage.getItem("nickname") === null) {
        alert("You will be redirect to registration page :)")
        location.href = "/";
    }
    connect();
    setTimeout(() => sendWelcomeMessage(), 1000);
}

$(function () {
    $("input").keypress(function (event) {
        const code = (event.keyCode ? event.keyCode : event.which);
        if (code === 13) {
            $("#send").click();
        }
    });
    $("button").on('submit', function (e) {
        e.preventDefault();
    });
    $("#send").click(function () {
        sendMessage();
        document.querySelector("#message").value = null;
    });
    $("#start").click(function () {
        sessionStorage.setItem("nickname", document.querySelector("#nickname").value);
        location.href = "/chat";
    });
});
