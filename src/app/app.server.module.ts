import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

export class DemoCarouselIntervalComponent {
  myInterval = 1500;
  activeSlideIndex = 0;

  slides = [
    { image: 'assets/images/nature/3.jpg' },
    { image: 'assets/images/nature/2.jpg' },
    { image: 'assets/images/nature/1.jpg' }
  ];
}

@NgModule({
  imports: [AppModule, ServerModule, ModuleMapLoaderModule],
  bootstrap: [AppComponent]
})
export class AppServerModule {}
