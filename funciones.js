const interes = (valor, porcentajeInteres) => valor * porcentajeInteres;
const precioFinal = (valor, montoInteres) => valor + montoInteres;
const valorCuota = (valorTotal, cantidadCuotas) => valorTotal / cantidadCuotas;
function mostrar (mensaje) {alert(mensaje)};

let producto = prompt('¡Ingresá el producto que elegiste! (A, B o C)');

let monto;
switch (producto) {
    case 'A':
        monto = 2000;
        console.log('El precio del producto es $' + monto);
        break;
    case 'B':
        monto = 3000;
        console.log('El precio del producto es $' + monto); 
        break;
    case 'C':
        monto = 4000;
        console.log('El precio del producto es $' + monto);
        break;
    default:
        alert('Producto Inexistente');
        break;
}


let cuotas = parseInt(prompt("¿En cuántas cuotas querés pagar?"));

let coeficienteInteres;
switch (cuotas) {
    case 3:
        coeficienteInteres = 0.1;
        console.log(coeficienteInteres);
        break;
    case 6:
        coeficienteInteres = 0.15;
        console.log(coeficienteInteres);
        break;
    case 12:
        coeficienteInteres = 0.2;
        console.log(coeficienteInteres);
        break;
    default:
        alert('No puedes abonar en ese número de cuotas');
        break;
}



let montoTotal = precioFinal(monto, interes(monto, coeficienteInteres));
let montoCuota = valorCuota(montoTotal, cuotas);

mostrar ('El monto total de tu compra es de $' + montoTotal);
mostrar ('Pagarás el monto total en ' + cuotas + ' cuotas de $' + montoCuota);