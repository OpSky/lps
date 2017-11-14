import { Component } from '@angular/core';
import { ShowDicoComponent } from './showdico.component';
import { DicoComponent } from './dico.component';

@Component({
    selector: 'panel',
    template: `<dico></dico>`,
    styles: ['./dico.component.css']
})
export class PanelComponent {
}
