let slider
let sliderPositions
let aux = 0

function exibirOcultarBotao() {
  var arrow = document.getElementById("arrow");
  
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    arrow.classList.add("mostrar");
  } else {
    arrow.classList.remove("mostrar");
  }
}

function voltarAoTopo() {
  if ('scrollBehavior' in document.documentElement.style) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  } else {
    document.body.scrollTop = 0; // Para navegadores mais antigos
    document.documentElement.scrollTop = 0; // Para navegadores modernos
  }
}

function controlShowButton() {
  if(aux === 1){
    document.getElementById('buttonSliderR').style.display = 'block'
    document.getElementById('buttonSliderL').style.display = 'block'
    document.getElementById('buttons').style.justifyContent = 'space-between'
  }
  if(aux === 0) {
    document.getElementById('buttonSliderL').style.display = 'none'
    document.getElementById('buttons').style.justifyContent = 'end'
  }
  if(aux === 2) {
    document.getElementById('buttonSliderR').style.display = 'none'
    document.getElementById('buttons').style.justifyContent = 'start'
  }
}

function renderSlide() {
  controlShowButton()
  const larguraTela = window.innerWidth;
  sliderPositions = larguraTela > 800 ? ['-105%', '0%', '105%'] : ['-105%', '0%', '112.5%']
  slider.style.right = sliderPositions[aux]
}

function movSlider(direction) {
  if (direction === 'right') aux++
  if (direction === 'left') aux--
  controlShowButton()
  slider.style.transition = '0.75s'
  slider.style.right = sliderPositions[aux]
}


function headerControl(tec, classN) {
  document.getElementById('description').style.display = 'none'
  const tecnologias = Array.from(document.getElementsByClassName(classN))
  tecnologias.map((m, i)=> {
    if(i === tec) {
      m.style.display = 'block'
    } else {
      m.style.display = 'none'
    }
  })
}

document.addEventListener("DOMContentLoaded", () => {
  console.log(document.getElementsByClassName('test')[0]);
  document.getElementById('description').style.display = 'block'
  document.getElementById('Slider').classList.add('slider')

  const displayNone = Array.from(document.getElementsByClassName('displayNoneJS'))
  displayNone.map((tec)=> {
    tec.style.display = 'none'
  })

  slider = document.getElementById('Slider')
  renderSlide()
  controlShowButton()
});

window.addEventListener('resize', function() {
  renderSlide()
  controlShowButton()
});

window.onscroll = function() {
  exibirOcultarBotao();
};