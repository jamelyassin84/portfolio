import {SharedModule} from 'app/shared/shared.module'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {EducationalBackgroundComponent} from './educational-background.component'
import {RouterModule} from '@angular/router'

@NgModule({
    declarations: [EducationalBackgroundComponent],
    imports: [
        SharedModule,
        RouterModule.forChild([
            {path: '', component: EducationalBackgroundComponent},
        ]),
    ],
})
export class EducationalBackgroundModule {}
