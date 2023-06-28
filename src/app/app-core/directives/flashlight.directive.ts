import {Directive, HostListener, ElementRef, Renderer2} from '@angular/core'

@Directive({
    selector: '[flashlight]',
})
export class FlashlightDirective {
    constructor(private el: ElementRef, private renderer: Renderer2) {}

    @HostListener('mousemove', ['$event'])
    onMouseMove(event: MouseEvent) {
        const rect = this.el.nativeElement.getBoundingClientRect()
        const mouseX = event.clientX - rect.left
        const mouseY = event.clientY - rect.top

        // Calculate the percentage values for background position
        const backgroundX = ((rect.width - mouseX) / rect.width) * 100
        const backgroundY = ((rect.height - mouseY) / rect.height) * 100

        // Apply flashlight styles
        this.renderer.setStyle(this.el.nativeElement, 'position', 'relative')
        this.renderer.setStyle(this.el.nativeElement, 'overflow', 'hidden')
        this.renderer.setStyle(
            this.el.nativeElement,
            'background-image',
            'radial-gradient(circle closest-side, rgba(0, 0, 0, 0.75), transparent)',
        )
        this.renderer.setStyle(
            this.el.nativeElement,
            'background-repeat',
            'no-repeat',
        )
        this.renderer.setStyle(
            this.el.nativeElement,
            'background-position',
            `${backgroundX}% ${backgroundY}%`,
        )
        this.renderer.setStyle(
            this.el.nativeElement,
            'background-size',
            '150% 150%',
        )
    }
}
