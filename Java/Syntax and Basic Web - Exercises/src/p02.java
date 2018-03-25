import java.util.Scanner;

public class p02 {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        Boolean input = Boolean.parseBoolean(console.nextLine());
        if (input) {
            System.out.println("Yes");
        } else {
            System.out.println("No");
        }
    }
}
