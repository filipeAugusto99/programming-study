package exercises;

import java.util.Scanner;
import java.util.Locale;

public class combustivel {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		int alcool = 0, gasol = 0, dies = 0;
		int menu;

		do {
			menu = showMenu();

			switch (menu) {
			case 1:
				alcool += 1;
				break;
			case 2:
				gasol += 1;
				break;
			case 3:
				dies += 1;
				break;
			}
		} while (menu != 4);
		System.out.println("MUITO OBRIGADO !");
		System.out.println("Alcool:" + alcool);
		System.out.println("Gasolina: " + gasol);
		System.out.println("Diesel: " + dies);
	}

	public static int showMenu() {
		int option = 0;
		Scanner sc = new Scanner(System.in);
		if (option != 1 && option != 2 && option != 3 && option != 4) {
			System.out.print("Informe um codigo (1,2,3) ou 4 para parar: ");
			option = sc.nextInt();
		}
		return option;
	}
}
