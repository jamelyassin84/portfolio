import {NgModule} from '@angular/core'
import {SoftSkillsComponent} from './soft-skills.component'
import {SharedModule} from 'app/shared/shared.module'
import {RouterModule} from '@angular/router'

@NgModule({
    declarations: [SoftSkillsComponent],
    imports: [
        SharedModule,
        RouterModule.forChild([{path: '', component: SoftSkillsComponent}]),
    ],
})
export class SoftSkillsModule {}
