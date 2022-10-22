package criarCaneta;

public class Caneta {
	private String cor;
	private String modelo;
	private double ponta;
	private int carga;
	private boolean tampada;
	
	public String getCor() {
		return cor;
	}
	public void setCor(String cor) {
		this.cor = cor;
	}
	public String getModelo() {
		return modelo;
	}
	public void setModelo(String modelo) {
		this.modelo = modelo;
	}
	public double getPonta() {
		return ponta;
	}
	public void setPonta(double ponta) {
		this.ponta = ponta;
	}
	public int getCarga() {
		return carga;
	}
	public void setCarga(int carga) {
		this.carga = carga;
	}
	public boolean getTampada() {
		return tampada;
	}
	public void setTampada(boolean tampada) {
		this.tampada = tampada;
	}
	public void rabiscar() {
		if(tampada == true) {
			System.out.println("Pode usar");
		} else {
			System.out.println("Nao pode usar");
		}
	}
	
	
}
