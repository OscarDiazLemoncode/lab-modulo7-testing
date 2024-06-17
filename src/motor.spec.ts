import { vi } from 'vitest';
import {
  comprobarNumero,
  calculaNumCarta,
  calculaValorCarta,
  urlCarta,
} from './motor';
import { Estado, puntuacionInicial, crearNumAleatorio } from './modelo';

// Comprobamos puntuación y asigna un estado cubriendo todos los rangos
describe('comprobarNumero', () => {
  it('puntuacion === 7.5 => estado  es WIN', () => {
    //Arrange
    const estadoEsperado: Estado = 'WIN';
    const puntuacion: number = 7.5;
    vi.spyOn(puntuacionInicial, 'puntuacion', 'get').mockReturnValue(7.5);
    //Act
    const win = comprobarNumero(puntuacion);
    //Assert
    expect(win).toBe(estadoEsperado);
  });
  it('puntuacion > 7.5 => estado  es GAMEOVER', () => {
    //Arrange
    const estadoEsperado: Estado = 'GAMEOVER';
    const puntuacion: number = 10;
    //Act
    const win = comprobarNumero(puntuacion);
    //Assert
    expect(win).toBe(estadoEsperado);
  });
  it('puntuacion <= 4 estado  es CONSERVADOR', () => {
    //Arrange
    const estadoEsperado: Estado = 'CONSERVADOR';
    const puntuacion: number = 3;
    //Act
    const win = comprobarNumero(puntuacion);
    //Assert
    expect(win).toBe(estadoEsperado);
  });
  it('puntuacion > 4 && puntuacion < 6  es CAGADO', () => {
    //Arrange
    const estadoEsperado: Estado = 'CAGADO';
    const puntuacion: number = 5;
    //Act
    const win = comprobarNumero(puntuacion);
    //Assert
    expect(win).toBe(estadoEsperado);
  });
  it('puntuacion >= 6 && puntuacion < 7.5  es CASI', () => {
    //Arrange
    const estadoEsperado: Estado = 'CASI';
    const puntuacion: number = 6;
    //Act
    const win = comprobarNumero(puntuacion);
    //Assert
    expect(win).toBe(estadoEsperado);
  });
});

// Comprobamos aristas de crearNumAleatorio entre 0 y 10
describe('crearNumAleatorio', () => {
  it('Comprobar que numAleatorio es 0 ', () => {
    //Arrange
    const numeroEsperado: number = 0;
    vi.spyOn(global.Math, 'random').mockReturnValue(0);
    //Act
    const resultado = crearNumAleatorio();
    //Assert
    expect(resultado).toBe(numeroEsperado);
  });
  it('Comprobar que numAleatorio es 10 ', () => {
    //Arrange
    const numeroEsperado: number = 10;
    vi.spyOn(global.Math, 'random').mockReturnValue(1);
    //Act
    const resultado = crearNumAleatorio();
    //Assert
    expect(resultado).toBe(numeroEsperado);
  });
  it('Comprobar que numAleatorio es 50 ', () => {
    //Arrange
    const numeroEsperado: number = 50;
    vi.spyOn(global.Math, 'random').mockReturnValue(5);
    //Act
    const resultado = crearNumAleatorio();
    //Assert
    expect(resultado).toBe(numeroEsperado);
  });
});

// Comprobamos calcula nº de la carta
describe('calculaNumCarta', () => {
  it('if numAleatorio <= 7 return numeAleatorio', () => {
    //Arrange
    const numeroEsperado: number = 7;
    //Act
    const resultado = calculaNumCarta(numeroEsperado);
    //Assert
    expect(resultado).toBe(numeroEsperado);
  });
  it('if numAleatorio > 7 => return numAleatorio += 2', () => {
    //Arrange
    const numeroEsperado: number = 10;
    const numero: number = 8;
    //Act
    const resultado = calculaNumCarta(numero);
    //Assert
    expect(resultado).toBe(numeroEsperado);
  });
});

//Comprobamos el valor de la carta
describe('calculaValorCarta', () => {
  it('Calculamos el valor de la carta si numAleatorio <= 7 return numAleatorio (su propio valor)', () => {
    //Arrange
    const numeroEsperado: number = 6;
    //Act
    const resultado = calculaValorCarta(numeroEsperado);
    //Assert
    expect(resultado).toBe(numeroEsperado);
  });
  it('Calculamos el valor de la carta si numAleatorio > 7 return 0.5 (para sota, caballo y rey)', () => {
    //Arrange
    const numeroEsperado: number = 0.5;
    //Act
    const resultado = calculaValorCarta(numeroEsperado);
    //Assert
    expect(resultado).toBe(numeroEsperado);
  });
});

// Comprobamos url de la carta
describe('urlCarta', () => {
  it('En función del valor obtenido de cada carta mostramos la urls de su palo correspondiente => AS', () => {
    // Arrange
    const urlAs: string =
      'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg';
    const numeroEsperadoAs: number = 1;
    // Act
    const resultado = urlCarta(numeroEsperadoAs);
    // Assert
    expect(resultado).toBe(urlAs);
  });

  it('En función del valor obtenido de cada carta mostramos la urls de su palo correspondiente => DOS', () => {
    // Arrange
    const urlDos: string =
      'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg';
    const numeroEsperadoDos: number = 2;
    // Act
    const resultado = urlCarta(numeroEsperadoDos);
    // Assert
    expect(resultado).toBe(urlDos);
  });

  it('En función del valor obtenido de cada carta mostramos la urls de su palo correspondiente => TRES', () => {
    // Arrange
    const urlTres: string =
      'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg';
    const numeroEsperadoTres: number = 3;
    // Act
    const resultado = urlCarta(numeroEsperadoTres);
    // Assert
    expect(resultado).toBe(urlTres);
  });

  it('En función del valor obtenido de cada carta mostramos la urls de su palo correspondiente => CUATRO', () => {
    // Arrange
    const urlCuatro: string =
      'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg';
    const numeroEsperadoCuatro: number = 4;
    // Act
    const resultado = urlCarta(numeroEsperadoCuatro);
    // Assert
    expect(resultado).toBe(urlCuatro);
  });

  it('En función del valor obtenido de cada carta mostramos la urls de su palo correspondiente => CINCO', () => {
    // Arrange
    const urlCinco: string =
      'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg';
    const numeroEsperadoCinco: number = 5;
    // Act
    const resultado = urlCarta(numeroEsperadoCinco);
    // Assert
    expect(resultado).toBe(urlCinco);
  });

  it('En función del valor obtenido de cada carta mostramos la urls de su palo correspondiente => SEIS', () => {
    // Arrange
    const urlSeis: string =
      'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg';
    const numeroEsperadoSeis: number = 6;
    // Act
    const resultado = urlCarta(numeroEsperadoSeis);
    // Assert
    expect(resultado).toBe(urlSeis);
  });

  it('En función del valor obtenido de cada carta mostramos la urls de su palo correspondiente => SIETE', () => {
    // Arrange
    const urlSiete: string =
      'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg';
    const numeroEsperadoSiete: number = 7;
    // Act
    const resultado = urlCarta(numeroEsperadoSiete);
    // Assert
    expect(resultado).toBe(urlSiete);
  });

  it('En función del valor obtenido de cada carta mostramos la urls de su palo correspondiente => SOTA', () => {
    // Arrange
    const urlSota: string =
      'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg';
    const numeroEsperadoSota: number = 8;
    // Act
    const resultado = urlCarta(numeroEsperadoSota);
    // Assert
    expect(resultado).toBe(urlSota);
  });

  it('En función del valor obtenido de cada carta mostramos la urls de su palo correspondiente => CABALLO', () => {
    // Arrange
    const urlCaballo: string =
      'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg';
    const numeroEsperadoSota: number = 9;
    // Act
    const resultado = urlCarta(numeroEsperadoSota);
    // Assert
    expect(resultado).toBe(urlCaballo);
  });

  it('En función del valor obtenido de cada carta mostramos la urls de su palo correspondiente => REY', () => {
    // Arrange
    const urlRey: string =
      'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg';
    const numeroEsperadoRey: number = 10;
    // Act
    const resultado = urlCarta(numeroEsperadoRey);
    // Assert
    expect(resultado).toBe(urlRey);
  });

  it('Comprobamos arista menor si no es ninguno de los casos anteriores => 0', () => {
    // Arrange
    const urlBack: string =
      'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg';
    const urlBackEsperada: number = 0;
    // Act
    const resultado = urlCarta(urlBackEsperada);
    // Assert
    expect(resultado).toBe(urlBack);
  });

  it('Comprobamos arista superior si no es ninguno de los casos anteriores => 15', () => {
    // Arrange
    const urlBack: string =
      'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg';
    const urlBackEsperada: number = 15;
    // Act
    const resultado = urlCarta(urlBackEsperada);
    // Assert
    expect(resultado).toBe(urlBack);
  });
});
