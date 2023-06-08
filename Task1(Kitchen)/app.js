// const yemekler = document.getElementById("yemekler")
// const salatlar = document.getElementById("salatlar")
// const tursular = document.getElementById("tursular")
// const ickiler = document.getElementById("ickiler")
// const souslar = document.getElementById("souslar")
// const orders = document.getElementById("orders")

// const meals = ["Lülə", "Tike", "Basdirma", "Toyuq kababi", "Et qovurma", "Kartof(kend sayagi)", "kartof(free)", "xengel"]
// meals.forEach(meal => yemekler.innerHTML += `<option>${meal}</option>`)

// const salats = ["paytaxt salati", "biber salati", "mimoza", "sezar"]
// salats.forEach(salat => salatlar.innerHTML += `<option>${salat}</option>`)

// const tursu = ["alca tursusu", "biber tursusu", "kelem tursusu", "assorti tursusu"]
// tursu.forEach(turs => tursular.innerHTML += `<option>${turs}</option>`)

// const juices = ["Nar siresi", "Portagal siresi", "cay destgahi", "Qehve", "qazsiz su", "Qazli su"]
// juices.forEach(juice => ickiler.innerHTML += `<option>${juice}</option>`)

// const souces = ["Barbeku sousu", "Pendir sousu", "Cili sousu", "Ketcup", "Mayonez"]
// souces.forEach(souce => souslar.innerHTML += `<option>${souce}</option>`)

// document.getElementById("klik").addEventListener("click", myFunction)
// let kod = ""
// let saygac = 1
// function myFunction() {
//     orders.innerHTML = ""
//     kod += `
//      <div class="col-xl-6 col-12 ">
//      <div class="order">

//          <h3>Masa ${saygac++}</h3>
//          <div id="masa1">
//          <ul>
//          <li>yemekler:${yemekler.value}</li>
//          <li>salatlar:${salatlar.value}</li>
//          <li>tursular:${tursular.value}</li>
//          <li>ickiler:${ickiler.value}</li>
//          <li>souslar:${souslar.value}</li>
//          </ul>
//          </div>
//          <button onclick="tut(this)" class="btn btn-primary">Sifariş icra olundu</button>
//      </div>
//  </div>`

//     orders.innerHTML += kod
// }

// function tut( btn ) { 
//     console.log(btn)
//     btn.parentNode.parentNode.remove()
// }

const yemekler = document.getElementById("yemekler")
const salatlar = document.getElementById("salatlar")
const tursular = document.getElementById("tursular")
const ickiler = document.getElementById("ickiler")
const souslar = document.getElementById("souslar")
const orders = document.getElementById("orders")

const meals =  ["Lülə", "Tike", "Basdirma", "Toyuq kababi", "Et qovurma", "Kartof(kend sayagi)", "kartof(free)", "xengel"]
meals.forEach(meal=> yemekler.innerHTML += `<option>${meal}</option>`)
const salats = ["paytaxt salati", "biber salati", "mimoza", "sezar"]
salats.forEach(salat=> salatlar.innerHTML+=`<option>${salat}</option>`)
const tursu = ["alca tursusu", "biber tursusu", "kelem tursusu", "assorti tursusu"]
tursu.forEach(turs=> tursular.innerHTML += `<option>${turs}</option>`)
const juices = ["Nar siresi", "Portagal siresi", "cay destgahi", "Qehve", "qazsiz su", "Qazli su"]
juices.forEach(juice=> ickiler.innerHTML += `<option>${juice}</option>`)
const souces =  ["Barbeku sousu", "Pendir sousu", "Cili sousu", "Ketcup", "Mayonez"]
souces.forEach(souce=> souslar.innerHTML+= `<option>${souce}</option>`)

document.getElementById("klik").addEventListener("click",myFunction)
    let kod = ""
    let saygac = 1
function myFunction(){
    orders.innerHTML = ""
    kod += `
    <div class="col-xl-6 col-12 ">
   <div class="order">

         <h3>Masa ${saygac++}</h3>
          <div id="masa1">
          <ul>
          <li>yemekler:${yemekler.value}</li>
          <li>salatlar:${salatlar.value}</li>
        <li>tursular:${tursular.value}</li>
         <li>ickiler:${ickiler.value}</li>
          <li>souslar:${souslar.value}</li>
          </ul>
          </div>
          <button onclick="tut(this)" class="btn btn-primary">Sifariş icra olundu</button>
      </div>
  </div>`
  orders.innerHTML += kod
}
function tut(btn){
    console.log(btn);
    btn.parentNode.parentNode.remove()
}