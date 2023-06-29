import {Component} from '@angular/core'
import {Title} from '@angular/platform-browser'
import {CHARACTER_REFERENCES} from 'app/app-core/constants/character-references'

@Component({
    selector: 'app-character-refereces',
    templateUrl: './character-refereces.component.html',
})
export class CharacterReferecesComponent {
    readonly CHARACTER_REFERENCES = CHARACTER_REFERENCES

    constructor(private _titleService: Title) {}

    ngOnInit(): void {
        this._titleService.setTitle('Jamel Yassin | Character References')
    }
}
