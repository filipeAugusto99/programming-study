package exercise4;
import java.util.Scanner;
import java.util.Locale;

public class exercise4 {
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		
		//variables
		int x;
		int y;
		int soma = 0;
		
		System.out.println("Digite o valor de X:");
		x = input.nextInt();
		System.out.println("Digite o valor de Y:");
		y = input.nextInt();
		
		soma = x + y;
		
		System.out.printf("SOMA: %d", soma);
	}
}
