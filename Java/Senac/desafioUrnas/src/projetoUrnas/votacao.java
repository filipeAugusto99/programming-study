package projetoUrnas;
import java.util.Scanner;

public class votacao {
	
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		String candidato1, candidato2, candidato3, nomeCandidato;
		int numero1, numero2, numero3, voto;
		
		System.out.println("Cadastre o primeiro candidato:");
		candidato1 = input.next();
		
		System.out.println("Cadastre o numero do primeiro candidato:");
		numero1 = input.nextInt();
		
		System.out.println("Cadastre o segundo candidato:");
		candidato2 = input.next();
		
		System.out.println("Cadastre o numero do segundo candidato:");
		numero2 = input.nextInt();
		
		System.out.println("Cadastre o terceiro candidato:");
		candidato3 = input.next();
		
		System.out.println("Cadastre o numero do terceiro candidato:");
		numero3 = input.nextInt();
		
		System.out.println("Digite seu voto");
		voto = input.nextInt();
		
		if (voto == 22) {
			nomeCandidato = "Bolsonaro";
			System.out.println("Seu candidato e:" + " " + nomeCandidato + " " +"nomecandidato e seu numero e:" + voto);
		} else if (voto == 13) {
			nomeCandidato = "Lula";
			System.out.println("Seu candidato e:" + " " + nomeCandidato + " " + "e seu numero e:" + voto);
		} else if (voto == 10) {
			nomeCandidato = "Ciro Gomes";
			System.out.println("Seu candidato e:" + " " + nomeCandidato + " " + "e seu numero e:" + voto);
		} else {
			System.out.println("Digite um nome e um numero válido!");
		}
		
		
	}
}
