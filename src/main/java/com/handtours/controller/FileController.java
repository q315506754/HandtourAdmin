package com.handtours.controller;

import com.handtours.common.utils.FileUtil;
import com.handtours.ext.UpFileHandler;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.util.List;
import java.util.Random;

/**
 * Created by april on 2016/7/15.
 */
@Controller
@RequestMapping("/file")
public class FileController {
    private Logger logger = Logger.getLogger(this.getClass());

    //通过Spring的autowired注解获取spring默认配置的request
    @Autowired
    private HttpServletRequest request;

    @Autowired
    private UpFileHandler upFileHandler;

    private Random random = new Random();
    private String tempPath ;

    /***
     * 上传文件 用@RequestParam注解来指定表单上的file为MultipartFile
     *
     * @param file
     * @return
     */
    @RequestMapping("upload")
    public @ResponseBody String fileUpload(@RequestParam("file") MultipartFile file) {
        generateTempPath();

        String prefix = System.currentTimeMillis()+"-"+random.nextInt(10000);

        // 判断文件是否为空
        if (!file.isEmpty()) {
            try {
                String name = file.getOriginalFilename();
                logger.debug("uploaded:"+name);

                // 文件保存路径
                String filePath = tempPath + prefix+"."+FileUtil.getSuffix(name);
                logger.debug("saved path:"+filePath);

                // 转存文件
                File dest = new File(filePath);
                dest.mkdirs();
                dest.createNewFile();

                file.transferTo(dest);


                upFileHandler.register(prefix,dest);
                return prefix;
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return "";
    }

//    @RequestMapping("download")
//    public @ResponseBody String fileUpload(@RequestParam("file") MultipartFile file) {
//
//    }

    private void generateTempPath() {
        if (tempPath == null) {
            tempPath = request.getSession().getServletContext().getRealPath("/") + "upload/";
            logger.debug("temp path:"+tempPath);
        }
    }

}
