package exercise5;
import java.util.Scanner;
import java.util.Locale;

public class exercise5 {
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		
		double precoPorUnidade;
		int quantidadeComprada;
		double dinheiroRecebido;
		double troco = 0;
		
		System.out.println("Preco unitario do produto: ");
		precoPorUnidade = input.nextDouble();
		System.out.println("Quantidade comprada: ");
		quantidadeComprada = input.nextInt();
		System.out.println("Dinheiro recebido: ");
		dinheiroRecebido = input.nextDouble();
		
		troco = dinheiroRecebido - (quantidadeComprada * precoPorUnidade);
		
		Locale.setDefault(Locale.US);
		System.out.printf("TROCO %.2f", troco);
	}
}
