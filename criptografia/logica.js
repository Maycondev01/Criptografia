function criptografa() {
    var inMensagem = document.getElementById("inMensagem");
    var resultado = document.getElementById("resultado");

    var mensagem = inMensagem.value;

    var mensagemPar = "";
    var mensagemImpar = "";

    for(var i = 0; i < mensagem.length; i++) {
        if(i % 2 === 0) {
            mensagemPar += mensagem[i]
        } else {
            mensagemImpar += mensagem[i]
        }
    }

    var msgCriptografada = mensagemPar + mensagemImpar;
    resultado.value = msgCriptografada;
}

function descriptografa() {
    var inMensagem = document.getElementById("inMensagem");
    var mensagem = inMensagem.value;

    var metade = Math.ceil(mensagem.length / 2);

    var msgDescriptografada = "";

    for(var i = 0; i < metade; i++) {
        msgDescriptografada += mensagem[i] + mensagem[i + metade] || '';
    }

    document.getElementById("resultado").value = msgDescriptografada;

}

function limpar() {
    document.getElementById("inMensagem").value = "";
    document.getElementById("resultado").value = "";
}


var btCrip = document.getElementById("btCrip");
btCrip.addEventListener("click", criptografa);

var btDescrip = document.getElementById("btDescrip");
btDescrip.addEventListener("click", descriptografa);

var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limpar);