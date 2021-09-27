import {NgModule} from '@angular/core';

import {CoreModule} from '../../core.module';
import SubHeaderComponent from './sub-header.component';

@NgModule({
  declarations: [SubHeaderComponent],
  imports:      [CoreModule],
  exports:      [SubHeaderComponent]
})
export default class SubHeaderModule {
}
