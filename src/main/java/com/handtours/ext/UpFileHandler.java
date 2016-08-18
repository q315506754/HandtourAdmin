package com.handtours.ext;

import com.handtours.common.utils.UpYunUtil;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * @author Administrator
 *
 *         CreatedTime  2016/8/18 0018 16:11
 */
public class UpFileHandler {
    private Map<String, String> map = new HashMap<>();

    public void register(String key,File file){
        try {
            map.put(key, file.getCanonicalPath());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public String post(String key){
        try {
            String path = map.get(key);
            //no slash
            File file = new File(path);
            String b = UpYunUtil.uploadFileAndGetFileName(file);

            file.delete();
            map.remove(key);
            return b;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return key;
    }

    //no slash in path
    public String post(String key,String path){
        try {
            String fpath = map.get(key);
            File file = new File(fpath);
            UpYunUtil.uploadFile(path, file);
            file.delete();
            map.remove(key);
            return path;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return key;
    }
}
