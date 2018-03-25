import java.util.Scanner;

public class p06 {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        String[] first = console.nextLine().trim().split("\\s");
        String[] second = console.nextLine().trim().split("\\s");

        int minLenght = 0;

        if(first.length < second.length){
            minLenght = first.length;
        } else {
            minLenght = second.length;
        }

        int which = -1;

        for (int i = 0; i < minLenght; i++) {
            if (first[i].charAt(0) > second[i].charAt(0)){
                which = 1;
                break;
            } else if(second[i].charAt(0) > first[i].charAt(0)) {
                which = 2;
                break;
            }
        }

        switch (which) {
            case -1: if(first.length == minLenght) {
                PrintArray(first);
                PrintArray(second);
            } else {
                PrintArray(second);
                PrintArray(first);
            }
            break;
            case 1:
                PrintArray(second);
                PrintArray(first);
                break;
            case 2:
                PrintArray(first);
                PrintArray(second);
                break;

        }
    }

    public static void PrintArray(String[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i]);
        }

        System.out.println();
    }

}
