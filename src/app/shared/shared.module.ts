import {NgModule} from '@angular/core'
import {CommonModule, NgOptimizedImage} from '@angular/common'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import {RouterModule} from '@angular/router'
import {ActionButtonsComponent} from 'app/components/action-buttons/action-buttons.component'
import {SidebarComponent} from 'app/components/sidebar/sidebar.component'
import {FlashlightDirective} from 'app/app-core/directives/flashlight.directive'
import {WhatsNextComponent} from 'app/components/whats-next/whats-next.component'

const pipes = []

const directives = [FlashlightDirective]

const components = [
    SidebarComponent,
    ActionButtonsComponent,
    WhatsNextComponent,
]

const modules = [
    RouterModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    NgOptimizedImage,
    ReactiveFormsModule,
]

@NgModule({
    imports: [...modules],
    declarations: [...components, ...directives, ...pipes],
    exports: [...components, ...directives, ...pipes, ...modules],
})
export class SharedModule {}
