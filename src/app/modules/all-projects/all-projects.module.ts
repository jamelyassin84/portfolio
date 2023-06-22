import {NgModule} from '@angular/core'
import {AllProjectsComponent} from './all-projects.component'
import {SharedModule} from 'app/shared/shared.module'
import {RouterModule} from '@angular/router'

@NgModule({
    declarations: [AllProjectsComponent],
    imports: [
        SharedModule,
        RouterModule.forChild([{path: '', component: AllProjectsComponent}]),
    ],
})
export class AllProjectsModule {}
