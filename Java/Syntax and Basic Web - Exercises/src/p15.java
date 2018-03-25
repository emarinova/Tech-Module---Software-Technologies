import java.util.Scanner;

public class p15 {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        String email = console.nextLine();
        String text = console.nextLine();

        String user = email.substring(0, email.indexOf("@"));
        String userCensored = censore(user.length());
        String emailCensored = userCensored + email.substring(email.indexOf("@"));

        System.out.println(text.replace(email, emailCensored));
    }

    private static String censore(int length) {
        String replaced = "";
        for (int i = 0; i < length; i++){
            replaced += "*";
        }
        return replaced;
    }
}
