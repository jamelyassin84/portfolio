import {Component} from '@angular/core'
import {Title} from '@angular/platform-browser'
import {LATEST_PROJECTS} from 'app/app-core/constants/latest-projects'

@Component({
    selector: 'latest-projects',
    templateUrl: './latest-projects.component.html',
})
export class LatestProjectsComponent {
    readonly LATEST_PROJECTS = LATEST_PROJECTS

    hovered: boolean = false

    constructor(private _titleService: Title) {}

    ngOnInit(): void {
        this._titleService.setTitle('Jamel Yassin | Latest Projects')
    }

    isEven(number): boolean {
        return number % 2 === 0
    }
}
