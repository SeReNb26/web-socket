package com.serenb.websocket.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class Message {
    private String sender;
    private String htmlClass;
    private String content;

    public Message(String content, String htmlClass, String sender) {
        this.content = content;
        this.htmlClass = htmlClass;
        this.sender = sender;
    }
}
