package exercises;

import java.util.Scanner;
import java.util.Locale;

public class baskara {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		Locale.setDefault(Locale.US);

		double coefA;
		double coefB;
		double coefC;
		double delta;

		double x1;
		double x2;

		System.out.println("Coeficiente a:");
		coefA = sc.nextDouble();
		System.out.println("Coeficiente b:");
		coefB = sc.nextDouble();
		System.out.println("Coeficiente c:");
		coefC = sc.nextDouble();

		delta = ((Math.pow(coefB, 2)) - 4 * coefA * coefC);
		System.out.printf("valor de delta: %f%n", delta);

		x1 = (-coefB + (Math.sqrt(delta))) / 2 * coefA;
		x2 = (-coefB - (Math.sqrt(delta))) / 2 * coefA;

		if (delta < 0) {
			System.out.println("Essa equacao nao possui raizes reais");
		} else {
			System.out.printf("X1 = %.4f%n", x1);
			System.out.printf("X2 = %.4f%n", x2);
		}
	}
}
