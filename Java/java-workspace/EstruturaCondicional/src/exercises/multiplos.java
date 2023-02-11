package exercises;
import java.util.Locale;
import java.util.Scanner;

public class multiplos {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		Locale.setDefault(Locale.US);
		
		int numberOne, numberTwo;
		
		System.out.println("Digite dois numeros inteiros:");
		numberOne = sc.nextInt();
		numberTwo = sc.nextInt();
		
		if(numberOne % numberTwo == 0 || numberTwo % numberOne == 0) {
			System.out.println("Sao multiplos");
		} else {
			System.out.println("Nao sao multiplos");
		}
		sc.close();
	}
}
