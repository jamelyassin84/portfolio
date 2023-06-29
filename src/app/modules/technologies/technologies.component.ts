import {Component} from '@angular/core'
import {Title} from '@angular/platform-browser'
import {TECHNOLOGIES_USED} from 'app/app-core/constants/technologies-used'

@Component({
    selector: 'app-technologies',
    templateUrl: './technologies.component.html',
})
export class TechnologiesComponent {
    readonly TECHNOLOGIES_USED = TECHNOLOGIES_USED

    constructor(private _titleService: Title) {}

    ngOnInit(): void {
        this._titleService.setTitle('Jamel Yassin | Technologies Used')
    }
}
