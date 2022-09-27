package Ejercicios;

import java.util.InputMismatchException;
import java.util.Scanner;

import Ejercicios.utiles.Ejercicio5;

public class Ejercicios1 {

	private String nombre;
	private int edad;
	private Scanner scanner = new Scanner(System.in);

	public void nombreEmpleado(String nombre, int edad) {
		this.nombre = nombre;
		this.edad = edad;

		System.out.println("El nombre del empleado es " + nombre + " y " + "tiene " + edad + " anhos.");
	}

	public void detectarEdad() {

		System.out.println("Introduce una edad:");
		try {
			int nuevaEdad = scanner.nextInt();
			if (nuevaEdad < 18 && nuevaEdad > 0) {
				System.out.println("Eres menor de edad");
			}

			else if (nuevaEdad < 0 || nuevaEdad > 120) {
				System.out.println("No creo que tengas esa edad");
			}

			else {
				System.out.println("Eres mayor de edad");
			}

		} catch (InputMismatchException e) {
			System.out.println("Tiene que ser un numero");
		}

	}

	public void nombreEmail() {
		System.out.println("Introduce un nombre y un correo:");
		String nombre = scanner.next();
		String email = scanner.next();
		System.out.format("Nombre: %s%n" + "Email: %s%n", nombre, email);
	}

	public void pedirNum() {
		int num;
		do {
			System.out.println("Introduce un numero:");
			num = scanner.nextInt();
		} while (num != 5);

		System.out.println("Fin del programa");

	}

	public void pedirNumero50() {
		int num;
		do {
			System.out.println("Introduce un numero:");
			num = scanner.nextInt();
		} while (num < 1 || num > 50);

		Ejercicio5 utils = new Ejercicio5();
		utils.comprobadorPares(num);
	}

	public void arrayPersonas() {
		String[] personas = { "Martin", "Estrella", "Marcos", "Manuel", "Brais" };
		for (int i = 0; i < personas.length; i++) {
			System.out.println(personas[i]);
		}
	}

	public void arrayPersonas2() {
		String[] personas = { "Martin", "Estrella", "Marcos", "Manuel", "Brais" };
		for (String string : personas) {
			System.out.println(string);
		}
	}

	public static void main(String[] args) {

		Ejercicios1 prueba = new Ejercicios1();
		prueba.nombreEmpleado("Brais", 27);

		prueba.detectarEdad();

		prueba.nombreEmail();

		prueba.pedirNum();

		prueba.pedirNumero50();

		prueba.arrayPersonas();

		prueba.arrayPersonas2();
	}
}
