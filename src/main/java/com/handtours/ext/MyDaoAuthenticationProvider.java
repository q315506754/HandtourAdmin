package com.handtours.ext;

import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;

/**
 * 
 * @author JiangLi
 *
 * CreateTime 2013-9-3 下午2:54:51
 */
public class MyDaoAuthenticationProvider extends DaoAuthenticationProvider {

	@Override
	protected void additionalAuthenticationChecks(UserDetails userDetails, UsernamePasswordAuthenticationToken authentication) throws AuthenticationException {
		Object salt = null;

	    if (this.getSaltSource() != null) {
	      salt = this.getSaltSource().getSalt(userDetails);
	    }

	    if (authentication.getCredentials() == null) {
	      throw new BadCredentialsException(this.messages.getMessage("AbstractUserDetailsAuthenticationProvider.badCredentials", "您还没有输入密码") );
	    }

	    String presentedPassword = authentication.getCredentials().toString();

	    if (!this.getPasswordEncoder().isPasswordValid(userDetails.getPassword(), presentedPassword, salt))
	      throw new BadCredentialsException(this.messages.getMessage("AbstractUserDetailsAuthenticationProvider.badCredentials", "您输入的密码不正确，请重新输入。"));
	}
	
}
