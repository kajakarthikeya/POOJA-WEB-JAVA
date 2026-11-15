// Week 8: Database Connection Helper
// Student: Venkata Sai Karthikeya Kaja (24EU08161)
package com.sms.util;

import java.sql.Connection;
import java.sql.DriverManager;

public class DBConnection {
    private static Connection connection = null;

    public static Connection getConnection() {
        if (connection != null) return connection;
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/studentdb", "root", ""
            );
        } catch (Exception e) {
            e.printStackTrace();
        }
        return connection;
    }
}
