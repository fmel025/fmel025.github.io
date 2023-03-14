author: Fernando Meléndez
summary: Funciones
id: clase-08
tags: guide, course
categories: Introduccion a JavaScript
environments: Web
status: Published
feedback link: https://github.com/fmel025/fmel025.github.io/issues

# Funciones en JavaScript

## Concepto de funciones
Duration: 00:10:00

Las funciones son un conjunto de instrucciones que se agrupan para realizar una tarea específica. Y se pueden reutilizar en cualquier  parte del código.

Aparte de ejecutar codigo las funciones tambien pueden devolver un valor de retorno, por ejemplo una funcion de suma puede devolver el resultado de la suma de ambos numeros.

Segun la [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions) la definicion de una funcion es lo siguiente:

> Una función en JavaScript es similar a un procedimiento — un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para que un procedimiento califique como función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida.

## Definir funciones
Duration: 00:10:00

En JavaScript tenemos dos tipos de maneras de declarar funciones: Declaración de función y expresión de función.

### Funciones definidas
Una definicion de funcion (tambien llamada como expresion de funcion o declaracion de funcion) consta de la palabra reservada **`function`** seguida de:

- El nombre de la funcion.
- Una lista de parametros a usar dentro de la funcion dentro de los parentesis y separados por comas.
- El codigo que ejecutara la funcion dentro de las llaves `{}`.

**Nota importante:**
Los parámetros son variables que se declaran en la función y que se pueden utilizar dentro de la función.

Una función puede tener cero o más parámetros.

#### Sintaxis de una funcion definida
```javascript
    function nombreFuncion(param1, param2) {
         // Código a ejecutar
    }
```
Con la palabra reservada function se declara una función, seguido del nombre de la función y los parámetros que recibe la función. (los parametros son opcionales usarlos)

Los parámetros son variables que se declaran en la función y que se pueden utilizar dentro de la función.

#### Ejemplo de una funcion

Ejercicio: Escribir una funcion que devuelva la suma de dos numeros y lo retorne.

```javascript
    function suma(a, b) {
    let sumatoria = a + b
    return sumatoria
}
```

La funcion anterior recibe dos parametros siendo a y b los numeros a sumar, y como resultado nos devuelve la suma de ambos numeros.

### Invocar una funcion

El solo hecho de definir una funcion no hace que esta se ejecute, para hacer eso simplemente se escribe el nombre de la funcion y se le pasan los valores que necesite en sus parametros. A esto se le conoce como **llamar una funcion** o **invocar una funcion**.

#### Ejemplo de la invocacion de una funcion

En este ejemplo tomamos el valor de la suma de dos numeros dentro de una variable e imprimimos su valor mediante la consola.

```javascript
    let sumatoria = suma(10,7)
    console.log("Respuesta de la suma:", sumatoria);
```

## Concatenacion de strings
Duration: 00:05:00

En javascript podemos unir cadenas de texto  utilizando el simbolo "+", y al hacer esto devuelve una nueva cadena de texto con la union de ambas.

A continuacion se mostrara un ejemplo de concatenaion.

```javascript
    let saludo = "Hola "
    saludo = saludo + "mundo"
    console.log(saludo);
```
Veamos un segundo ejemplo de concatenacion:
Primero declaramos una variable llamada nombre y otra llamada saludo para hacer que nuestra consola imprima un saludo.

```javascript
    let name = "Fernando"
    let greeting = "Hola soy "
    console.log(greeting + name);
```

## Constantes
Duration: 00:05:00

Las constantes vienen ser lo mismo que una variable pero a diferencia de las variables, una vez la inicializamos o le damos un valor, este valor ya no puede cambiar nunca mas en la ejecucion del programa.

Para declarar una variable usamos "let", pero para la declaracion de una constante  utilizamos la palabra reservada ```const```.

Utilizaremos constantes en variables que no cambiaran en el resto de la ejecucion de la aplicacion.

### Ejemplos

```javascript
    const PORT = 8000
    const PASSWORD = "QWERTY"
```
## Funciones anonimas y arrow functions
Duration: 00:10:00

Las arrow functions o funciones flecha son funciones que no se les declara  un nombre y muchas veces se utiliza como argumento en una funcion o en funciones de expresion.

Las arrow functions se usan en funciones de expresion y tambien como **callbacks**.

Un pequeño spoiler, los callbacks son funciones las cuales se usan como argumentos o parametros para otras funciones, funciones flecha y asi, es decir son funciones que se reciben como argumento dentro de otras para ejecutarlas en una cierta parte del codigo.

### Sintaxis de una arrow function

Sintaxis en javascript:

```javascript
    (parametros) => {
      // codigo a ejecutar
    }
```

El ejemplo anterior es para una arrow function que puede contener varias lineas de codigo y tambien podemos tener arrow functions mas sencillas de una sola linea, que solo ejecuten una sentencia y el resultado de ello se retorne sin tener que usar un return.

```javascript
    (parametros) => // codigo o expresion a retornar
```
En el codigo anterior lo que esta despues de la flecha es el valor que la funcion retornara, pero si lo que se esta haciendo no retorna ningun valor, solamente lo ejecutara.

## Funciones de expresion con arrow functions
Duration: 00:10:00

Al igual como siempre en las funciones de expresion, podemos crearlas utilizando funciones flecha, pero conteniendolas dentro de variables y constantes.

A continuacion mostramos la sintaxis de las funciones de expresion con arrow functions.

```javascript
     const nombreFuncion = (parametros) => {
        /// codigo a ejecutar    
     }
```

O tambien podemos usar arrow functions de una sola linea como la sintaxis de a continuacion.

```javascript
    const nombreFuncion = (parametros) => instruccion_de_una_linea
```

### Ejemplos:

#### Ejemplo 1

- Cree una funcion con una arrow function que devuelva la multiplicacion de dos numeros.

```javascript
    // Recibimos dos numeros a y b como parametros.
    const multiplicar = (a,b) => a * b;

    // Invocando la funcion
    const multiplicacion = multiplicar(2,3)
    console.log("El resultado de la multiplicacion es:", multiplicacion);
```

#### Ejemplo 2

- Cree una funcion que reciba como parametro un valor de edad y determine segun la edad ingresada la persona es mayor de edad o no.

```javascript
    const verificarEdad = (edad) => {
        if(edad >= 18){
            console.log("Eres mayor de edad");
        } else {
            console.log("Aun eres menor de edad");
        }
    }

    // Invocando la funcion y viendo que sucede
    verificarEdad(23) // Imprime eres mayor de edad
    verificarEdad(17) // Eres menor de edad
```

## Tarea
Duration: 00:30:00

1. Crear un arrow function de una linea, sin parametros que imprima lo que ustedes deseen.
2. Crear una funcion que reciba como parametro dos numeros y retorne el mayor de los dos numeros
3. Crear una arrow function, la cual reciba un parametro llamado precio, donde si la compra es mayor a los $20,  aplicarle un 15% de descuento y imprimir el nuevo precio.