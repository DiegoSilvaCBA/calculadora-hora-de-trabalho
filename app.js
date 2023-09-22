let horasDiarias = document.querySelector("#horas-diarias");
let diasMes = document.querySelector("#dias-mes");
let despesas = document.querySelector("#despesas");
let equipamento = document.querySelector("#equipamento");

let resultado = document.querySelector("#valor-total");
let escondido = document.querySelector("#resultado");


const enviar = document.querySelector("#calcular")


enviar.addEventListener("click", function(evento){
    evento.preventDefault()

    if(horasDiarias.value == "" || diasMes.value == "" || despesas.value == "" || equipamento.value == ""){
        alert("Preencha todos os campos vazios!");
    } else{
        // Valor do equipamento pago por mês durante 1 ano
        let equipamentoMes = (Number(equipamento.value) / 12);

        // Despesas mensais + equipamento mensal
        let despesasTotais = Number(despesas.value) + equipamentoMes;

        // Horas trabalhadas por mês
        let horasMes =Number(horasDiarias.value) * Number(diasMes.value);

        const valorHora = (despesasTotais / horasMes / 0.5).toFixed(2);

        console.log(valorHora)
        escondido.classList.remove("hidden")
        resultado.innerText = `R$ ${valorHora}`
    }

});