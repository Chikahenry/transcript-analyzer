import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import MOCK_DATA from './data/user.json';
import User from '../../models/user';

@Injectable()
export default class UserServiceMock {
    activeUser$(): Observable<User | null> {
        return of(MOCK_DATA);
    }
}
