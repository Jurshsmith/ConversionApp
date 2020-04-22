import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversionRoutingModule } from './conversion-routing.module';
import { ConversionComponent } from './pages/conversion/conversion.component';
import { ConversionService } from './services/conversion.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { OutputComponent } from './components/output/output.component';


@NgModule({
  declarations: [ConversionComponent, OutputComponent],
  providers: [ConversionService],
  imports: [
    CommonModule,
    SharedModule,
    ConversionRoutingModule,
  ],
})
export class ConversionModule { }
