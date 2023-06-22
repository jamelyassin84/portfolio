import {Component} from '@angular/core'
import {FRAMEWORKS_USED} from 'app/app-core/constants/framworks-used'

@Component({
    selector: 'app-frameworks',
    templateUrl: './frameworks.component.html',
})
export class FrameworksComponent {
    readonly FRAMEWORKS_USED = FRAMEWORKS_USED
}
