import { Component } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Hero } from '../../services/hero.interface';
@Component({
  selector: 'app-hero-info',
  templateUrl: './hero-info.component.html'
})
export class HeroInfoComponent  {

   HeroData:Hero[] = [];

  constructor(public firebase:FirebaseService) {

      this.firebase.getHeroAll().subscribe(
          ( data:any )=>{
            this.HeroData = data;
          }
      );
  }
 deleteHero(key:string)
 {
   this.firebase.DeleteHero(key).subscribe(
     (bool:any)=>{
        if(bool==null){ // deleted successfully
          delete this.HeroData[key];
        }
     }
   )
 }
}
