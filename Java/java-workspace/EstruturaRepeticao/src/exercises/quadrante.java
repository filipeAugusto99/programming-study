package exercises;

import java.util.Scanner;
import java.util.Locale;

public class quadrante {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int eixoX, eixoY;
		
		do {
			System.out.println("Digite os valores das coordenadas:");
			eixoX = sc.nextInt();
			eixoY = sc.nextInt();
			
			if(eixoX > 0 && eixoY > 0) {
				System.out.println("Quadrante Q1");
			} else if (eixoX < 0 && eixoY > 0) {
				System.out.println("Quadrante Q2");
			} else if (eixoX < 0 && eixoY < 0) {
				System.out.println("Quadrante Q3");
			} else if (eixoX > 0 && eixoY < 0) {
				System.out.println("Quadrante Q4");
			}
		} while (eixoX != 0 && eixoY != 0);
	}
}
