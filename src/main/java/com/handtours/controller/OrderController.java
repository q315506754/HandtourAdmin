package com.handtours.controller;

import com.handtours.common.constants.core.OrderDiscountStatus;
import com.handtours.common.constants.core.OrderSettleStatus;
import com.handtours.common.constants.core.OrderStatus;
import com.handtours.service.api.domain.core.req.order.DeleteOrderReq;
import com.handtours.service.api.domain.core.req.order.QueryOrderReq;
import com.handtours.service.api.domain.core.req.order.SaveOrderReq;
import com.handtours.service.api.domain.core.req.order.UpdateOrderReq;
import com.handtours.service.api.domain.core.res.order.DeleteOrderRes;
import com.handtours.service.api.domain.core.res.order.QueryOrderRes;
import com.handtours.service.api.domain.core.res.order.SaveOrderRes;
import com.handtours.service.api.domain.core.res.order.UpdateOrderRes;
import com.handtours.service.api.project.core.IOrder;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by zhawei on 2016/7/21.
 */
@Controller
@RequestMapping("/order")
public class OrderController {
    private Logger logger = Logger.getLogger(this.getClass());

    @Autowired
    private IOrder iOrder;

    @RequestMapping("/save")
    public
    @ResponseBody
    SaveOrderRes save(SaveOrderReq param) {
        logger.debug(param);

        SaveOrderRes res = iOrder.save(param);

        logger.debug(res);
        return res;
    }

    /**
     * http://localhost:8080/user/query
     *
     * @param param
     *
     * @return
     */
    @RequestMapping("/query")
    public
    @ResponseBody
    QueryOrderRes query(QueryOrderReq param, Integer start, Integer length) {
        param.setPageSize(length);
        param.setPageIndex(start / length);

        logger.debug(param);

        QueryOrderRes res = iOrder.query(param);

        logger.debug(res);
        return res;
    }

    @RequestMapping("/update")
    public
    @ResponseBody
    UpdateOrderRes update(UpdateOrderReq param) {
        logger.debug(param);
        UpdateOrderRes res = iOrder.update(param);
        logger.debug(res);
        return res;
    }

    @RequestMapping("/audit")
    public
    @ResponseBody
    UpdateOrderRes audit(UpdateOrderReq param) {
        param.setStatus(OrderStatus.AL_HANDLED.getStatus());
        logger.debug(param);
        UpdateOrderRes res = iOrder.update(param);
        logger.debug(res);
        return res;
    }

    @RequestMapping("/went")
    public
    @ResponseBody
    UpdateOrderRes went(UpdateOrderReq param) {
        param.setStatus(OrderStatus.AL_WENT.getStatus());
        logger.debug(param);
        UpdateOrderRes res = iOrder.update(param);
        logger.debug(res);
        return res;
    }

    @RequestMapping("/cancel")
    public
    @ResponseBody
    UpdateOrderRes cancel(UpdateOrderReq param) {
        param.setStatus(OrderStatus.AL_CANCELLED.getStatus());
        logger.debug(param);
        UpdateOrderRes res = iOrder.update(param);
        logger.debug(res);
        return res;
    }

    @RequestMapping("/settle")
    public
    @ResponseBody
    UpdateOrderRes settle(UpdateOrderReq param) {
        param.setSettlementStatus(OrderSettleStatus.ALREADY.getStatus());
        logger.debug(param);
        UpdateOrderRes res = iOrder.update(param);
        logger.debug(res);
        return res;
    }

    @RequestMapping("/discount")
    public
    @ResponseBody
    UpdateOrderRes discount(UpdateOrderReq param) {
        param.setDiscountStatus(OrderDiscountStatus.ALREADY.getStatus());
        logger.debug(param);
        UpdateOrderRes res = iOrder.update(param);
        logger.debug(res);
        return res;
    }

    @RequestMapping("/delete")
    public
    @ResponseBody
    DeleteOrderRes delete(DeleteOrderReq param) {
        logger.debug(param);
        DeleteOrderRes res = iOrder.delete(param);

        logger.debug(res);
        return res;
    }


}
