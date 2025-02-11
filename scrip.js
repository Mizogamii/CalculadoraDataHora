let menorOuMaior = 0;
document.querySelector("button").addEventListener("click", function(){
    const dataInicio = new Date(document.getElementById("date1").value);
    const dataFim = new Date(document.getElementById("date2").value);
    const horaInicio = document.getElementById("time1").value;
    const horaFim = document.getElementById("time2").value;
    
    numDias = calculandoData(dataInicio, dataFim);

    if(numDias){
        numHoras = calculandoHora(horaInicio, horaFim);
        if(menorOuMaior === 1){ 
            miliTotais = numDias - numHoras; 
        }else{
            miliTotais = numDias + numHoras; 
        }

        let diasTotais = Math.trunc(miliTotais / (1000 * 60 * 60 * 24));
        restoDias = miliTotais % (1000 * 60 * 60 * 24);

        let horas = Math.trunc(restoDias / (1000 * 60 * 60));
        restoHoras = restoDias % (1000 * 60 * 60)

        let minutos = Math.trunc(restoHoras / (1000 * 60)); 
        restoMin = restoHoras % (1000 * 60)


        let horasTotais = Math.trunc(miliTotais / (1000 * 60 * 60));
        let minutosTotais = Math.trunc(miliTotais / (1000 * 60));
    
        console.log(`Dias: ${diasTotais}, Horas: ${horas}, Minutos: ${minutos}`);

        document.getElementById("result1").textContent = (`${diasTotais} dias, ${horas} hora(s), ${minutos} minuto(s).`);
        
        document.getElementById("result2").textContent = (`Horas totais: ${horasTotais}`);
        
        document.getElementById("result3").textContent = (`Minutos totais: ${minutosTotais}`);

        document.querySelector(".resultados").style.visibility = "visible";

    }
});

function calculandoData(date1 , date2){
    let miliTime1 =  date1.getTime()
    let miliTime2 = date2.getTime()

    if(miliTime1 > miliTime2){
        alert("Erro! Insira uma data menor na primeira opção!");
        return;
    }else{
        let numeroDias = (Math.abs(miliTime2 - miliTime1));
        console.log(numeroDias);
        return numeroDias;
    }
}

function calculandoHora(time1, time2){
    let diferenca = 0;
    
    let[horas1, minutos1] = time1.split(":").map(Number);
    let[horas2, minutos2] = time2.split(":").map(Number);
    
    let temp1 = (horas1 * 60 * 60 * 1000) + (minutos1 * 60 * 1000);
    let temp2 = (horas2 * 60 * 60 * 1000) + (minutos2 * 60 * 1000)

    if(temp1 > temp2){
        diferenca = Math.abs((temp1) - (temp2));
        menorOuMaior = 1;
    }else{
        diferenca = Math.abs((temp2) - (temp1));
        menorOuMaior = 0;
    }

    return diferenca;
}
