import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.105:3333'
});

export default api;

/**
 * iOS com Emulator: localhost
 * iOS com fisico: IP da maquina
 * Android com emulador: localhost (adb reverse)
 * Android com emulador: 10.0.2.2 (Android Studio)
 * Android com emulador: 10.0.3.2 (genymotion)
 * Android com físico: IP da maquina 
 */