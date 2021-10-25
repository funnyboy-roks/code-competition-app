import java.util.*;
import java.util.stream.Collectors;

public class java {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String out = Arrays.stream(scanner.nextLine().split(" ")).map(java::reverStr).collect(Collectors.joining(" "));
        System.out.println(out);
    }

    public static String reverStr(String in) {
        List<String> chars = new ArrayList<>(Arrays.stream(in.split("")).toList());
        Collections.reverse(chars);
        return String.join("", chars);
    }
}
