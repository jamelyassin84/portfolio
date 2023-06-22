import {Component} from '@angular/core'
import {WORK_EXPERIENCES} from 'app/app-core/constants/work-experiences'

@Component({
    selector: 'work-experiences',
    templateUrl: './work-experiences.component.html',
})
export class WorkExperiencesComponent {
    readonly WORK_EXPERIENCES = WORK_EXPERIENCES

    hovered: boolean = false
}
