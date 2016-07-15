package com.handtours.filter;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by bingdian on 15/10/10.
 */
public class PathFilter implements HandlerInterceptor
{
    public boolean preHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o) throws Exception {
        return true;
    }

    public void postHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, ModelAndView modelAndView) throws Exception {
        setBasePathToRequest(httpServletRequest);
    }

    private void setBasePathToRequest(HttpServletRequest request) {
        String basePath = request.getScheme() + "://" + request.getServerName()+":" + request.getServerPort() + request.getContextPath();
        request.setAttribute("basePath",basePath);
    }

    public void afterCompletion(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, Exception e) throws Exception {

    }
}
