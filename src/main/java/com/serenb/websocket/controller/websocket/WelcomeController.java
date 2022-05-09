package com.serenb.websocket.controller.websocket;

import com.serenb.websocket.dto.Message;
import com.serenb.websocket.dto.NickName;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class WelcomeController {
    @MessageMapping("/welcome")
    @SendTo("/topic/chat")
    public Message welcome(NickName nickName) {
        return new Message(nickName.getNickname(), nickName.getHtmlClass(), null);
    }
}
