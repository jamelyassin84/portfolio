import {Component} from '@angular/core'
import {BUTTONS} from 'app/app-core/constants/buttons'
import {WORK_EXPERIENCES} from 'app/app-core/constants/work-experiences'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
})
export class HomeComponent {
    readonly BUTTONS = BUTTONS
}
