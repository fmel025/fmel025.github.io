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