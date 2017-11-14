import { Injectable } from '@angular/core';
import { PHRASETROUS } from './listephrases';



@Injectable()
export class PhraseTrouService {
    
    getPhrases() {
        return PHRASETROUS;
    }

}