function imc_cal(){
    reset()
    let peso = Number(window.document.getElementById("inPeso").value)
    let altura = Number(window.document.getElementById("inAltura").value)
    let imc =  peso / (altura * altura)
    let res = window.document.getElementById("resposta")
    let av = window.document.getElementById("classifica")
    if (peso === 0 || altura === 0){
        //window.alert("Preencha dos os campos")
        av.style.color = 'red'
        av.textContent = 'Preencha todos os campos'
    }else{
        res.textContent = imc.toFixed(1)
        classifica(imc, res)
    }
    window.location.href = '#res_container'
    let peso_dif = peso_ideal(imc, peso, altura)
    if (peso_dif === ' '){
        av.textContent = 'Você está dentro da faixa de peso normal'
    }else if(peso_dif>0){
        av.textContent = `Você precisa de +${peso_dif}kg`
    }else{
        av.textContent = `Você precisa de ${peso_dif}kg`
    }

    
}

function peso_ideal(imc, peso, altura){
    let peso_ideal
    let dif
    if (imc<24.9 && imc>18.5){
        return " "
    }
    if(imc < 18.5){
        peso_ideal = 18.5 * altura * altura
        dif = peso_ideal - peso
        return dif.toFixed(1)
    }else{
        peso_ideal = 24.9 * altura * altura
        dif = peso_ideal - peso
        return dif.toFixed(1)
    }
}

function reset(){
    let res = window.document.getElementById("resposta")
    window.document.getElementById('cat1').style.backgroundColor = 'white'
    window.document.getElementById('cat1').style.color = 'black'
    window.document.getElementById('cat2').style.backgroundColor = 'white'
    window.document.getElementById('cat2').style.color = 'black'
    window.document.getElementById('cat3').style.backgroundColor = 'white'
    window.document.getElementById('cat3').style.color = 'black'
    window.document.getElementById('cat4').style.backgroundColor = 'white'
    window.document.getElementById('cat4').style.color = 'black'
    window.document.getElementById('cat5').style.backgroundColor = 'white'
    window.document.getElementById('cat5').style.color = 'black'
    res.style.color = 'black'
    res.textContent = '0.0'
    window.document.getElementById("classifica").textContent = " "
    window.document.getElementById("classifica").style.color = 'black'

}

function classifica(imc, res){
    let lb = window.document.getElementById("classifica")
    let catname
    if(imc<18.5){
        //lb.textContent = "Abaixo do peso"
        colorRed(res,lb)
        catname = 'cat1'
    }else if(imc<24.9){
        //lb.textContent = "Peso normal"
        //lb.style.color = '#4CAF50'
        res.style.color = '#4CAF50'
        catname = 'cat2'
    }else if(imc<29.9){
        //lb.textContent = "Sobrepeso"
        colorRed(res,lb)
        catname = 'cat3'
    }else if(imc<39.9){
        //lb.textContent = "Obesidade grau 2"
        colorRed(res,lb)
        catname = 'cat4'
    }else{
        //lb.textContent = "Obesidade grau 3"
        colorRed(res,lb)
        catname = 'cat5'
    }
    let cat = window.document.getElementById(catname)
    if (catname == 'cat2'){
        cat.style.backgroundColor = '#4CAF50'
    }else{
        cat.style.backgroundColor = '#af4c4c'
    }
    cat.style.color = 'white'
}

function colorRed(res, lb){
    lb.style.color = '#af4c4c'
    res.style.color = '#af4c4c'
}
//console.log("oi")
//imc_cal()