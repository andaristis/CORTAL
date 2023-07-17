//Código para el calculo de cortes de Puertas

//Validacion de los datos del formulario para Puertas
function validarDatosPuertas(){
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

    //Creación de ticket para mostrar resultados e impresión
ticketPuerta.classList.add("print-div");

const contenedorLogoPuerta = document.createElement("div");
contenedorLogoPuerta.classList.add("contenedor-logo-tk");

const logoTicketPuerta = document.createElement("img");
logoTicketPuerta.classList.add("logoTicketPuerta");
logoTicketPuerta.src = "img/logo_negro.svg";
logoTicketPuerta.alt = "Logo ticket";

const fechaActualPuerta = document.createElement("div");
const fechaPuerta = document.createElement("div")
fechaPuerta.classList.add("fecha")
fechaPuerta.id = "fecha-actual"

const contenedorClientePuerta = document.createElement("div");
contenedorClientePuerta.classList.add("contenedor-cliente-tk");
const caracteristicasPuerta = document.createElement("div");
caracteristicasPuerta.classList.add("caracteristicas");
const medidaGeneralPuerta = document.createElement("div")
medidaGeneralPuerta.classList.add("medidaGeneral");
const contenedorSeriePuerta = document.createElement("div")
contenedorSeriePuerta.classList.add("detalles");
const tituloPuerta = document.createElement("div")
tituloPuerta.classList.add("titulo");
const cortesPuerta = document.createElement("div")
const cortesAlturaHojaPuerta = document.createElement("div")
cortesAlturaHojaPuerta.classList.add("perfil-final")
const cortesTravesanoPuerta = document.createElement("div")
cortesTravesanoPuerta.classList.add("perfil-final")
const cortesMarcoLateralPuerta = document.createElement("div")
cortesMarcoLateralPuerta.classList.add("perfil-final-marcolatPuerta")
const cortesMarcoSuperiorPuerta = document.createElement("div")
cortesMarcoSuperiorPuerta.classList.add("perfil-final")
cortesMarcoSuperiorPuerta.classList.add("perfil-final-marcosupPuerta")
const tablillas = document.createElement("div")
tablillas.classList.add("perfil-final")
tablillas.classList.add("tablillas")
const mostrarObservacionesPuerta = document.createElement("div")
mostrarObservacionesPuerta.classList.add("mostrarObservaciones")
const closeButtonPuerta = document.createElement('button');
closeButtonPuerta.classList.add("cerrar")
closeButtonPuerta.innerHTML = 'X';

contenedorLogoPuerta.appendChild(logoTicketPuerta);
cortesPuerta.appendChild(cortesAlturaHojaPuerta);
cortesPuerta.appendChild(cortesTravesanoPuerta);
cortesPuerta.appendChild(tablillas);
cortesPuerta.appendChild(cortesMarcoLateralPuerta);
cortesPuerta.appendChild(cortesMarcoSuperiorPuerta);
caracteristicasPuerta.appendChild(medidaGeneralPuerta);
caracteristicasPuerta.appendChild(contenedorSeriePuerta);
caracteristicasPuerta.appendChild(tituloPuerta);
caracteristicasPuerta.appendChild(cortesPuerta);
ticketPuerta.appendChild(closeButtonPuerta)
ticketPuerta.appendChild(contenedorLogoPuerta);
ticketPuerta.appendChild(fechaPuerta);
ticketPuerta.appendChild(contenedorClientePuerta);
ticketPuerta.appendChild(caracteristicasPuerta);
ticketPuerta.appendChild(mostrarObservacionesPuerta);
    


//Función para calcular una puerta base    
let puertaACortar;
function calcularPuertaBase(alto, ancho){
    puertaACortar = {
        lateralHoja : alto - 4,
        travesanoHoja : ancho - 17.6,
        marcoLateral : alto + 3,
        marcoSuperior : Number(ancho)};
    return puertaACortar;
} 


formPuertas.addEventListener("submit",(e)=>{
    e.preventDefault();    
    if (!validarDatosPuertas()) {
        return; // Detiene la ejecución del código
      }
calcularPuertaBase(medidaAltoPuerta.value, medidaAnchoPuerta.value)

//Agrega la fecha al ticket
fechaPuerta.innerText = fechaTexto;

//Agrega el nombre del cliente al ticket
    contenedorClientePuerta.innerHTML = `<p><b>Cliente:</b> ${nombreClientePuerta.value}</p>`

//Agrega la medida de la ventana al ticket
medidaGeneralPuerta.innerHTML = `<FONT SIZE=3>PUERTA</FONT><FONT SIZE=2>Cantidad: ${cantidadPuerta.value}</FONT> ${medidaAnchoPuerta.value} X ${medidaAltoPuerta.value}`
tituloPuerta.innerHTML = `<b>CORTES PARA PUERTA</b>`

if(modeloPuerta.value === "Ciega"){
    contenedorSeriePuerta.innerHTML = `<b>Detalles Puerta</b><br>Modelo: ${modeloPuerta.value}<br>Color: ${colorPuerta.value}`
}else{
    contenedorSeriePuerta.innerHTML = `<b>Detalles Puerta</b><br>Modelo: ${modeloPuerta.value}<br>Color: ${colorPuerta.value}<br>Vidrio: ${vidrioPuerta.value}`}
    
if(modeloPuerta.value === "Vidrio Entero"){
    tablillas.innerHTML = "";
    tablillas.style.border = 'none'
}else{    
    tablillas.innerHTML = `TABLILLAS:<br/><FONT SIZE=6>${puertaACortar.travesanoHoja-0.4}</FONT> cms.`;
    tablillas.style.borderBottom = '3px solid black';}
    


cortesAlturaHojaPuerta.innerHTML = `${Number(cantidadPuerta.value)*2} LATERALES DE HOJA:<br/><FONT SIZE=6>${puertaACortar.lateralHoja}</FONT> cms.`

//Agrega los cortes de los traqvesaños de la puerta al ticket, agrega plurales según corresponda
switch (travesanoPuerta.value) {
    case "fino":
        cortesTravesanoPuerta.innerHTML = `${Number(cantidadPuerta.value)*2} TRAVESAÑOS FINOS:<br/><FONT SIZE=6>${puertaACortar.travesanoHoja}</FONT> cms.`
        break;
    case "grueso":
        cortesTravesanoPuerta.innerHTML = `${Number(cantidadPuerta.value)*2} TRAVESAÑOS GRUESOS:<br/><FONT SIZE=6>${puertaACortar.travesanoHoja}</FONT> cms.`
        break;
    case "fino y grueso":
        if(cantidadPuerta.value==="1"){
            cortesTravesanoPuerta.innerHTML = `${Number(cantidadPuerta.value)} TRAVESAÑO FINO<br/>${Number(cantidadPuerta.value)} TRAVESAÑO GRUESO<br/><FONT SIZE=6>${puertaACortar.travesanoHoja}</FONT> cms.`
        }else{
            cortesTravesanoPuerta.innerHTML = `${Number(cantidadPuerta.value)} TRAVESAÑOS FINOS<br/>${Number(cantidadPuerta.value)} TRAVESAÑOS GRUESOS<br/><FONT SIZE=6>${puertaACortar.travesanoHoja}</FONT> cms.`
        }
        break;
}


cortesMarcoLateralPuerta.innerHTML = `${Number(cantidadPuerta.value)*2} - LATERALES DE MARCO:<br/><FONT SIZE=6>${puertaACortar.marcoLateral}</FONT> cms.`

if(cantidadPuerta.value === "1"){
cortesMarcoSuperiorPuerta.innerHTML = `${Number(cantidadPuerta.value)} - PERFIL MARCO SUPERIOR:<br/><FONT SIZE=6>${puertaACortar.marcoSuperior}</FONT> cms.`
}else{
cortesMarcoSuperiorPuerta.innerHTML = `${Number(cantidadPuerta.value)} - PERFILES MARCO SUPERIOR:<br/><FONT SIZE=6>${puertaACortar.marcoSuperior}</FONT> cms.`}
console.log(manoPuerta.value);
mostrarObservacionesPuerta.innerHTML = `<b>Observaciones:</b><br/>La puerta abre hacia la<br/><b>${manoPuerta.value.toUpperCase()}</b><br/>mirando desde afuera.<br/>${observacionesPuerta.value}`

//Crea un boton para cerrar la vista del ticket y ocultar la opción imprimir
let cerrado = false;

closeButtonPuerta.onclick = function() {
    if (!cerrado) {
        resultadoPuertas.classList.remove("mostrar-resultadoPuertas");
        resultadoPuertas.classList.add("ocultar-resultadoPuertas");
        botonImprimirPuerta.classList.add("ocultar-botonImprimir")
        botonImprimirPuerta.classList.remove("mostrar-botonImprimir")
        cerrado = true;
    }
};

//Muestra los resultados
resultadoPuertas.classList.add("mostrar-resultadoPuertas");
resultadoPuertas.classList.remove("ocultar-resultadoPuertas");
botonImprimirPuerta.classList.remove("ocultar-botonImprimir")
botonImprimirPuerta.classList.add("mostrar-botonImprimir")  

resultadoPuertas.appendChild(ticketPuerta)
})
