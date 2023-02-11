package exercise3;
import java.util.Scanner;
import java.util.Locale;

public class exercise3 {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		
		String nameOne;
		double ageOne;
		
		String nameTwo;
		double ageTwo;
		
		double avarage;
		
		//people one
		System.out.println("Dados da primeira pessoa:");
		System.out.print("Nome: ");
		nameOne = input.nextLine();
		System.out.print("Idade: ");
		ageOne = input.nextInt();
		
		input.nextLine();
		
		//people two
		System.out.println("Dados da segunda pessoa:");
		System.out.print("Nome: ");
		nameTwo = input.nextLine();
		System.out.print("Idade: ");
		ageTwo = input.nextInt();
		
		avarage = (ageOne + ageTwo) / 2;
		System.out.printf("A idade media de %s e %s e de %.1f anos", nameOne, nameTwo, avarage);
	}
}
