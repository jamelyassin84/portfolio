import {NgModule} from '@angular/core'
import {FrameworksComponent} from './frameworks.component'
import {SharedModule} from 'app/shared/shared.module'
import {RouterModule} from '@angular/router'

@NgModule({
    declarations: [FrameworksComponent],
    imports: [
        SharedModule,
        RouterModule.forChild([{path: '', component: FrameworksComponent}]),
    ],
})
export class FrameworksModule {}
