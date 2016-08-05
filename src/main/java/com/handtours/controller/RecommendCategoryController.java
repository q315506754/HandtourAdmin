package com.handtours.controller;

import com.handtours.domain.RecommendCategory;
import net.sf.json.JSONObject;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by zhawei on 2016/7/21.
 */
@Controller
@RequestMapping("/product/rc")
public class RecommendCategoryController {
    private Logger log = Logger.getLogger(RecommendCategoryController.class);

    @RequestMapping("/save")
    public @ResponseBody String save(RecommendCategory rc){
        log.info(JSONObject.fromObject(rc));
        return "";
    }
}
