import {NgModule} from '@angular/core'
import {FreelanceProjectsComponent} from './freelance-projects.component'
import {SharedModule} from 'app/shared/shared.module'
import {RouterModule} from '@angular/router'

@NgModule({
    declarations: [FreelanceProjectsComponent],
    imports: [
        SharedModule,
        RouterModule.forChild([
            {path: '', component: FreelanceProjectsComponent},
        ]),
    ],
})
export class FreelanceProjectsModule {}
