import { puntuacionInicial, crearNumAleatorio, Estado } from './modelo';

import {
  calculaValorCarta,
  calculaNumCarta,
  urlCarta,
  comprobarNumero,
} from './motor';

// Mapea coincidencia de valor de carta con su url y muestra carta
export const mostrarCarta = (numAleatorio: number) => {
  const url = urlCarta(numAleatorio);
  // Img carta que será visible /
  const CARTA_UP_IMG = document.querySelector('.carta_levantada>img');
  CARTA_UP_IMG !== null &&
  CARTA_UP_IMG !== undefined &&
  CARTA_UP_IMG instanceof HTMLImageElement
    ? CARTA_UP_IMG.setAttribute('src', url)
    : console.error('No muestra carta con urlCarta');
};

// Mostramos puntuación como string
export const muestraPuntuacion = (valorCarta: number) => {
  let mostrarPuntuacion = document.querySelector('.mostrar_puntuacion');
  puntuacionInicial.puntuacion += valorCarta;

  mostrarPuntuacion !== null &&
  mostrarPuntuacion !== undefined &&
  mostrarPuntuacion instanceof HTMLHeadingElement
    ? (mostrarPuntuacion.textContent = puntuacionInicial.puntuacion.toString())
    : console.error('No se puede mostrar la puntuación');
};

// Mostrar mensajes en función de la puntuación
export const texto = () => {
  let texto = document.querySelector('.texto_avisos');
  return texto;
};

// Evalua estado en función de comprobarNumero y muestra texto según la puntuación
export const mostrarMensajes = (estado: string) => {
  let mensaje = texto();
  if (
    mensaje !== null &&
    mensaje !== undefined &&
    mensaje instanceof HTMLHeadingElement
  ) {
    switch (estado) {
      case 'CONSERVADOR':
        mensaje.textContent = 'Has sido muy conservador 😱';
        break;
      case 'CAGADO':
        mensaje.textContent = 'Te ha entrado el canguelo eh?😵';
        break;
      case 'CASI':
        mensaje.textContent = 'Casi casi...😬';
        break;
      case 'WIN':
        mensaje.textContent = '¡ Lo has clavado! ¡Enhorabuena!😉';
        break;
      case 'GAMEOVER':
        mensaje.textContent = '😵 GAME OVER 😵';
        break;
      default:
        console.error('No se ha ejecutado el switch en mostrarMensajes');
        break;
    }
  } else {
  }
};

// Deshabilitar btn pedirCarta
export const desactivarBtnPedirCarta = () => {
  const pedirCarta = document.querySelector('.pedir_carta');
  pedirCarta !== null &&
  pedirCarta !== undefined &&
  pedirCarta instanceof HTMLButtonElement
    ? (pedirCarta.disabled = true)
    : console.error('No se puede desactivar desactivarBtnPedirCarta ');
};

// Deshabilitar btn mePlanto
export const desactivarBtnPlantarse = () => {
  const btnPlantarse = document.querySelector('.btn_plantarse');
  btnPlantarse !== null &&
  btnPlantarse !== undefined &&
  btnPlantarse instanceof HTMLButtonElement
    ? (btnPlantarse.disabled = true)
    : console.error('No se puede desactivar desactivarBtnPlantarse ');
};

// Habilitar btn mePlanto
export const activarBtnPlantarse = () => {
  const btnPlantarse = document.querySelector('.btn_plantarse');
  btnPlantarse !== null &&
  btnPlantarse !== undefined &&
  btnPlantarse instanceof HTMLButtonElement
    ? (btnPlantarse.disabled = false)
    : console.error('No se puede activar activarBtnPlantarse ');
};

// Gestiona cada click de btn pedir carta
export const iniciarPartida = () => {
  const numAleatorio = crearNumAleatorio();
  const numAleatorioValor = calculaValorCarta(numAleatorio);
  calculaValorCarta(numAleatorio);
  calculaNumCarta(numAleatorio);
  urlCarta(numAleatorio);
  mostrarCarta(numAleatorio);
  muestraPuntuacion(numAleatorioValor);
  animacionPuntuacionCarta(numAleatorioValor);
  const estado = comprobarNumero(puntuacionInicial.puntuacion);
  comprobarJuego(estado);
  activarBtnPlantarse();
};

// Gestionar game over
export const gameOver = () => {
  desactivarBtnPedirCarta();
  reiniciarJuego();
  desactivarBtnPlantarse();
};

// Gestionar win
export const winGame = () => {
  desactivarBtnPedirCarta();
  reiniciarJuego();
  desactivarBtnPlantarse();
};

// Gestionar me planto
export const mePlanto = () => {
  const estado: Estado = comprobarNumero(puntuacionInicial.puntuacion);
  mostrarMensajes(estado);
  desactivarBtnPlantarse();
  reiniciarJuego();
  desactivarBtnPedirCarta();
  verSiguienteCarta();
};

// Comprobar si el juego es win o gameover
export const comprobarJuego = (estado: Estado) => {
  switch (estado) {
    case 'WIN':
      winGame();
      mostrarMensajes(estado);
      break;
    case 'GAMEOVER':
      gameOver();
      mostrarMensajes(estado);
      break;
    default:
      break;
  }
};

// Reiniciar juego
export const reiniciarJuego = () => {
  const btnReloadPage = document.querySelector('.btn_reload');
  if (
    btnReloadPage !== null &&
    btnReloadPage !== undefined &&
    btnReloadPage instanceof HTMLButtonElement
  ) {
    btnReloadPage.style.display = 'block';
    btnReloadPage.addEventListener('click', () => {
      window.location.reload();
    });
  }
};

// Dejar fijar la puntuacion de la siguiente carta una vez te has plantado
export const puntuacionSiguienteCarta = (numAleatorioValor: number): void => {
  const valorSiguienteCarta = document.querySelector('.puntuacion_futuro');
  const total = puntuacionInicial.puntuacion + numAleatorioValor;

  valorSiguienteCarta !== null &&
  valorSiguienteCarta !== undefined &&
  valorSiguienteCarta instanceof HTMLHeadingElement
    ? (valorSiguienteCarta.textContent = total.toString())
    : console.error('No se ha ejecutado puntuacionSiguienteCarta');
};

// Ver la siguiente carta después de plantarse
const verSiguienteCarta = () => {
  const btnFuturo = document.querySelector('.btn_futuro');
  const numAleatorio = crearNumAleatorio();
  const numAleatorioValor = calculaValorCarta(numAleatorio);
  if (
    btnFuturo !== null &&
    btnFuturo !== undefined &&
    btnFuturo instanceof HTMLButtonElement
  ) {
    btnFuturo.style.display = 'block';
    btnFuturo.addEventListener('click', () => {
      mostrarCarta(numAleatorio);
      animacionPuntuacionCarta(numAleatorioValor);
      btnFuturo.disabled = true;
      puntuacionSiguienteCarta(numAleatorioValor);
    });
  }
};

// Animación mostrar puntuación de la carta
export const animacionPuntuacionCarta = (numAleatorio: number): void => {
  const elPuntuacionCarta = document.querySelector('.show_score');
  if (
    elPuntuacionCarta !== null &&
    elPuntuacionCarta !== undefined &&
    elPuntuacionCarta instanceof HTMLSpanElement
  ) {
    elPuntuacionCarta.textContent = `+${numAleatorio.toString()}`;
    elPuntuacionCarta.classList.add('show_score_animation');
    elPuntuacionCarta.animate(
      [
        //from
        { opacity: '0' },
        { opacity: '1' },
        { zIndex: '1' },
        { transform: 'translate(-2vw, -6vh)' },
      ],
      {
        // opciones de sincronización
        duration: 1000,
        easing: 'ease-in',
      }
    );
  }
};

export const eventos = () => {
  // Elemnto carta visible
  const CARTA_UP = document.querySelector('.carta_levantada');
  // Boton pedir carta
  const pedirCarta = document.querySelector('.pedir_carta');
  if (
    pedirCarta !== null &&
    pedirCarta !== undefined &&
    pedirCarta instanceof HTMLButtonElement &&
    CARTA_UP !== null &&
    CARTA_UP !== undefined &&
    CARTA_UP instanceof HTMLElement
  ) {
    pedirCarta.addEventListener('click', () => {
      iniciarPartida();
      CARTA_UP.classList.add('mostrar_carta');
    });
  } else {
    console.error('No se ha ejecutado el evento pedirCarta');
  }

  // Btn plantarse
  const btnPlantarse = document.querySelector('.btn_plantarse');
  if (
    btnPlantarse != null &&
    btnPlantarse != undefined &&
    btnPlantarse instanceof HTMLButtonElement
  ) {
    btnPlantarse.addEventListener('click', () => {
      mePlanto();
    });
  } else {
    console.error('No ha podido plantarse');
  }
};
