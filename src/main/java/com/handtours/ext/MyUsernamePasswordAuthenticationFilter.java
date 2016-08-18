package com.handtours.ext;

import com.handtours.service.api.domain.back.res.bg.user.LoginUserRes;
import com.handtours.util.SessionAttr;
import org.apache.log4j.Logger;
import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * 
 * @author JiangLi
 *
 * CreateTime 2013-9-3 下午2:55:01
 */
public class MyUsernamePasswordAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
	public static final String USERNAME = "name";
	public static final String PASSWORD = "pwd";
	private final static Logger log = Logger.getLogger(MyUsernamePasswordAuthenticationFilter.class);
    public final  ThreadLocal<LoginUserRes> reses = new ThreadLocal<>();

	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
		String username = obtainUsername(request);
		String password = obtainPassword(request);

		// 验证用户账号与密码是否对应
		username = username.trim();
		password = password.trim();

		if ("".equals(username)) {
			throw new AuthenticationServiceException("您还没有输入用户名");
		}
        HttpSession session = request.getSession();
        session.setAttribute("username", username);
		if ("".equals(password)) {
			throw new AuthenticationServiceException("您还没有输入密码");
		}
		session.setAttribute("password", password);
		UsernamePasswordAuthenticationToken authRequest = new UsernamePasswordAuthenticationToken(username, password);

		// 运行UserDetailsService的loadUserByUsername 再次封装Authentication
		Authentication authenticate = this.getAuthenticationManager().authenticate(authRequest);

        session.removeAttribute("username");
        session.removeAttribute("password");

        LoginUserRes login = reses.get();
        reses.set(null);

        session.setAttribute(SessionAttr.USER_ID,login.getMobile());
        session.setAttribute(SessionAttr.USER_NAME,login.getName());
        session.setAttribute(SessionAttr.USER_EMAIL,login.getEmail());

		return authenticate;
	}

	@Override
	protected String obtainUsername(HttpServletRequest request) {
		Object obj = request.getParameter(USERNAME);
		return null == obj ? "" : obj.toString();
	}

	@Override
	protected String obtainPassword(HttpServletRequest request) {
		Object obj = request.getParameter(PASSWORD);
		return null == obj ? "" : obj.toString();
	}

}
