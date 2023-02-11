package exercises;

import java.util.Scanner;
import java.util.Locale;

public class temperatura {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		Locale.setDefault(Locale.US);
		
		char temperaturaDigitada;
		
		double temperaturaCelsius;
		double temperaturaFahrenheit;
		
		System.out.print("Voce vai digitar a temperatura em qual escala (C/F)? ");
		temperaturaDigitada = sc.next().charAt(0);
		
		switch(temperaturaDigitada) {
			case 'C':
				System.out.print("Digite a temperatura em Fahrenheit: ");
				temperaturaFahrenheit = sc.nextDouble();
				temperaturaCelsius = (5 * (temperaturaFahrenheit - 32)) / 9;
				System.out.printf("Temperatura equivalente em Celsius: %.2f", temperaturaCelsius);
				break;
			case 'F':
				System.out.print("Digite a temperatura em Celsius: ");
				temperaturaCelsius = sc.nextDouble();
				temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;
				System.out.printf("Temperatura equivalente em Fahrenheit: %.2f", temperaturaFahrenheit);
				break;
			default:
				System.out.print("Opcao invalida");
				break;
		}
	}
}
