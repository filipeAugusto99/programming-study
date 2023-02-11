package exercises;

import java.util.Scanner;

public class par_impar {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		int numbers, n;

		System.out.print("Quantos numeros voce vai digitar? ");
		numbers = sc.nextInt();

		for (int i = 0; i < numbers; i++) {
			System.out.print("Digite um numero: ");
			n = sc.nextInt();

			if (n % 2 != 0 && n > 0) {
				System.out.println("IMPAR POSITIVO");
			} else if (n % 2 != 0 && n < 0) {
				System.out.println("IMPAR NEGATIVO");
			} else if (n % 2 == 0 && n > 0) {
				System.out.println("PAR POSITIVO");
			} else if (n % 2 == 0 && n < 0){
				System.out.println("PAR NEGATIVO");
			} else if (n == 0) {
				System.out.println("NULO");
			}
		}
	}
}
