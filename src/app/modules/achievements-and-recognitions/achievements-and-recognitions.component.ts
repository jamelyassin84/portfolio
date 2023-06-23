import {Component} from '@angular/core'
import {ACHIEVEMENTS} from 'app/app-core/constants/achievements'

@Component({
    selector: 'app-achievements-and-recognitions',
    templateUrl: './achievements-and-recognitions.component.html',
})
export class AchievementsAndRecognitionsComponent {
    readonly ACHIEVEMENTS = ACHIEVEMENTS
}
