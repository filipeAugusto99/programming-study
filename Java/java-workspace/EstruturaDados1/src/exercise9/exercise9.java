package exercise9;
import java.util.Scanner;
import java.util.Locale;

public class exercise9 {
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		
		//lados
		double ladoA;
		double ladoB;
		double ladoC;
		
		//areas
		double areaQuadrado;
		double areaTriangulo;
		double areaTrapezio;
		
		System.out.print("Digite a medida A: ");
		ladoA = input.nextDouble();
		System.out.print("Digite a medida B: ");
		ladoB = input.nextDouble();
		System.out.print("Digite a medida C: ");
		ladoC = input.nextDouble();
		
		areaQuadrado = Math.pow(ladoA, 2);
		areaTriangulo = (ladoA * ladoB) / 2;
		areaTrapezio = ((ladoA + ladoB) * ladoC) / 2;
		
		Locale.setDefault(Locale.US);
		
		System.out.printf("AREA DO QUADRADO = %.4f%n", areaQuadrado);
		System.out.printf("AREA DO TRIANGULO = %.4f%n", areaTriangulo);
		System.out.printf("AREA DO TRAPEZIO = %.4f%n", areaTrapezio);
	}
}
