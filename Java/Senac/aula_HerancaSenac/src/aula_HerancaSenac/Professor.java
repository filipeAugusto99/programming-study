package aula_HerancaSenac;

public class Professor extends Pessoa {
	String especialidade;
	double salario;
	
	public void receberAum() {
		
	}
	
	public String getEspecialidade() {
		return especialidade;
	}

	public void setEspecialidade(String especialidade) {
		this.especialidade = especialidade;
	}

	public double getSalario() {
		return salario;
	}

	public void setSalario(double salario) {
		this.salario = salario;
	}
}
