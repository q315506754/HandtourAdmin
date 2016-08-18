package com.handtours.ext;

import com.handtours.service.api.domain.back.req.bg.user.LoginUserReq;
import com.handtours.service.api.domain.back.res.bg.user.LoginUserRes;
import com.handtours.service.api.project.back.IUser;
import com.handtours.util.SessionAttr;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.context.request.RequestContextListener;

import javax.servlet.http.HttpSession;
import java.util.HashSet;
import java.util.Set;

/**
 * @author JiangLi
 *
 *         CreateTime 2013-9-3 下午2:54:40
 */
public class MyUserDetailServiceImpl implements UserDetailsService {
    private final static Logger log = Logger.getLogger(MyUserDetailServiceImpl.class);

    @Autowired
    private IUser iUser;

    @Autowired
    private MyUsernamePasswordAuthenticationFilter myUsernamePasswordAuthenticationFilter;

    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        // System.out.println("---------MyUserDetailServiceImpl:loadUserByUsername------正在加载用户名和密码，用户名为："
        // + username);

        LoginUserReq loginUserReq = new LoginUserReq();
        loginUserReq.setUsername(username);
        LoginUserRes login = iUser.login(loginUserReq);
        if (login.getCode() == 10000002) {
            throw new UsernameNotFoundException("无法找到您输入的账号");
        }

        if (login.getCode() != 0) {
            throw new UsernameNotFoundException(login.getMsg());
        }

//        System.out.println(session);

//        QueryUserOne result = login.getData();
//        if (result == null) {
//			throw new UsernameNotFoundException("没有该用户");
//		}


        String pwd = login.getPassword();
//		JSONArray rights = result.getJSONArray("rights");

        boolean enabled = login.getEnable(); // 是否可用
        boolean accountNonExpired = true; // 是否过期
        boolean credentialsNonExpired = true;
        boolean accountNonLocked = true;

        Set<GrantedAuthority> authorities = new HashSet<GrantedAuthority>();
//		for (Object role : rights) {
//			GrantedAuthority ga = new SimpleGrantedAuthority(role.toString());
//			authorities.add(ga);
//		}



        myUsernamePasswordAuthenticationFilter.reses.set(login);
        return new org.springframework.security.core.userdetails.User(username, pwd, enabled, accountNonExpired, credentialsNonExpired, accountNonLocked, authorities);
    }

}