document.querySelector("button").addEventListener("click", function(){
    const dataInicio = new Date(document.getElementById("date1").value);
    const dataFim = new Date(document.getElementById("date2").value);
    const horaInicio = document.getElementById("time1").value;
    const horaFim = document.getElementById("time2").value;

    numDias = calculandoData(dataInicio, dataFim);

    numHoras = calculandoHora(horaInicio, horaFim);

});

function calculandoData(date1 , date2){
    /*let numeroDias = ((Math.abs(date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24)));
    return numeroDias;*/


    let miliTime1 =  date1.getTime()
    let miliTime2 = date2.getTime()

    console.log(miliTime1);
    console.log(miliTime2);
    
    let numeroDias = (Math.abs(miliTime2 - miliTime1) / (1000 * 60 * 60 * 24));
    console.log(numeroDias);
    return numeroDias;
}

function calculandoHora(time1, time2){
    let[horas1, minutos1] = time1.split(":").map(Number);
    let[horas2, minutos2] = time2.split(":").map(Number);

    const diferenca = Math.abs(((horas1 * 60 * 60 * 1000) + (minutos1 * 60 * 1000)) - ((horas2 * 60 * 60 * 1000) + (minutos2 * 60 * 1000)));

    return diferenca;
}