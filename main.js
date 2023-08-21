function playSom(idAudio) 
{
    const elemento = document.querySelector(idAudio);

    

    if (elemento != null && elemento.localName === 'audio') 
    {
        elemento.play(); 
    }

    else
    {
        alert('Elemento não encontrado');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++) 
{
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick= function()
    {
        playSom(idAudio);

    }

    tecla.onkeydown = function(evento)
    {  
        if (evento.code === 'Space' || evento.code === 'Enter') 
        {
            tecla.classList.add('ativa');
        }
        
    }
    tecla.onkeydown = function()
    {
        tecla.classList.remove('ativa');
    }
    
    
    
}