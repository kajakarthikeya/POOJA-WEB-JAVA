// Week 4 & 5: Remote MySQL Database Connectivity and Operations
// Student: Venkata Sai Karthikeya Kaja (24EU08161)
package javaapplication59;

import java.sql.*;

public class JavaApplication59 {
    public static void main(String[] args) {
        try {
            // Step 1: Load Driver
            Class.forName("com.mysql.jdbc.Driver");
            System.out.println("Step 1: JDBC Driver Loaded Successfully.");

            // Step 2: Connect to Remote Database
            Connection con = DriverManager.getConnection(
                "jdbc:mysql://10.0.9.20:3306/ai",
                "root",
                ""
            );
            System.out.println("Step 2: Remote Connection Established Successfully.");

            // Step 3: Create Statement
            Statement st = con.createStatement();
            System.out.println("Step 3: Statement Created Successfully.");

            // Step 4: Insert Record
            int i = st.executeUpdate("INSERT INTO employee VALUES('9','Karthik')");
            if (i > 0) {
                System.out.println("\nStep 4: Record Inserted Successfully.");
            }

            // Step 5: Display Records
            System.out.println("\n===== Records After Insert =====");
            ResultSet rs = st.executeQuery("SELECT * FROM employee");
            System.out.println("Roll No\tName");
            System.out.println("--------------------------");
            while (rs.next()) {
                System.out.println(rs.getString("rollno") + "\t" + rs.getString("name"));
            }
            rs.close();

            // Step 6: Update Record
            int u = st.executeUpdate("UPDATE employee SET name='Karthikeyan' WHERE rollno='9'");
            if (u > 0) {
                System.out.println("\nStep 6: Record Updated Successfully.");
            }

            // Step 7: Display After Update
            System.out.println("\n===== Records After Update =====");
            rs = st.executeQuery("SELECT * FROM employee");
            System.out.println("Roll No\tName");
            System.out.println("--------------------------");
            while (rs.next()) {
                System.out.println(rs.getString("rollno") + "\t" + rs.getString("name"));
            }
            rs.close();

            // Step 8: Delete Record
            int d = st.executeUpdate("DELETE FROM employee WHERE rollno='9'");
            if (d > 0) {
                System.out.println("\nStep 8: Record Deleted Successfully.");
            }

            // Step 9: Display After Delete
            System.out.println("\n===== Records After Delete =====");
            rs = st.executeQuery("SELECT * FROM employee");
            System.out.println("Roll No\tName");
            System.out.println("--------------------------");
            while (rs.next()) {
                System.out.println(rs.getString("rollno") + "\t" + rs.getString("name"));
            }
            rs.close();
            st.close();
            con.close();

            System.out.println("\nStep 10: Connection Closed Successfully.");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
