class Habitacion {
    constructor(numero, tipo) {
        this.numero = numero;
        this.tipo = tipo;
        this.disponible = true; 
    }
}

class Hotel {
    constructor() {
        this.habitaciones = []; 
    }

    agregarHabitacion(habitacion) {
        this.habitaciones.push(habitacion);
    }

    alquilarHabitacion(numero) {
        const habitacion = this.habitaciones.find(h => h.numero === numero);
        if (habitacion && habitacion.disponible) {
            habitacion.disponible = false;
            alert(`La habitación ${numero} ha sido alquilada.`);
        } else {
            alert(`La habitación ${numero} no está disponible .`);
        }
    }

    liberarHabitacion(numero) {
        const habitacion = this.habitaciones.find(h => h.numero === numero);
        if (habitacion && !habitacion.disponible) {
            habitacion.disponible = true;
            alert(`La habitación ${numero} ha sido liberada.`);
        } else {
            alert(`La habitación ${numero} ya está disponible .`);
        }
    }

    mostrarHabitacionesDisponibles() {
        const disponibles = this.habitaciones.filter(h => h.disponible);
        let detalles = 'Habitaciones disponibles:\n';
        if (disponibles.length > 0) {
            disponibles.forEach(h => {
                detalles += `Número: ${h.numero}, Tipo: ${h.tipo}\n`;
            });
        } else {
            detalles = 'No hay habitaciones disponibles.';
        }
        document.getElementById('detalles').innerText = detalles;
    }
}

// instancia de hotel
const hotel = new Hotel();

// Manejar el evento de agregar habitación
document.getElementById('agregarHabitacion').addEventListener('click', () => {
    const numero = document.getElementById('numeroHabitacion').value;
    const tipo = document.getElementById('tipoHabitacion').value;

    if (!numero || !tipo) {
        alert('Por favor, ingresa el número de habitación y el tipo.');
        return;
    }

    const habitacion = new Habitacion(numero, tipo);
    hotel.agregarHabitacion(habitacion);
    alert(`Habitación ${numero} de tipo ${tipo} agregada.`);
    document.getElementById('numeroHabitacion').value = '';
    document.getElementById('tipoHabitacion').value = '';
});

// Manejar el evento de alquilar habitación
document.getElementById('alquilarHabitacion').addEventListener('click', () => {
    const numero = document.getElementById('numeroAlquilar').value;

    if (!numero) {
        alert('Por favor, ingresa el número de habitación.');
        return;
    }

    hotel.alquilarHabitacion(numero);
    document.getElementById('numeroAlquilar').value = '';
});

// Manejar el evento de liberar habitación
document.getElementById('liberarHabitacion').addEventListener('click', () => {
    const numero = document.getElementById('numeroLiberar').value;

    if (!numero) {
        alert('Por favor, ingresa el número de habitación.');
        return;
    }

    hotel.liberarHabitacion(numero);
    document.getElementById('numeroLiberar').value = '';
});

// Manejar el evento de mostrar habitaciones disponibles
document.getElementById('mostrarDisponibles').addEventListener('click', () => {
    hotel.mostrarHabitacionesDisponibles();
});
