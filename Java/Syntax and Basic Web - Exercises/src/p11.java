import java.util.Arrays;
import java.util.Scanner;

public class p11 {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        int[] arr = Arrays.stream(console.nextLine().split(" ")).mapToInt(Integer::parseInt).toArray();

        int leftSum = 0;
        int rightSum = 0;
        boolean isThere = false;

        for (int i = 0; i < arr.length; i++){
            leftSum = 0;
            rightSum = 0;
            for (int j = 0; j < i; j++)
            {
                leftSum += arr[j];
            }
            for (int k = i+1; k < arr.length; k++){
                rightSum += arr[k];
            }
            if (leftSum == rightSum){
                System.out.println(i);
                isThere = true;
                break;
            } else {
                leftSum = 0;
                rightSum = 0;
                continue;
            }
        }

        if (!isThere){
            System.out.println("no");
        }
    }
}
