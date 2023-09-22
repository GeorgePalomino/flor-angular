import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-flor',
  templateUrl: './flor.component.html',
  styleUrls: ['./flor.component.scss']
})
export class FlorComponent implements OnInit {
  

  constructor(private musicService: MusicService) { 
    
  }

  ngOnInit(): void {
    
  }

}
