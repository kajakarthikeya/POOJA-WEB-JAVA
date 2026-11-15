// Week 7: Implementation of Generic Servlet
// Student: Venkata Sai Karthikeya Kaja (24EU08161)
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.GenericServlet;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

public class NewServlet1 extends GenericServlet {
    @Override
    public void service(ServletRequest request,
            ServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        out.println("<!DOCTYPE html>");
        out.println("<html>");
        out.println("<head>");
        out.println("<title>Generic Servlet</title>");
        out.println("</head>");
        out.println("<body>");
        out.println("<h1>Generic Servlet</h1>");
        out.println("<h2>Student Details</h2>");
        out.println("<p><b>Register Number:</b> 24EU08161</p>");
        out.println("<p><b>Subject:</b> ADV JAVA LAB</p>");
        out.println("</body>");
        out.println("</html>");
    }
}
