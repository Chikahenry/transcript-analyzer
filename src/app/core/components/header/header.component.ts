import {ChangeDetectionStrategy, Component} from '@angular/core';

import UserService from '../../services/user.service';

@Component({
  selector:        'app-gc-header',
  templateUrl:     './header.component.html',
  styleUrls:       ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class HeaderComponent {
  constructor(private _user: UserService) {
  }
}
