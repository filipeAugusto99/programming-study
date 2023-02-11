package exercise10;
import java.util.Scanner;
import java.util.Locale;

public class exercise10 {
//n consegui :)
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		
		int duracaoSegundos;
		int duracaoHoras;
		int duracaoMinutos;
		
		System.out.print("Digite a duracao em segundos: ");
		duracaoSegundos = input.nextInt();
		
		duracaoMinutos = duracaoSegundos / 60;
		duracaoHoras = duracaoSegundos / 3600;
		
		System.out.printf("%d:%d:%d", duracaoHoras, duracaoMinutos, duracaoSegundos);
	}

}
