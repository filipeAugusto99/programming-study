package exercises;

import java.util.Scanner;
import java.util.Locale;

public class crescente {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		Locale.setDefault(Locale.US);

		int x, y;
		do {
			System.out.println("Digite dois numeros: ");
			x = sc.nextInt();
			y = sc.nextInt();
			
			if(x > y) {
				System.out.println("DECRESCENTE!");
			} else if (x < y){
				System.out.println("CRESCENTE!");
			} else {
				System.out.println("");
			}
		} while (x != y);
		
		sc.close();
	}
}
