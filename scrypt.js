const icons={
    direccion:'fa-location-dot',
    Email: 'fa-envelope',
    "Teléfono": 'fa-phone',
    "Fecha nacimiento": 'fa-cake-candles',
    hard_skills:'fa-hands',
    user: 'fa-user',
    experiencia_laboral:'fa-briefcase',
    certificados:'fa-graduation-cap'
}
const direccion = document.querySelector('#direccion')
const datos_personales = document.querySelector('#datos_personales');
const nombre = document.querySelector('#name');
const sobre_mi = document.querySelector('#sobre_mi');
const edu = document.querySelector('#educacion');
const exp_laboral = document.querySelector('#experiencia_laboral');
const habilities = document.querySelector('#hard_skills')
const imagen = document.querySelector('#imagenPerfil')

fetch("./data.json", { mode: "no-cors" }) // desactivar CORS porque la ruta no contiene http(s)
.then((res) => res.json())
.then((data) => {
  
    nombre.innerText= `${data[0].name} ${data[0].lastname}`;
    data[0].direccion.forEach(element => {
            direccion.innerHTML+=`<p>${element.tipo}: ${element.observaciones}, ${element.calle} ${element.numero} ,${element.localidad} , ${element.barrio}</p>`        
    });
    for(let prop in data[0]){
        
        if(prop==="Email" || prop==="Teléfono" || prop==="Fecha nacimiento"){
            datos_personales.innerHTML+=`<div class="col d-flex align-items-start">
            <div
              class="d-inline-flex align-items-center justify-content-center m-3"
              style="height: 14px; width: 4px"
            >
              <i class="fa-solid ${icons[prop]}"></i>
            </div>
            <div>
              <h4 class="fs-2">${prop}</h4>
              <p>${data[0][prop]}</p>
            </div>
          </div>`
        } 

    }
    sobre_mi.innerText=data[0].sobre_mi;
    data[0].titulos.forEach(element=>{
     educacion.innerHTML+=` <p><strong>${element.institucion}</strong></p>
     <ul>
       <li>${element.descripcion}</li>
       <li>${element.lugar}</li>
       <li>${element.date_inicio} hasta ${element.date_finalizacion}</li>
     </ul>`
    })
    data[0].certificados.forEach(element=>{
      educacion.innerHTML+=` <p><strong>${element.descripcion}</strong></p>
      <ul>
        <li>${element.otorgado_por}</li>
        <li>${element.year}</li>
        
      </ul>`
     })
    data[0].experiencia_laboral.forEach(element=>{
      exp_laboral.innerHTML+=` <p><strong>${element.descripcion}</strong></p>
      <ul>
        <li>${element.lugar}</li>
        <li>${element.year_desde} hasta ${element.year_hasta}</li>
        <li>${element.tareas}</li>
      </ul>`
    })
    
    data[0].hard_skills.forEach(element=>{
      habilities.innerHTML+=`<div
      class="progress"
      role="progressbar"
      aria-label="Example with label"
      aria-valuenow="25"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div class="progress-bar" style="width:${element.nivel}%">${element.nivel}%</div>
    </div>
    <p>${element.descripcion}</p>`
    })
}
);
fetch('https://randomuser.me/api/')
.then(res=>res.json())
.then( data=>{
  imagen.innerHTML=` <img
  src="${data.results[0].picture.large}"
  class="card-img-top rounded-circle"
  alt="imagen" style="height:3rem,width:20%"
/>`
    
  }
)
