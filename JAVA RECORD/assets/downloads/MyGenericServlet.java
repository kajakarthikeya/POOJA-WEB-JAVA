import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.GenericServlet;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebServlet;

/**
 * Advanced Java Programming Lab - Week 7: Generic Servlet Implementation
 * Student: Venkata Sai Karthikeya Kaja (24EU08161)
 */
@WebServlet("/MyGenericServlet")
public class MyGenericServlet extends GenericServlet {

    @Override
    public void service(ServletRequest request, ServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("<html>");
        out.println("<body>");
        out.println("<h2>Generic Servlet</h2>");
        out.println("<p>This servlet extends GenericServlet.</p>");
        out.println("<p>Hello from GenericServlet!</p>");
        out.println("</body>");
        out.println("</html>");
    }
}
