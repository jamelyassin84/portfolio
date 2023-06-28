import {Component, HostListener} from '@angular/core'
import {NAVIGATION} from 'app/app-core/navigations/navigation'

@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
    @HostListener('window:scroll', ['$event'])
    onScroll() {
     const divs = document.querySelectorAll('[id^="div_"]')
        let currentDiv: string | undefined

        console.log(divs)

        for (let i = 0; i < divs.length; i++) {
            const div = divs[i] as HTMLElement
            const rect = div.getBoundingClientRect()

            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                currentDiv = div.id
                break
            }
        }

        if (currentDiv) {
            this.currentMenu = this.getMenuTitleFromDivId(currentDiv)
        }
    }
    readonly NAVIGATION = NAVIGATION
    currentMenu = 'ABOUT'

    scrollToDiv(divId: string) {
        const element = document.querySelector(`#${divId}`)
        if (element) {
            element.scrollIntoView({behavior: 'smooth', block: 'start'})
        }
    }

    private getMenuTitleFromDivId(divId: string): string {
        const menu = this.NAVIGATION.find((item) => item.div === divId)
        return menu ? menu.title : ''
    }
}
