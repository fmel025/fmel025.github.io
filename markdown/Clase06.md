author: Fernando Meléndez
summary: Sentencias de condicion (if/else y switch)
id: clase-06
tags: guide, course
categories: Introduccion a JavaScript
environments: Web
status: Published
feedback link: https://github.com/fmel025/JSCourse/issues

# Sentencias de condicion if/else y switch (continuacion)

## Sentencia if/else (repaso)
Duration: 00:10:00

La sentencia if/else nos permite realizar la toma de decisiones sobre ejecutar cierto codigo dependiendo de la condicion dada si se cumple o no.

### Sintaxis de la sentencia if/else

```JavaScript
if (condicion){
    // Codigo que se ejecuta si la condicion es verdadera (true)
} else {
    // Codigo que se si la condicion es falsa (false)
}

```
#### Notas:
* Todo lo que se ejecuta dentro de else, es el codigo si la condicion es falsa (false).
* La porcion de codigo de else puede ser ignorada o no agregarla si no es necesaria, en algunas ocasiones si la condicion es falsa no ejecutamos nada.