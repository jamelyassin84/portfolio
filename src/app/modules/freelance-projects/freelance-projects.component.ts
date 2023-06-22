import {Component} from '@angular/core'
import {FREE_LANCES} from 'app/app-core/constants/free-lance-projects'

@Component({
    selector: 'app-freelance-projects',
    templateUrl: './freelance-projects.component.html',
})
export class FreelanceProjectsComponent {
    readonly FREE_LANCES = FREE_LANCES
}
