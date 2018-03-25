import java.util.Scanner;

public class p04 {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String vowelsUpper = "AEOUYI";
        char input = console.nextLine().charAt(0);
        if(vowelsUpper.indexOf(input)>=0 || vowelsUpper.toLowerCase().indexOf(input)>=0) {
            System.out.println("vowel");
        } else if(Character.isDigit(input)) {
            System.out.println("digit");
        } else {
            System.out.println("other");
        }
    }
}
