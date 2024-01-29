//Enviando mensagens DA extensão PARA o conteúdo
function sendStatus(val) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (activeTabs) {
        chrome.tabs.sendMessage(activeTabs[0].id, val);
    });
}


//Pegando o status do toggle button
const checkbox = document.querySelector('input#checkP');
checkbox.addEventListener('change', () => {
    const status = checkbox.checked;
    sendStatus(status);
});

//Pegando a ação do botão Filtrar
const filtrar = document.querySelector('button#filtrar');
filtrar.addEventListener('click', () => {
    const tempo = document.querySelector('input#tempo').value;
    if (tempo){
        const valores = { tempo: tempo };
        sendStatus(valores);
    }
});