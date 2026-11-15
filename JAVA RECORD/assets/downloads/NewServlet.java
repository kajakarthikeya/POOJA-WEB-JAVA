import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Advanced Java Programming Lab - Week 7
 * Student: Venkata Sai Karthikeya Kaja
 * Roll Number: 24EU08161
 */
@WebServlet(name = "NewServlet", urlPatterns = {"/NewServlet"})
public class NewServlet extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Student Details</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>ADVANCED JAVA LAB</h1>");
            out.println("<h2>STUDENT DETAILS</h2>");
            out.println("<p><b>Roll Number:</b> 24EU08161</p>");
            out.println("<p><b>Subject:</b> Advanced Java</p>");
            out.println("<p><b>Lab:</b> Advanced Java Lab</p>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }
}
