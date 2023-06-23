import {NgModule} from '@angular/core'
import {AchievementsAndRecognitionsComponent} from './achievements-and-recognitions.component'
import {SharedModule} from 'app/shared/shared.module'
import {RouterModule} from '@angular/router'

@NgModule({
    declarations: [AchievementsAndRecognitionsComponent],
    imports: [
        SharedModule,
        RouterModule.forChild([
            {path: '', component: AchievementsAndRecognitionsComponent},
        ]),
    ],
})
export class AchievementsAndRecognitionsModule {}
