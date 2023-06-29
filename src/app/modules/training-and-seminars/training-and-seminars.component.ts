import {Component} from '@angular/core'
import {Title} from '@angular/platform-browser'
import {TRAINING_AND_SEMINARS} from 'app/app-core/constants/training-and-seminars'

@Component({
    selector: 'app-training-and-seminars',
    templateUrl: './training-and-seminars.component.html',
})
export class TrainingAndSeminarsComponent {
    readonly TRAINING_AND_SEMINARS = TRAINING_AND_SEMINARS

    constructor(private _titleService: Title) {}

    ngOnInit(): void {
        this._titleService.setTitle('Jamel Yassin | Training and Seminars')
    }
}
