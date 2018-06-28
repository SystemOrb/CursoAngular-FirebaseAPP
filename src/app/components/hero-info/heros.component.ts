import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hero } from "../../services/hero.interface";
import { FirebaseService } from '../../services/firebase.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styles: []
})
export class HerosComponent {

  constructor(public firebase:FirebaseService,
              public router:Router,
              public routeLink:ActivatedRoute) {

//GET KEY FOR UPDATE OR INSERT NEW DATA
      this.routeLink.params.subscribe(
        (get:any)=>{
          this.key = get['id'];
          if(get['id']!='nuevo')
          {
            this.updateStatus = true;
            this.getDataHero(this.key);
          }else{
            this.updateStatus = false;
          }
        }
      );
}
  heroData:Hero = {
    name:'',
    house:'',
    skills:''
  }
  updateStatus:boolean;
  key:string = '';
  InsertForm()
  {
    this.firebase.newHero( this.heroData ).subscribe(
        (objectObservable:any)=>{
           this.router.navigate(['/hero',objectObservable.name]);
        },
        ( error:any )=>{
          console.error( error );
        }
    );
  }
  updateForm()
  {
    this.firebase.updateHero(this.heroData, this.key).subscribe(
      (objectUpdated:any)=>{
        this.router.navigate(['/hero',objectUpdated.name]);
      },
      ( error:any )=>{console.error( error );}
    )
  }
  getDataHero(key:string)
  {
    this.firebase.getHeroByKey( key ).subscribe(
      ( arrayItem:any )=>{
        this.heroData = arrayItem;
      }
    );
  }

saveForm(form:NgForm)
  {
    if(this.updateStatus)
    {
      this.updateForm();
    }else{
      this.InsertForm();
    }
  }
}
