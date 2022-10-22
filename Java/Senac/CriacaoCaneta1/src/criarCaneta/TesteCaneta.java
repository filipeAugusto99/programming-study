package criarCaneta;

public class TesteCaneta {

	public static void main(String[] args) {
		
		Caneta c1 = new Caneta();
		c1.setCor("Cor: Azul");
		System.out.println(c1.getCor());
		c1.setModelo("Marca: BIC");
		System.out.println(c1.getModelo());
		System.out.print("Ponta: ");
		c1.setPonta(0.5);
		System.out.println(c1.getPonta());
		System.out.print("Esta destampada?");
		c1.setTampada(false);
		System.out.println(c1.getTampada());
		c1.rabiscar();
		
		System.out.println();
		
		Caneta c2 = new Caneta();
		c2.setCor("Cor: Preta");
		System.out.println(c2.getCor());
		c2.setModelo("Marca: FaberCastell");
		System.out.println(c2.getModelo());
		c2.setPonta(0.7);
		System.out.print("Ponta: ");
		System.out.println(c2.getPonta());
		System.out.print("Esta destampada?");
		c2.setTampada(true);
		System.out.println(c2.getTampada());
		c2.rabiscar();
	}

}
