package exercises;
import java.util.Scanner;
import java.util.Locale;

public class senha_fixa {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int senha;
		System.out.print("Digite a senha: ");
		senha = sc.nextInt();
		
		senhaUsuario(senha);
		
		sc.close();
	}
	
	public static int senhaUsuario(int senha) {
		Scanner sc = new Scanner(System.in);
		if(senha != 2002) {
			do {
				System.out.print("Senha invalida! Tente novamente: ");
				senha = sc .nextInt();
			} while (senha != 2002);	
			System.out.print("Acesso permitido!");
		} else {
			System.out.print("Acesso permitido!");
		}
		sc.close();
		return senha;
	}
}
