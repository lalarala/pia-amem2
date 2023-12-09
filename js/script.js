const botao = document.querySelector('.botao')
const mensagem = document.getElementById('mensagem')
const urlPost = 'https://news-api-node.herokuapp.com/api/v1/news/bbef5194-36be-4a5f-84d7-645a88368209'
const postFeitos = document.querySelector('.post-feitos')

const novosElementos = (mensagemNova, novoElementoAtribuido) => {
    const novoElemento = novoElementoAtribuido
    const novaMensagem = mensagemNova
    novoElemento.appendChild(novaMensagem)
    postFeitos.appendChild(novoElemento)  
}

function mostrarMensagens() {

    fetch(urlPost)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        if(postFeitos) {
            data.forEach(dados => {
                var mensagemNova = document.createTextNode(dados.post)
                var novoElemento = document.createElement('p')
                novosElementos(mensagemNova, novoElemento)
            });
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
        
            fetch(urlPost, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(poster)
            })
            .then(results => results.json())
            .then(function(data) {

                if(postFeitos) {
                    var mensagemNova = document.createTextNode(data.post)
                    var novoElemento = document.createElement('p')
                    novosElementos(mensagemNova, novoElemento)
                }
        
            });
            mensagem.value = ''
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








PayStandCheckout.checkoutComplete = function (data) {
    console.log("custom checkout complete:", data);
    alert("Thank you for payment");
  };
  PayStandCheckout.checkoutFailed = function (data) {
    console.log("custom checkout failed:", data);
    alert("We are sorry for the technical difficulties")
  };
  PayStandCheckout.init({
    "publishableKey": "eml9jvz7dsbglwtx53xtu9tl",
    "checkout_domain": "https://checkout.paystand.co/v2/",
    "domain": "https://api.paystand.co",
    "total": "10.00",
    "currency": "USD",
    "features": {
      "cards": true,
      "echeck": {
        "enabled": true
      }
    },
    "ui": {
      "billing": {
        "show": true,
        "autoFill": {
          "email": "test@test-email.com",
          "fullName": "Test User",
          "street1": "123 Test St",
          "street2": "Apt 3G",
          "city": "Test",
          "postalCode": "95060",
          "state": "CA",
          "country": "USA"
        }
      }
    },
    "meta": {
      "invoice" : {
        "number": "#CIN-001",
        "amount" : 10.00,
        "date" : "2015-09-10T04:00:00+00:00",
        "customer": "Matt Ouellette"
      },
      "demo": "https://codepen.io/paystand/pen/BKoxWK"
    }
  });
  hljs.initHighlightingOnLoad();




  $('.input-cart-number').on('keyup change', function(){
    $t = $(this);
    
    if ($t.val().length > 3) {
      $t.next().focus();
    }
    
    var card_number = '';
    $('.input-cart-number').each(function(){
      card_number += $(this).val() + ' ';
      if ($(this).val().length == 4) {
        $(this).next().focus();
      }
    })
    
    $('.credit-card-box .number').html(card_number);
  });
  
  $('#card-holder').on('keyup change', function(){
    $t = $(this);
    $('.credit-card-box .card-holder div').html($t.val());
  });
  
  $('#card-holder').on('keyup change', function(){
    $t = $(this);
    $('.credit-card-box .card-holder div').html($t.val());
  });
  
  $('#card-expiration-month, #card-expiration-year').change(function(){
    m = $('#card-expiration-month option').index($('#card-expiration-month option:selected'));
    m = (m < 10) ? '0' + m : m;
    y = $('#card-expiration-year').val().substr(2,2);
    $('.card-expiration-date div').html(m + '/' + y);
  })
  
  $('#card-ccv').on('focus', function(){
    $('.credit-card-box').addClass('hover');
  }).on('blur', function(){
    $('.credit-card-box').removeClass('hover');
  }).on('keyup change', function(){
    $('.ccv div').html($(this).val());
  });
  
  
  /*--------------------
  CodePen Tile Preview
  --------------------*/
  setTimeout(function(){
    $('#card-ccv').focus().delay(1000).queue(function(){
      $(this).blur().dequeue();
    });
  }, 500);
  
  /*function getCreditCardType(accountNumber) {
    if (/^5[1-5]/.test(accountNumber)) {
      result = 'mastercard';
    } else if (/^4/.test(accountNumber)) {
      result = 'visa';
    } else if ( /^(5018|5020|5038|6304|6759|676[1-3])/.test(accountNumber)) {
      result = 'maestro';
    } else {
      result = 'unknown'
    }
    return result;
  }
  
  $('#card-number').change(function(){
    console.log(getCreditCardType($(this).val()));
  })*/

