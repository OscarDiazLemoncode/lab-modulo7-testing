import './style.css';

import { muestraPuntuacion, desactivarBtnPlantarse, eventos } from './ui';

document.addEventListener('DOMContentLoaded', () => {
  muestraPuntuacion(0);
  eventos();
  desactivarBtnPlantarse();
});
