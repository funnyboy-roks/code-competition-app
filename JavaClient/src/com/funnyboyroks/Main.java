package com.funnyboyroks;

import java.io.*;

public class Main {

    public static void main(String[] args) throws FileNotFoundException {
        FileInputStream in = new FileInputStream(System.getProperty("user.dir") + "/in.txt");
        System.setIn(in);
        FileOutputStream out = new FileOutputStream(System.getProperty("user.dir") + "/out.txt");
        System.setOut(new PrintStream(new BufferedOutputStream(out), true));

        TestProgram.main(new String[]{});
    }


}
