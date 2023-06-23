import {Component, SimpleChanges} from '@angular/core'

@Component({
    selector: 'about',
    templateUrl: './about.component.html',
})
export class AboutComponent {
    seeMore: boolean = true

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.seeMore) {
        }
    }
}
