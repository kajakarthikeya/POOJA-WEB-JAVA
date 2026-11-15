// Week 8: HttpSession Demonstration Servlet
// Student: Venkata Sai Karthikeya Kaja (24EU08161)
package com.sms.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class SessionServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String username = request.getParameter("username");
        HttpSession session = request.getSession(true);
        session.setAttribute("username", username);

        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        out.println("<!DOCTYPE html><html><body>");
        out.println("<h2>Session Management using HttpSession</h2>");
        out.println("<h3>Session Created Successfully!</h3>");
        out.println("<p>Hello, <b>" + username + "</b>! Your name has been stored in the session.</p>");
        out.println("<a href='SessionServlet'>View Stored Name</a>");
        out.println("</body></html>");
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        HttpSession session = request.getSession(false);
        out.println("<!DOCTYPE html><html><body>");
        out.println("<h2>Session Details</h2>");
        if (session != null && session.getAttribute("username") != null) {
            String name = (String) session.getAttribute("username");
            out.println("<p>Active Session User: <b>" + name + "</b></p>");
            out.println("<p>Session ID: " + session.getId() + "</p>");
        } else {
            out.println("<p>No active session found.</p>");
        }
        out.println("</body></html>");
    }
}
