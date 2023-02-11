package exercises;

import java.util.Scanner;

public class pares_consecutivos {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int number, soma;
		
		do {
			System.out.print("Digite um numero inteiro: ");
			number = sc.nextInt();
			
			if(number % 2 == 0) {
				soma = paresConsecutivos(number);
				printerSoma(number, soma);
			} else {
				number += 1;
				soma = paresConsecutivos(number);
				printerSoma(number, soma);
			}
		} while (number != 0);
		sc.close();
	}
	
	public static int paresConsecutivos(int num) {
		int soma;
		int num2 = num + 2;
		int num3 = num + 4;
		int num4 = num + 6;
		int num5 = num + 8;
		soma = num + num2 + num3 + num4 + num5;
		return soma;
	}
	
	public static void printerSoma(int num, int s) {
		if(num > 0) {
			System.out.println("SOMA " + s);					
		}
	}
}
