package enumaula;
//enum também funciona como se fosse uma classe.
public enum Prioridade {
	
	MIN(1), NORMAL(5), MAX(10);

	private int valor;

	Prioridade(int valor) {
		this.valor = valor;
	}
	
	public int getValor() {
		return this.valor;
	}
	
}
