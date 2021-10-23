import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class Main2 {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println(Arrays.stream(in.nextLine().split(" ")).map(Main2::reverseString).collect(Collectors.joining(" ")));
    }

    public static String reverseString(String str) {
        List<String> chars = Arrays.stream(str.split("")).collect(Collectors.toList());
        Collections.reverse(chars);
        return String.join("", chars);
    }
}
