function imc_cal(){
    reset()
    let peso = Number(window.document.getElementById("inPeso").value)
    let altura = Number(window.document.getElementById("inAltura").value)
    let imc =  peso / (altura * altura)
    let res = window.document.getElementById("resposta")
    if (peso === 0 || altura === 0){
        //window.alert("Preencha dos os campos")
        let av = window.document.getElementById("classifica")
        av.style.color = 'red'
        av.textContent = 'Preencha todos os campos'
    }else{
        res.textContent = imc.toFixed(1)
        classifica(imc, res)
    }
    
}

function reset(){
    let res = window.document.getElementById("resposta")
    window.document.getElementById('cat1').style.backgroundColor = 'transparent'
    window.document.getElementById('cat1').style.color = 'black'
    window.document.getElementById('cat2').style.backgroundColor = 'transparent'
    window.document.getElementById('cat2').style.color = 'black'
    window.document.getElementById('cat3').style.backgroundColor = 'transparent'
    window.document.getElementById('cat3').style.color = 'black'
    window.document.getElementById('cat4').style.backgroundColor = 'transparent'
    window.document.getElementById('cat4').style.color = 'black'
    window.document.getElementById('cat5').style.backgroundColor = 'transparent'
    window.document.getElementById('cat5').style.color = 'black'
    res.style.color = 'black'
    res.textContent = '0.0'
}

function classifica(imc, res){
    let lb = window.document.getElementById("classifica")
    let catname
    if(imc<18.5){
        lb.textContent = "Abaixo do peso"
        colorRed(res,lb)
        catname = 'cat1'
    }else if(imc<24.9){
        lb.textContent = "Peso normal"
        lb.style.color = 'green'
        res.style.color = 'green'
        catname = 'cat2'
    }else if(imc<29.9){
        lb.textContent = "Sobrepeso"
        colorRed(res,lb)
        catname = 'cat3'
    }else if(imc<39.9){
        lb.textContent = "Obesidade grau 2"
        colorRed(res,lb)
        catname = 'cat4'
    }else{
        lb.textContent = "Obesidade grau 3"
        colorRed(res,lb)
        catname = 'cat5'
    }
    let cat = window.document.getElementById(catname)
    if (catname == 'cat2'){
        cat.style.backgroundColor = 'green'
    }else{
        cat.style.backgroundColor = 'red'
    }
    cat.style.color = 'white'
}

function colorRed(res, lb){
    lb.style.color = 'red'
    res.style.color = 'red'
}
//console.log("oi")
//imc_cal()