package exercises;
import java.util.Scanner;
import java.util.Locale;

public class aumento {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		Locale.setDefault(Locale.US);
		
		double salario, novoSalario = 0, aumento = 0;
		String porcentagem = "";
		
		System.out.print("Informe o salario da pessoa: ");
		salario = sc.nextDouble();
		
		if(salario <= 1000) {
			aumento = salario * 0.20;
			novoSalario = salario + aumento;
			porcentagem = "20%";
		} else if (salario > 1000 && salario <= 3000) {
			aumento = salario * 0.15;
			novoSalario = salario + aumento;
			porcentagem = "15%";
		} else if (salario > 3000 && salario <= 8000) {
			aumento = salario * 0.10;
			novoSalario = salario + aumento;
			porcentagem = "10%";
		} else {
			aumento = salario * 0.05;
			novoSalario = salario + aumento;
			porcentagem = "5%";
		}
		
		System.out.printf("Novo salario = %.2f%n", novoSalario);
		System.out.printf("Aumento = R$ %.2f%n", aumento);
		System.out.printf("Porcentagem = %s%n", porcentagem);
	}
}
