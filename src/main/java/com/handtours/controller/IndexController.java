package com.handtours.controller;

import com.handtours.domain.RecommendCategory;
import com.handtours.service.api.domain.back.req.bg.user.QueryUserReq;
import com.handtours.service.api.domain.back.res.bg.user.QueryUserOne;
import com.handtours.service.api.domain.back.res.bg.user.QueryUserRes;
import com.handtours.service.api.project.back.IUser;
import com.handtours.util.SessionAttr;
import net.sf.json.JSONObject;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.util.List;

/**
 * Created by april on 2016/7/15.
 */
@Controller
@RequestMapping("/")
public class IndexController {
    private Logger logger = Logger.getLogger(this.getClass());

    @Autowired
    private IUser iUser;

    @Autowired
    private HttpSession session;

    @RequestMapping("/info")
    public @ResponseBody
    QueryUserOne info(){
        QueryUserReq param = new QueryUserReq();
        param.setKeyword(String.valueOf(session.getAttribute(SessionAttr.USER_ID)));
        param.setPageSize(1);

        QueryUserRes res = iUser.query(param);
        if (res.getCode() == 0) {
            List<QueryUserOne> dataList = res.getDataList();
            if (dataList.size() > 0) {
                return dataList.get(0);
            }
        }
        return null;
    }

    @RequestMapping("/config")
    public @ResponseBody
    JSONObject config(){
        JSONObject ret = new JSONObject();
        ret.put("imgUrl", "http://handtours.b0.upaiyun.com");
        return ret;
    }
}
