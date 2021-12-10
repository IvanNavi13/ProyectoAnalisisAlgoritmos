//*****************************************************************
//	Equipo: Numero 3: Los printF
//Cortés Coria Luis David 
//Cortés Lugo Arturo 
//Figueroa de la Torre Heidi Fernanda 
//Garcia Garcia Cano Ivan

//Curso: Análisis de algoritmos
//(C) Agosto-Enero 2021
//ESCOM-IPN

//Algoritmo de prefijo comun mas largo para solucion Fuerza Bruta
//*****************************************************************


//************************************************************************
//DEFINICIÓN DE FUNCIONES 
//************************************************************************

function animar_explicacion()
{
    $("#paso1").addClass("animate__animated animate__wobble animate__delay-1s animate__repeat-3 ");
    $("#paso2").addClass("animate__animated animate__wobble animate__delay-3s animate__repeat-3 ");
    $("#paso3").addClass("animate__animated animate__wobble animate__delay-5s animate__repeat-3 ");

}

function cambiarDiseñoCodigo(){
    document.getElementById("contenedor-codigos").style.background= "#FFE26B";
    document.getElementById("codigo-uno-1").style.color = "#FFE26B";
    
}

function SoloMinusculas(e){

    key = e.keyCode || e.wich;
    tecla = String.fromCharCode(key).toString();
    letras = "abcdefghijklmnñopqrstuvwxyzáéíóú";
    
    especiales = [8];
    tecla_especial = false;

    for(var i in especiales){
        if(key == especiales[i]){
            tecla_especial = true;
            break;
        }
    }

    if(letras.indexOf(tecla)== -1 && !tecla_especial){
        alert("Solo detecta minusculas");
        return false;
    }
}


function mostrar() {
    const prefijo = document.getElementById("palabra5").innerHTML;
    document.getElementById("final").innerHTML = "El prefijo más largo es: " + prefijo;
    prefijo();          
}


    
function sustituir2() {
    const str4 = document.getElementById("str4").value;
    document.getElementById("palabra1").innerHTML = document.getElementById("palabra5").innerHTML;
    document.getElementById("palabra2").innerHTML = str4;
    prefijo();    
    mover(document.getElementById('palabra1').clientWidth);
    moverFlecha(prefijo().length);      
}


function sustituir() {
    const str3 = document.getElementById("str3").value;
    document.getElementById("palabra1").innerHTML = document.getElementById("palabra5").innerHTML;
    document.getElementById("palabra2").innerHTML = str3;
    prefijo();   
    mover(document.getElementById('palabra1').clientWidth);
    moverFlecha(prefijo().length);       
}


function mover(x) {

    document.getElementById("flechaI").style.display = "block"
    document.getElementById("flechaI").style.marginLeft =  -(document.getElementById('palabra2').clientWidth - 10) + "px";
    document.getElementById("flechaD").style.display = "block"
    var l = document.getElementById("palabra2");
    var lon = l.currentStyle || window.getComputedStyle(l);
    var p = lon.marginLeft;
    //if(document.getElementById("str1").value[0]=="m")
    //var q = (x-1) * 20 +15;
    //else
    var w = document.getElementById("palabra1").clientWidth;
    w = w - 15;
    p = parseInt(p, 10) + w + "px";
    //alert("= " +w);
    document.getElementById("flechaD").style.marginLeft = p;

}

function moverFlecha(x) {
    var p = (document.getElementById("palabra5").clientWidth - 8) + "px";
    //  alert("= "+p);
    var item = document.getElementById("flechas");

    document.getElementById("flechas").animate([
        // keyframes
        { transform: 'translateX(18px)' },
        { transform: 'translateX(' + p + ')' },
        { transform: 'delay:1s' }
    ], {
        // timing options
        duration: 2000,
        iterations: 1
    });
    //var longitud = document.getElementById("palabra2").style.marginLeft;
}


function obtener() 
{
    const str1 = document.getElementById("str1").value;
    const str2 = document.getElementById("str2").value;
    const str3 = document.getElementById("str3").value;
    const str4 = document.getElementById("str4").value;
    document.getElementById("palabra1").innerHTML = str1;
    document.getElementById("palabra2").innerHTML = str2;
    prefijo();
}

function codigo()
{
    const str1 = document.getElementById("str1").value;
    const str2 = document.getElementById("str2").value;
    const str3 = document.getElementById("str3").value;
    const str4 = document.getElementById("str4").value;
    document.getElementById("array1").innerHTML = "array[0]= " + str1;
    document.getElementById("array2").innerHTML = "array[1]= " + str2;
    document.getElementById("array3").innerHTML = "array[2]= " + str3;
    document.getElementById("array4").innerHTML = "array[3]= " + str4;
}

function codigo2(){
    document.getElementById("arr").style.display = "none";
    document.getElementById("linea1").innerHTML = "let prefix = array[0]";
    document.getElementById("linea2").innerHTML = "for(let i = 1; i<=n-1; i++)";
    document.getElementById("linea3").innerHTML = "&nbsp;&nbsp;&nbsp;prefix = prefijoComunDos(prefix, array[i])";
}

function codigo3()
{
    document.getElementById("linea1").innerHTML = "for(let i = 0, j = 0; i>=(n1-1)&& j<=(n2-1); i++, j++)";
    document.getElementById("linea2").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;if(str1[i] != str2[j]) break;";
    document.getElementById("linea3").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;result +=str1[i]";
    document.getElementById("linea1").style.color = "#B60020"; 
    document.getElementById("linea3").style.color = "#8236CB";
}



 //----------------------------------------------------FUNCION DEL ALGORITMO----------------------------------------------------       
// Funcion para encontrar el prefijo comun entre dos cadenas (str1 & str2)
//@param1: cada n1 a comparar
//@param2: cada n2 a comparar
function prefijoComunDos(str1, str2) {
    //Cadena donde se guardara el valor final
    let result = "";         
    //Obtenemos el tamaño               
    let n1 = str1.length, n2 = str2.length; 
    // Comparar str1 & str2
    for (let i = 0, j = 0; i <= (n1 - 1) && j <= (n2 - 1); i++, j++) {

        if (str1[i] != str2[j])
            break;
        // Voy concatenando caracter x caracter, para aumentar el prefijo
        result += str1[i]; 

    }

    //Regreso el valor final del prefijo
    return (result);      
}

// Funcion que devuelve el prefijo comun mas largo del arreglo de cadenas
    //@param1: el arreglo de caracteres
    //@param2: el tamaño del arreglo
function prefijoComunMasLargo(arr, n) {

    let prefix = arr[0];

    for (let i = 1; i <= n - 1; i++)
        prefix = prefijoComunDos(prefix, arr[i]);

    //Regreso el prefijo comun mas largo de las n cadenas
    return (prefix);
}

//********************************************************************************************************
// Programa "principal" para probar el algoritmo
function prefijo() 
{
    const str1 = document.getElementById("palabra1");
    var contenido1 = str1.innerHTML;
    const str2 = document.getElementById("palabra2");
    var contenido2 = str2.innerHTML;

    let arr = [contenido1, contenido2];
    let n = arr.length;
    let ans = prefijoComunMasLargo(arr, n);

    //Si es mayor a 0, quiere decir que si existe un prefijo comun mas largo
    if (ans.length > 0) {     
        document.getElementById("palabra5").innerHTML = ans;
        return ans;
    }
    else {
        alert("No hay prefijo común");
        return -1;
    }
    
}

    //********************************************************************************************************
//----------------------------------------------------FUNCION DEL ALGORITMO----------------------------------------------------    


function verificar_Vacio() 
{
    const str1 = document.getElementById("str1").value;
    const str2 = document.getElementById("str2").value;
    const str3 = document.getElementById("str3").value;
    const str4 = document.getElementById("str4").value;

    if(str1 == "" || str2 == "" || str3 == "" || str4 == "" ){
        console.log("No ha ingresado las 4 cadenas correspondientes!");
        alert("No ha ingresado las 4 cadenas correspondientes!");
    }else{

        moverFlecha(prefijo());
        mover(document.getElementById('str1').value.length); 
        setTimeout(sustituir, 2500);
        setTimeout(sustituir2, 5000);
        setTimeout(mostrar, 7500);

    }
    
}

