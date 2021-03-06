package com.handtours.controller;

import com.handtours.ext.UpFileHandler;
import com.handtours.service.api.domain.back.req.bg.user.DeleteUserReq;
import com.handtours.service.api.domain.back.req.bg.user.QueryUserReq;
import com.handtours.service.api.domain.back.req.bg.user.SaveUserReq;
import com.handtours.service.api.domain.back.req.bg.user.UpdateUserReq;
import com.handtours.service.api.domain.back.res.bg.user.DeleteUserRes;
import com.handtours.service.api.domain.back.res.bg.user.QueryUserRes;
import com.handtours.service.api.domain.back.res.bg.user.SaveUserRes;
import com.handtours.service.api.domain.back.res.bg.user.UpdateUserRes;
import com.handtours.service.api.project.back.IUser;
import com.handtours.util.SessionAttr;
import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;

/**
 * Created by zhawei on 2016/7/21.
 */
@Controller
@RequestMapping("/user")
public class UserController {
    private Logger logger = Logger.getLogger(this.getClass());

    @Autowired
    private IUser iUser;

    @Autowired
    private UpFileHandler upFileHandler;

    @Autowired
    private HttpSession session;

    @RequestMapping("/save")
    public
    @ResponseBody
    SaveUserRes save(SaveUserReq param) {
        logger.debug(param);

        SaveUserRes res = iUser.save(param);

        logger.debug(res);
        return res;
    }

    /**
     * http://localhost:8080/user/query
     *
     * @param param
     * @return
     */
    @RequestMapping("/query")
    public
    @ResponseBody
    QueryUserRes query(QueryUserReq param) {
        param.setPageSize(Integer.MAX_VALUE);
        logger.debug(param);

        QueryUserRes res = iUser.query(param);

        logger.debug(res);
        return res;
    }

    @RequestMapping("/update")
    public
    @ResponseBody
    UpdateUserRes update(UpdateUserReq param, String mobile, String avatarKey) {
        logger.debug(mobile);
        param.setId(mobile);

        String avatarUrl = avatarKey;
//        String avatarUrl = param.getAvatarUrl();
        if (!StringUtils.isEmpty(avatarUrl)) {
            logger.debug("transform file url:");
            logger.debug("from key:"+avatarUrl);

            String upPath = "bguser/"+mobile;

            String postPath = upFileHandler.post(avatarUrl, upPath);

            param.setAvatarUrl(postPath);
            logger.debug("to path:"+postPath);
        }

        logger.debug(param);

        UpdateUserRes res = iUser.update(param);

        logger.debug(res);
        return res;
    }

    @RequestMapping("/delete")
    public
    @ResponseBody
    DeleteUserRes delete(DeleteUserReq param, String mobile) {
        logger.debug(mobile);
        param.setId(mobile);
        logger.debug(param);
        DeleteUserRes res = iUser.delete(param);

        logger.debug(res);
        return res;
    }


}
