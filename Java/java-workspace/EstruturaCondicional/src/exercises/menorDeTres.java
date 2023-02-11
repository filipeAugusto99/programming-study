package exercises;
import java.util.Scanner;

public class menorDeTres {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int primeiroValor;
		int segundoValor;
		int terceiroValor;
		
		int menorValor = 0;
		
		System.out.print("Primeiro valor: ");
		primeiroValor = sc.nextInt();
		System.out.print("Segundo valor: ");
		segundoValor = sc.nextInt();
		System.out.print("Terceiro valor: ");
		terceiroValor = sc.nextInt();
		
		if(primeiroValor <= segundoValor && primeiroValor <= terceiroValor) {
			menorValor = primeiroValor;
		} else if (segundoValor <= primeiroValor && segundoValor <= terceiroValor) {
			menorValor = segundoValor;
		} else if (terceiroValor <= primeiroValor && terceiroValor <= segundoValor) {
			menorValor = terceiroValor;
		}
		
		System.out.printf("MENOR = %d", menorValor);
	}
}
