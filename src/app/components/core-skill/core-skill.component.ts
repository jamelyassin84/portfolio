import {Component, Input} from '@angular/core'

@Component({
    selector: 'core-skill',
    template: `
        <div class="w-full flex flex-col">
            <div class="mb-2 text-white font-bold text-lg">{{ title }}</div>

            <div class="bg-gray-300 h-[20px] w-full rounded-md overflow-hidden">
                <div
                    [ngClass]="{
                        'bg-brand-red': type !== 'soft',
                        'bg-brand-yellow': type === 'soft'
                    }"
                    style.width="{{ percentage }}%"
                    class="h-full  "
                ></div>
            </div>

            <div class="ml-auto text-sub-headline-text">{{ percentage }}%</div>
        </div>
    `,
})
export class CoreSkillComponent {
    @Input()
    type: string = 'soft'

    @Input({required: true})
    title: string

    @Input({required: true})
    percentage: string
}
