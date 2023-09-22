import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private audio: HTMLAudioElement;

  constructor() {
    this.audio = new Audio('assets/Musica/Flores Amarillas2.mp3');
    this.audio.loop = true; // Repetir la música indefinidamente
    this.audio.play(); // Reproducir automáticamente al iniciar la aplicación
  }
}
