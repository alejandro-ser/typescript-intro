/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = ['Basch','Counter','Healing'];

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Basch','Counter','Healing']
}

personaje.puebloNatal = 'Pueblo paleta';

console.table(personaje);