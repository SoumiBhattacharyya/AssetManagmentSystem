import { Pipe, PipeTransform } from '@angular/core';
import { Asset } from './assets/assets.component';


@Pipe({
  name: 'filterAssets'
})
export class FilterAssetsPipe implements PipeTransform {

  transform(assets:Asset[], search: string): Asset[] {
    if(search === undefined){
      return assets;
    }else{
    return assets.filter(asset=>{
      return asset.assetName.toLowerCase().includes(search.toLowerCase());
    });
  }
  }

}
