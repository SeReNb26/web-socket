package com.serenb.websocket.controller.http;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/chat1")
public class TestChatController {
    @GetMapping
    public String getChatPage() {
        return "test-chat";
    }
}
