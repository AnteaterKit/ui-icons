import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiIconModule } from 'projects/ng-ui-icons-lib/src/lib/components/ui-icon/ui-icon.module';
import { UiIconsRegistry } from 'projects/ng-ui-icons-lib/src/lib/components/ui-icon/icons-registry.service';
import { uiIconsShoppingCart } from 'projects/ng-ui-icons-lib/src/lib/components/ui-icon/icons';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private iconsRegistry: UiIconsRegistry) {
    iconsRegistry.registerIcons([uiIconsShoppingCart]);
  }
}
