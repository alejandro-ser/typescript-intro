/*
    ===== Código de TypeScript =====
*/

function sumar(a:number, b:number): number {
    return a + b;
}

const sumarFlecha = (a:number, b:number):number => {
    return a+ b;
}

function multiplicar( numero: number, otroNumero?: number, base: number = 2): number {
    return numero * base;
}

// const resultado = multiplicar(5, 0, 10);

// console.log(resultado);

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarPv: () => void;
}

function curar(personaje: PersonajeLOR, curarX: number): void {

    personaje.pv += curarX;
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarPv() {
        console.log( 'Puntos de vida:', this.pv );
    }
}

curar( nuevoPersonaje, 20);

nuevoPersonaje.mostrarPv();