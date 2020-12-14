import { Injectable } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';

const { Camera, Device } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class CapacitorService {

  constructor() { }

  public async addNewToGallery() {
    let result
    let base64data
    // Take a photo
    await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    }).then((image) => {
      result = image
    });

    let blob = await fetch(result.webPath).then(r => r.blob())
    var reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function () {
      base64data = reader.result;
      console.log(base64data);
      return base64data
    }


  }

  public async getInfo() {
    // getInfo
    const info = await Device.getInfo();
    return info;

  }
}
