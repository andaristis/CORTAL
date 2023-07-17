//Código para el calculo de cortes de Mamparas

//Validacion de los datos del formulario para Mamparas

function validarDatosMamparas(){
    if(medidaAltoMampara.value <= 150  || medidaAnchoMampara.value <= 100){
        alert("Ingrese medida correcta");
        return false;
    }else if (colorMampara.value === "seleccionador"){
        alert("Seleccione Color de Mampara");
        return false;
    }else if (nombreClienteMamp.value === ""){
        alert("Ingrese nombre de cliente");
        return false;
    }else if (cantidadMamp.value <=0){
        alert("Ingrese cantidad correcta");
        return false;
    }else if (acrilico.value <=0){
        alert("Ingrese descripción del acrílico");
        return false;
    }else {return true
    }}

function validarDatosMamparasDif(){
    if(medidaAltoMampara.value <= 150  || medidaAnchoMampara.value <= 100 || medidaAnchoInferiorMampara.value <= 100){
        alert("Ingrese medida correcta");
        return false;
    }else if (colorMampara.value === "seleccionador"){
        alert("Seleccione Color de Mampara");
        return false;
    }else if (nombreClienteMamp.value === ""){
        alert("Ingrese nombre de cliente");
        return false;
    }else if (cantidadMamp.value <=0){
        alert("Ingrese cantidad correcta");
        return false;
    }else if (acrilico.value <=0){
        alert("Ingrese descripción del acrílico");
        return false;
    }else {return true
    }}

//Creación de ticket para mostrar resultados e impresión
ticketMamp.classList.add("print-div");

const contenedorLogoMamp = document.createElement("div");
contenedorLogoMamp.classList.add("contenedor-logo-tk");

const logoTicketMamp = document.createElement("img");
logoTicketMamp.classList.add("logoTicketMamp");
logoTicketMamp.src = "img/logo_negro.svg";
logoTicketMamp.alt = "Logo ticket";

const fechaActualMamp = document.createElement("div");
const fechaMamp = document.createElement("div")
fechaMamp.classList.add("fecha")
fechaMamp.id = "fecha-actual"

const contenedorClienteMamp = document.createElement("div");
contenedorClienteMamp.classList.add("contenedor-cliente-tk");
const caracteristicasMamp = document.createElement("div");
caracteristicasMamp.classList.add("caracteristicas");
const medidaGeneralMamp = document.createElement("div")
medidaGeneralMamp.classList.add("medidaGeneral");
const contenedorSerieMamp = document.createElement("div")
contenedorSerieMamp.classList.add("detalles");
const tituloMampara = document.createElement("div")
tituloMampara.classList.add("titulo");
const cortesMampara = document.createElement("div")
const cortesAlturaHoja = document.createElement("div")
cortesAlturaHoja.classList.add("perfil-final")
const cortesTravesanoMamp = document.createElement("div")
cortesTravesanoMamp.classList.add("perfil-final")
const cortesMarcoLateralMamp = document.createElement("div")
cortesMarcoLateralMamp.classList.add("perfil-final")
const cortesMarcoSuperiorMamp = document.createElement("div")
cortesMarcoSuperiorMamp.classList.add("perfil-final")
const cortesMarcoInferiorMamp = document.createElement("div")
const mostrarObservacionesMamp = document.createElement("div")
mostrarObservacionesMamp.classList.add("mostrarObservaciones")
const closeButtonMamp = document.createElement('button');
closeButtonMamp.classList.add("cerrar")
closeButtonMamp.innerHTML = 'X';

contenedorLogoMamp.appendChild(logoTicketMamp);
cortesMampara.appendChild(cortesAlturaHoja);
cortesMampara.appendChild(cortesTravesanoMamp);
cortesMampara.appendChild(cortesMarcoLateralMamp);
cortesMampara.appendChild(cortesMarcoInferiorMamp);
cortesMampara.appendChild(cortesMarcoSuperiorMamp);
caracteristicasMamp.appendChild(medidaGeneralMamp);
caracteristicasMamp.appendChild(contenedorSerieMamp);
caracteristicasMamp.appendChild(tituloMampara);
caracteristicasMamp.appendChild(cortesMampara);
ticketMamp.appendChild(closeButtonMamp)
ticketMamp.appendChild(contenedorLogoMamp);
ticketMamp.appendChild(fechaMamp);
ticketMamp.appendChild(contenedorClienteMamp);
ticketMamp.appendChild(caracteristicasMamp);
ticketMamp.appendChild(mostrarObservacionesMamp);

//Check para habilitar opcion de calculo de mampara con diferencia en el ancho
diferenciaMamparaCheck.addEventListener('change', function() {
    anchoMamparaInfDiv.classList.toggle('ocultar-anchoinf');
    if(anchoMamparaInfDiv.classList.contains('ocultar-anchoinf')){
        labelAncho.innerHTML = "Ancho";
    }else{
        labelAncho.innerHTML = "Ancho Superior";
   }})

//Función para calcular mamparas
let alturaHoja
let travesano
let marcoLateral
let marcoSuperior
let marcoInferior
let mamparaACortar 

function calcularMampara(anchoSup, anchoInf, alto){
    console.log(anchoSup);
    console.log(anchoInf);
    if(anchoInf === 0){
        mamparaACortar = {
            alturaHoja : (alto - 7.2),
            travesano : (parseInt((anchoSup/2 - 4.5)* 10, 10) / 10),
            marcoLateral : alto - 3.2,
            marcoSuperior : anchoSup,
            marcoInferior : anchoSup - 7}   
    }else{
    mamparaACortar = {
        alturaHoja : (alto - 7.2),
        travesano : anchoSup < anchoInf ? (parseInt((anchoSup/2 - 4.5)* 10, 10) / 10) : (parseInt((anchoInf/2 - 4.5)* 10, 10) / 10),
        marcoLateral : alto - 3.2,
        marcoSuperior : anchoSup,
        marcoInferior : anchoInf - 7}}
        return mamparaACortar
}

formMamp.addEventListener("submit",(e)=>{
    if(!diferenciaMamparaCheck.checked){
        e.preventDefault();

//Calcular mampara sin diferencia
        if(!validarDatosMamparas()) {
        return; // Detiene la ejecución del código
        }
        calcularMampara(medidaAnchoMampara.value, 0, medidaAltoMampara.value)
    }else{
//Calcular mampara con diferencia de medidas
        e.preventDefault();
        if (!validarDatosMamparasDif()) {
        return; // Detiene la ejecución del código
        }
        calcularMampara(medidaAnchoMampara.value, medidaAnchoInferiorMampara.value, medidaAltoMampara.value)
        }
    
//Agrega la fecha al ticket
    fechaMamp.innerText = fechaTexto;

//Agrega el nombre del cliente al ticket
    contenedorClienteMamp.innerHTML = `<p><b>Cliente:</b> ${nombreClienteMamp.value}</p>`
    
//Funcion para generar el mensaje de medida general al ticket, dependiendo de que si la mampara tiene diferencia en sus anchos o no
function mensajeMedidaGeneralMampara(diferencia){
    if(!diferencia){
        mensajeMedidaGeneral = `<FONT SIZE=3>MAMPARA</FONT><FONT SIZE=2>Cantidad: ${cantidadMamp.value}</FONT> ${medidaAnchoMampara.value} X ${medidaAltoMampara.value}`
    }else{
        mensajeMedidaGeneral = `<FONT SIZE=3>MAMPARA</FONT><FONT SIZE=2>Cantidad: ${cantidadMamp.value}</FONT> ${medidaAnchoMampara.value}<FONT SIZE=1> ARRIBA</FONT> ${medidaAnchoInferiorMampara.value}<FONT SIZE=1> ABAJO</FONT> X ${medidaAltoMampara.value}<FONT SIZE=1> ALTO</FONT>`
        }return mensajeMedidaGeneral
    }
    let mensajeMedidaGeneralMamp = mensajeMedidaGeneralMampara(diferenciaMamparaCheck.checked)

//Agrega la medida de la ventana al ticket
medidaGeneralMamp.innerHTML = mensajeMedidaGeneralMamp

tituloMampara.innerHTML = `<b>CORTES PARA MAMPARA</b>`

//Agrega los detalles y carcaterísticas de la mampara al ticket
contenedorSerieMamp.innerHTML = `<b>Detalles Mampara</b><br>Color: ${colorMampara.value}<br>Acrílico: ${acrilico.value}`

//Agrega los cortes de cada perfil de la mampara al ticket, agrega plurales según corresponda
cortesAlturaHoja.innerHTML = `${Number(cantidadMamp.value)*4} LATERALES DE HOJA:<br/><FONT SIZE=6>${mamparaACortar.alturaHoja}</FONT> cms.`
cortesTravesanoMamp.innerHTML = `${Number(cantidadMamp.value)*4} PERFILES DE RUEDAS:<br/><FONT SIZE=6>${mamparaACortar.travesano}</FONT> cms.`

//Agrega los cortes de cada perfil de la ventana al ticket, agrega plurales según corresponda
cortesMarcoLateralMamp.innerHTML = `${Number(cantidadMamp.value)*2} LATERALES DE MARCO:<br/><FONT SIZE=6>${mamparaACortar.marcoLateral}</FONT> cms.`

//Agrega los cortes de cada perfil de la ventana al ticket, agrega plurales según corresponda
cortesMarcoInferiorMamp.innerHTML = `${Number(cantidadMamp.value)} MARCO INFERIOR:<br/><FONT SIZE=6>${mamparaACortar.marcoInferior}</FONT> cms.`
cortesMarcoSuperiorMamp.innerHTML = `${Number(cantidadMamp.value)} MARCO SUPERIOR:<br/><FONT SIZE=6>${mamparaACortar.marcoSuperior}</FONT> cms.`

//Agrega las observaciones al ticket
if(diferenciaMamparaCheck.checked){
    mostrarObservacionesMamp.innerHTML = `<b>Observaciones: </b><br/>Mampara con diferencia en los anchos.<br/>${observacionesMamp.value}`
}else if(!diferenciaMamparaCheck.checked){
    mostrarObservacionesMamp.innerHTML = `<b>Observaciones: </b><br/>${observacionesMamp.value}`
}else{
    mostrarObservacionesMamp.innerHTML = ""
}

//Crea un boton para cerrar la vista del ticket y ocultar la opción imprimir
let cerrado = false;

closeButtonMamp.onclick = function() {
    if (!cerrado) {
        resultadoMamparas.classList.remove("mostrar-resultadoMamparas");
        resultadoMamparas.classList.add("ocultar-resultadoMamparas");
        botonImprimirMamp.classList.add("ocultar-botonImprimir")
        botonImprimirMamp.classList.remove("mostrar-botonImprimir")
        cerrado = true;
    }
};

//Muestra los resultados
resultadoMamparas.classList.add("mostrar-resultadoMamparas");
resultadoMamparas.classList.remove("ocultar-resultadoMamparas");
botonImprimirMamp.classList.remove("ocultar-botonImprimir")
botonImprimirMamp.classList.add("mostrar-botonImprimir")  

resultadoMamparas.appendChild(ticketMamp)
})