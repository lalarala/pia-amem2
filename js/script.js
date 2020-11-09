const botao = document.querySelector('.botao')
const mensagem = document.getElementById('mensagem')
const urlPost = 'https://news-api-node.herokuapp.com/api/v1/news/936cce4d-110c-40f2-b1c1-26a49cfe3484'
const postFeitos = document.querySelector('.post-feitos')
var novoElemento = document.createElement('p')

function mostrarMensagens() {

    fetch(urlPost)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        if(postFeitos) {
            for(var i = 0; i < data.length; i++) {
                var mensagemNova = document.createTextNode([i + 1] + " - " + data[i].post)
                var novoElemento = document.createElement('p')

                novoElemento.appendChild(mensagemNova)
                postFeitos.appendChild(novoElemento)
            }
        }

    });

}
mostrarMensagens()


function enviarMensagem() {

    if(botao) {
        botao.addEventListener('click', function() {
            var poster = {
                post: mensagem.value
            };
        
            fetch('https://news-api-node.herokuapp.com/api/v1/news/936cce4d-110c-40f2-b1c1-26a49cfe3484',
                {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(poster)
                })
                .then(results => results.json())
                mostrarMensagens()
        })
    }

}
enviarMensagem()

const animacaoDeScrollar = () => {
	const section = document.querySelectorAll('.js-scroll')
	const sessentaPorCentoDaTela = window.innerHeight * 0.6

	function animarAoScrollar() {

		section.forEach((itens) => {
			const distanciaAteOTopo = itens.getBoundingClientRect().top
            const metadeDaTela = distanciaAteOTopo - sessentaPorCentoDaTela
            
			if(metadeDaTela < 0) {
				itens.classList.add('animar')
            }
            
        })
        
	}

	animarAoScrollar()
    window.addEventListener('scroll', animarAoScrollar)
    
}
animacaoDeScrollar()