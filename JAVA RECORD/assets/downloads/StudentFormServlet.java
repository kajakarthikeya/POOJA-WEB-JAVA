import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Advanced Java Programming Lab - Week 7: Student Registration Form Handler
 * Student: Venkata Sai Karthikeya Kaja (24EU08161)
 */
@WebServlet("/StudentFormServlet")
public class StudentFormServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        String name = request.getParameter("name");
        String rollno = request.getParameter("rollno");
        String dept = request.getParameter("dept");

        out.println("<html>");
        out.println("<body>");
        out.println("<h2>Student Details</h2>");
        out.println("<p><b>Name:</b> " + name + "</p>");
        out.println("<p><b>Roll No:</b> " + rollno + "</p>");
        out.println("<p><b>Department:</b> " + dept + "</p>");
        out.println("</body>");
        out.println("</html>");
    }
}
