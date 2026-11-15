import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Advanced Java Programming Lab - Week 7: GET and POST Demonstration
 * Student: Venkata Sai Karthikeya Kaja (24EU08161)
 */
@WebServlet("/GetPostServlet")
public class GetPostServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        String name = request.getParameter("name");
        out.println("<h2>GET Request</h2>");
        out.println("<p>Hello " + (name != null ? name : "Guest") + "!</p>");
        out.println("<p>This is a GET request.</p>");
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        String name = request.getParameter("name");
        out.println("<h2>POST Request</h2>");
        out.println("<p>Hello " + (name != null ? name : "Guest") + "!</p>");
        out.println("<p>This is a POST request.</p>");
    }
}
