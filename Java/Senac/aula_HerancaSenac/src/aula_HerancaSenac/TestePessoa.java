package aula_HerancaSenac;

public class TestePessoa {

	public static void main(String[] args) {
		Visitante v1 = new Visitante();
		v1.setNome("Mauricio");
		v1.setIdade(30);
		v1.setSexo('M');
		System.out.println(v1.toString());
		
		Visitante v2 = new Visitante();
		v2.setNome("Filipe Augusto");
		v2.setIdade(22);
		v2.setSexo('M');
		System.out.println(v2.toString());
		
		System.out.println();
		
		Aluno a1 = new Aluno();
		a1.setNome("Juca");
		a1.setCurso("Programador");
		a1.setMatr(1313);
		System.out.print(a1.toString() + " ");
		a1.pagarMensalidade(false);
		
		System.out.println();
		
		Bolsista b1 = new Bolsista();
		b1.setNome("Mac" + " ");
		b1.pagarMensalidade();
		
		System.out.println();
		
		Funcionario f1 = new Funcionario();
		f1.setNome("Fatima");
		f1.setSetor("Almoxarifado");
		f1.setTrabalhando(true);
		System.out.println(f1.toString());
	}
}
