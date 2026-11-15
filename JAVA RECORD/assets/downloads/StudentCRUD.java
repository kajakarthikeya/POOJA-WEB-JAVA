// Week 6: JDBC Program to Perform CRUD Operations on Student Database
// Student: Venkata Sai Karthikeya Kaja (24EU08161)
package javaapplication26;

import java.sql.*;

public class StudentCRUD {
    public static void main(String[] args) {
        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost/it",
                "root",
                ""
            );
            Statement st = con.createStatement();

            // INSERT
            int insert = st.executeUpdate(
                "INSERT INTO Student VALUES(101,'Rahul','CSE',90)"
            );
            System.out.println("Record Inserted Successfully");

            // DISPLAY
            System.out.println("\nStudent Records");
            ResultSet rs = st.executeQuery("SELECT * FROM Student");
            while (rs.next()) {
                System.out.println(
                    rs.getInt(1) + "  " +
                    rs.getString(2) + "  " +
                    rs.getString(3) + "  " +
                    rs.getInt(4)
                );
            }

            // UPDATE
            int update = st.executeUpdate(
                "UPDATE Student SET marks=95 WHERE id=101"
            );
            System.out.println("\nRecord Updated Successfully");

            // DISPLAY AFTER UPDATE
            rs = st.executeQuery("SELECT * FROM Student");
            while (rs.next()) {
                System.out.println(
                    rs.getInt(1) + "  " +
                    rs.getString(2) + "  " +
                    rs.getString(3) + "  " +
                    rs.getInt(4)
                );
            }

            // DELETE
            int delete = st.executeUpdate(
                "DELETE FROM Student WHERE id=101"
            );
            System.out.println("\nRecord Deleted Successfully");

            con.close();
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}
