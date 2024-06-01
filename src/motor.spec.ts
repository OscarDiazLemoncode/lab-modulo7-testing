import { vi } from 'vitest';
import { comprobarNumero, calculaNumCarta, calculaValorCarta } from './motor';
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
