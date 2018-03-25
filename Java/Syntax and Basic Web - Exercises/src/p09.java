import java.util.Arrays;
import java.util.Scanner;

public class p09 {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        int[] input = Arrays.stream(console.nextLine().split(" ")).mapToInt(Integer::parseInt).toArray();

        int[] counter = {input[0], 1};
        int[] bestCounter = {input[0], 1};

        for (int i = 0; i < input.length - 1; i++) {
            counter[0] = input[i];
            counter[1] = 1;
            for (int j = i; j < input.length; j++){
                if (counter[0] == input[j]){
                    counter[1]++;
                }
            }
            if (counter[1] > bestCounter[1]){
                bestCounter[0] = counter[0];
                bestCounter[1] = counter[1];
            }
        }

        System.out.println(bestCounter[0]);
    }
}
