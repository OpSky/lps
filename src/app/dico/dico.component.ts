import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgIf } from '@angular/common';
import { trigger, style, animate, transition } from '@angular/animations'
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/timer';
import { MotsService} from './mots.service';




@Component({
    selector: 'dico',
    templateUrl: './dico.component.html',
  styleUrls: ['./dico.component.css'],
  animations: [
      trigger(
        'enterAnimation', [
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
export class DicoComponent {
    //  motsService = new MotsService();
    // mots = MotsService.getWords();
    mots;
    montre = false;
    wordselected = false;
    private subscription: Subscription;
    private timer: Observable<any>;
    motchoisi: Mot;

    motAChercher: Mot = { mot: '', definition: ''};

    monterBouton = false;

    constructor(private motsService: MotsService) {
    }

    onSelect(mot: Mot) {
        this.motchoisi = mot;
    }


    showDico() {
        this.montre = !this.montre;
        this.mots = this.motsService.getWords();
        this.monterBouton = !this.monterBouton;


    }

    showLWord() {
        this.wordselected = true;
        this.timer = Observable.timer(3000);
        this.subscription = this.timer.subscribe(() => {
        this.wordselected = false;
        });
    }
}