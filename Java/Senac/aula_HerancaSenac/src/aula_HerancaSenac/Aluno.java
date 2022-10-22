package aula_HerancaSenac;

public class Aluno extends Pessoa {
	private int matr;
	private String curso;
	
	public boolean pagarMensalidade(boolean mensalidade){
		if(mensalidade == true) {
		System.out.println("esta pagando a mensalidade");
		} else {
		System.out.println("esta com sua mensalidade em atraso");
		}
		return false;
	}

	public int getMatr() {
		return matr;
	}

	public void setMatr(int matr) {
		this.matr = matr;
	}

	public String getCurso() {
		return curso;
	}

	public void setCurso(String curso) {
		this.curso = curso;
	}

	@Override
	public String toString() {
		return super.getNome() + " com a matricula=" + matr + ", curso=" + curso;
	}
	
	
}
