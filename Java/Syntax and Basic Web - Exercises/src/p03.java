import java.util.Scanner;

public class p03 {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        char[] input = new char[3];
        for (int i = 0; i < input.length; i++) {
            input[i] = console.nextLine().charAt(0);
        }
        for (int i = input.length-1; i>=0; i--) {
            System.out.print(input[i]);
        }
    }
}
