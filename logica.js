        var temperatura = ""
        var temperaturaMin = ""
        var temperaturaMax = ""
        var feels_like = ""
        var cidadeInputada = ""
        var buttonElement = document.querySelector("button")
        var inputSelected = document.getElementById("input")
    var lista = []
    var requestAPI = (cidade) => {
    var res = fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cidade}&limit=1&appid=63e0af52d6a06cdd79a35b2ffadcc483`)
        .then(res => res.json())
        .then(data => {
            return data
        } )
        return res
    }
    async function SaveData(api){
        var a = await api 
        lista.push(a[0].lat, a[0].country, a[0].lon)
        parseFloat(lista[0])
        parseFloat(lista[2])
    }
async function Forecast (lista, cidade) {
        var data = await requestAPI(cidade)
        await SaveData(data)
        var res = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lista[0]}&lon=${lista[2]}&appid=63e0af52d6a06cdd79a35b2ffadcc483`)
        .then(res => res.json())
        .then(data => {
            return data
        } )
        return res
    }
    buttonElement.addEventListener("click", () => {
            cidadeInputada = document.getElementById("input").value
            Forecast(lista, cidadeInputada).then(dados => {
                temperatura = Math.ceil(dados.main.temp - 273)
                temperaturaMax = Math.ceil(dados.main.temp_max - 273)
                temperaturaMin = Math.ceil(dados.main.temp_min - 273)
                feels_like = Math.ceil(dados.main.feels_like - 273)
                node = document.getElementById("cidade")
                text = document.createTextNode("Cidade: " + cidadeInputada)
                node.appendChild(text)
                var node = document.getElementById("h1")
                var text = document.createTextNode("Sensação termica: "+feels_like + "°C")
                node.appendChild(text)
                node = document.getElementById("h2")
                text = document.createTextNode("Temperatura: "+temperatura + "°C")
                node.appendChild(text)
                node = document.getElementById("h3")
                text = document.createTextNode("Temperatura máxima: " + temperaturaMax + "°C")
                node.appendChild(text)
                node = document.getElementById("h4")
                text = document.createTextNode("Temperatura mínima: " + temperaturaMin + "°C")
                node.appendChild(text)
                document.getElementById("input").style.display = "none"
                document.getElementById("botao").style.display = "none"
                document.getElementById("Display").style.display = "flex"
                document.getElementById("botao2").style.display = "block"
            })

        })
        function novaPesquisa (){
            document.getElementById("input").style.display = "block"
            document.getElementById("botao").style.display = "block"
            document.getElementById("h1").innerHTML = ""
            document.getElementById("h2").innerHTML = ""
            document.getElementById("h3").innerHTML = ""
            document.getElementById("h4").innerHTML = ""
            document.getElementById("cidade").innerHTML = ""
            document.getElementById("botao2").style.display = "none"
        }