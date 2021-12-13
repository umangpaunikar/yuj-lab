import { Component } from '@angular/core';
declare let ONE3D: any;
@Component({
  selector: 'yuj-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'yuj-dashboard';

  OnLoadingComplete() {
    // ONE3D.changeColor('BLUE');
  }

  ngOnInit(): void {
    // ONE3D.init(
    //   'one3d',
    //   'https://staging.yujdesigns.com/hero3done/one3d/',
    //   'SEDAN',
    //   'LuxuryVariant',
    //   {
    //     callback: this.OnLoadingComplete,
    //     showDefaultLoader: true,
    //     disableVerticalRotation: false,
    //   }
    // );
  }
  // changeColor(color: string) {
  //   ONE3D.changeColor(color);
  // }
  // zoomIn() {
  //   ONE3D.zoomIn();
  // }
  // zoomOut() {
  //   ONE3D.zoomOut();
  // }
}
