package exercises;
import java.util.Scanner;
import java.util.Locale;

public class dardo {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		Locale.setDefault(Locale.US);
		
		double distanciaUm;
		double distanciaDois;
		double distanciaTres;
		
		double maiorDistancia = 0;
		
		System.out.println("Digite as tres distancias:");
		distanciaUm = sc.nextDouble();
		distanciaDois = sc.nextDouble();
		distanciaTres = sc.nextDouble();
		
		if(distanciaUm >= distanciaDois && distanciaUm >= distanciaTres) {
			maiorDistancia = distanciaUm;
		} else if (distanciaDois >= distanciaUm && distanciaDois >= distanciaTres) {
			maiorDistancia = distanciaDois;
		} else if (distanciaTres >= distanciaUm && distanciaTres >= distanciaDois) {
			maiorDistancia = distanciaTres;
		}
		
		System.out.printf("MAIOR DISTANCIA = %.2f", maiorDistancia);
	}
}
