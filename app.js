class Rectangulo{
    constructor(base,altura){
        this.base=base;
        this.altura=altura;
    }
    area(){
        return this.base*this.altura;
    }
}

class Triangulo{
    constructor(base,altura){
        this.base=base;
        this.altura=altura;
    }
    area(){
        return this.base*this.altura/2;
    }
}

class Cuadrado{
    constructor(base,altura){
        this.base=base;
        this.altura=altura;
    }
    area(){
        return this.base*this.base;
    }
}

let btn=document.getElementById("btnRectangulo");
btn.addEventListener('click',()=>{
    let base=parseInt(document.getElementById("base").value);
    let altura=parseInt(document.getElementById("altura").value);
    let rect1=new Rectangulo (base,altura);
    let divRes=document.getElementById("resultados");
    divRes.innerHTML="<p>El Área del Rectangulo es: " + rect1.area() + "</p>";
});

let btn2=document.getElementById("btnCuadrado");
btn2.addEventListener('click',()=>{
    let base2=parseInt(document.getElementById("base").value);
    let altura2=parseInt(document.getElementById("altura").value);
    let cd1=new Cuadrado (base2,altura2);
    let divRes=document.getElementById("resultados");
    divRes.innerHTML="<p>El Área del Cuadrado es: " + cd1.area() + "</p>";
});

let btn1=document.getElementById("btnTriangulo");
btn1.addEventListener('click',()=>{
    let base1=parseInt(document.getElementById("base").value);
    let altura1=parseInt(document.getElementById("altura").value);
    let tr1=new Triangulo (base1,altura1);
    let divRes=document.getElementById("resultados");
    divRes.innerHTML="<p>El Área del Triangulo es: " + tr1.area() + "</p>";
});
