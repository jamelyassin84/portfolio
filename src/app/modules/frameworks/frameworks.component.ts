import {Component} from '@angular/core'
import {Title} from '@angular/platform-browser'
import {FRAMEWORKS_USED} from 'app/app-core/constants/framworks-used'

@Component({
    selector: 'app-frameworks',
    templateUrl: './frameworks.component.html',
})
export class FrameworksComponent {
    readonly FRAMEWORKS_USED = FRAMEWORKS_USED

    constructor(private _titleService: Title) {}

    ngOnInit(): void {
        this._titleService.setTitle('Jamel Yassin | Frameworks Used')
    }
}
