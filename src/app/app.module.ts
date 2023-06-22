import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {SharedModule} from './shared/shared.module';
import { WhatsNextComponent } from './components/whats-next/whats-next.component'

@NgModule({
    declarations: [AppComponent, WhatsNextComponent],
    imports: [BrowserModule, AppRoutingModule, SharedModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
