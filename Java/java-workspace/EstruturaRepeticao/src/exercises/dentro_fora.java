package exercises;
import java.util.Scanner;

public class dentro_fora {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int numbers, n, inside = 0, out = 0;
		
		System.out.print("Quantos numeros voce vai digitar? ");
		numbers = sc.nextInt();
		
		for (int i = 0; i < numbers; i ++) { 
			System.out.print("Digite um numero: ");
			n = sc.nextInt();
			if(n >= 10 && n <= 20) {
				inside += 1;
			} else {
				out += 1;
			}
		}
		
		System.out.printf("%d DENTRO %n", inside);
		System.out.printf("%d FORA", out);
	}
}
