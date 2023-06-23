import {NgModule} from '@angular/core'
import {CharacterReferecesComponent} from './character-refereces.component'
import {SharedModule} from 'app/shared/shared.module'
import {RouterModule} from '@angular/router'

@NgModule({
    declarations: [CharacterReferecesComponent],
    imports: [
        SharedModule,
        RouterModule.forChild([
            {path: '', component: CharacterReferecesComponent},
        ]),
    ],
})
export class CharacterReferecesModule {}
