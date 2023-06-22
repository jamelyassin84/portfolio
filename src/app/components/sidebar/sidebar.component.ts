import {Component} from '@angular/core'
import {NAVIGATION} from 'app/app-core/navigations/navigation'

@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
    readonly NAVIGATION = NAVIGATION
    currentMenu = 'ABOUT'
}
