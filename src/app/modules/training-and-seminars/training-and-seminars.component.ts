import {Component} from '@angular/core'
import {TRAINING_AND_SEMINARS} from 'app/app-core/constants/training-and-seminars'

@Component({
    selector: 'app-training-and-seminars',
    templateUrl: './training-and-seminars.component.html',
})
export class TrainingAndSeminarsComponent {
    readonly TRAINING_AND_SEMINARS = TRAINING_AND_SEMINARS
}
