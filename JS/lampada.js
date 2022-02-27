
document.body.style.backgroundColor = 'black';

function alterarEstado (temp2) {
    console.log('disparou');
    if (temp2 == true) {

        console.log('entrou na condição');
        document.body.style.backgroundColor = 'white';
        


    } else {

        console.log('passou por aqui também');
        document.body.style.backgroundColor = 'black';
    }


}

