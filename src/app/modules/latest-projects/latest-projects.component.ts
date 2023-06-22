import {Component} from '@angular/core'
import {LATEST_PROJECTS} from 'app/app-core/constants/latest-projects'

@Component({
    selector: 'latest-projects',
    templateUrl: './latest-projects.component.html',
})
export class LatestProjectsComponent {
    readonly LATEST_PROJECTS = LATEST_PROJECTS

    hovered: boolean = false

    isEven(number): boolean {
        return number % 2 === 0
    }
}
