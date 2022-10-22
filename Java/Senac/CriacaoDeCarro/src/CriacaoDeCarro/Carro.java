package CriacaoDeCarro;

public class Carro {

	String marca;
	String modelo;
	String cor;
	int ano;
	boolean	novo, tanqueCheio, ligarDesligar;
	
	void ligado() {
		if(ligarDesligar = true) {
			System.out.println("O carro esta ligado");
		}
	}
	
	void desligado() {
		if (ligarDesligar = false) {
			System.out.println("O carro esta desligado");
		}
		
	}
	
	void gasolina() {
		if(tanqueCheio == true) {
		System.out.println("Pode ligar o carro.");
		} else {
		System.out.println("Coloque a gasolina antes!");;
		}
	}
	
	void status() {
		System.out.println("Qual a marca do carro?" + this.marca);
		System.out.println("Qual o modelo do carro?" + this.modelo);
		System.out.println("Qual e a cor do carro?" + this.cor);
		System.out.println("Qual e o ano do carro?" + this.ano);
		System.out.println("O carro e novo?" + this.novo);
		System.out.println("O tanque esta cheio?" + this.tanqueCheio);
	}
	
}
