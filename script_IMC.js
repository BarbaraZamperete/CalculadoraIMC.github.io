function imc_cal(){
    let peso = Number(window.document.getElementById("peso").value)
    let altura = Number(window.document.getElementById("altura").value)
    let imc =  peso / (altura * altura)
    let res = window.document.getElementById("imc_resposta")
    if (peso === 0 || altura === 0){
        //window.alert("Preencha dos os campos")
        //window.document.getElementById("peso").style.backgroundColor = 'red'
    }else{
        res.textContent = imc.toFixed(2)
    }
    
    
}

