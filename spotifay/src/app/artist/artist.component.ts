import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { SpotifyService } from '../spotify.service';
import { Observable } from 'rxjs';
import {Location} from '@angular/common'

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})

export class ArtistComponent implements OnInit {
  //Osserva gli eventi sulla route tracks, restituisce la ParamMap che contiene tutti i   
  //parametri passati all’url
  routeObs: Observable<ParamMap> | undefined; 

  artist : any; //Qui salverò la traccia selezionata
  spotifyServiceObs: Observable<Object>= undefined!;
  
  //Usiamo la dependency injection per farci mandare i moduli del routing e dello    
  //SpotifyService
  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private service: SpotifyService, 
    private location: Location) { }


  ngOnInit(): void {
    //Ottengo l'observable che notifica le informazioni sulla route attiva
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  //Ogni volta che viene invocata la route tracks/:id, l'observable richiama questo metodo
  getRouterParam = (params: ParamMap) =>
  {
  let atistId = params.get('id'); //Ottengo l'id dai parametri
  console.log (atistId, this.artist); //Stampo su console
  //spotifyServiceObs va dichiarato
     this.spotifyServiceObs = this.service.getArtist(atistId!) ;
     this.spotifyServiceObs.subscribe((data)=>this.artist = data)
   }
   back() : void
   {
     this.location.back();
   }
     
}
