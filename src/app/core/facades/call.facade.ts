import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import Transcript from 'src/app/core/models/transcript.model';

import CallState from 'src/app/core/states/call.state';

@Injectable({providedIn: 'root'})
export default class CallFacade {
  public activeAgentCalls$                         = this._state.activeAgentCalls$;
  public activeTranscript$: Observable<Transcript> = this._state.activeTranscript$;
  public calls$                                    = this._state.calls$;
  public matchingPercentage$                       = this._state.matchingPercentage$;
  public selectCall                                = this._state.selectCall.bind(this._state);
  public setMatchingPercentage                     = this._state.setMatchingPercentage.bind(this._state);

  constructor(private readonly _state: CallState) {
  }
}
