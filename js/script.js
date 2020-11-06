function enviarMensagem() {
    const botao = document.querySelector('.botao')
    const mensagem = document.getElementById('mensagem')
    const urlPost = 'https://news-api-node.herokuapp.com/api/v1/news/936cce4d-110c-40f2-b1c1-26a49cfe3484'

    if(botao) {
        botao.addEventListener('click', function() {
            fetch(urlPost)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                for(var i = 0; i < data.length; i++) {
                    console.log(data[i].post);
                }
            });
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