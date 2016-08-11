package com.handtours.controller;

import com.handtours.domain.RecommendCategory;
import com.handtours.service.api.project.back.IUser;
import net.sf.json.JSONObject;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by april on 2016/7/15.
 */
@Controller
@RequestMapping("/a")
public class IndexController {
    private Logger logger = Logger.getLogger(this.getClass());

    @Autowired
    private IUser iUser;

    @RequestMapping("/save")
    public @ResponseBody
    String save(RecommendCategory rc){
        logger.info(iUser);
        return "";
    }
}
