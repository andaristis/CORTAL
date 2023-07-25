const medidaAnchoMB = document.querySelector("#anchoMB");
const medidaAltoMB = document.querySelector("#altoMB");
const serieMB = document.querySelector('#serieMB');
const testeros = document.querySelector('#testero');
const cajon = document.querySelector('#cajon');
const anchoCajon = document.querySelector('#ancho_cajon');
const colorCajon =  document.querySelector('#colorCajon');
const colorLamas =  document.querySelector('#colorLamas');
const colorVentana =  document.querySelector('#colorVentana');
const colorMampara =  document.querySelector('#colorMampara');
const colorPuerta =  document.querySelector('#colorPuerta');
const acrilico =  document.querySelector('#acrilico');
const vidrioMB =  document.querySelector('#vidrioMB');
const vidrioPuerta =  document.querySelector('#vidrioPuerta');
const travesanoPuerta =  document.querySelector('#travesanoPuerta');
const mosquiteroMB =  document.querySelector('#mosquiteroMB');
const travesanoMB =  document.querySelector('#travesanoMB');
const marcoCerradoMB =  document.querySelector('#marcoCerrado');
const nombreClienteMB =  document.querySelector('#nombreClienteMB');
const nombreClienteMamp =  document.querySelector('#nombreClienteMamp');
const cantidadMB =  document.querySelector('#cantidadMB');
const nombreClientePuerta =  document.querySelector('#nombreClientePuerta');
const cantidadPuerta =  document.querySelector('#cantidadPuerta');
const cantidadMamp =  document.querySelector('#cantidadMamp');
const observaciones =  document.querySelector('#observaciones');
const ticket = document.createElement("div");
const resultadoMonoblock = document.querySelector(".resultadoMonoblock");
const resultadoPuertas = document.querySelector(".resultadoPuertas");
const form = document.querySelector(".ingreso-datos");
const formPuertas = document.querySelector(".ingreso-datos-puerta");
const formVent = document.querySelector(".ingreso-datos-vent");
const btnmonoblock = document.querySelector("#btn-monoblock");
const btnventana = document.querySelector("#btn-ventanas");
const btnmampara = document.querySelector("#btn-mamparas");
const btnpuerta = document.querySelector("#btn-puertas");
const btnmonoblockIni = document.querySelector("#btn-monoblock-inicio");
const btnventanaIni = document.querySelector("#btn-ventanas-inicio");
const btnmamparaIni = document.querySelector("#btn-mamparas-inicio");
const btnpuertaIni = document.querySelector("#btn-puertas-inicio");
const logo = document.querySelector(".logo")
const radios = document.getElementsByName('ruedas')
const botonImprimir = document.querySelector('#botonImprimir');
const botonImprimirVent = document.querySelector('#botonImprimirVent');
const botonImprimirMamp = document.querySelector('#botonImprimirMamp');
const barraLateral = document.querySelector('.barra-lateral')
const radiosVent = document.getElementsByName('ruedasVent')
const medidaAnchoVent = document.querySelector("#anchoVent");
const medidaAltoVent = document.querySelector("#altoVent");
const serieVent = document.querySelector('#serieVent');
const vidrioVent =  document.querySelector('#vidrioVent');
const mosquiteroVent =  document.querySelector('#mosquiteroVent');
const travesanoVent =  document.querySelector('#travesanoVent');
const marcoCerradoVent =  document.querySelector('#marcoCerradoVent');
const nombreClienteVent =  document.querySelector('#nombreClienteVent');
const cantidadVent =  document.querySelector('#cantidadVent');
const observacionesVent =  document.querySelector('#observacionesVent');
const observacionesPuerta =  document.querySelector('#observacionesPuerta');
const resultadoVentanas = document.querySelector(".resultadoVentanas");
const resultadoMamparas = document.querySelector(".resultadoMamparas");
const ticketVent = document.createElement("div")
const ticketMamp = document.createElement("div")
const ticketPuerta = document.createElement("div")
const impresion = document.querySelector(".impresion")
const inicio = document.querySelector(".inicio")
const medidaAnchoMampara = document.querySelector("#anchoMampara");
const medidaAltoMampara = document.querySelector("#altoMampara");
const medidaAnchoInferiorMampara = document.querySelector("#anchoMamparaInferior");
const anchoMamparaInfDiv = document.querySelector(".anchoMamparaInf");
const formMamp = document.querySelector(".ingreso-datos-mamp");
const diferenciaMamparaCheck = document.querySelector("#diferencia-medida");
const labelAncho = document.querySelector(".labelAncho")
const medidaAnchoPuerta = document.querySelector("#anchoPuerta");
const medidaAltoPuerta = document.querySelector("#altoPuerta");
const docsBarra = document.querySelector(".docs-barra");
const docsInicio = document.querySelector(".docs-inicio");
const documentos = document.querySelector(".documentos");
const volver = document.querySelector(".volver");
const loader = document.querySelector(".loader");

function simulateLoader() {
  var progress = 0;
  
  var text = document.querySelector('.loader-text');

  var interval = setInterval(function() {
    if (progress < 100) {
      progress += 2;
      text.textContent = progress + '%';
    } else {
      clearInterval(interval);
    }
  }, 35);
}

simulateLoader();
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
    loader.style.display = "none";
  }, 2000);
});

/*window.addEventListener('load', function() {
  loader.style.display = "none";
});*/

window.addEventListener('DOMContentLoaded', function() {
  volver.addEventListener('click', function() {
      location.reload();
  });
});
docsInicio.addEventListener("click", function() {
  mamparas.classList.add("ocultar-mamparas");
  mamparas.classList.remove("mostrar-mamparas");
  ventanas.classList.add("ocultar-ventanas");
  ventanas.classList.remove("mostrar-ventanas");
  monoblock.classList.remove("mostrar-monoblock");
  monoblock.classList.add("ocultar-monoblock");
  puertas.classList.add("ocultar-puertas");
  puertas.classList.remove("mostrar-puertas");
  inicio.classList.add("ocultar-inicio");
  barraLateral.classList.add("ocultar-barraLateral");
  barraLateral.classList.remove("barraLateral");
  documentos.classList.remove("ocultar-docs");
})

docsBarra.addEventListener("click", function() {
  console.log("akljdf");
  
  mamparas.classList.add("ocultar-mamparas");
  mamparas.classList.remove("mostrar-mamparas");
  ventanas.classList.add("ocultar-ventanas");
  ventanas.classList.remove("mostrar-ventanas");
  monoblock.classList.remove("mostrar-monoblock");
  monoblock.classList.add("ocultar-monoblock");
  puertas.classList.add("ocultar-puertas");
  puertas.classList.remove("mostrar-puertas");
  inicio.classList.add("ocultar-inicio");
  barraLateral.classList.add("ocultar-barraLateral");
  barraLateral.classList.remove("barraLateral");
  documentos.classList.remove("ocultar-docs");
})

logo.addEventListener("click", function() {
    mamparas.classList.add("ocultar-mamparas");
    mamparas.classList.remove("mostrar-mamparas");
    ventanas.classList.add("ocultar-ventanas");
    ventanas.classList.remove("mostrar-ventanas");
    monoblock.classList.remove("mostrar-monoblock");
    monoblock.classList.add("ocultar-monoblock");
    puertas.classList.add("ocultar-puertas");
    puertas.classList.remove("mostrar-puertas");
    inicio.classList.remove("ocultar-inicio");
    barraLateral.classList.add("ocultar-barraLateral");
  })
  
  btnmonoblock.addEventListener('click', function() {
    monoblock.classList.add("mostrar-monoblock");
    monoblock.classList.remove("ocultar-monoblock");
    ventanas.classList.add("ocultar-ventanas");
    ventanas.classList.remove("mostrar-ventanas");
    mamparas.classList.add("ocultar-mamparas");
    mamparas.classList.remove("mostrar-mamparas");
    puertas.classList.add("ocultar-puertas");
    puertas.classList.remove("mostrar-puertas");
    inicio.classList.add("ocultar-inicio");
    barraLateral.classList.remove("ocultar-barraLateral");
  
   })
  btnmonoblockIni.addEventListener('click', function() {
    monoblock.classList.add("mostrar-monoblock");
    monoblock.classList.remove("ocultar-monoblock");
    ventanas.classList.add("ocultar-ventanas");
    ventanas.classList.remove("mostrar-ventanas");
    mamparas.classList.add("ocultar-mamparas");
    mamparas.classList.remove("mostrar-mamparas");
    puertas.classList.add("ocultar-puertas");
    puertas.classList.remove("mostrar-puertas");
    inicio.classList.add("ocultar-inicio");
    barraLateral.classList.remove("ocultar-barraLateral");
  
   })
  
  btnventana.addEventListener('click', function() {
    monoblock.classList.remove("mostrar-monoblock");
    monoblock.classList.add("ocultar-monoblock");
    ventanas.classList.remove("ocultar-ventanas");
    ventanas.classList.add("mostrar-ventanas");
    mamparas.classList.add("ocultar-mamparas");
    mamparas.classList.remove("mostrar-mamparas");
    puertas.classList.add("ocultar-puertas");
    puertas.classList.remove("mostrar-puertas");
    inicio.classList.add("ocultar-inicio");
    barraLateral.classList.remove("ocultar-barraLateral");
  })
  btnventanaIni.addEventListener('click', function() {
    monoblock.classList.remove("mostrar-monoblock");
    monoblock.classList.add("ocultar-monoblock");
    ventanas.classList.remove("ocultar-ventanas");
    ventanas.classList.add("mostrar-ventanas");
    mamparas.classList.add("ocultar-mamparas");
    mamparas.classList.remove("mostrar-mamparas");
    puertas.classList.add("ocultar-puertas");
    puertas.classList.remove("mostrar-puertas");
    inicio.classList.add("ocultar-inicio");
    barraLateral.classList.remove("ocultar-barraLateral");
  })

  btnmampara.addEventListener('click', function() {
    monoblock.classList.remove("mostrar-monoblock");
    monoblock.classList.add("ocultar-monoblock");
    mamparas.classList.remove("ocultar-mamparas");
    mamparas.classList.add("mostrar-mamparas");
    ventanas.classList.add("ocultar-ventanas");
    ventanas.classList.remove("mostrar-ventanas");
    puertas.classList.add("ocultar-puertas");
    puertas.classList.remove("mostrar-puertas");
    inicio.classList.add("ocultar-inicio");
    barraLateral.classList.remove("ocultar-barraLateral");
  })
  btnmamparaIni.addEventListener('click', function() {
    monoblock.classList.remove("mostrar-monoblock");
    monoblock.classList.add("ocultar-monoblock");
    mamparas.classList.remove("ocultar-mamparas");
    mamparas.classList.add("mostrar-mamparas");
    ventanas.classList.add("ocultar-ventanas");
    ventanas.classList.remove("mostrar-ventanas");
    puertas.classList.add("ocultar-puertas");
    puertas.classList.remove("mostrar-puertas");
    inicio.classList.add("ocultar-inicio");
    barraLateral.classList.remove("ocultar-barraLateral");
  })
  
  btnpuerta.addEventListener('click', function() {
      monoblock.classList.remove("mostrar-monoblock");
      monoblock.classList.add("ocultar-monoblock");
      mamparas.classList.add("ocultar-mamparas");
      mamparas.classList.remove("mostrar-mamparas");
      ventanas.classList.add("ocultar-ventanas");
      ventanas.classList.remove("mostrar-ventanas");
      puertas.classList.remove("ocultar-puertas");
      puertas.classList.add("mostrar-puertas");
      inicio.classList.add("ocultar-inicio");
      barraLateral.classList.remove("ocultar-barraLateral");  
  })
  btnpuertaIni.addEventListener('click', function() {
      monoblock.classList.remove("mostrar-monoblock");
      monoblock.classList.add("ocultar-monoblock");
      mamparas.classList.add("ocultar-mamparas");
      mamparas.classList.remove("mostrar-mamparas");
      ventanas.classList.add("ocultar-ventanas");
      ventanas.classList.remove("mostrar-ventanas");
      puertas.classList.remove("ocultar-puertas");
      puertas.classList.add("mostrar-puertas");
      inicio.classList.add("ocultar-inicio");
      barraLateral.classList.remove("ocultar-barraLateral");  
  })