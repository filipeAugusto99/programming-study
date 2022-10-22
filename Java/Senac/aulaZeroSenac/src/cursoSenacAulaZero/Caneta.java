package cursoSenacAulaZero;

public class Caneta {
	String modelo;
	String cor;
	float ponta;
	int carga;
	boolean tampada;

void rabiscar() {
	if(this.tampada == true) {
		System.out.println("Nao pode utilizar");
	} else {
		System.out.println("Pode utilizar");
	}
}

void tampar() {
	this.tampada = true;
}

void destampar() {
	this.tampada = false;
}

void status () {
	System.out.println("a cor da sua caneta e: " + this.cor);
	System.out.println("o modelo da sua caneta e: " + this.modelo);
	System.out.println("Sua ponta e: " + this.ponta);
	System.out.println("esta com a carga: " + this.carga);
	System.out.println("ela esta tampada? " + this.tampada);
}
}