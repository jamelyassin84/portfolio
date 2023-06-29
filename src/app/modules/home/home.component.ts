import {Component} from '@angular/core'
import {Title} from '@angular/platform-browser'
import {BUTTONS} from 'app/app-core/constants/buttons'
import {WORK_EXPERIENCES} from 'app/app-core/constants/work-experiences'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
})
export class HomeComponent {
    readonly BUTTONS = BUTTONS

    constructor(private _titleService: Title) {}

    ngOnInit(): void {
        this._titleService.setTitle('Jamel Yassin | Lead Angular Engineer')
    }

    download(button: any) {
        if (button.title !== 'View Full CV') {
            return
        }
        const fileUrl = '/assets/CV.pdf'
        const link = document.createElement('a')
        link.href = fileUrl
        link.download = `Jamel Yassin's CV.pdf`
        link.target = '_blank'
        link.click()
    }
}
