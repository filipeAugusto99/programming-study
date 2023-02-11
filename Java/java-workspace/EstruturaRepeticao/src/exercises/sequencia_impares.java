package exercises;
import java.util.Scanner;

public class sequencia_impares {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int X;
		
		System.out.print("Digite o valor de X: ");
		X = sc.nextInt();
		
		for (int i = 1; i <= X; i++) {
			if(i % 2 != 0) {
				System.out.println(i);
			}
		}
	}
}
