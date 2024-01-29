//Escutando mensagens vindas da extensão
chrome.runtime.onMessage.addListener(function (request) {
    //
    if (request.action === 'executeCode') {
        // YOUR CODE HERE
    }
    //
    const p_list = document.querySelectorAll('p'); // returns NodeList
    const p_array = [...p_list]; // converts NodeList to Array
    if (request.message === true) {
        if (p_array) {
            p_array.forEach((item, index) => {
                item.style.color = "green";
            })
        }
    } else {
        if (p_array) {
            p_array.forEach((item, index) => {
                item.style.color = "revert-layer"; //inherit, initial, unset, revert não funcionam (initial, unset, revert, revert-layer)
            })
        }
    }
    //
    const div_list = document.querySelectorAll('[data-evtid]');
    const div_array = [...div_list];

    const time_list = document.querySelectorAll('[data-evtid] > div > div:nth-child(2) > span');//tempo de jogo
    const time_array = [...time_list];

    // if (div_array){
    //     div_array.forEach((item, index) => {
    //         item.style.backgroundColor = 'red';
    //     })
    // }

    if (time_array) {
        time_array.forEach((item, index) => {
            item.style.backgroundColor = "revert-layer";
            var minutos = item.innerHTML.split(":")[0];
            console.log(minutos);
            if (minutos >= request.tempo) {
                item.style.backgroundColor = 'red';
            }
        })
    }

    //Detectando scroll da página e aplicando o filtro
    const app = document.querySelector('#LiveEventListContainer');
    app.addEventListener('scroll', () => {
        console.log(request.tempo);
        const time_list = document.querySelectorAll('[data-evtid] > div > div:nth-child(2) > span');//tempo de jogo
        const time_array = [...time_list];

        // if (div_array){
        //     div_array.forEach((item, index) => {
        //         item.style.backgroundColor = 'red';
        //     })
        // }

        if (time_array) {
            time_array.forEach((item, index) => {
                item.style.backgroundColor = "revert-layer";
                var minutos = item.innerHTML.split(":")[0];
                console.log(minutos);
                if (minutos >= request.tempo) {
                    item.style.backgroundColor = 'red';
                }
            })
        }
    });
});





//div has attr data-evtid --> document.querySelectorAll('[data-evtid]');

//div has attr data-evtid > div > div attr data-qa[1] > span

//div has attr data-qa='live-event-time' > span