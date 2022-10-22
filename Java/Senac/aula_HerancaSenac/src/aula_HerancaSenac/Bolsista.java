package aula_HerancaSenac;

public class Bolsista extends Aluno{
	
	private double bolsa;

	public void renovarBolsa () {
		System.out.println("Renovando bolsa de " + super.getNome());
	}
	
	//Overrider
	public void pagarMensalidade () {
		System.out.println(super.getNome() + "e bolsista, pagamento facilitado");
	}
	
	public double getBolsa() {
		return bolsa;
	}

	public void setBolsa(double bolsa) {
		this.bolsa = bolsa;
	}
	
	
	
}
