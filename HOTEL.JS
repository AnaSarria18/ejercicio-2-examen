/* Clase Habitacion */
class Habitacion {
    constructor(numeroHabitacion, tipo) {
        this.numeroHabitacion = numeroHabitacion;
        this.tipo = tipo;
        this.disponible = true;
    }

    /* Método para alquilar una habitación */
    alquilar() {
        if (this.disponible) {
            this.disponible = false;
            return `Habitación ${this.numeroHabitacion} ha sido alquilada.`;
        } else {
            return `La habitación ${this.numeroHabitacion} ya está ocupada.`;
        }
    }

    /* Método para liberar una habitación */
    liberar() {
        if (!this.disponible) {
            this.disponible = true;
            return `Habitación ${this.numeroHabitacion} ha sido liberada.`;
        } else {
            return `La habitación ${this.numeroHabitacion} ya está disponible.`;
        }
    }
}

/* Clase Hotel */
class Hotel {
    constructor() {
        this.habitaciones = [
            new Habitacion(200, "simple"),
            new Habitacion(201, "doble"),
            new Habitacion(202, "suite")
        ];
    }

    /* Método para alquilar una habitación */
    alquilarHabitacion(numeroHabitacion) {
        for (let habitacion of this.habitaciones) {
            if (habitacion.numeroHabitacion === numeroHabitacion) {
                return habitacion.alquilar();
            }
        }
        return `Habitación no encontrada.`;
    }

    /* Método para liberar una habitación */
    liberarHabitacion(numeroHabitacion) {
        for (let habitacion of this.habitaciones) {
            if (habitacion.numeroHabitacion === numeroHabitacion) {
                return habitacion.liberar();
            }
        }
        return `Habitación no encontrada.`;
    }

    /* Método para mostrar las habitaciones disponibles */
    mostrarHabitacionesDisponibles() {
        let disponibles = [];
        for (let habitacion of this.habitaciones) {
            if (habitacion.disponible) {
                disponibles.push(`Habitación ${habitacion.numeroHabitacion} (${habitacion.tipo}) disponible`);
            }
        }
        return disponibles;
    }
}

/* Instancia del hotel */
const hotel = new Hotel();

/* Función para alquilar una habitación */
function alquilarHabitacion() {
    let numero = parseInt(document.getElementById("alquilarNumero").value);
    let resul = hotel.alquilarHabitacion(numero);
    alert(resul);
    actualizarHabitaciones();
}

/* Función para liberar una habitación */
function liberarHabitacion() {
    let numero = parseInt(document.getElementById("liberarNumero").value);
    let r = hotel.liberarHabitacion(numero);
    alert(r);
    actualizarHabitaciones();
}

/* Función para actualizar las habitaciones disponibles */
function actualizarHabitaciones() {
    let habita = document.getElementById("habitaciones");
    habita.innerHTML = ""; 

    let Hdisponibles = hotel.mostrarHabitacionesDisponibles();
    for (let i = 0; i < Hdisponibles.length; i++) {
        habita.innerHTML += `<p>${Hdisponibles[i]}</p>`; 
    }

    if (Hdisponibles.length === 0) {
        habita.innerHTML = "<p>No hay habitaciones disponibles.</p>"; 
    }
}

actualizarHabitaciones();
