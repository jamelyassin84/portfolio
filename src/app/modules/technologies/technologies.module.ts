import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {TechnologiesComponent} from './technologies.component'
import {SharedModule} from 'app/shared/shared.module'
import {RouterModule} from '@angular/router'

@NgModule({
    declarations: [TechnologiesComponent],
    imports: [
        SharedModule,
        RouterModule.forChild([{path: '', component: TechnologiesComponent}]),
    ],
})
export class TechnologiesModule {}
