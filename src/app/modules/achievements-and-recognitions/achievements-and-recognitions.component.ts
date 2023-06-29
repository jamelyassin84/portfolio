import {Component} from '@angular/core'
import {Title} from '@angular/platform-browser'
import {ACHIEVEMENTS} from 'app/app-core/constants/achievements'

@Component({
    selector: 'app-achievements-and-recognitions',
    templateUrl: './achievements-and-recognitions.component.html',
})
export class AchievementsAndRecognitionsComponent {
    readonly ACHIEVEMENTS = ACHIEVEMENTS

    constructor(private _titleService: Title) {}

    ngOnInit(): void {
        this._titleService.setTitle(
            'Jamel Yassin | Achievements and Recognition',
        )
    }
}
