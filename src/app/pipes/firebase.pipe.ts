import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firebase',
  pure:false
})
export class FirebasePipe implements PipeTransform {

  transform(value: any): any {

    let key_id = [];
    for(let key in value){
      key_id.push(key)
    }
    return key_id;
  }

}
