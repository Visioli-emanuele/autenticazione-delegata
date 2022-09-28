import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBk8ecNKsFk-jB6sGoecWWwKjvYr-6Wl46BdOxBIne67j6at3uRMvVdRnvKD1T1470spN4FCK58E_KNsuV-zTM6WbjQUfquIVjTjmQ24KyFXYMG9zVqLeG95GUBl1K-xXE9_UtMvSVuPUtVHnucLO3bkbT_YR5VE3GQKsKqk61LWTdW2slM5tvmZOeAL05H7VY'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
  getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBk8ecNKsFk-jB6sGoecWWwKjvYr-6Wl46BdOxBIne67j6at3uRMvVdRnvKD1T1470spN4FCK58E_KNsuV-zTM6WbjQUfquIVjTjmQ24KyFXYMG9zVqLeG95GUBl1K-xXE9_UtMvSVuPUtVHnucLO3bkbT_YR5VE3GQKsKqk61LWTdW2slM5tvmZOeAL05H7VY'
    });
    
    return this.http.get(url, { headers });
  }

}