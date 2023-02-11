package exercises;
import java.util.Scanner;
import java.util.Locale;

public class tempoDeJogo {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		Locale.setDefault(Locale.US);
		
		int horaInicial, horaFinal, duracao = 0;
		
		System.out.print("Hora inicial: ");
		horaInicial = sc.nextInt();
		System.out.print("Hora final: ");
		horaFinal = sc.nextInt();
		
		if(horaFinal > horaInicial) {
			duracao = horaFinal - horaInicial;
		} else if (horaInicial > horaFinal) {
			duracao = 24 - (horaInicial - horaFinal);
		} else if (horaInicial == horaFinal) {
			duracao = 24;
		}
		System.out.printf("O JOGO DUROU %d HORAS", duracao);
	}
}
