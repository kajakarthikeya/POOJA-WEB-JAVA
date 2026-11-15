// Week 8: Cookie Demonstration Servlet
// Student: Venkata Sai Karthikeya Kaja (24EU08161)
package com.sms.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class CookieServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String username = request.getParameter("username");
        Cookie userCookie = new Cookie("user", username);
        userCookie.setMaxAge(60 * 60 * 24); // 24 hours
        response.addCookie(userCookie);

        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        out.println("<!DOCTYPE html><html><body>");
        out.println("<h2>Cookie Demonstration</h2>");
        out.println("<p>Hello, <b>" + username + "</b>! Your name has been stored in a cookie.</p>");
        out.println("<a href='CookieServlet'>Visit Servlet Again</a>");
        out.println("</body></html>");
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        Cookie[] cookies = request.getCookies();
        String username = null;
        if (cookies != null) {
            for (Cookie c : cookies) {
                if ("user".equals(c.getName())) username = c.getValue();
            }
        }
        out.println("<!DOCTYPE html><html><body>");
        out.println("<h2>Cookie Demonstration</h2>");
        if (username != null) {
            out.println("<p>Welcome back, <b>" + username + "</b>!</p>");
        } else {
            out.println("<p>No cookie found. Please submit your name.</p>");
        }
        out.println("</body></html>");
    }
}
