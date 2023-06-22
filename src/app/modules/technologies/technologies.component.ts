import {Component} from '@angular/core'
import {TECHNOLOGIES_USED} from 'app/app-core/constants/technologies-used'

@Component({
    selector: 'app-technologies',
    templateUrl: './technologies.component.html',
})
export class TechnologiesComponent {
    readonly TECHNOLOGIES_USED = TECHNOLOGIES_USED
}
