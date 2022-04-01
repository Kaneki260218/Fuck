import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingPageRoutingModule } from './sing-routing.module';

import { SingPage } from './sing.page';

import { InputModule } from '../Components/input/input.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputModule,
    IonicModule,
    SingPageRoutingModule
  ],
  declarations: [SingPage]
})
export class SingPageModule {}
