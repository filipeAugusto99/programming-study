package cursoSenacAulaZero;

public class CanetaPrincipal {
	public static void main(String[] args) {
		
		Caneta c1 = new Caneta();
		c1.cor = "Branca";
		c1.ponta = 0.5f;
		c1.tampada = false;
		c1.modelo = "Bic";
		c1.carga = 4;
		
		c1.tampar();
		c1.rabiscar();
		c1.status();
		
	}
}
	
