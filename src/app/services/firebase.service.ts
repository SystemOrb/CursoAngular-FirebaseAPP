import { Injectable } from '@angular/core';
import { Hero } from './hero.interface';
import { Http, Headers } from '@angular/http';
import { map } from "rxjs/operators"; // MAP operator
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

urlInsert:string = "https://fir-app-55f88.firebaseio.com/heroes.json"
urlUpdate:string = "https://fir-app-55f88.firebaseio.com/heroes";
urlGet:string = "https://fir-app-55f88.firebaseio.com/heroes.json"
  constructor(private http:Http) { }

  newHero(hero:Hero)
  {
    let body = JSON.stringify( hero );
    let headers = new Headers({
      'Content-Type':'application/json'
    });
      return this.http.post( this.urlInsert, body, {headers}).pipe(
        map( (observable:any)=>{
          console.log(observable.json());
            return observable.json();
        })
      );
  }
  updateHero(hero:Hero, key:string)
  {
    let body = JSON.stringify( hero );
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    let url_update:string = this.urlUpdate+'/'+key+'.json'
    return this.http.put( url_update, body, { headers }).pipe(
      map( (updateData:any)=>{
          return updateData.json();
      })
    );
  }
  getHeroByKey( key:string )
  {
    let url = this.urlUpdate+'/'+key+'.json';
    let headers = new Headers({
      'Content-Type':'application/json'
    });
      return this.http.get(url,{headers}).pipe(
        map( (getItemArray:any)=>{
            return getItemArray.json();
        })
      );
  }
getHeroAll()
{
  let headers = new Headers({
    'Content-Type':'application/json'
  });
  return this.http.get(this.urlGet,{headers}).pipe(
    map( (getAllItems:any)=>{
        return getAllItems.json();
      })
    );
  }
DeleteHero(key:string)
{
  let url = this.urlUpdate+'/'+key+'.json';
  let headers = new Headers({
    'Content-Type':'application/json'
  });
  return this.http.delete(url,{headers}).pipe(
    map( (deleted:any)=>{
        return deleted.json();
    })
  );
}


}
