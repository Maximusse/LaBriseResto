import { trigger, state, animate, style, transition } from '@angular/animations';

export function moveIn() {
    return trigger('moveIn', [
        transition(':enter', [
            style({ opacity: '0', transform: 'translateX(-100px)' }),
            animate(400, style({ opacity: '1', transform: 'translateX(0)' }))
        ]),
        transition(':leave', [
            style({ opacity: '1', transform: 'translateX(0)' }),
            animate(400, style({ opacity: '0', transform: 'translateX(-200px)' }))
        ])
    ]);
}

export function fallIn() {
    return trigger('fallIn', [
        transition(':enter', [
            style({ opacity: '0', transform: 'translateY(40px)' }),
            animate(500, style({ opacity: '1', transform: 'translateY(0)' }))
        ]),
        transition(':leave', [
            style({ opacity: '1', transform: 'translateY(0)' }),
            animate(500, style({ opacity: '0', transform: 'translateY(100px)' }))
        ])
    ]);
}