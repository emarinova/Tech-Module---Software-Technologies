import java.util.Scanner;

public class p14 {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        String input = console.nextLine();

        if (input.length()>20){
            System.out.println(input.substring(0,20));
        } else if (input.length()<=20){
            System.out.print(input);
            radPrint(20-input.length());
        }
    }

    private static void radPrint(int i) {
        for (int j = 0; j < i; j++){
            System.out.print("*");
        }
    }
}
