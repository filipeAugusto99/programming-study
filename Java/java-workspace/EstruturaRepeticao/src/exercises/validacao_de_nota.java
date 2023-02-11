package exercises;
import java.util.Scanner;
import java.util.Locale;

public class validacao_de_nota {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		double nota1, nota2, media;
		
		System.out.print("Digite a primeira nota: ");
		nota1 = sc.nextDouble();

		nota1 = verificaNota(nota1);
		
		System.out.print("Digite a segunda nota: ");
		nota2 = sc.nextDouble();
		
		nota2 = verificaNota(nota2);

		media = (nota1 + nota2) / 2;
		System.out.println("MEDIA = " + media);
		
		sc.close();
	}
	
	public static double verificaNota(double nota) { 
		Scanner sc = new Scanner(System.in);
		
		if(nota < 0 || nota > 10) {
			do {
				System.out.print("Valor invalido! Tente novamente: ");
				nota = sc.nextDouble();
			} while (nota < 0 || nota > 10);
		}
		return nota;
	}
}
