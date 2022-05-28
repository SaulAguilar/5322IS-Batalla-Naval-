class Barcos{
    constructor(fila2,columna2){
        this.columna2=columna2;
        this.fila2=fila2;
    }
posicionarbarcos(){

    fila2=parseInt(prompt("Ingrese la fila 0-10"));
 if(fila2 >=1 && fila2 <10){
  column2a=parseInt(prompt("Ingrese la columna 0-10"));
  if(columna2 >=1 && columna2 <10)
  {
    crearTablero1[fila2][columna2]=1;
  }
  else
    console.log("Columna incorrecta");
   }
}}
