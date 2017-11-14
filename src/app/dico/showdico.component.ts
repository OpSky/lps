import { Component, Input } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations'



@Component({
    selector : 'show-dico',
    template: `<div [ngClass]="monterBouton ? 'flip1':'flip2'"  class="col-md-push-4 col-lg-push-4 col-md-3 col-lg-4">Dictionnaire</div>`,
    styleUrls: ['showdico.component.css'],
    animations: [
        trigger(
          'enterAnimation2', [
              transition(':enter', [
                style({transform: 'translateY(100%)', opacity: 1}),
                animate('700ms', style({transform: 'translateY(0)', opacity: 1}))
              ]),
              transition(':leave', [
                style({transform: 'translateY(0)', opacity: 0}),
                animate('700ms', style({transform: 'translateY(100%)', opacity: 1}))
              ])
          ]
        )
    ]
})
export class ShowDicoComponent {
    @Input() monterBouton: boolean;

}