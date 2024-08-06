export function cantidadEnPesos(cantidad) {
    return cantidad.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
  }