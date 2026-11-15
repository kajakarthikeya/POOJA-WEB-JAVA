import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.Servlet;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebServlet;

/**
 * Advanced Java Programming Lab - Week 7: Servlet Lifecycle
 * Student: Venkata Sai Karthikeya Kaja (24EU08161)
 */
@WebServlet("/LifeCycleServlet")
public class LifeCycleServlet implements Servlet {

    public void init(ServletConfig config) throws ServletException {
        System.out.println("init() method called");
    }

    public ServletConfig getServletConfig() {
        return null;
    }

    public void service(ServletRequest request, ServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("<h2>Servlet Life Cycle</h2>");
        out.println("<p><b>init():</b> Servlet Initialized</p>");
        out.println("<p><b>service():</b> Request Processed</p>");
        out.println("<p><b>destroy():</b> Servlet Destroyed</p>");
    }

    public String getServletInfo() {
        return "Life Cycle Servlet";
    }

    public void destroy() {
        System.out.println("destroy() method called");
    }
}
