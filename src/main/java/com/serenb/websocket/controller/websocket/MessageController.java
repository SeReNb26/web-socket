package com.serenb.websocket.controller.websocket;

import com.serenb.websocket.dto.Message;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class GreetingController {
    @MessageMapping("/message")
    @SendTo("/topic/chat")
    public Message message(Message message) throws Exception {
        return message;
    }
}
