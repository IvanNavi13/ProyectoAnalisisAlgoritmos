//*****************************************************************
//	Equipo: Numero 3: Los printF
//Cortés Coria Luis David 
//Cortés Lugo Arturo 
//Figueroa de la Torre Heidi Fernanda 
//Garcia Garcia Cano Ivan

//Curso: Análisis de algoritmos
//(C) Agosto-Enero 2021
//ESCOM-IPN

//Algoritmo de prefijo comun mas largo para solucion Divide and Conquer
//*****************************************************************


//************************************************************************
//DEFINICIÓN DE FUNCIONES 
//************************************************************************

    function colocarCodigo1(){
        document.getElementById("codigo1").innerHTML = "let mid = low + Math.floor((high - low) / 2);"
        document.getElementById("codigo1").style.color = "#B00026" //B00026
        document.getElementById("codigo2").style.color = "#6D27CA" //FFC61A amarillo
        document.getElementById("codigo3").style.color = "#6D27CA"
        document.getElementById("codigo1").style.fontSize = "20px"
        document.getElementById("codigo2").style.fontSize = "20px"
        document.getElementById("codigo3").style.fontSize = "20px"
        document.getElementById("codigo1").style.webkitTextStroke = "0.4px #B00026" //0.4px #001B48
        document.getElementById("codigo2").style.webkitTextStroke = "0.4px #02457A"
        document.getElementById("codigo3").style.webkitTextStroke = "0.4px #02457A"
    }

    function colocarCodigo2(){
        document.getElementById("codigo1").innerHTML = "let str1 = prefijoComunMasLargo(arr, low, mid);"
    }

    function colocarCodigo3(){
        document.getElementById("codigo2").innerHTML = "return (prefijoComunDos(str1, str2));"
    }

    function colocarCodigo4(){
        document.getElementById("codigo2").style.display = "none"
        document.getElementById("codigo1").innerHTML = "let str2 = prefijoComunMasLargo(arr, mid + 1, high);"
    }

    function colocarCodigo5(){
        document.getElementById("codigo2").style.display = "block"
        document.getElementById("codigo2").innerHTML = "return (prefijoComunDos(str1, str2));"
    }

    function colocarCodigo6(){
        document.getElementById("codigo1").style.display = "none"
        document.getElementById("codigo2").style.display = "none"
        document.getElementById("codigo3").innerHTML = "return (prefijoComunDos(str1, str2));"
    }


function identificarDyC(){

    $("#identificarDyC").empty();

    const str1 = document.getElementById("str1").value;
    const str2 = document.getElementById("str2").value;
    const str3 = document.getElementById("str3").value;
    const str4 = document.getElementById("str4").value;

    if(str1 == "" || str2 == "" || str3 == "" || str4 == "" )
        console.log("No ha ingresado las 4 cadenas correspondientes!");
    else{
        let identiDyC =
        
        "<p class=\"indenti-letras texto-borde\" style=\"color: #B00026;\">Divide</p>" +
        "<p class=\"indenti-letras texto-borde\" style=\"color: #6D27CA;\">Conquer</p>" ;
    
        $("#identificarDyC").append(identiDyC);
        
    }

}

    function colocarArreglo(){

    $("#arreglo-Strings").empty();

    const str1 = document.getElementById("str1").value;
    const str2 = document.getElementById("str2").value;
    const str3 = document.getElementById("str3").value;
    const str4 = document.getElementById("str4").value;

    if(str1 == "" || str2 == "" || str3 == "" || str4 == "" )
        console.log("No ha ingresado las 4 cadenas correspondientes!");
    else{
        let stringCadenas =
        
        "<div class=\"separar-flex animate__animated animate__bounceInDown\" style=\"margin: 50px;\">" +

            "<div>"  +
                "<p id='arreglo' class=\"cuadro-arreglo\">" + "[ "+ str1 +", "+ str2 +", "+ str3 +", "+ str4 + " ]" + "</p>" +

                "<div class=\"flex-uno\">"  +
                    "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-arrow-down-left\"" +
                        "width=\"40\" height=\"40\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"#B60020\" fill=\"none\" " +
                        "stroke-linecap=\"round\" stroke-linejoin=\"round\">" +
                    
                            "<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/>" +
                            "<line x1=\"17\" y1=\"7\" x2=\"7\" y2=\"17\" />" +
                            "<polyline points=\"16 17 7 17 7 8\" />" +
                    "</svg>" +
                    
                    "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-arrow-down-right\" " +
                        "width=\"40\" height=\"40\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"#B60020\" fill=\"none\" " +
                        "stroke-linecap=\"round\" stroke-linejoin=\"round\"> " +
                            
                            "<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/> " + 
                            "<line x1=\"7\" y1=\"7\" x2=\"17\" y2=\"17\" /> " +
                            "<polyline points=\"17 8 17 17 8 17\" /> " +
                    "</svg>" +
                    
                "</div>" +

            "</div>" +
 
        "</div>";
    
        $("#arreglo-Strings").append(stringCadenas);
        
    }

  }


function obtener_Colocar4() 
{
    $("#primer-parte").empty();
    const str1 = document.getElementById("str1").value;
    const str2 = document.getElementById("str2").value;
    const str3 = document.getElementById("str3").value;
    const str4 = document.getElementById("str4").value;

    if(str1 == "" || str2 == "" || str3 == "" || str4 == "" )
        alert("No ha ingresado las 4 cadenas correspondientes!");
    else{
        let primeras_cuatro_Cadenas =
        "<div class=\"separar-flex \" style=\"margin: 50px;\">" + //animate__animated animate__backInLeft

            
                "<div>"  +
                    "<p id='p1' class=\"palabra-cuadro animate__animated animate__fadeInLeftBig\">"+ str1 +"</p>" +

                    "<div class=\"flex-centro animate__animated animate__fadeInLeftBig\">"  +
                        "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-arrow-down-right\" " +
                            "width=\"40\" height=\"40\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"#B60020\" fill=\"none\" " +
                            "stroke-linecap=\"round\" stroke-linejoin=\"round\"> " +
                                
                                "<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/> " + 
                                "<line x1=\"7\" y1=\"7\" x2=\"17\" y2=\"17\" /> " +
                                "<polyline points=\"17 8 17 17 8 17\" /> " +
                        "</svg>" +
                    "</div>" + 
                    
                "</div>" + 
                
                "<div>"  +
                    "<p id='p2' class=\"palabra-cuadro animate__animated animate__fadeInLeftBig\">"+ str2 +"</p>" + 

                    "<div class=\"flex-centro animate__animated animate__fadeInLeftBig\">"  +
                        "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-arrow-down-left\"" +
                        "width=\"40\" height=\"40\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"#B60020\" fill=\"none\" " +
                        "stroke-linecap=\"round\" stroke-linejoin=\"round\">" +
                    
                            "<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/>" +
                            "<line x1=\"17\" y1=\"7\" x2=\"7\" y2=\"17\" />" +
                            "<polyline points=\"16 17 7 17 7 8\" />" +
                        "</svg>" +
                    "</div>" + 

                "</div>" +
            
            "<div>"  +
                "<p id='p3' class=\"palabra-cuadro animate__animated animate__fadeInRightBig animate__delay-2s \">"+ str3 +"</p>" +

                "<div class=\"flex-centro animate__animated animate__fadeInRightBig animate__delay-2s\">"  +
                        "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-arrow-down-right\" " +
                            "width=\"40\" height=\"40\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"#B60020\" fill=\"none\" " +
                            "stroke-linecap=\"round\" stroke-linejoin=\"round\"> " +
                                
                                "<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/> " + 
                                "<line x1=\"7\" y1=\"7\" x2=\"17\" y2=\"17\" /> " +
                                "<polyline points=\"17 8 17 17 8 17\" /> " +
                        "</svg>" +
                "</div>" + 

            "</div>" +
            
            "<div>"  +
                "<p id='p4' class=\"palabra-cuadro animate__animated animate__fadeInRightBig animate__delay-2s\">"+ str4 +"</p>" +
                
                "<div class=\"flex-centro animate__animated animate__fadeInRightBig animate__delay-2s\">"  +
                        "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-arrow-down-left\"" +
                        "width=\"40\" height=\"40\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"#B60020\" fill=\"none\" " +
                        "stroke-linecap=\"round\" stroke-linejoin=\"round\">" +
                    
                            "<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/>" +
                            "<line x1=\"17\" y1=\"7\" x2=\"7\" y2=\"17\" />" +
                            "<polyline points=\"16 17 7 17 7 8\" />" +
                        "</svg>" +
                "</div>" + 

            "</div>" +
        "</div>";

        $("#primer-parte").append(primeras_cuatro_Cadenas);  
        
    }
    
}


function compara_prefijos() 
{
    $("#compara_primer_prefijo").empty();

    const str1 = document.getElementById("str1").value;
    const str2 = document.getElementById("str2").value;
    const str3 = document.getElementById("str3").value;
    const str4 = document.getElementById("str4").value;

    if(str1 == "" || str2 == "" || str3 == "" || str4 == "" )
        console.log("No ha ingresado las 4 cadenas correspondientes!");
    else{
        let primeras_comparacion =
        
        "<div class=\"separar-flex\" style=\"margin: 50px;\">" +

            "<div>"  +
                "<p id = 'palabra1' class=\"palabra-cuadro animate__animated animate__fadeInBottomRight animate__delay-3s\"></p>" +

                "<div class=\"flex-final animate__animated animate__fadeInBottomRight animate__delay-3s\">"  +
                        "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-arrow-down-right\" " +
                            "width=\"40\" height=\"40\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"#B60020\" fill=\"none\" " +
                            "stroke-linecap=\"round\" stroke-linejoin=\"round\"> " +
                                
                                "<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/> " + 
                                "<line x1=\"7\" y1=\"7\" x2=\"17\" y2=\"17\" /> " +
                                "<polyline points=\"17 8 17 17 8 17\" /> " +
                        "</svg>" +
                "</div>" + 
                
            "</div>" +   
            
            "<div>"  +
                "<p id = 'palabra2' class=\"palabra-cuadro animate__animated animate__fadeInBottomLeft animate__delay-4s\"></p>" + 

                "<div class=\"flex-inicio animate__animated animate__fadeInBottomLeft animate__delay-4s\">"  +
                        "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-arrow-down-left\"" +
                        "width=\"40\" height=\"40\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"#B60020\" fill=\"none\" " +
                        "stroke-linecap=\"round\" stroke-linejoin=\"round\">" +
                    
                            "<path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/>" +
                            "<line x1=\"17\" y1=\"7\" x2=\"7\" y2=\"17\" />" +
                            "<polyline points=\"16 17 7 17 7 8\" />" +
                        "</svg>" +
                "</div>" + 

            "</div>"  +

        "</div>";
    
        $("#compara_primer_prefijo").append(primeras_comparacion);

        //mover();
    }
    
}


function regresa_prefijoFinal() 
{
    $("#retorna_prefijoComunMasLargo").empty();

    const str1 = document.getElementById("str1").value;
    const str2 = document.getElementById("str2").value;
    const str3 = document.getElementById("str3").value;
    const str4 = document.getElementById("str4").value;

    if(str1 == "" || str2 == "" || str3 == "" || str4 == "" )
        console.log("No ha ingresado las 4 cadenas correspondientes!");
    else{
        let prefijo_comun_mas_largo =
        
        "<div class=\"separar-flex animate__animated animate__backInUp animate__delay-5s\" style=\"margin: 50px;\"> " +
            "<p id = 'palabraFinal' class=\"palabra-cuadro\"></p>" +
        "</div>";
    
        $("#retorna_prefijoComunMasLargo").append(prefijo_comun_mas_largo);
    }
    
}


function animar_explicacion()
{
    $("#paso1").addClass("animate__animated animate__wobble animate__delay-1s animate__repeat-3");
    $("#paso2").addClass("animate__animated animate__wobble animate__delay-2s animate__repeat-3");
    $("#paso3").addClass("animate__animated animate__wobble animate__delay-2s animate__repeat-3");        
    $("#paso4").addClass("animate__animated animate__wobble animate__delay-5s animate__repeat-3");

}


function animar_codigo()
{
    for(let i = 1; i <= 12; i++)
        $("#codigo-uno-"+i).addClass("texto-amarillo");

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


 //----------------------------------------------------FUNCION DEL ALGORITMO---------------------------------------------------- 
// Programa JS para encontrar el prefijo comun más largo usando DyV

// Funcion para encontrar el prefijo comun entre cadenas (str1 & str2)
//@param1: str1 a comparar
//@param2: str2 a comparar
function prefijoComunDos(str1, str2)
{
    let result = "";
    let n1 = str1.length, n2 = str2.length;
    // Comparar str1 & str2
    for(let i = 0, j = 0; i <= n1 - 1 && j <= n2 - 1; i++, j++)
    {
        if (str1[i] != str2[j])
            break;

        result += str1[i];// Se concatena caracter x caracter, para aumentar el prefijo
    }
    return (result);
}


    // Funcion Divide y Venceras para encontrar el prefijo comun.
// Es similar al metodo Merge sort
//@param1: el arreglo de caracteres
//@param2: el indice del inicio del arreglo
//@param3: el indice del final del arreglo
function prefijoComunMasLargo(arr, low, high)
{
    if (low == high)
        return (arr[low]);

    if (high > low)
    {   
        // Lo mismo que (low + high)/2, pero evita el 
        // desbordamiento para valores grandes de "low" y "high"
        let mid = low + Math.floor((high - low) / 2);

        let str1 = prefijoComunMasLargo(arr, low, mid);
        console.log("str1 -> " + str1);
        let str2 = prefijoComunMasLargo(arr, mid + 1, high);
        console.log("str2 -> " + str2);
        let resultadoFinal = prefijoComunDos(str1, str2);
        console.log("FINAL ----> " + resultadoFinal);
        return (resultadoFinal);
    }
    return null;
}

 //----------------------------------------------------FUNCION DEL ALGORITMO---------------------------------------------------- 


function palabras(){
    const p1 = document.getElementById("p1").innerHTML;
    const p2 = document.getElementById("p2").innerHTML;
    const p3 = document.getElementById("p3").innerHTML;
    const p4 = document.getElementById("p4").innerHTML;

    let arr1 = [p1, p2];
    let arr2 = [p3, p4];

    let n = arr1.length;
    let m = arr2.length;
    let ans1 = prefijoComunMasLargo(arr1, 0, n - 1);
    let ans2 = prefijoComunMasLargo(arr2, 0, n - 1);

    if (ans1.length != 0 && ans2.length != 0){       //Si es mayor a 0, quiere decir que si existe un prefijo comun mas largo
        document.getElementById("palabra1").innerHTML = ans1;
        document.getElementById("palabra2").innerHTML = ans2;
    }
    else
        // alert("No exite ");
        alert("No existe un prefijo común más largo en las 4 cadenas introducidas.");
}


function cambiarColor(){
    document.getElementById("p1").innerHTML;
    //alert(p1);
}


function main(){
    // Programa "principal" para probar el algoritmo
    const str1 = document.getElementById("str1").value;
    const str2 = document.getElementById("str2").value;
    const str3 = document.getElementById("str3").value;
    const str4 = document.getElementById("str4").value;
    let arr = [str1, str2, str3, str4];
    let n = arr.length;
    let ans = prefijoComunMasLargo(arr, 0, n - 1);
    
    if (ans.length != 0)        //Si es mayor a 0, quiere decir que si existe un prefijo comun mas largo
        document.getElementById("palabraFinal").innerHTML = ans;
    else
        alert("No existe un prefijo común más largo en las 4 cadenas introducidas.");
}




