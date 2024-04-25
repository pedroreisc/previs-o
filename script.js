//aba
var fechar = document.getElementById("faba")
var abrir = document.getElementById("aaba")
var aba = document.getElementById("aba")

abrir.addEventListener('click', function() {
    var aba = document.getElementById("aba") 

    if(aba.style.display === 'none') {
        aba.style.display = 'block'
    } else{
        aba.style.display = 'none'
    }
})

fechar.addEventListener('click', function(){
    var aba = document.getElementById("aba")

    if(aba.style.display === 'block'){
        aba.style.display = 'none'
    } else{
        aba.style.display = 'block'
    }

})

//api
const apikey = '4309e785258b68b4cb0d515ce771209c'
const cidade = document.getElementById("city")
const botao = document.getElementById("pc")

//select

const ncidade = document.getElementById("ncidade")
const temp = document.getElementById("temp")
const desc = document.getElementById("desc")
const icon = document.getElementById("icon")
const umi = document.getElementById("umi")


//função
const pegarapi = async(city) => {

    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}&lang=pt_br`
    const res = await fetch(apiurl)
    const data =await res.json()
    console.log(data)
    return data
}





const mostrar = async (city) => {
   
    const data = await pegarapi(city)

    ncidade.innerText = data.name
    temp.innerText = parseInt(data.main.temp) + "°C"
    ncidade.innerText = data.name + "  " + "("  + data.sys.country + ")"
    umi.innerHTML = "Umidade:" + " " + data.main.humidity + "%"
    desc.innerHTML = data.weather[0].description
    document.querySelector(".gifp").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

// evento
botao.addEventListener('click', (e) =>{
    e.preventDefault()
    const city = cidade.value
    mostrar(city)
})