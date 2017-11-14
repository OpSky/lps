import { Component, OnInit, forwardRef, Inject } from '@angular/core';

import { DragulaService } from 'ng2-dragula/ng2-dragula';

import { PhraseTrouService } from './phrase.service';
 

@Component ({
    selector: 'drag',
    templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragula.css']
})
export class DragDropComponent implements OnInit {
   // phrase: PhraseTrou = {phrase: "Acte de", mots : ['d\'identité', 'de naissance', 'de famille' ], bonmot : 'de naissance'}
    hide1=true;
    hide2=true;
    hide3=true;
    drop=false;
    gooddrop:boolean;
    ajoute: String;
    words = [];
    goodId= 1;
    finished: false;
    phraseTrou;
    index =0;
    
    constructor (private phraseService: PhraseTrouService, private dragulaService: DragulaService) {
        this.phraseTrou = this.phraseService.getPhrases()[this.index];
        this.words = this.phraseTrou.mots;
        //this.words = this.phrase.mots;
        dragulaService.setOptions('first-bag', {
            copy: true
        });
    }

    ngOnInit() {
       
        this.dragulaService
            .drop
            .subscribe(value => {
               console.log(value);
               
               /*if(value[1].className.indexOf("#") > 0) { 
                    console.log(value);
                    this.ajoute = value[1].innerHTML;
                    console.log(this.words);
               }}*/
              
               this.drop=true;
               this.ajoute = this.words[(value[1].id)];
               if(value[1].innerText.replace(/ /g, '') == this.phraseTrou.bonmot.replace(/ /g, "")) {
                   
                    this.gooddrop=true;
               }
               else {
                   this.gooddrop=false;
               }
            });
        
      
    }

    nextQuestion() {
        if(this.phraseService.getPhrases()[this.index + 1]) {
            this.index = this.index + 1;
            this.phraseTrou = this.phraseService.getPhrases()[this.index];
            this.words = this.phraseTrou.mots;
            console.log("hey");
        } else {
            this.finished=true;
           
        }
    }
    
    
}
