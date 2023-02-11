package exercise7;
import java.util.Scanner;
import java.util.Locale;

public class exercise7 {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		
		String nome;
		double valorHora;
		int horasTrabalhadas;
		double pagamento;
		
		System.out.print("Nome: ");
		nome = input.nextLine();
		System.out.print("Valor por hora: ");
		valorHora = input.nextDouble();
		System.out.print("Horas trabalhadas: ");
		horasTrabalhadas = input.nextInt();
		
		pagamento = valorHora * horasTrabalhadas;
		
		System.out.printf("O pagamento para %s deve ser %.2f", nome, pagamento);
	}
}
