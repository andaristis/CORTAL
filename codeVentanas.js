//Código para el calculo de cortes de Ventanas

//Validacion de los datos del formulario para Ventanas

function validarDatos(){
  if(medidaAltoVent.value <= 30 || medidaAnchoVent.value <= 30){
    alert("Ingrese medida correcta");
    return false;
  }else if(serieVent.value === "seleccionador"){
    alert("Ingrese Serie")}
  else if (colorVent.value === "seleccionador"){
    alert("Seleccione Color de Ventana");
    return false;
  }else if (vidrioVent.value === "seleccionador"){
    alert("Seleccione Tipo de Vidrio");
    return false;
  }else if (nombreClienteVent.value === "")
  {alert("Ingrese nombre de cliente");
    return false;
  }else if (cantidadVent.value <=0 )
  {alert("Ingrese cantidad");
    return false;
  }else {
    return true;
    }}

//Creación de ticket para mostrar resultados e impresión
ticketVent.classList.add("print-div");

const contenedorLogoVent = document.createElement("div");
contenedorLogoVent.classList.add("contenedor-logo-tk");

const logoTicketVent = document.createElement("img");
logoTicketVent.classList.add("logoTicketMB");
logoTicketVent.src = "img/logo_negro.svg";
logoTicketVent.alt = "Logo ticket";

const fechaActualVent = document.createElement("div");
const fechaVent = document.createElement("div")
fechaVent.classList.add("fecha")
fechaVent.id = "fecha-actual"

const contenedorClienteVent = document.createElement("div");
contenedorClienteVent.classList.add("contenedor-cliente-tk");
const caracteristicasVent = document.createElement("div");
caracteristicasVent.classList.add("caracteristicas");
const medidaGeneralVent = document.createElement("div")
medidaGeneralVent.classList.add("medidaGeneral");
const contenedorSerieVent = document.createElement("div")
contenedorSerieVent.classList.add("detalles");
const tituloVentanaVent = document.createElement("div")
tituloVentanaVent.classList.add("titulo");
const cortesVentanaVent = document.createElement("div")
const cortesRielesVent = document.createElement("div")
cortesRielesVent.classList.add("perfil-final")
const cortesLateralMarcoVent = document.createElement("div")
cortesLateralMarcoVent.classList.add("perfil-final")
const cortesEnganchesVent = document.createElement("div")
cortesEnganchesVent.classList.add("perfil-final")
const cortesLateralHojaVent = document.createElement("div")
cortesLateralHojaVent.classList.add("perfil-final")
const cortesRuedasVent = document.createElement("div")
cortesRuedasVent.classList.add("perfil-final")
const mosquiteroInfoVent = document.createElement("div")
mosquiteroInfoVent.classList.add("mosquiteroInfoMB")
const vidrioInfoVent = document.createElement("div")
vidrioInfoVent.classList.add("vidrioInfoMB")
const mostrarObservacionesVent = document.createElement("div")
mostrarObservacionesVent.classList.add("mostrarObservaciones")
const closeButtonVent = document.createElement('button');
closeButtonVent.classList.add("cerrar")
closeButtonVent.innerHTML = 'X';

contenedorLogoVent.appendChild(logoTicketVent);
cortesVentanaVent.appendChild(cortesEnganchesVent);
cortesVentanaVent.appendChild(cortesLateralHojaVent);
cortesVentanaVent.appendChild(cortesRuedasVent);
cortesVentanaVent.appendChild(cortesLateralMarcoVent);
cortesVentanaVent.appendChild(cortesRielesVent);
caracteristicasVent.appendChild(medidaGeneralVent);
caracteristicasVent.appendChild(contenedorSerieVent);
caracteristicasVent.appendChild(tituloVentanaVent);
caracteristicasVent.appendChild(cortesVentanaVent);
caracteristicasVent.appendChild(vidrioInfoVent);
caracteristicasVent.appendChild(mosquiteroInfoVent);
ticketVent.appendChild(closeButtonVent)
ticketVent.appendChild(contenedorLogoVent);
ticketVent.appendChild(fechaVent);
ticketVent.appendChild(contenedorClienteVent);
ticketVent.appendChild(caracteristicasVent);
ticketVent.appendChild(mostrarObservacionesVent);


//Habilitar radios y checks según las características de la ventana a cortar
function habilitarRadiosVent() {
  for (var i = 0; i < radiosVent.length; i++) {
    radiosVent[i].disabled = false;
  }
}

function deshabilitarRadiosVent() {
  for (var i = 0; i < radiosVent.length; i++) {
    radiosVent[i].disabled = true;
  }
}

serieVent.addEventListener('change', function() {
  if (serieVent.value === 'Serie 25') {
    marcoCerradoVent.disabled = false;
    habilitarRadiosVent();
    
  } else{
    marcoCerradoVent.disabled = true;
    marcoCerradoVent.checked = false;
    deshabilitarRadiosVent();
  }
});

//Enviar datos al ticket
formVent.addEventListener("submit",(e)=>{
e.preventDefault();
if (!validarDatos()) {
  return; // Detiene la ejecución del código
}

let ventanaACortar = calcularVentana(serieVent.value, medidaAnchoVent.value, medidaAltoVent.value)

calcularMedidasMosquitero(marcoCerradoVent.checked, serieVent.value,medidaAltoVent.value)

calcularVidrios(serieVent.value)

let cantidadEnganches;
let cantidadLateralHoja;
let cantidadRuedas;
let cantidadLateralMarco;
let cantidadRieles;
let cantidadRielesCerrados;
let mensajeTravesano;
let mensajeMarcoCerrado;
let mensajeVidrio;
let guiaMosquitero = medidaAnchoVent.value

switch(vidrioVent.value){
  case "4mm":
      mensajeVidrio = "4mm";
  break;
  case "3mm":
      mensajeVidrio = "3mm";
  break;
  case "Fantasia":
      mensajeVidrio = "Fantasía";
  break;
  case "Opacid":
      mensajeVidrio = "Opacid/Blanco";
  break;
      case "Espejado":
      mensajeVidrio = "Espejado";
  break;
      case "MarronVidrio":
      mensajeVidrio = "Marrón";
  break;
      case "NegroVidrio":
      mensajeVidrio = "Negro";
  break;
}

for (var i = 0; i < radiosVent.length; i++) {
  if (radiosVent[i].checked) {
    // Accede al valor del radio button seleccionado
    var ruedasFinoAnchoVent = radiosVent[i].value;
    break; // Rompe el bucle una vez que se encuentra el radio button seleccionado
  }
}

//Calcula las cantidades de cada perfil según la cantidad de ventanas a cortar   
cantidadEnganches = 2 * cantidadVent.value;
cantidadLateralHoja = 2 * cantidadVent.value;
if(travesanoVent.checked === true){
    cantidadRuedas = 6 * cantidadVent.value;
    mensajeTravesano = "Travesaño fino"
}else{
    cantidadRuedas = 4 * cantidadVent.value
}
cantidadLateralMarco = 2 * cantidadVent.value;
cantidadRieles = 2 * cantidadVent.value;
if(marcoCerradoVent.checked === true){
  cantidadRieles = cantidadVent.value;
  cantidadRielesCerrados = cantidadVent.value;
  mensajeMarcoCerrado = "Marco superior cerrado";}
  else{cantidadRielesCerrados = 0}

//Agrega la fecha al ticket
fechaVent.innerText = fechaTexto;

//Agrega el nombre del cliente al ticket
contenedorClienteVent.innerHTML = `<p><b>Cliente:</b> ${nombreClienteVent.value}</p>`

//Agrega la medida de la ventana al ticket
medidaGeneralVent.innerHTML = `<FONT SIZE=3>VENTANA</FONT><FONT SIZE=2>Cantidad: ${cantidadVent.value}</FONT> ${medidaAnchoVent.value} X ${medidaAltoVent.value}`

tituloVentanaVent.innerHTML = `<b>CORTES PARA VENTANA</b>`

//Agrega los detalles y carcaterísticas de la ventana al ticket
contenedorSerieVent.innerHTML = `<b>Detalles Ventana</b><br>${serieVent.value}<br>Color: ${colorVent.value}<br>Vidrios: ${mensajeVidrio}`

//Agrega los cortes de cada perfil de la ventana al ticket, agrega plurales según corresponda
cortesEnganchesVent.innerHTML = `${cantidadEnganches} ENGANCHES:<br/><FONT SIZE=6>${ventanaACortar.enganches}</FONT> cms.`
cortesLateralHojaVent.innerHTML = `${cantidadLateralHoja} LATERALES HOJA:<br/><FONT SIZE=6>${ventanaACortar.enganches}</FONT> cms.`

//Agrega el tipo de pefil si se selecciona travesaño o no y dependiendo de la serie
if(travesanoVent.checked === true && serieVent.value === "Serie 25"){
  switch(ruedasFinoAnchoVent){
    case "ruedasFinoAnchoVent": 
    cortesRuedasVent.innerHTML = `${cantidadRuedas/3} - PERFILES RUEDAS ANCHO:<br/>${(cantidadRuedas/3)*2} - PERFIL RUEDAS FINO:<br/><FONT SIZE=6>${ventanaACortar.ruedas}</FONT> cms.`;
    break;
    case "ruedasFinosVent": 
    cortesRuedasVent.innerHTML = `${cantidadRuedas} - PERFILES RUEDAS FINO:<br/><FONT SIZE=6>${ventanaACortar.ruedas}</FONT> cms.<br/>`;
    break;
    case "ruedasAnchosVent": 
    cortesRuedasVent.innerHTML = `${cantidadRuedas} - PERFILES RUEDAS ANCHO:<br/><FONT SIZE=6>${ventanaACortar.ruedas}</FONT> cms.<br/>`;
    break;
  }
}else if (travesanoVent.checked === false && serieVent.value === "Serie 25"){
  switch(ruedasFinoAnchoVent){
    case "ruedasFinoAnchoVent": 
    cortesRuedasVent.innerHTML = `${cantidadRuedas/2} - PERFILES RUEDAS ANCHO:<br/>${cantidadRuedas/2} - PERFILES RUEDAS FINO:<br/><FONT SIZE=6>${ventanaACortar.ruedas}</FONT> cms.`;test ="Serie 25 sin trav"
    break;
    case "ruedasFinosVent": 
    cortesRuedasVent.innerHTML = `${cantidadRuedas} - PERFILES RUEDAS FINO:<br/><FONT SIZE=6>${ventanaACortar.ruedas}</FONT> cms.<br/>`;
    break;
    case "ruedasAnchosVent": 
    cortesRuedasVent.innerHTML = `${cantidadRuedas} - PERFILES RUEDAS ANCHO:<br/><FONT SIZE=6>${ventanaACortar.ruedas}</FONT> cms.<br/>`;
    break;}
    }
  else if(serieVent.value === "Serie 20"){
    cortesRuedasVent.innerHTML = `${cantidadRuedas} - PERFILES RUEDAS:<br/><FONT SIZE=6>${ventanaACortar.ruedas}</FONT> cms.<br/>`;
}

cortesLateralMarcoVent.innerHTML = `${cantidadLateralMarco} LATERALES MARCO:<br/><FONT SIZE=6>${ventanaACortar.lateralesMarco}</FONT> cms.`

//Cambia las palabras a plural si la cantidad de rieles es diferente a 1
if(marcoCerradoVent.checked === true){
  cantidadRieles ==="1" ? cortesRielesVent.innerHTML =`${cantidadRieles} - RIEL ABIERTO:<br/>${cantidadRielesCerrados} - RIEL CERRADO:<br/><FONT SIZE=6>${ventanaACortar.rieles}</FONT> cms.`: cortesRielesVent.innerHTML =`${cantidadRieles} - RIELES ABIERTOS:<br/>${cantidadRielesCerrados} - RIELES CERRADOS:<br/><FONT SIZE=6>${ventanaACortar.rieles}</FONT> cms.`
  }else{
  cortesRielesVent.innerHTML =`${cantidadRieles} - RIELES:<br/><FONT SIZE=6>${ventanaACortar.rieles}</FONT> cms.`
}

//Mostrar u ocultar el div de mosquitero en el ticket
if(!mosquiteroVent.checked){
  mosquiteroInfoVent.classList.add("ocultar-mosquitero")
  }else{mosquiteroInfoVent.classList.remove("ocultar-mosquitero")}

//Agrega la medida del mosquitero, si corresponde, al ticket
if(mosquiteroVent.checked === true && serieVent.value === "Serie 20"){
  mosquiteroInfoVent.innerHTML = `Mosquitero<br/>Guía ⌊ de: ${guiaMosquitero} cms. <br/><FONT SIZE=5>${anchoMosquitero} X ${altoMosquitero}</FONT>`
  }else if(mosquiteroVent.checked === true && marcoCerradoVent.checked === true && serieVent.value === "Serie 25"){
  mosquiteroInfoVent.innerHTML = `Mosquitero<br/>Guía H de: ${guiaMosquitero} cms.<br/><FONT SIZE=5>${anchoMosquitero} X ${altoMosquitero}</FONT>`
  }else if(mosquiteroVent.checked === true && marcoCerradoVent.checked === false && serieVent.value === "Serie 25"){
  mosquiteroInfoVent.innerHTML = `Mosquitero<br/>Guia ⌊ de: ${guiaMosquitero} cms.<br/><FONT SIZE=5>${anchoMosquitero} X ${altoMosquitero}</FONT>`}
  else {
    mosquiteroInfoVent.innerHTML = "";
  }

  //Agrega la medida del vidrio al ticket
if (serieVent.value === "Serie 20"){
  vidrioInfoVent.innerHTML =`Vidrio: ${mensajeVidrio} <br/><FONT SIZE=5>${anchoVidrio} X ${altoVidrio}</FONT>`
}else if(travesanoVent.checked === false && ruedasFinoAnchoVent === "ruedasFinos"){
  vidrioInfoVent.innerHTML =`Vidrio: ${mensajeVidrio} <br/><FONT SIZE=5>${anchoVidrio} X ${altoVidrio}</FONT>`
}else if(travesanoVent.checked === false && ruedasFinoAnchoVent === "ruedasFinoAncho"){
  vidrioInfoVent.innerHTML =`Vidrio: ${mensajeVidrio} <br/><FONT SIZE=5>${anchoVidrio} X ${altoVidrio-1.5}</FONT>`
}else if(travesanoVent.checked === false && ruedasFinoAnchoVent === "ruedasAnchos"){
  vidrioInfoVent.innerHTML =`Vidrio: ${mensajeVidrio} <br/><FONT SIZE=5>${anchoVidrio} X ${altoVidrio-3}</FONT>`
}else if(travesanoVent.checked === true){
  vidrioInfoVent.innerHTML =`Tomar medidas de <br/>vidrios con travesaños`}

//Agrega las observaciones seleciionadas en el form mas las adicionales que agregue el usuario
if(marcoCerradoVent.checked === true && travesanoVent.checked === true){
  mostrarObservacionesVent.innerHTML = `<b>Observaciones: </b> <br/>${mensajeMarcoCerrado}<br/>${mensajeTravesano}<br/>${observaciones.value}`
}else if(travesanoVent.checked === true){
  mostrarObservacionesVent.innerHTML = `<b>Observaciones: </b> <br/>${mensajeTravesano}<br/>${observacionesVent.value}`
}else if(marcoCerradoVent.checked === true){
  mostrarObservacionesVent.innerHTML = `<b>Observaciones: </b> <br/>${mensajeMarcoCerrado}<br/>${observacionesVent.value}`
}else{
  mostrarObservacionesVent.innerHTML = `<b>Observaciones: </b> <br/>${observacionesVent.value}`}

//Crea un boton para cerrar la vista del ticket y ocultar la opción imprimir

let cerrado = false;

closeButtonVent.onclick = function() {
  if (!cerrado) {
    resultadoVentanas.classList.remove("mostrar-resultadoVentanas");
    resultadoVentanas.classList.add("ocultar-resultadoVentanas");
    botonImprimirVent.classList.add("ocultar-botonImprimir")
    botonImprimirVent.classList.remove("mostrar-botonImprimir")
    cerrado = true;
  }
};

//Mostrar los resultados
resultadoVentanas.classList.add("mostrar-resultadoVentanas");
resultadoVentanas.classList.remove("ocultar-resultadoVentanas");
botonImprimirVent.classList.remove("ocultar-botonImprimir")
botonImprimirVent.classList.add("mostrar-botonImprimir") 
     
resultadoVentanas.appendChild(ticketVent)
})