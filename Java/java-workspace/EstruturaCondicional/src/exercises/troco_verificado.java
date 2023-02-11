package exercises;
import java.util.Scanner;
import java.util.Locale;

public class troco_verificado {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		Locale.setDefault(Locale.US);

		int quantidadeComprada;
		
		double precoUnidade;
		double dinheiroRecebido;
		double valorTotal = 0;
		double troco = 0;
		double trocoInvalido = 0;
		
		System.out.print("Preco unitario do produto: ");
		precoUnidade = sc.nextDouble();
		System.out.print("Quantidade comprada: ");
		quantidadeComprada = sc.nextInt();
		System.out.print("Dinheiro recebido: ");
		dinheiroRecebido = sc.nextDouble();

		valorTotal = precoUnidade * quantidadeComprada;
	
		if (dinheiroRecebido > valorTotal) {
			troco = dinheiroRecebido - valorTotal;			
			System.out.printf("TROCO = %.2f", troco);
			return;
		} else if (dinheiroRecebido < valorTotal) {
			trocoInvalido = valorTotal - dinheiroRecebido;
			System.out.printf("DINHEIRO INSUFICIENTE. FALTAM %.2f REAIS", trocoInvalido);
			return;
		}
	}
}
