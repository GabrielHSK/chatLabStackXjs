var listaMensagens = [];

function adicionarMensagem(apelido, mensagem) {
    listaMensagens.unshift({
        "apelido": apelido,
        "mensagem": mensagem
    });
}

function formatarMensagens() {
    var html = "";
    for (var i = 0; i < listaMensagens.length; i++) {
        var mensagem = listaMensagens[i];
        html += '<div class="chat-message">';
        html += '<span class="chat-message-apelido">' + mensagem.apelido + '</span>';
        html += 'span class=chat-message-item">' + mensagem.mensagem + '</span';
        html += '</div>';
    }
    return html;
}
function atualizarHTML() {
    var chatMessagesDiv = document.getElementById('chat-messages');
    chatMessagesDiv.innerHTML = formatarMensagens();
}
 function commitMessageClickHandler() {
    let mensagemInput = document.getElementById('message-input');
    if(mensagemInput.value.trim().length == 0) {
        mensagemInput.focus()
        return
    }

    adicionarMensagem("Gabriel: ", mensagemInput.value)
    atualizarHTML()
    document.getElementById("message-input").value = ``
 }