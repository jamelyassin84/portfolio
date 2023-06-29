import {Component} from '@angular/core'
import {Title} from '@angular/platform-browser'
import {EDUCATIONAL_BACKGROUNDS} from 'app/app-core/constants/educational-backgrounds'

@Component({
    selector: 'app-educational-background',
    templateUrl: './educational-background.component.html',
})
export class EducationalBackgroundComponent {
    readonly EDUCATIONAL_BACKGROUNDS = EDUCATIONAL_BACKGROUNDS

    hovered: boolean = false

    constructor(private _titleService: Title) {}

    ngOnInit(): void {
        this._titleService.setTitle('Jamel Yassin | Educational Background')
    }
}
