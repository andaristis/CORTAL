//Código para el calculo de cortes de Monoblocks

//Validacion de los datos del formulario para Monoblocks

function validarDatosMB(){
    if (medidaAltoMB.value <= 30 || medidaAnchoMB.value <= 30) {
        alert("Ingrese medida correcta");
        return false;
      } else if (cajon.value === "seleccionador") {
        alert("Seleccione tipo de cajón");
        return false;
      } else if (anchoCajon.value === "seleccionador"){
        alert("Seleccione Ancho de cajón");
        return false;
      } else if (testeros.value === "seleccionador") {
        alert("Seleccione tipo de Testero");
        return false;
      }else if (colorCajon.value === "seleccionador"){
        alert("Seleccione Color de cajón");
        return false;
      } else if (colorLamas.value === "seleccionador") {
        alert("Seleccione Color de lamas");
        return false;
      } else if (serieMB.value === "seleccionador") {
        alert("Seleccione Serie de ventana");
        return false;
      }else if (colorVentana.value === "seleccionador"){
        alert("Seleccione Color de Ventana");
        return false;
      }else if (vidrioMB.value === "seleccionador"){
        alert("Seleccione Tipo de Vidrio");
        return false;
      }else if (nombreClienteMB.value === "")
      {alert("Ingrese nombre de cliente");
        return false;
      }else if (cantidadMB.value <=0 )
      {alert("Ingrese cantidad");
        return false;
      }else {
        return true;
      }
      }

//Creación de ticket para mostrar resultados e impresión

ticket.classList.add("print-div");

const contenedorLogo = document.createElement("div");
contenedorLogo.classList.add("contenedor-logo-tk");

const logoTicketMB = document.createElement("img");
logoTicketMB.classList.add("logoTicketMB");
logoTicketMB.src = "img/logo_negro.svg";
logoTicketMB.alt = "Logo ticket";


const fecha = document.createElement("div")
fecha.classList.add("fecha")
fecha.id = "fecha-actual"

const contenedorCliente = document.createElement("div");
contenedorCliente.classList.add("contenedor-cliente-tk");
const caracteristicas = document.createElement("div");
caracteristicas.classList.add("caracteristicas");
const medidaGeneral = document.createElement("div")
medidaGeneral.classList.add("medidaGeneral");
const contenedorSerie = document.createElement("div")
contenedorSerie.classList.add("detalles");
const contenedorMB = document.createElement("div")
contenedorMB.classList.add("detalles");
const contenedorDetallesMB = document.createElement("div")
contenedorDetallesMB.classList.add("contenedorDetallesMB");
const cortesVentanaMB = document.createElement("div")
const tituloVentana = document.createElement("div")
tituloVentana.classList.add("titulo");
const tituloCortina = document.createElement("div")
tituloCortina.classList.add("titulo");
const cortesRielesMB = document.createElement("div")
cortesRielesMB.classList.add("perfil-final")
const cortesLateralMarcoMB = document.createElement("div")
cortesLateralMarcoMB.classList.add("perfil-final")
const cortesEnganchesMB = document.createElement("div")
cortesEnganchesMB.classList.add("perfil-final")
const cortesLateralHojaMB = document.createElement("div")
cortesLateralHojaMB.classList.add("perfil-final")
const cortesRuedasMB = document.createElement("div")
cortesRuedasMB.classList.add("perfil-final")
const mosquiteroInfoMB = document.createElement("div")
mosquiteroInfoMB.classList.add("mosquiteroInfoMB")
const vidrioInfoMB = document.createElement("div")
vidrioInfoMB.classList.add("vidrioInfoMB")
const mostrarObservaciones = document.createElement("div")
mostrarObservaciones.classList.add("mostrarObservaciones")
const closeButton = document.createElement('button');
closeButton.classList.add("cerrar")
closeButton.innerHTML = 'X';

contenedorLogo.appendChild(logoTicketMB);
cortesVentanaMB.appendChild(cortesEnganchesMB);
cortesVentanaMB.appendChild(cortesLateralHojaMB);
cortesVentanaMB.appendChild(cortesRuedasMB);
cortesVentanaMB.appendChild(cortesLateralMarcoMB);
cortesVentanaMB.appendChild(cortesRielesMB);
caracteristicas.appendChild(medidaGeneral);
caracteristicas.appendChild(contenedorMB);
caracteristicas.appendChild(tituloCortina);
caracteristicas.appendChild(contenedorDetallesMB);
caracteristicas.appendChild(contenedorSerie);
caracteristicas.appendChild(tituloVentana);
caracteristicas.appendChild(cortesVentanaMB);
caracteristicas.appendChild(vidrioInfoMB);
caracteristicas.appendChild(mosquiteroInfoMB);
ticket.appendChild(closeButton)
ticket.appendChild(contenedorLogo);
ticket.appendChild(fecha);
ticket.appendChild(contenedorCliente);
ticket.appendChild(caracteristicas);
ticket.appendChild(mostrarObservaciones);



//Habilitar radios y checks según las características de la ventana a cortar
function habilitarRadios() {
  for (var i = 0; i < radios.length; i++) {
    radios[i].disabled = false;
  }
}

function deshabilitarRadios() {
  for (var i = 0; i < radios.length; i++) {
    radios[i].disabled = true;
  }
}

serieMB.addEventListener('change', function() {
  if (serieMB.value === 'Serie 25') {
    marcoCerradoMB.disabled = false;
    habilitarRadios();
    
  } else{
    marcoCerradoMB.disabled = true;
    marcoCerradoMB.checked = false;
    deshabilitarRadios();
  }
});

//Calculo de las medidas iniciales del monoblock
let monoblockACalcular;
let medidasACortar;
let ventanaACortarMB;
let ventanaACortarS20;
let ventanaACortarS25;

function calcularMonoblock(monoblock){
monoblock.medidaCajon = monoblockACalcular.testero.includes("PVC")? monoblockACalcular.ancho-2: monoblockACalcular.ancho-1;  
monoblock.medidaGuias = monoblockACalcular.anchoCajon ===  "185" ? monoblockACalcular.alto-18.5: monoblockACalcular.alto-15.5;
monoblock.anchoLamas = monoblockACalcular.ancho-7
monoblock.cantidadLamas = Math.ceil(monoblock.medidaGuias/100 * 22.54);
monoblock.altoVentana = monoblock.medidaGuias
monoblock.anchoVentana = monoblockACalcular.ancho - 8
}

//Función para calcular ventanas según su serie
let ventanaCortes

function calcularVentana(serie, anchoVentana, altoVentana){
  if(serie === "Serie 20")
ventanaCortes = {
  rieles : (parseInt((anchoVentana - 2.3) * 10, 10) / 10),
  lateralesMarco : (parseInt(altoVentana * 10, 10) / 10),
  ruedas : (parseInt(((anchoVentana/2)- 7.2)* 10, 10) / 10),
  enganches : (parseInt((altoVentana - 4.8)* 10, 10) / 10),
}
else if (serie === "Serie 25"){
ventanaCortes ={
  rieles : (parseInt((anchoVentana - 5.2) * 10, 10) / 10),
  lateralesMarco : (parseInt(altoVentana * 10, 10) / 10),
  ruedas : (parseInt(((anchoVentana/2)- 9.7)* 10, 10) / 10),
  enganches : (parseInt((altoVentana - 4.9)* 10, 10) / 10),
}
}return ventanaCortes;}


//Función para calcular medidas de mosquitero
let altoMosquitero;
let anchoMosquitero;

function calcularMedidasMosquitero(marcoCerrado, serie, altoVentana) {
  if (marcoCerrado === true && serie === "Serie 25") {
    altoMosquitero = Number(altoVentana - 2);
    anchoMosquitero = parseInt((Number(ventanaCortes.ruedas) + 11.2) * 10, 10) / 10;
  }else if (marcoCerrado === false && serie === "Serie 25") {
    altoMosquitero = Number(altoVentana - 4);
    anchoMosquitero = parseInt((Number(ventanaCortes.ruedas) + 11.2) * 10, 10) / 10;
  }else if (marcoCerrado === false && serie === "Serie 20") {
    altoMosquitero = Number(altoVentana - 3.1);
    anchoMosquitero = parseInt((Number(ventanaCortes.ruedas) + 8.2) * 10, 10) / 10;
  }return{
  altoMosquitero: altoMosquitero,
  anchoMosquitero: anchoMosquitero}
}
console.log(ventanaCortes);

let anchoVidrio
let altoVidrio

function calcularVidrios(serie){
if(serie === "Serie 20"){
  anchoVidrio = (parseInt((Number(ventanaCortes.ruedas) + 1.5)*10, 10)/10)
  altoVidrio = (parseInt((Number(ventanaCortes.enganches) -6.2)*10, 10)/10)
}else if(serie === "Serie 25"){
  anchoVidrio = (parseInt((Number(ventanaCortes.ruedas) + 1.7)*10, 10)/10);
  altoVidrio = (parseInt((Number(ventanaCortes.enganches) -7.3)*10, 10)/10)}
  return{
    anchoVidrio: anchoVidrio,
    altoVidrio: altoVidrio
  }
}
//Datos para la fecha del ticket  
const fechaActual = new Date();
const dia = fechaActual.getDate();
const mes = fechaActual.getMonth() + 1;
const anio = fechaActual.getFullYear();
const hora = fechaActual.getHours();
const minutos = fechaActual.getMinutes()<10?"0"+fechaActual.getMinutes():fechaActual.getMinutes();
const fechaTexto = `${dia}/${mes}/${anio} ${hora}:${minutos}`;

//submit del form de Monoblocks
form.addEventListener("submit",(e)=>{
  e.preventDefault()

//Validación de datos
  if (!validarDatosMB()) {
    return; // Detiene la ejecución del código
  }

//Información del Monoblock traida desde el form hacia un objeto
monoblockACalcular = {
  alto: Number(medidaAltoMB.value),
  ancho: Number(medidaAnchoMB.value),
  serieVentanaMB: serieMB.value,
  anchoCajon: anchoCajon.value,
  cajon: cajon.value,
  testero: testeros.value,
}
//Objeto generado para cada corte o conjunto de cortes
medidasACortar = {
  medidaCajon:0,
  medidaGuias:0,
  anchoLamas:0,
  cantidadLamas:0,
  altoVentana:0,
  anchoVentana:0,
}

//calcular cortes para monoblock y ventana
calcularMonoblock(medidasACortar)
ventanaACortarMB = calcularVentana(serieMB.value, medidasACortar.anchoVentana, medidasACortar.altoVentana)
  
let cantidadEnganches;
let cantidadLateralHoja;
let cantidadRuedas;
let cantidadLateralMarco;
let cantidadRieles;
let cantidadRielesCerrados;
let mensajeTravesano;
let mensajeMarcoCerrado;
let mensajeVidrio;
let guiaMosquitero = medidasACortar.anchoVentana
 

//Calcula las cantidades de cada perfil según la cantidad de ventanas a cortar   
cantidadEnganches = 2 * cantidadMB.value;
cantidadLateralHoja = 2 * cantidadMB.value;
if(travesanoMB.checked === true){
  cantidadRuedas = 6 * cantidadMB.value;
  mensajeTravesano = "Travesaño fino"
}else{
  cantidadRuedas = 4 * cantidadMB.value
}
cantidadLateralMarco = 2 * cantidadMB.value;
cantidadRieles = 2 * cantidadMB.value;
if(marcoCerradoMB.checked === true){
  cantidadRieles = cantidadMB.value;
  cantidadRielesCerrados = cantidadMB.value;
  mensajeMarcoCerrado = "Marco superior cerrado";
}else{
  cantidadRielesCerrados = 0}

//Calcular medidas de Mosquitero    
  calcularMedidasMosquitero(marcoCerradoMB.checked, serieMB.value, medidasACortar.altoVentana)

//Calcular medidas de vidrios
  calcularVidrios(serieMB.value)

//Switch para buscar el tipo de vidrio y poner el mensaje en el ticket
switch(vidrioMB.value){
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

//Habilita los checks correspondientes a la serie seleccionada
for (var i = 0; i < radios.length; i++) {
  if (radios[i].checked) {
    // Accede al valor del radio button seleccionado
    var ruedasFinoAncho = radios[i].value;
    break; // Rompe el bucle una vez que se encuentra el radio button seleccionado
  }
}

//Agrega la fecha al ticket
fecha.innerText = fechaTexto;

//Agrega el nombre del cliente al ticket
contenedorCliente.innerHTML = `<p><b>Cliente:</b> ${nombreClienteMB.value}</p>`

//Agrega la medida del Monoblock al ticket
medidaGeneral.innerHTML = `<FONT SIZE=3>MONOBLOCK</FONT><FONT SIZE=2>Cantidad: ${cantidadMB.value}</FONT> ${anchoMB.value} X ${altoMB.value}`

//Agrega los detalles y carcaterísticas del Monoblock al ticket
contenedorMB.innerHTML = `<b>Detalles Cortina</b><br>Testero: ${testero.value}<br>Tipo de cajón: ${cajon.value}<br>Ancho de cajón: ${anchoCajon.value}<br>Color de cajón: ${colorCajon.value}<br>Color de lamas: ${colorLamas.value}`
tituloCortina.innerHTML = `<b>CORTES PARA CORTINA</b>`

//Agrega los cortes del Monoblock al ticket, agrega plurales según corresponda
cantidadMB.value === "1"?
contenedorDetallesMB.innerHTML = `${cantidadMB.value} - CAJÓN:<br><FONT SIZE=6>${medidasACortar.medidaCajon}</FONT> cms.<br>${cantidadMB.value*2} - GUÍAS:<br><FONT SIZE=6>${medidasACortar.medidaGuias}</FONT> cms.<br>${medidasACortar.cantidadLamas} LAMAS ${colorLamas.value.toUpperCase()}:
<br><FONT SIZE=6>${medidasACortar.anchoLamas}</FONT> cms.`:
contenedorDetallesMB.innerHTML = `${cantidadMB.value} - CAJONES:<br><FONT SIZE=6>${medidasACortar.medidaCajon}</FONT> cms.<br>${cantidadMB.value*2} - GUÍAS:<br><FONT SIZE=6>${medidasACortar.medidaGuias}</FONT> cms.<br>${medidasACortar.cantidadLamas*cantidadMB.value} LAMAS ${colorLamas.value.toUpperCase()}:
<br><FONT SIZE=6>${medidasACortar.anchoLamas}</FONT> cms.`

tituloVentana.innerHTML = `<b>CORTES PARA VENTANA</b>`

//Agrega los detalles y carcaterísticas de la ventana al ticket
contenedorSerie.innerHTML = `<b>Detalles Ventana</b><br>${medidasACortar.altoVentana} x ${medidasACortar.anchoVentana}<br>${serieMB.value}<br>Color: ${colorVentana.value}<br>Vidrios: ${mensajeVidrio}`

//Agrega los cortes de cada perfil de la ventana al ticket, agrega plurales según corresponda
cortesEnganchesMB.innerHTML = `${cantidadEnganches} ENGANCHES:<br/><FONT SIZE=6>${ventanaACortarMB.enganches}</FONT> cms.`
cortesLateralHojaMB.innerHTML = `${cantidadLateralHoja} LATERALES HOJA:<br/><FONT SIZE=6>${ventanaACortarMB.enganches}</FONT> cms.`

//Agrega el tipo de pefil si se selecciona travesaño o no y dependiendo de la serie
if(travesanoMB.checked === true && serieMB.value === "Serie 25"){
  switch(ruedasFinoAncho){
    case "ruedasFinoAncho": 
      cortesRuedasMB.innerHTML = `${cantidadRuedas/3} - PERFILES RUEDAS ANCHO:<br/>${(cantidadRuedas/3)*2} - PERFIL RUEDAS FINO:<br/><FONT SIZE=6>${ventanaACortarMB.ruedas}</FONT> cms.`;
    break;
    case "ruedasFinos": 
      cortesRuedasMB.innerHTML = `${cantidadRuedas} - PERFILES RUEDAS FINO:<br/><FONT SIZE=6>${ventanaACortarMB.ruedas}</FONT> cms.<br/>`;
    break;
    case "ruedasAnchos": 
      cortesRuedasMB.innerHTML = `${cantidadRuedas} - PERFILES RUEDAS ANCHO:<br/><FONT SIZE=6>${ventanaACortarMB.ruedas}</FONT> cms.<br/>`;
    break;
}}else if(travesanoMB.checked === false && serieMB.value === "Serie 25"){
  switch(ruedasFinoAncho){
    case "ruedasFinoAncho": 
      cortesRuedasMB.innerHTML = `${cantidadRuedas/2} - PERFILES RUEDAS ANCHO:<br/>${cantidadRuedas/2} - PERFILES RUEDAS FINO:<br/><FONT SIZE=6>${ventanaACortarMB.ruedas}</FONT> cms.`;test ="Serie 25 sin trav"
      break;
    case "ruedasFinos": 
      cortesRuedasMB.innerHTML = `${cantidadRuedas} - PERFILES RUEDAS FINO:<br/><FONT SIZE=6>${ventanaACortarMB.ruedas}</FONT> cms.<br/>`;
      break;
    case "ruedasAnchos": 
      cortesRuedasMB.innerHTML = `${cantidadRuedas} - PERFILES RUEDAS ANCHO:<br/><FONT SIZE=6>${ventanaACortarMB.ruedas}</FONT> cms.<br/>`;
      break;}
}else if(serieMB.value === "Serie 20"){
  cortesRuedasMB.innerHTML = `${cantidadRuedas} - PERFILES RUEDAS:<br/><FONT SIZE=6>${ventanaACortarMB.ruedas}</FONT> cms.<br/>`;
}

//Agrega los cortes del lateral del marco de la ventana
cortesLateralMarcoMB.innerHTML = `${cantidadLateralMarco} LATERALES MARCO:<br/><FONT SIZE=6>${ventanaACortarMB.lateralesMarco}</FONT> cms.`

//Cambia las palabras a plural si la cantidad de rieles es diferente a 1
if(marcoCerrado.checked === true){
  cantidadRieles ==="1" ? cortesRielesMB.innerHTML =`${cantidadRieles} - RIEL ABIERTO:<br/>${cantidadRielesCerrados} - RIEL CERRADO:<br/><FONT SIZE=6>${ventanaACortarMB.rieles}</FONT> cms.`: cortesRielesMB.innerHTML =`${cantidadRieles} - RIELES ABIERTOS:<br/>${cantidadRielesCerrados} - RIELES CERRADOS:<br/><FONT SIZE=6>${ventanaACortarMB.rieles}</FONT> cms.`
}else{
  cortesRielesMB.innerHTML =`${cantidadRieles} - RIELES:<br/><FONT SIZE=6>${ventanaACortarMB.rieles}</FONT> cms.`
}

//Mostrar u ocultar el div de mosquitero en el ticket
if(!mosquiteroMB.checked){
  mosquiteroInfoMB.classList.add("ocultar-mosquitero")
}else{mosquiteroInfoMB.classList.remove("ocultar-mosquitero")}

//Agrega la medida del mosquitero, si corresponde, al ticket
if(mosquiteroMB.checked === true && serieMB.value === "Serie 20"){
  mosquiteroInfoMB.innerHTML = `Mosquitero<br/>Guía ⌊ de: ${guiaMosquitero} cms. <br/><FONT SIZE=5>${anchoMosquitero} X ${altoMosquitero}</FONT>`
}else if(mosquiteroMB.checked === true && marcoCerradoMB.checked === true && serieMB.value === "Serie 25"){
  mosquiteroInfoMB.innerHTML = `Mosquitero<br/>Guía H de: ${guiaMosquitero} cms.<br/><FONT SIZE=5>${anchoMosquitero} X ${altoMosquitero}</FONT>`
}else if(mosquiteroMB.checked === true && marcoCerradoMB.checked === false && serieMB.value === "Serie 25"){
  mosquiteroInfoMB.innerHTML = `Mosquitero<br/>Guia ⌊ de: ${guiaMosquitero} cms.<br/><FONT SIZE=5>${anchoMosquitero} X ${altoMosquitero}</FONT>`
}else{
    mosquiteroInfoMB.innerHTML = "";
  }

//Agrega la medida del vidrio al ticket
if (serieMB.value === "Serie 20"){
  vidrioInfoMB.innerHTML =`Vidrio: ${mensajeVidrio} <br/><FONT SIZE=5>${anchoVidrio} X ${altoVidrio}</FONT>`
}else if(travesanoMB.checked === false && ruedasFinoAncho === "ruedasFinos"){
  vidrioInfoMB.innerHTML =`Vidrio: ${mensajeVidrio} <br/><FONT SIZE=5>${anchoVidrio} X ${altoVidrio}</FONT>`
}else if(travesanoMB.checked === false && ruedasFinoAncho === "ruedasFinoAncho"){
  vidrioInfoMB.innerHTML =`Vidrio: ${mensajeVidrio} <br/><FONT SIZE=5>${anchoVidrio} X ${altoVidrio-1.5}</FONT>`
}else if(travesanoMB.checked === false && ruedasFinoAncho === "ruedasAnchos"){
  vidrioInfoMB.innerHTML =`Vidrio: ${mensajeVidrio} <br/><FONT SIZE=5>${anchoVidrio} X ${altoVidrio-3}</FONT>`
}else if(travesanoMB.checked === true){
  vidrioInfoMB.innerHTML =`Tomar medidas de <br/>vidrios con travesaños`}

//Agrega las observaciones seleciionadas en el form mas las adicionales que agregue el usuario
if(marcoCerradoMB.checked === true && travesanoMB.checked === true){
  mostrarObservaciones.innerHTML = `<b>Observaciones: </b> <br/>${mensajeMarcoCerrado}<br/>${mensajeTravesano}<br/>${observaciones.value}`
}else if(travesanoMB.checked === true){
  mostrarObservaciones.innerHTML = `<b>Observaciones: </b> <br/>${mensajeTravesano}<br/>${observaciones.value}`
}else if(marcoCerradoMB.checked === true){
  mostrarObservaciones.innerHTML = `<b>Observaciones: </b> <br/>${mensajeMarcoCerrado}<br/>${observaciones.value}`
}else{
  mostrarObservaciones.innerHTML = `<b>Observaciones: </b> <br/>${observaciones.value}`
}

//Crea un boton para cerrar la vista del ticket y ocultar la opción imprimir
let cerrado = false;

closeButton.onclick = function() {
if (!cerrado) {
  resultadoMonoblock.classList.remove("mostrar-resultadoMonoblock");
  resultadoMonoblock.classList.add("ocultar-resultadoMonoblock");
  botonImprimir.classList.add("ocultar-botonImprimir")
  botonImprimir.classList.remove("mostrar-botonImprimir")
  cerrado = true;
}};

//Mostrar los resultados
resultadoMonoblock.classList.add("mostrar-resultadoMonoblock");
resultadoMonoblock.classList.remove("ocultar-resultadoMonoblock");
botonImprimir.classList.remove("ocultar-botonImprimir")
botonImprimir.classList.add("mostrar-botonImprimir")    
resultadoMonoblock.appendChild(ticket)
})


