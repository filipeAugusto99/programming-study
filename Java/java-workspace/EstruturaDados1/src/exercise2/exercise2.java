package exercise2;
import java.util.Scanner;
import java.util.Locale;

public class exercise2 {
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		
		double baseRetangulo;
		double alturaRetangulo;
	
		double areaRetangulo;
		double perimetroRetangulo;
		double diagonalRetangulo;
		
		Locale.setDefault(Locale.US);
		System.out.println("Informe a base do retangulo: ");
		baseRetangulo = input.nextDouble();
		System.out.println("Informe a altura do retangulo: ");
		alturaRetangulo = input.nextDouble();
		
		areaRetangulo = baseRetangulo * alturaRetangulo;
		perimetroRetangulo = (2 * baseRetangulo) + (2 * alturaRetangulo);
		diagonalRetangulo = Math.sqrt(Math.pow(alturaRetangulo, 2) + Math.pow(baseRetangulo, 2));
		
		System.out.printf("AREA = %.4f%n", areaRetangulo);
		System.out.printf("PERIMETRO = %.4f%n", perimetroRetangulo);
		System.out.printf("DIAGONAL = %.4f%n", diagonalRetangulo);
	}
}
