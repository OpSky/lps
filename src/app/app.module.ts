

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable, forwardRef } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { PanelComponent } from './dico/panel.component';
import { ShowDicoComponent } from './dico/showdico.component';
import { DicoComponent } from './dico/dico.component';
import { MotsService } from './dico/mots.service';

import { FormsModule } from '@angular/forms';

import { FilterPipe } from './dico/filter.pipe';
import { DragulaModule } from 'ng2-dragula';
import { DragDropComponent } from './dragdrop/dragdrop.component';
import { PhraseTrouService } from './dragdrop/phrase.service';


@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    ShowDicoComponent,
    DicoComponent,
    FilterPipe,
    DragDropComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DragulaModule,
  ],
  providers: [MotsService, PhraseTrouService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
