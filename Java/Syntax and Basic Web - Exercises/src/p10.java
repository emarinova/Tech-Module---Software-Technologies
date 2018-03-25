import java.util.Scanner;

public class p10 {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        String letters = console.nextLine();

        for (int i = 0; i < letters.length(); i++){
            System.out.printf("%s -> %d", letters.charAt(i), (int)(letters.charAt(i)-97));
            System.out.println();
        }
    }
}
