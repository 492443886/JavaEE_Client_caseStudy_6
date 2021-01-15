package com.info5059.casestudy.login;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
@EnableWebSecurity
public class BasicAuthConfiguration extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth
                .inMemoryAuthentication()
                .passwordEncoder(encoder())
                .withUser("w")
                .password(encodePassword("m"))
                .roles("USER");
    }
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .authorizeRequests()
 .antMatchers("/*.*","/assets/**","/").permitAll() // production
//                .antMatchers("/**").permitAll() // development
                .anyRequest().authenticated()
                .and()
                .httpBasic();
    }
    @Bean
    public BCryptPasswordEncoder encoder() { return new BCryptPasswordEncoder(); }
    @Bean
    public String encodePassword(String pw) {
        BCryptPasswordEncoder enc = new BCryptPasswordEncoder();
        return enc.encode(pw);
    }
}