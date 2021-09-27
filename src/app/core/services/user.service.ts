import { Injectable } from '@angular/core';

import UserServiceMock from './mocks/user.service.mock';

@Injectable({providedIn: 'root'})
export default class UserService extends UserServiceMock {}
