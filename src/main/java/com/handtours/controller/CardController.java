package com.handtours.controller;

import com.handtours.common.constants.core.CardStatus;
import com.handtours.service.api.domain.back.req.bg.user.DeleteUserReq;
import com.handtours.service.api.domain.back.req.bg.user.QueryUserReq;
import com.handtours.service.api.domain.back.req.bg.user.SaveUserReq;
import com.handtours.service.api.domain.back.req.bg.user.UpdateUserReq;
import com.handtours.service.api.domain.back.res.bg.user.DeleteUserRes;
import com.handtours.service.api.domain.back.res.bg.user.QueryUserRes;
import com.handtours.service.api.domain.back.res.bg.user.SaveUserRes;
import com.handtours.service.api.domain.back.res.bg.user.UpdateUserRes;
import com.handtours.service.api.domain.core.req.card.user.DeleteCardUserReq;
import com.handtours.service.api.domain.core.req.card.user.QueryCardUserReq;
import com.handtours.service.api.domain.core.req.card.user.SaveCardUserReq;
import com.handtours.service.api.domain.core.req.card.user.UpdateCardUserReq;
import com.handtours.service.api.domain.core.res.card.user.DeleteCardUserRes;
import com.handtours.service.api.domain.core.res.card.user.QueryCardUserRes;
import com.handtours.service.api.domain.core.res.card.user.SaveCardUserRes;
import com.handtours.service.api.domain.core.res.card.user.UpdateCardUserRes;
import com.handtours.service.api.project.back.IUser;
import com.handtours.service.api.project.core.ICardUser;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by zhawei on 2016/7/21.
 */
@Controller
@RequestMapping("/card")
public class CardController {
    private Logger logger = Logger.getLogger(this.getClass());

    @Autowired
    private ICardUser iUser;

    @RequestMapping("/save")
    public
    @ResponseBody
    SaveCardUserRes save(SaveCardUserReq param) {
        logger.debug(param);

        SaveCardUserRes res = iUser.save(param);

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
    QueryCardUserRes query(QueryCardUserReq param) {
        param.setPageSize(Integer.MAX_VALUE);
        logger.debug(param);

        QueryCardUserRes res = iUser.query(param);

        logger.debug(res);
        return res;
    }

    @RequestMapping("/update")
    public
    @ResponseBody
    UpdateCardUserRes update(UpdateCardUserReq param, String mobile) {
        logger.debug(mobile);
        param.setId(mobile);
        logger.debug(param);

        UpdateCardUserRes res = iUser.update(param);

        logger.debug(res);
        return res;
    }

    @RequestMapping("/audit")
    public
    @ResponseBody
    UpdateCardUserRes audit(UpdateCardUserReq param, String mobile) {
        logger.debug(mobile);
        param.setId(mobile);
        param.setStatus(CardStatus.AUDITED.getStatus());
        logger.debug(param);

        UpdateCardUserRes res = iUser.update(param);

        logger.debug(res);
        return res;
    }

    @RequestMapping("/delete")
    public
    @ResponseBody
    DeleteCardUserRes delete(DeleteCardUserReq param, String mobile) {
        logger.debug(mobile);
        param.setId(mobile);
        logger.debug(param);
        DeleteCardUserRes res = iUser.delete(param);

        logger.debug(res);
        return res;
    }


}
