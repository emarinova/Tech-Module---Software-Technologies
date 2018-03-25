import java.util.Arrays;
import java.util.Scanner;

public class p08 {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int[] arr = Arrays.stream(console.nextLine().split(" ")).mapToInt(Integer::parseInt).toArray();

        int[] numCounter = {0, 1};
        int[] biggestCount = {0, 1};

        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > arr[i-1]) {
                numCounter[1]++;
                continue;
            }

            BiggerCounter(numCounter, biggestCount);

            numCounter[0] = i;
            numCounter[1] = 1;
        }

        BiggerCounter(numCounter, biggestCount);

        for (int i = biggestCount[0]; i < biggestCount[0] + biggestCount[1]; i++) {
            System.out.printf("%d ", arr[i]);
        }
    }

    public static void BiggerCounter(int[] numCounter, int[] biggestCount) {
        if (numCounter[1] > biggestCount[1]) {
            biggestCount[0] = numCounter[0];
            biggestCount[1] = numCounter[1];
        }
    }
    }

