
#Reverse-Words

Solución al problema planteado por Google Code Jam y las rondas de clasificación Africa 2010

###Instalación

$ [sudo] git clone git@github.com:davidenq/reverse-words.git

cd /reverse-words

###¿Cómo usar?

A continuación se muestra un ejemplo sensillo de la ejecución del modulo.

En `index.js` especificar el archivo que se desea leer.

```js
file = fs.readFileSync('./B-small-practice.in', 'utf8');

```
Ejecutar
```
node index.js
```
Se obtiene cómo resultado
```
Case #1: test a is this
Case #2: foobar
Case #3: base your all
Case #4: class
Case #5: along pony

```
## Validar el resultado en Google Code Jam

Para validar el resultado ejecuta el script, copia el resultado en un archivo de texto y dirígete a la página del problema [Reverse Words](https://code.google.com/codejam/contest/351101/dashboard#s=p1)
y selecciona el boton small input o large input, carga el archivo de texto y google te indicará si el resultado es el esperado.

## Licencia

MIT Licence
