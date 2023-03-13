author: Fernando Meléndez
summary: Switch - Case
id: clase-07
tags: guide, course
categories: Introduccion a JavaScript
environments: Web
status: Published
feedback link: https://github.com/fmel025/fmel025.github.io/issues

# Sentencias de condicion con Switch - Case

## Concepto
Duration: 00:10:00

La palabra reservada **switch** evalua una expresion,la cual es comparada con varios casos o valores que puede tomar la variable o expresion a evaluar.

## Diferencia entre un switch y un if
Duration: 00:10:00

La diferencia entre un if y un switch es que esta nos permite evaluar varios casos a la vez, en cambio con if, solamente podemos evaluar una expresion.

En resumen evalua varios casos a los que la variable puede ser igual.

## Sintaxis del switch-case
Duration: 00:10:00

La sintaxis para utilizar la sentencia switch-case es la siguiente:

```javascript
switch (variable){
        case valor_1:
            // codigo si la variable es igual al valor 1
            break;
        
        case valor_2:
            // codigo si la variable es igual al valor 2
            break;
        
        default:
            // codigo si la variable no es igual a ningun valor o caso
            break;
    }
```
La sentencia **switch** tiene muchos casos los cuales se llaman **case**, donde evaluamos si la variable es igual a ese caso.

**Variable** es el valor el cual necesitamos evaluar si es igual a uno de los **casos** que contiene el switch-case.

### Palabras reservadas

El switch-case posee varias palabras reservadas la cual tiene cada una, su respectiva funcion dentro de esta sentencia, entre ellas tenemos las siguientes:

- **case (valor):** Evalua que el valor de ese case sea igual al de la variable si se cumple se ejecuta el codigo a continuacion del case.
- **break:** Detiene que el switch siga evaluando mas casos al haber ejecutado el codigo de un caso.
- **default:** Todo el codigo que va en default se ejecuta si y solo si no se cumple ninguno de los casos.


#### PD:
El switch-case puede tener la cantidad de casos que necesites.

## Ejemplo 1
Duration 00:05:00

**Ejercicio**: *Cree un algoritmo que al ingresar el dia de la semana devuelva un numero del 1 al 7 (dependiendo el dia)*.

```javascript
switch(dia){
    case 'lunes':
        console.log(1);
        break;
    
    case'martes':
        console.log(2);
        break;

    case 'miercoles':
        console.log(3);
        break;

    case 'jueves':
        console.log(4);
        break;

    case 'viernes':
        console.log(5);
        break;
    
    case 'sabado':
        console.log(6);
        break;
    
    case 'domingo':
        console.log(7);
        break;
    
    default:
        console.log('El valor ingresado no es un dia');
        break;
}
```
El codigo anterior resuelve el ejercicio que se ha propuesto, como se puede notar la variable ***dia*** contiene uno de los dias de la semana, si el dia es correcto se imprimira el numero correspondiente al dia, sino se mostrara que el datos que posee la variable no es un dia de la semana.

## Ejemplo 2
Duration 00:05:00

**Ejercicio:** *Crear un algoritmo que convierta un numero a numeros romanos (solo del 1 al 5)*

```javascript
// Obteniendo el numero desde consola
let numero = parseInt(process.argv[2]);

switch (numero) {
    case 1:
        console.log("I");
        break;

    case 2:
        console.log("II");
        break;

    case 3:
        console.log("III");
        break;

    case 4:
        console.log("IV");
        break;

    case 5:
        console.log("V");
        break;

    default:
        console.log("El numero ingresado no esta entre el 1 y 5");
        break;
}
```

Como podemos ver si el numero ingresado esta ente el 1 y 5 imprimira su mismo valor pero en romano, de lo contrario se dira que el numero ingresado no esta entre estos valores.