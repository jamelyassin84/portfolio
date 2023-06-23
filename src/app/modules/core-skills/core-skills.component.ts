import {Component} from '@angular/core'
import {CORE_SKILLS} from 'app/app-core/constants/core-skills'

@Component({
    selector: 'app-core-skills',
    templateUrl: './core-skills.component.html',
})
export class CoreSkillsComponent {
    readonly CORE_SKILLS = CORE_SKILLS
}
