package exercises;
import java.util.Locale;
import java.util.Scanner;

public class operadora {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		Locale.setDefault(Locale.US);
		
		int quantidadeMinutos;
		int tempoExcesso;
		
		double valorExcesso;
		double valorTotal = 0;
		
		System.out.print("Digite a quantidade de minutos: ");
		quantidadeMinutos = sc.nextInt();
		
		if(quantidadeMinutos > 100) {
			tempoExcesso = quantidadeMinutos - 100;
			valorExcesso = tempoExcesso * 2;
			valorTotal = 50 + valorExcesso;
		} else {
			valorTotal = 50;			
		}
		
		System.out.printf("Valor a pagar: R$ %.2f", valorTotal);
	}
}
