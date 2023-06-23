import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {TrainingAndSeminarsComponent} from './training-and-seminars.component'
import {SharedModule} from 'app/shared/shared.module'
import {RouterModule} from '@angular/router'

@NgModule({
    declarations: [TrainingAndSeminarsComponent],
    imports: [
        SharedModule,
        RouterModule.forChild([
            {path: '', component: TrainingAndSeminarsComponent},
        ]),
    ],
})
export class TrainingAndSeminarsModule {}
