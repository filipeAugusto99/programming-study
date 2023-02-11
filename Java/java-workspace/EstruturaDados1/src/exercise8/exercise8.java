package exercise8;
import java.util.Scanner;
import java.util.Locale;

public class exercise8 {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		
		int distanciaPercorrida;
		double combustivelGasto;
		double consumoMedio;
		
		System.out.println("Distancia percorrida: ");
		distanciaPercorrida = input.nextInt();
		System.out.println("Combustivel gasto: ");
		combustivelGasto = input.nextDouble();
		
		consumoMedio = distanciaPercorrida / combustivelGasto;
		
		Locale.setDefault(Locale.US);
		System.out.printf("Consumo medio = %.3f", consumoMedio);
		
	}

}
