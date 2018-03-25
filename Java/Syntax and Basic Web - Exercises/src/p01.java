import java.util.Scanner;

public class p01 {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String number = console.nextLine();
        int n = Integer.parseInt(number, 16);
        System.out.println(n);
    }
}
