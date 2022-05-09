package com.serenb.websocket.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class NickName {
    private String htmlClass;
    private String nickname;

    public NickName(String nickname) {
        this.nickname = nickname;
    }
}
