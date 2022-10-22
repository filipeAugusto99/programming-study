package aula_HerancaSenac;

public class Funcionario extends Pessoa {
	String setor;
	boolean trabalhando;
	
	public void mudarTrabalho() {
		
	}

	public String getSetor() {
		return setor;
	}

	public void setSetor(String setor) {
		this.setor = setor;
	}

	public boolean isTrabalhando() {
		return trabalhando;
	}

	public void setTrabalhando(boolean trabalhando) {
		this.trabalhando = trabalhando;
	}

	@Override
	public String toString() {
		return "O funcionario: " + super.getNome() + " " + "do setor de" + " " + setor + ", esta trabalhando=" + trabalhando;
	}
	
	
}
