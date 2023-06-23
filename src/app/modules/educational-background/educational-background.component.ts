import {Component} from '@angular/core'
import {EDUCATIONAL_BACKGROUNDS} from 'app/app-core/constants/educational-backgrounds'

@Component({
    selector: 'app-educational-background',
    templateUrl: './educational-background.component.html',
})
export class EducationalBackgroundComponent {
    readonly EDUCATIONAL_BACKGROUNDS = EDUCATIONAL_BACKGROUNDS

    hovered: boolean = false
}
