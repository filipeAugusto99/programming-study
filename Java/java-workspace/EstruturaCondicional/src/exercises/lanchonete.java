package exercises;
import java.util.Scanner;
import java.util.Locale;

public class lanchonete {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		Locale.setDefault(Locale.US);
		
		double codigoProduto;
		double quantidadeComprada;
		double valorFinal;
		
		System.out.print("Codigo do produto comprado: ");
		codigoProduto = sc.nextInt();
		System.out.print("Quantidade comprada: ");
		quantidadeComprada = sc.nextDouble();
		
		switch((int) codigoProduto) {
		
		case 1: 
			codigoProduto = 5;
			valorFinal = (quantidadeComprada * codigoProduto);
			System.out.printf("Valor a pagar: R$ %.2f", valorFinal);
			break;
		case 2:
			codigoProduto = 3.50;
			valorFinal = (quantidadeComprada * codigoProduto);
			System.out.printf("Valor a pagar: R$ %.2f", valorFinal);
			break;
		case 3:
			codigoProduto = 4.80;
			valorFinal = (quantidadeComprada * codigoProduto);
			System.out.printf("Valor a pagar: R$ %.2f", valorFinal);
			break;
		case 4: 
			codigoProduto = 8.90;
			valorFinal = (quantidadeComprada * codigoProduto);
			System.out.printf("Valor a pagar: R$ %.2f", valorFinal);
			break;
		case 5: 
			codigoProduto = 7.32;
			valorFinal = (quantidadeComprada * codigoProduto);
			System.out.printf("Valor a pagar: R$ %.2f", valorFinal);
			break;
		}
	}
}
