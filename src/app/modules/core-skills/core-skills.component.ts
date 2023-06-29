import {Component} from '@angular/core'
import {Title} from '@angular/platform-browser'
import {CORE_SKILLS} from 'app/app-core/constants/core-skills'

@Component({
    selector: 'app-core-skills',
    templateUrl: './core-skills.component.html',
})
export class CoreSkillsComponent {
    readonly CORE_SKILLS = CORE_SKILLS

    constructor(private _titleService: Title) {}

    ngOnInit(): void {
        this._titleService.setTitle('Jamel Yassin | Core Skills')
    }
}
