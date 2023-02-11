package exercise6;
import java.util.Scanner;
import java.util.Locale;

public class exercise6 {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		double raioCirculo;
		double area = 0;
		
		System.out.println("Digite o valor do raio do circulo:");
		raioCirculo = input.nextDouble();
		
		area = 3.14159 * Math.pow(raioCirculo, 2);
		
		Locale.setDefault(Locale.US);
		System.out.printf("AREA = %.3f", area);
	}
}
