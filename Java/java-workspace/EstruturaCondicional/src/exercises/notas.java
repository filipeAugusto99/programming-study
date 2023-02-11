package exercises;
import java.util.Scanner;
import java.util.Locale;

public class notas {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		Locale.setDefault(Locale.US);
		
		double notaUm;
		double notaDois;
		double notaFinal;
		
		System.out.print("Digite a primeira nota: ");
		notaUm = sc.nextDouble();
		System.out.print("Digite a segunda nota: ");
		notaDois = sc.nextDouble();
		
		notaFinal = notaUm + notaDois;
		
		System.out.printf("NOTA FINAL = %.1f%n", notaFinal);
		
		if(notaFinal < 60.00) {
			System.out.print("REPROVADO");
		} else {
			System.out.print("APROVADO");
		}
	}
}
