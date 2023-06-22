import {NgModule} from '@angular/core'
import {LatestProjectsComponent} from './latest-projects.component'
import {SharedModule} from 'app/shared/shared.module'
import {RouterModule} from '@angular/router'

@NgModule({
    declarations: [LatestProjectsComponent],
    imports: [
        SharedModule,
        RouterModule.forChild([{path: '', component: LatestProjectsComponent}]),
    ],
})
export class LatestProjectsModule {}
