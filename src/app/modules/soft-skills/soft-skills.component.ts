import {Component} from '@angular/core'
import {SOFT_SKILLS} from 'app/app-core/constants/soft-skills'

@Component({
    selector: 'app-soft-skills',
    templateUrl: './soft-skills.component.html',
})
export class SoftSkillsComponent {
    readonly SOFT_SKILLS = SOFT_SKILLS
}
