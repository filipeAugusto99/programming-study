package exercises;
import java.util.Scanner;
import java.util.Locale;

public class coordenadas {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		Locale.setDefault(Locale.US);
		
		double x,y;
		
		System.out.print("Valor de X: ");
		x = sc.nextDouble();
		System.out.print("Valor de Y: ");
		y = sc.nextDouble();
		
		if(x > 0 && y > 0) {
			System.out.print("Q1");
		} else if (x < 0 && y > 0) {
			System.out.print("Q2");
		} else if (x < 0 && y < 0) {
			System.out.print("Q3");
		} else if (x > 0 && y < 0) {
			System.out.print("Q4");
		} else if (x == 0 && y == 0){
			System.out.print("ORIGEM");
		} else if (x > 0 || x < 0 && y == 0) {
			System.out.print("Eixo-X");
		} else if (y > 0 || y < 0 && x == 0) {
			System.out.print("Eixo-Y");
		}
	}
}
