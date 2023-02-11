package estruturaCondicional;

import java.util.Scanner;

public class problemaDiasSemana {
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);

		int diasSemana = input.nextInt();

		switch (diasSemana) {
		case 1:
			System.out.print("Dia da semana: domingo");
			break;
		case 2:
			System.out.print("Dia da semana: segunda-feira");
			break;
		case 3:
			System.out.print("Dia da semana: terca-feira");
			break;
		case 4:
			System.out.print("Dia da semana: quarta-feira");
			break;
		case 5:
			System.out.print("Dia da semana: quinta-feira");
			break;
		case 6:
			System.out.print("Dia da semana: sexta-feira");
			break;
		case 7:
			System.out.print("Dia da semana: sabado");
			break;
		default:
			System.out.print("Opcao invalida");
			break;
		}
		
		input.close();
	}
}
