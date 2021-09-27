import {Component, TemplateRef} from '@angular/core';

import TemplateService from '../../services/template.service';

@Component({
  selector:    'app-gc-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls:   ['./sub-header.component.scss']
})
export default class SubHeaderComponent {
  constructor(private _tplService: TemplateService) {
  }

  get content(): TemplateRef<any> | null {
    return this._tplService.get('subHeader') || null;
  }
}
