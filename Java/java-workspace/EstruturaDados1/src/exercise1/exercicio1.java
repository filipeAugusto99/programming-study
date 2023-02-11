package exercise1;
import java.util.Scanner;
import java.util.Locale;

public class exercicio1 {
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		double larguraTerreno;
		double comprimentoTerreno;
		double valorMetrosQuadrados;
		double areaTerreno;
		double precoTerreno;
		
		Locale.setDefault(Locale.US);
		System.out.println("Digite a largura do terreno: ");
		larguraTerreno = input.nextDouble();
		System.out.println("Digite o comprimento do terreno: ");
		comprimentoTerreno = input.nextDouble();
		System.out.println("Digite o valor dos metros quadrados: ");
		valorMetrosQuadrados = input.nextDouble();

		areaTerreno = larguraTerreno * comprimentoTerreno;
		precoTerreno = valorMetrosQuadrados * areaTerreno;
		
		System.out.printf("Area do terreno = %.2f%n", areaTerreno);
		System.err.printf("Preco do terreno = %.2f%n", precoTerreno);
	}
}
