package exercises;
import java.util.Scanner;

public class soma_impares {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int n1, n2, numeroImpar = 0;
		
		System.out.println("Digite dois numeros: ");
		n1 = sc.nextInt();
		n2 = sc.nextInt();
		
		if (n1 < n2) {
			for (int i = n1; i < n2; i++) {
				if(i % 2 != 0) {
					if(i < 0) {
						i *= -1;
					}
					numeroImpar += i;
				}
			}			
		} else {
			for (int i = n2; i < n1; i++) {
				if(i % 2 != 0) {
					if(i < 0) {
						i *= -1;
					}
					numeroImpar += i;
				}
			}			
		}
		
		System.out.println("SOMA DOS IMPARES = " + numeroImpar);
	}

}
