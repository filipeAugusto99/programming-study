package outrosTopicos;

import java.util.Scanner;
import java.util.Locale;

public class checkList {
	public static void main(String[] args) {
//		String original = "abcde FGHIJ ABC abc DEFG";
//		
//		//outras funcoes ou metodos nativos do java
//		String s01 = original.toLowerCase(); //tudo minusculo
//		String s02 = original.toUpperCase(); //tudo maiusculo
//		String s03 = original.trim();
//		String s04 = original.substring(2); //retira as duas primeiras
//		String s05 = original.substring(2, 9);
//		String s06 = original.replace('a', 'x'); //troca no lugar de 'a' o 'x'
//		String s07 = original.replace("abc", "xy"); //retira abc e coloca xy
//		int i = original.indexOf("bc");
//		int j = original.lastIndexOf("bc");
//		
//		System.out.println("Original: -" + original + "-");
//		System.out.println("toLowerCase: -" + s01 + "-");
//		System.out.println("toUpperCase: -" + s02 + "-");
//		System.out.println("trim: -" + s03 + "-");
//		System.out.println("substring(2): -" + s04 + "-");
//		System.out.println("substring(2, 9): -" + s05 + "-");
//		System.out.println("replace('a', 'x'): -" + s06 + "-");
//		System.out.println("replace('abc', 'xy'): -" + s07 + "-");
//		System.out.println("Index of 'bc': " + i);
//		System.out.println("Last index of 'bc': " + j);

		// Operacao SPLIT
//		String s = "potato apple lemon";
//		
//		String[] vect = s.split("");
//		String word1 = vect[0];
//		String word2 = vect[1];
//		String word3 = vect[2];
//		
//		System.out.println(word1 + word2 + word3);

		// Refazendo - Exercicio
		Scanner sc = new Scanner(System.in);

		System.out.println("Enter three numbers:");
		int a = sc.nextInt();
		int b = sc.nextInt();
		int c = sc.nextInt();

		int higher = max(a, b, c);
		
		showResult(higher);
		
		sc.close();

	}

	public static int max(int a, int b, int c) {
		int maiorNumero;
		if (a > b && a > c) {
			maiorNumero = a;
		} else if (b > a && b > c) {
			maiorNumero = b;
		} else {
			maiorNumero = c;
		}
		return maiorNumero;
	}
	
	public static void showResult(int value) {
		System.out.println("Higher = " + value);
	}
}
