package exercises;
import java.util.Locale;
import java.util.Scanner;

public class glicose {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		Locale.setDefault(Locale.US);
		
		double medidaGlicose;
		
		System.out.print("Digite a medida da glicose: ");
		medidaGlicose = sc.nextDouble();
		
		if(medidaGlicose <= 100) {
			System.out.print("Classificacao: normal");
		} else if (medidaGlicose > 100 && medidaGlicose <= 140) {
			System.out.print("Classificacao: elevado");
		} else if (medidaGlicose > 140) {
			System.out.print("Classificacao: diabetes");
		}
		
		sc.close();
	}
}
