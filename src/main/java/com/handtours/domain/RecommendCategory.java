package com.handtours.domain;

/**
 * Created by zhawei on 2016/7/29.
 */
public class RecommendCategory {
    private String name;
    private String seat;
    private boolean hide;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSeat() {
        return seat;
    }

    public void setSeat(String seat) {
        this.seat = seat;
    }

    public boolean isHide() {
        return hide;
    }

    public void setHide(boolean hide) {
        this.hide = hide;
    }
}
