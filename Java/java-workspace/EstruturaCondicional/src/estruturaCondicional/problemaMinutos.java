package estruturaCondicional;
import java.util.Scanner;
import java.util.Locale;

public class problemaMinutos {
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
	
		int quantidadeMinutos;
		int minutoExcesso;
		double valorTotal;
		double valorExcesso;
		
		System.out.print("Quantidade de minutos que foram consumidos: ");
		quantidadeMinutos = input.nextInt();		
		
		if(quantidadeMinutos > 100) {
			minutoExcesso = quantidadeMinutos - 100;
			valorExcesso = 2.00 * minutoExcesso;
			valorTotal = 50 + valorExcesso;
		} else {
			valorTotal = 50;
		}
		
		System.out.printf("Valor a pagar: RS %.2f", valorTotal);
		
		input.close();
	}
}
