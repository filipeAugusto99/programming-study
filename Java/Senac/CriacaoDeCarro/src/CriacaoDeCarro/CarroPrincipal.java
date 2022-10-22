package CriacaoDeCarro;

public class CarroPrincipal {
	
	public static void main(String[] args) {
		
		Carro c1 = new Carro ();
		c1.marca = "Ford";
		c1.modelo = "Mustang";
		c1.cor = "Cinza";
		c1.ano = 2022;
		c1.novo = true;
		c1.tanqueCheio = false;
		
		c1.ligado();
		//c1.desligado();
		c1.status();
		c1.gasolina();
	}
}
