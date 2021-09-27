import {Injectable} from '@angular/core';

import CallServiceMock from 'src/app/core/services/mocks/call.service.mock';

@Injectable({providedIn: 'root'})
export default class CallService extends CallServiceMock {
}
