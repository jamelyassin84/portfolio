import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {WorkExperienceDetailsComponent} from './work-experiences/work-experience-details/work-experience-details.component'
import {AboutComponent} from './about/about.component'
import {WorkExperiencesComponent} from './work-experiences/work-experiences.component'
import {RouterModule} from '@angular/router'
import {HomeComponent} from './home.component'
import {SharedModule} from 'app/shared/shared.module'

@NgModule({
    declarations: [
        AboutComponent,
        WorkExperiencesComponent,
        WorkExperienceDetailsComponent,
        HomeComponent,
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomeComponent,
            },

            {
                path: 'work-experience-detail/:id',
                component: WorkExperienceDetailsComponent,
            },
        ]),
    ],
})
export class HomeModule {}
