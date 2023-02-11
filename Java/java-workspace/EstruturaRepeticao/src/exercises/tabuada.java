package exercises;
import java.util.Scanner;

public class tabuada {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int n, result = 0;
		
		System.out.print("Deseja a tabuada para qual valor? ");
		n = sc.nextInt();
		
		for(int i = 0; i <= 10; i ++) {
			result = n * i;
			System.out.printf("%d X %d = %d%n", n, i, result);
		}
	}
}
