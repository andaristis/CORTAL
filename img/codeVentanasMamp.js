const body = document.querySelector('body');
const html = document.querySelector('html');
const medidaAncho = document.querySelector("#ancho");
const medidaAlto = document.querySelector("#alto");

const calcularVentanas = document.querySelector('#calcularVentanas');
const calcularMamparas = document.querySelector('#calcularMamparas');
const calcularMamparasCnDiferencia = document.querySelector('#calcularMamparasConDiferencia');
const serie = document.querySelector('#serie');
const contenedor = document.querySelector('.contenedor');
const ventanas = document.querySelector("#ventanas")
const mamparas = document.querySelector("#mamparas")
const monoblock = document.querySelector("#monoblock")
const puertas = document.querySelector("#puertas")
const inicio = document.querySelector(".inicio")
const resultado = document.querySelector(".resultado")
const resultadoMampara = document.querySelector(".resultadoMamparas")





function validarDatos(){
  if(medidaAlto.value <= 30 || medidaAncho.value <= 30){
    alert("Ingrese medida correcta");
    return false;
  }else if(serie.value === "Seleccione serie"){
    alert("Ingrese Serie")}
  else {return true
  }}
  

/*function  mostrarMedidasVentanas(ancho, alto){
  localStorage.setItem('alto', alto)
  localStorage.setItem('ancho', ancho)

if(serie.value.includes("25")){
resultado.classList.add("fondo-resultado")
let anchoMarco = (parseInt((ancho - 5.2) * 10, 10) / 10);
let altoMarco = (parseInt(alto * 10, 10) / 10);
let ruedas = (parseInt(((ancho/2)- 9.7)* 10, 10) / 10);
let enganche = (parseInt((alto - 4.9)* 10, 10) / 10);
resultado.innerHTML = 
`<div class="info">
<div class="contenedor-info" id="enganche"><div><h4 class="codigo-proveedor">E2861/E2862</h4><h3 class="perfil">Eng/lat hoja:</h3></div><h1 class="medida"> ${enganche}</h1><h4>cms.</h4></div>

<div class="contenedor-info" id="ruedas"><div><h4 class="codigo-proveedor">E2863/E2859</h4><h3 class="perfil">Ruedas:</h3></div><h1 class="medida"> ${ruedas}</h1><h4>cms.</h4></div>

<div class="contenedor-info" id="altoMarco"><div><h4 class="codigo-proveedor">E3513</h4><h3 class="perfil">Lateral marco:</h3></div><h1 class="medida"> ${altoMarco}</h1><h4>cms.</h4></div>

<div class="contenedor-info" id="anchoMarco"><div><h4 class="codigo-proveedor">E2857/E2858</h4><h3 class="perfil">Rieles:</h3></div><h1 class="medida"> ${anchoMarco}</h1><h4>cms.</h4></div>

</div>`;
mostracomcc
localStorage.setItem('alto', alto)
localStorage.setItem('ancho', ancho)
localStorage.setItem('anchoMarco', anchoMarco)
localStorage.setItem('altoMarco', altoMarco)
localStorage.setItem('ruedas', ruedas)
localStorage.setItem('enganche', enganche)
localStorage.setItem('serie', serie.value)


}else if(serie.value.includes("20")){
resultado.classList.add("fondo-resultado")
let anchoMarco = (parseInt((ancho - 2.3) * 10, 10) / 10);
let altoMarco = (parseInt(alto * 10, 10) / 10);
let ruedas = (parseInt(((ancho/2)- 7.2)* 10, 10) / 10);
let enganche = (parseInt((alto - 4.8)* 10, 10) / 10);
resultado.innerHTML = 
`<div class="info">

<div class="contenedor-info" id="enganche"><div><h4 class="codigo-proveedor">E2861/E2862</h4><h3 class="perfil">Eng/lat hoja:</h3></div><h1 class="medida"> ${enganche}</h1><h4>cms.</h4></div>

<div class="contenedor-info" id="ruedas"><div><h4 class="codigo-proveedor">E2863/E2859</h4><h3 class="perfil">Ruedas:</h3></div><h1 class="medida"> ${ruedas}</h1><h4>cms.</h4></div>

<div class="contenedor-info" id="altoMarco"><div><h4 class="codigo-proveedor">E3513</h4><h3 class="perfil">Lateral marco:</h3></div><h1 class="medida"> ${altoMarco}</h1><h4>cms.</h4></div>

<div class="contenedor-info" id="anchoMarco"><div><h4 class="codigo-proveedor">E2857/E2858</h4><h3 class="perfil">Rieles:</h3></div><h1 class="medida"> ${anchoMarco}</h1><h4>cms.</h4></div>

</div>`;

localStorage.setItem('alto', alto)
localStorage.setItem('ancho', ancho)
localStorage.setItem('anchoMarco', anchoMarco)
localStorage.setItem('altoMarco', altoMarco)
localStorage.setItem('ruedas', ruedas)
localStorage.setItem('enganche', enganche)
localStorage.setItem('serie', serie.value)}

}

function openPopup() {
  const form = document.createElement("form")
  
  const fondoTranslucido = document.createElement('div');
  fondoTranslucido.className = 'fondoTranslucido';
  
  const popup = document.createElement('div');
  popup.className = 'popup';

  const closeButton = document.createElement('button');
  closeButton.classList.add("cerrar")
  closeButton.innerHTML = 'X';
  closeButton.onclick = function() {
    popup.remove();
    fondoTranslucido.remove();
  };
    
  const nombreCliente = document.createElement('input');
  nombreCliente.classList.add("cantidad-pedido")
  nombreCliente.type = "text";
  nombreCliente.name = "nuevo-input";
  nombreCliente.id = "nuevo-input-id";
  nombreCliente.placeholder = "Ingrese nombre del cliente.";

  const etiqueta = document.createElement("label");
  etiqueta.classList.add("label-pedido")
  etiqueta.for = "nuevo-input-id";
  etiqueta.textContent = "Nombre cliente:";

  const cantidad = document.createElement('input');
  cantidad.classList.add("cantidad-pedido")
  cantidad.type = "number";
  cantidad.name = "cantidad-pedido";
  cantidad.id = "cantidad-pedido";
  cantidad.placeholder = "Cantidad de aberturas";

  const etiquetaCantidad = document.createElement("label");
  etiquetaCantidad.for = "cantidad-pedido";
  etiquetaCantidad.textContent = "Cantidad:";
  etiquetaCantidad.classList.add("label-pedido")
  
  const divColores = document.createElement("div");
  divColores.classList.add("divColores")
  const colores = document.createElement("select");
  colores.name = "nueva-lista";
  colores.classList.add("colores")
  const opciones = ["Seleccione color","Anodizado", "Blanco", "Negro", "Marrón", "Imitación Madera"];
  for (var i = 0; i < opciones.length; i++) {
    let opcion = document.createElement("option");
    opcion.value = opciones[i];
    opcion.text = opciones[i];
    colores.appendChild(opcion);
  }
  
  const divObservaciones = document.createElement("div")
  divObservaciones.classList.add("divObservaciones")
  const observaciones = document.createElement("textarea")
  observaciones.classList.add("observaciones")
  const labelObservaciones = document.createElement("label")
  labelObservaciones.classList.add("labelObservaciones")
  labelObservaciones.innerText = "Observaciones:";
  observaciones.placeholder = "Ingrese alguna observación para el cortador"
  
  divObservaciones.appendChild(labelObservaciones)
    divObservaciones.appendChild(observaciones)
    divColores.appendChild(etiqueta);
    divColores.appendChild(nombreCliente);
    divColores.appendChild(etiquetaCantidad)
    divColores.appendChild(cantidad)
    divColores.appendChild(colores)
    
    let selectedValue = "fino_y_ancho"
    let checkboxTravesanoValue = "0";
    let checkboxMarcoSuperiorValue ="0";
    let selectedVidirioValue = "cuatro_milimetros";
    let checkboxMosquiteroValue = "0";;

    if(serie.value.includes("25")){
    const divRadios = document.createElement("div");
    divRadios.classList.add("divRadios")
    
    const radioFinoAncho = document.createElement("input");
    radioFinoAncho.type = "radio";
    radioFinoAncho.name = "ruedas";
    radioFinoAncho.value = "fino_y_ancho";
    radioFinoAncho.checked = true
    
    const labelFinoAncho = document.createElement("label");
    labelFinoAncho.textContent = "Ruedas fino y ancho";
    labelFinoAncho.prepend(radioFinoAncho);
    labelFinoAncho.classList.add("label-opciones")
  
    const radioFino = document.createElement("input");
    radioFino.type = "radio";
    radioFino.name = "ruedas";
    radioFino.value = "fino";
    
    const labelFino = document.createElement("label");
    labelFino.textContent = "Ruedas finos";
    labelFino.prepend(radioFino);
    labelFino.classList.add("label-opciones")
    
    const radioAncho = document.createElement("input");
    radioAncho.type = "radio";
    radioAncho.name = "ruedas";
    radioAncho.value = "ancho";
  
    const labelAnchoRuedas = document.createElement("label");
    labelAnchoRuedas.textContent = "Ruedas anchos";
    labelAnchoRuedas.prepend(radioAncho);
    labelAnchoRuedas.classList.add("label-opciones")
    
    radioFinoAncho.addEventListener('change', function() {
      selectedValue = this.value;
    });
    
    radioFino.addEventListener('change', function() {
      selectedValue = this.value;
    });
    
    radioAncho.addEventListener('change', function() {
      selectedValue = this.value;
    });
    
    const divChecks = document.createElement("div");
    divChecks.classList.add("divChecks")
    
    const checkboxMosquitero = document.createElement("input");
    checkboxMosquitero.type = "checkbox";
    checkboxMosquitero.name = "mosquitero";
    const labelMosquitero = document.createElement("label");
    labelMosquitero.textContent = "Mosquitero";
    labelMosquitero.prepend(checkboxMosquitero);
    labelMosquitero.classList.add("label-opciones")
    
    const checkboxMarcoSuperior = document.createElement("input");
    checkboxMarcoSuperior.type = "checkbox";
    checkboxMarcoSuperior.name = "marco_superior_cerrado";
    const labelMarcoSuperior = document.createElement("label");
    labelMarcoSuperior.textContent = "Marco superior cerrado";
    labelMarcoSuperior.prepend(checkboxMarcoSuperior);
    labelMarcoSuperior.classList.add("label-opciones")
    
    const checkboxTravesano = document.createElement("input");
    checkboxTravesano.type = "checkbox";
    checkboxTravesano.name = "travesano";
    const labelTravesano = document.createElement("label");
    labelTravesano.textContent = "Travesaño";
    labelTravesano.prepend(checkboxTravesano);
    labelTravesano.classList.add("label-opciones")
    
    const divVidrios = document.createElement("div");
    divVidrios.classList.add("divVidrios")
    
    const vidrioTresM = document.createElement("input");
    vidrioTresM.type = "radio";
    vidrioTresM.name = "vidrio";
    vidrioTresM.value = "tres_milimetros";
    
        const labelTresM = document.createElement("label");
    labelTresM.textContent = "Vidrio 3 mm";
    labelTresM.prepend(vidrioTresM);
    labelTresM.classList.add("label-opciones")
    
    const vidrioCuatroM = document.createElement("input");
    vidrioCuatroM.type = "radio";
    vidrioCuatroM.name = "vidrio";
    vidrioCuatroM.value = "cuatro_milimetros";
    vidrioCuatroM.checked = true
    
    const labelCuatroM = document.createElement("label");
    labelCuatroM.textContent = "Vidrio 4 mm";
    labelCuatroM.prepend(vidrioCuatroM);
    labelCuatroM.classList.add("label-opciones")
    
    const vidrioFantasia = document.createElement("input");
    vidrioFantasia.type = "radio";
    vidrioFantasia.name = "vidrio";
    vidrioFantasia.value = "fantasia";
    
    const labelFantasia = document.createElement("label");
    labelFantasia.textContent = "Fantasia";
    labelFantasia.prepend(vidrioFantasia);
    labelFantasia.classList.add("label-opciones")
    
    vidrioTresM.addEventListener('change', function() {
      selectedVidirioValue = this.value;
    });
    
    vidrioCuatroM.addEventListener('change', function() {
      selectedVidirioValue = this.value;
    });
    
    vidrioFantasia.addEventListener('change', function() {
      selectedVidirioValue = this.value;
    });
    

    divRadios.appendChild(labelAnchoRuedas)
    divRadios.appendChild(radioAncho)
    divRadios.appendChild(labelFinoAncho)
    divRadios.appendChild(radioFinoAncho)
    divRadios.appendChild(labelFino)
    divRadios.appendChild(radioFino)
    divChecks.appendChild(labelMosquitero)
    divChecks.appendChild(checkboxMosquitero)
    divChecks.appendChild(labelTravesano)
    divChecks.appendChild(checkboxTravesano)
    divChecks.appendChild(labelMarcoSuperior)
    divChecks.appendChild(checkboxMarcoSuperior)
    divVidrios.appendChild(labelTresM)
    divVidrios.appendChild(vidrioTresM)
    divVidrios.appendChild(labelCuatroM)
    divVidrios.appendChild(vidrioCuatroM)
    divVidrios.appendChild(labelFantasia)
    divVidrios.appendChild(vidrioFantasia)

    divColores.appendChild(divChecks)
    divColores.appendChild(divRadios)
    divColores.appendChild(divVidrios)
    
    checkboxTravesano.addEventListener('change', function() {
      checkboxTravesano.checked  ? checkboxTravesanoValue = "1" : checkboxTravesanoValue =  "0"
    });
    checkboxMarcoSuperior.addEventListener('change', function() {
      checkboxMarcoSuperior.checked  ? checkboxMarcoSuperiorValue = "1" : checkboxMarcoSuperiorValue =  "0"
    });
    checkboxMosquitero.addEventListener('change', function() {
      checkboxMosquitero.checked  ? checkboxMosquiteroValue = "1" : checkboxMosquiteroValue =  "0"
    });
  }else{

    const divChecks = document.createElement("div");
    divChecks.classList.add("divChecks")
    
    const checkboxMosquitero = document.createElement("input");
    checkboxMosquitero.type = "checkbox";
    checkboxMosquitero.name = "mosquitero";
    const labelMosquitero = document.createElement("label");
    labelMosquitero.textContent = "Mosquitero";
    labelMosquitero.prepend(checkboxMosquitero);
    labelMosquitero.classList.add("label-opciones")

    const checkboxTravesano = document.createElement("input");
    checkboxTravesano.type = "checkbox";
    checkboxTravesano.name = "travesano";
    const labelTravesano = document.createElement("label");
    labelTravesano.textContent = "Travesaño";
    labelTravesano.prepend(checkboxTravesano);
    labelTravesano.classList.add("label-opciones")
    
    const divVidrios = document.createElement("div");
    divVidrios.classList.add("divVidrios")
    
    const vidrioTresM = document.createElement("input");
    vidrioTresM.type = "radio";
    vidrioTresM.name = "vidrio";
    vidrioTresM.value = "tres_milimetros";
    
    const labelTresM = document.createElement("label");
    labelTresM.textContent = "Vidrio 3 mm";
    labelTresM.prepend(vidrioTresM);
    labelTresM.classList.add("label-opciones")
    
    const vidrioCuatroM = document.createElement("input");
    vidrioCuatroM.type = "radio";
    vidrioCuatroM.name = "vidrio";
    vidrioCuatroM.value = "cuatro_milimetros";
    vidrioCuatroM.checked = true
    
    const labelCuatroM = document.createElement("label");
    labelCuatroM.textContent = "Vidrio 4 mm";
    labelCuatroM.prepend(vidrioCuatroM);
    labelCuatroM.classList.add("label-opciones")
    
    const vidrioFantasia = document.createElement("input");
    vidrioFantasia.type = "radio";
    vidrioFantasia.name = "vidrio";
    vidrioFantasia.value = "fantasia";
        
    const labelFantasia = document.createElement("label");
    labelFantasia.textContent = "Fantasia";
    labelFantasia.prepend(vidrioFantasia);
    labelFantasia.classList.add("label-opciones")
    
    vidrioTresM.addEventListener('change', function() {
      selectedVidirioValue = this.value;
    });
    
    vidrioCuatroM.addEventListener('change', function() {
      selectedVidirioValue = this.value;
    });
    
    vidrioFantasia.addEventListener('change', function() {
      selectedVidirioValue = this.value;
    });
    divChecks.appendChild(labelMosquitero)
    divChecks.appendChild(checkboxMosquitero)
    divChecks.appendChild(labelTravesano)
    divChecks.appendChild(checkboxTravesano)
    divVidrios.appendChild(labelTresM)
    divVidrios.appendChild(vidrioTresM)
    divVidrios.appendChild(labelCuatroM)
    divVidrios.appendChild(vidrioCuatroM)
    divVidrios.appendChild(labelFantasia)
    divVidrios.appendChild(vidrioFantasia)

    divColores.appendChild(divChecks)
    divColores.appendChild(divVidrios)
    
    checkboxTravesano.addEventListener('change', function() {
      checkboxTravesano.checked  ? checkboxTravesanoValue = "1" : checkboxTravesanoValue =  "0"
    });
    
    checkboxMosquitero.addEventListener('change', function() {
      checkboxMosquitero.checked  ? checkboxMosquiteroValue = "1" : checkboxMosquiteroValue =  "0"
    });
  }
  divColores.appendChild(divObservaciones)
  
  const submitButton = document.createElement('button');
    submitButton.classList.add("btn-imprimir")
    submitButton.type = 'submit';
    submitButton.innerHTML = 'Imprimir';
    
  submitButton.onclick = function() {
      // Envía los datos del formulario
      const nombreClienteValue = nombreCliente.value;
      const coloresValue = colores.value;
      localStorage.setItem('travesano', checkboxTravesanoValue)
      localStorage.setItem('marcoCerrado', checkboxMarcoSuperiorValue)
      localStorage.setItem('ruedasAnchoOFino', selectedValue)
      localStorage.setItem('vidrio', selectedVidirioValue)
      localStorage.setItem('nombreCliente', nombreClienteValue)
      localStorage.setItem('color', coloresValue)
      localStorage.setItem('cantidad', cantidad.value)
      localStorage.setItem('observaciones', observaciones.value)
      localStorage.setItem('mosquitero', checkboxMosquiteroValue)

      const newWindow = window.open('imprimir.html', '_blank');
      newWindow.focus();
    }
  
  form.appendChild(closeButton);  
  form.appendChild(divColores);
  form.appendChild(submitButton);
  popup.appendChild(form)
  document.body.appendChild(fondoTranslucido);
  document.body.appendChild(popup);
  }




ventanasBtn.addEventListener("click", function() {

  calcularVentanas.addEventListener("click", function() {
    if(validarDatos()){
      ancho = medidaAncho.value;
      alto = medidaAlto.value;
      mostrarMedidasVentanas(ancho, alto);
    }})
  })

calcularMamparas.addEventListener("click", function() {
      function validarDatos(){
    if(medidaAnchoMampara.value <= 0 || medidaAltoMampara.value <= 0){
      alert("Ingrese medida correcta");
      return false;
      }else {return true;
  }}
    if(validarDatos()){
       mostrarMedidasVentanas();
   }
  
  function  mostrarMedidasVentanas(){
    ancho = medidaAnchoMampara.value;
    alto = medidaAltoMampara.value;
  
    resultadoMampara.classList.add("fondo-resultado")

      let alturaHoja = (alto - 7.2);
      let travesano = (parseInt((ancho/2 - 4.5)* 10, 10) / 10);
      let marcoLateral = alto - 3.2;
      let marcoSuperior = ancho;
      let marcoInferior = ancho - 7;
        resultadoMampara.innerHTML = 
  
          `<div class="info-mampara">
            <div class="contenedor-info" id="travesano"><div><h4 class="codigo-proveedor">E2861/E2862</h4><h3 class="perfil">Travesaño:</h3></div><h1 class="medida"> ${travesano}</h1><h4>cms.</h4></div>
            
            <div class="contenedor-info" id="alto-hoja"><div><h4 class="codigo-proveedor">E2861/E2862</h4><h3 class="perfil">Altura hoja:</h3></div><h1 class="medida"> ${alturaHoja}</h1><h4>cms.</h4></div>
    
            <div class="contenedor-info" id="marcoLateral"><div><h4 class="codigo-proveedor">E2863/E2859</h4><h3 class="perfil">Marco lateral:</h3></div><h1 class="medida"> ${marcoLateral}</h1><h4>cms.</h4></div>
    
            <div class="contenedor-info" id="altoMarco"><div><h4 class="codigo-proveedor">E3513</h4><h3 class="perfil">Marco superior:</h3></div><h1 class="medida"> ${marcoSuperior}</h1><h4>cms.</h4></div>
    
            <div class="contenedor-info" id="anchoMarco"><div><h4 class="codigo-proveedor">E2857/E2858</h4><h3 class="perfil">Marco inferior:</h3></div><h1 class="medida"> ${marcoInferior}</h1><h4>cms.</h4></div>
            </div>`;
}})
calcularMamparasCnDiferencia.addEventListener("click", function() { 
       function validarDatos(){
          if(medidaAnchoMampara.value <= 0 || medidaAltoMampara.value <= 0 || medidaAnchoInferiorMampara.value <= 0){
            alert("Ingrese medida correcta");
            return false;
            }else {return true;
        }}
          if(validarDatos()){
             mostrarMedidasVentanas();
         }
        
        function  mostrarMedidasVentanas(){
          ancho = medidaAnchoMampara.value;
          alto = medidaAltoMampara.value;
          anchoInferior = medidaAnchoInferiorMampara.value;
          resultadoMampara.classList.add("fondo-resultado")
      
            let alturaHoja = (alto - 7.2);
            let marcoInferior = anchoInferior - 7;
            let travesano = ancho < anchoInferior ? (parseInt((ancho/2 - 4.5)* 10, 10) / 10) : (parseInt((anchoInferior/2 - 4.5)* 10, 10) / 10);
            let marcoLateral = alto - 3.2;
            let marcoSuperior = ancho;
    
            console.log(ancho + " " + alto + " " + anchoInferior)
              resultadoMampara.innerHTML = 
        
                `<div class="info-mampara">
                  <div class="contenedor-info" id="travesano"><div><h4 class="codigo-proveedor">E2861/E2862</h4><h3 class="perfil">Travesaño:</h3></div><h1 class="medida"> ${travesano}</h1><h4>cms.</h4></div>
                  
                  <div class="contenedor-info" id="alto-hoja"><div><h4 class="codigo-proveedor">E2861/E2862</h4><h3 class="perfil">Altura hoja:</h3></div><h1 class="medida"> ${alturaHoja}</h1><h4>cms.</h4></div>
          
                  <div class="contenedor-info" id="marcoLateral"><div><h4 class="codigo-proveedor">E2863/E2859</h4><h3 class="perfil">Marco lateral:</h3></div><h1 class="medida"> ${marcoLateral}</h1><h4>cms.</h4></div>
          
                  <div class="contenedor-info" id="altoMarco"><div><h4 class="codigo-proveedor">E3513</h4><h3 class="perfil">Marco superior:</h3></div><h1 class="medida"> ${marcoSuperior}</h1><h4>cms.</h4></div>
          
                  <div class="contenedor-info" id="anchoMarco"><div><h4 class="codigo-proveedor">E2857/E2858</h4><h3 class="perfil">Marco inferior:</h3></div><h1 class="medida"> ${marcoInferior}</h1><h4>cms.</h4></div>
                  </div>`;
}})  
diferenciaMamparaCheck.addEventListener('change', function() {
     anchoMamparaInfDiv.classList.toggle('ocultar-anchoinf');
     calcularMamparasCnDiferencia.classList.toggle('ocultar-anchoinf');
     calcularMamparas.classList.toggle('ocultar-anchoinf');
     if(anchoMamparaInfDiv.classList.contains('ocultar-anchoinf')){
     labelAncho.innerHTML = "Ancho";}
     else {
      labelAncho.innerHTML = "Ancho Superior";
}})
*/