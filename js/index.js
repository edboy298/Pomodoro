alert('por gentileza se apertar em pare apertar em resetar para poder iniciar novamente')

var tempo;  // Variável global para o intervalo
var minutos = 25;  // Inicializa com 24 minutos
var segundos = 0;  // Inicializa com 0 segundos

function ativarContagem() {

    tempo = setInterval(function() {
        // Atualiza o tempo
        if (segundos === 0) {
            if (minutos === 0) {
                // Quando o tempo acabar, exibe "acabou" e pausa
                document.getElementById('tempo1').innerHTML = "acabou";
                pausarContagem(); // Pausa a contagem
                return;
            }
            minutos--;  // Decrementa o minuto
            segundos = 59;  // Reseta os segundos para 59
        } else {
            segundos--;  // Decrementa os segundos
        }

        // Formata os minutos e segundos para dois dígitos
        let tempoFormatado = (minutos < 10 ? '0' + minutos : minutos) + ':' + (segundos < 10 ? '0' + segundos : segundos);
        document.getElementById('tempo1').innerHTML = tempoFormatado;

    }, 1000);  // Intervalo de 1 segundo
}

function pararContagem() {
    clearInterval(tempo);  // Interrompe a contagem
    document.getElementById('tempo1').innerHTML = "Parou a contagem";  // Exibe a mensagem
}

function pausarContagem() {
    clearInterval(tempo);  // Pausa a contagem
}

function resetarContagem() {
    clearInterval(tempo);  // Limpa o intervalo
    minutos = 25;  // Reseta os minutos para 24
    segundos = 0;  // Reseta os segundos para 0
    document.getElementById('tempo1').innerHTML = "24:00";  // Exibe o tempo resetado
}

function pausaCurta() {
    clearInterval(tempo);  // Limpa o intervalo
    minutos = 5;  // Pausa curta com 0 minutos
    segundos = 0;  // Pausa curta com 5 segundos
    document.getElementById('tempo1').innerHTML = "5";  // Exibe o tempo da pausa curta
    setTimeout(ativarContagem, 5000);  // Após 5 segundos, retoma a contagem
}

function pausaLonga() {
    clearInterval(tempo);  // Limpa o intervalo
    minutos = 15;  // Pausa longa com 0 minutos
    segundos = 0;  // Pausa longa com 20 segundos
    document.getElementById('tempo1').innerHTML = "15";  // Exibe o tempo da pausa longa
    setTimeout(ativarContagem, 20000);  // Após 20 segundos, retoma a contagem
}


