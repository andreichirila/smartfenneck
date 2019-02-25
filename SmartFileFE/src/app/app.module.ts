import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {UploadComponent} from './components/upload/upload.component';
import {SfApiRoutesModule} from './api-routes/sf-api-routes.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        UploadComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SfApiRoutesModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
