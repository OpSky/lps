import { Injectable } from '@angular/core';
import { MOTS } from './listemots';



@Injectable()
export class MotsService {
    
    getWords() {
        return MOTS;
    }

}