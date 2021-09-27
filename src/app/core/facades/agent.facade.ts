import {Injectable} from '@angular/core';
import AgentState from 'src/app/core/states/agent.state';

@Injectable({providedIn: 'root'})
export default class AgentFacade {
  public activeAgent$   = this._state.activeAgent$;
  public agents$        = this._state.agents$;
  public setActiveAgent = this._state.setActiveAgent.bind(this._state);

  constructor(private readonly _state: AgentState) {
  }
}
