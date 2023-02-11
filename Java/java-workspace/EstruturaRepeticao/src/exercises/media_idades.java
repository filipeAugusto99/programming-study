package exercises;
import java.util.Scanner;
import java.util.Locale;

public class media_idades {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		Locale.setDefault(Locale.US);
		
		double idades, totalIdades = 0, i = 0;
		double media = 0;
		
		System.out.println("Digite as idades: ");
		
		do {
			idades = sc.nextInt();
			
			if(idades > 0) {
				totalIdades += idades;
				i++;				
			}
			
		} while (idades > 0);
		
		if (totalIdades > 0) {
			media = totalIdades / i;
			System.out.printf("MEDIA = %.2f anos", media);			
		} else {
			System.out.println("Impossivel calcular");
		}
		sc.close();
	}
}
