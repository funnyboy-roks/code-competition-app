package com.funnyboyroks;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class TestProgram {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println(Arrays.stream(in.nextLine().split(" ")).map(TestProgram::reverseString).collect(Collectors.joining(" ")));
    }

    public static String reverseString(String str) {
        List<String> chars = Arrays.stream(str.split("")).collect(Collectors.toList());
        Collections.reverse(chars);
        return String.join("", chars);
    }
}
