import {Component} from '@angular/core'
import {Title} from '@angular/platform-browser'
import {FREE_LANCES} from 'app/app-core/constants/free-lance-projects'

@Component({
    selector: 'app-freelance-projects',
    templateUrl: './freelance-projects.component.html',
})
export class FreelanceProjectsComponent {
    readonly FREE_LANCES = FREE_LANCES

    constructor(private _titleService: Title) {}

    ngOnInit(): void {
        this._titleService.setTitle('Jamel Yassin | Freelances and Pro bonos')
    }
}
