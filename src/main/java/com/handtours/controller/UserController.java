package com.handtours.controller;

import com.handtours.service.api.domain.back.req.DeleteUserReq;
import com.handtours.service.api.domain.back.req.QueryUserReq;
import com.handtours.service.api.domain.back.req.SaveUserReq;
import com.handtours.service.api.domain.back.req.UpdateUserReq;
import com.handtours.service.api.domain.back.res.DeleteUserRes;
import com.handtours.service.api.domain.back.res.QueryUserRes;
import com.handtours.service.api.domain.back.res.SaveUserRes;
import com.handtours.service.api.domain.back.res.UpdateUserRes;
import com.handtours.service.api.project.back.IUser;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by zhawei on 2016/7/21.
 */
@Controller
@RequestMapping("/user")
public class UserController {
    private Logger logger = Logger.getLogger(this.getClass());

    @Autowired
    private IUser iUser;

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
    UpdateUserRes update(UpdateUserReq param,String mobile) {
        logger.debug(mobile);
        param.setId(mobile);
        logger.debug(param);

        UpdateUserRes res = iUser.update(param);

        logger.debug(res);
        return res;
    }

    @RequestMapping("/delete")
    public
    @ResponseBody
    DeleteUserRes delete(DeleteUserReq param,String mobile) {
        logger.debug(mobile);
        param.setId(mobile);
        logger.debug(param);
        DeleteUserRes res = iUser.delete(param);

        logger.debug(res);
        return res;
    }


}
