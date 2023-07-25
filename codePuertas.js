//Código para el calculo de cortes de Mamparas

//Validacion de los datos del formulario para Mamparas

function validarDatosMamparas(){
    if(medidaAltoPuerta.value <= 25  || medidaAnchoPuerta.value <= 25){
        alert("Ingrese medida correcta");
        return false;
    }else if (colorPuerta.value === "seleccionador"){
        alert("Seleccione Color de Puerta");
        return false;
    }else if (vidrioPuerta.value === "seleccionador"){
        alert("Ingrese tipo de vidrio");
        return false;
    }else if (travesanoPuerta.value === "seleccionador"){
        alert("Ingrese tipo de travesaño");
        return false;
    }else if (nombreClientePuerta.value === ""){
        alert("Ingrese nombre de cliente");
        return false;
    }else if (cantidadPuerta.value <=0){
        alert("Ingrese cantidad correcta");
        return false;
    }else {return true
    }}

    formPuertas.addEventListener("submit",(e)=>{
        e.preventDefault();    
    validarDatosMamparas()
        
})
