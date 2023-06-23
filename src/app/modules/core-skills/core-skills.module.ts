import {NgModule} from '@angular/core'
import {CoreSkillsComponent} from './core-skills.component'
import {SharedModule} from 'app/shared/shared.module'
import {RouterModule} from '@angular/router'

@NgModule({
    declarations: [CoreSkillsComponent],
    imports: [
        SharedModule,
        RouterModule.forChild([{path: '', component: CoreSkillsComponent}]),
    ],
})
export class CoreSkillsModule {}
