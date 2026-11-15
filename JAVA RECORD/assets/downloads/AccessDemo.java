// Week 3: Java MS Access Connectivity Using UCanAccess
// Student: Venkata Sai Karthikeya Kaja (24EU08161)
import java.sql.*;

public class AccessDemo {
    public static void main(String[] args) {
        try {
            Class.forName("net.ucanaccess.jdbc.UcanaccessDriver");
            String url = "jdbc:ucanaccess://StudentDB.accdb";
            Connection con = DriverManager.getConnection(url);

            System.out.println("Connected Successfully");

            Statement st = con.createStatement();
            ResultSet rs = st.executeQuery("SELECT * FROM Student");

            while (rs.next()) {
                System.out.println(rs.getInt(1) + " " + rs.getString(2) + " " + rs.getInt(3));
            }
            rs.close();
            st.close();
            con.close();
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}
