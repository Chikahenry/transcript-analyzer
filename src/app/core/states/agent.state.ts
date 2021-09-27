import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import Agent from 'src/app/core/models/agent';

import AgentService from 'src/app/core/services/agent.service';

@Injectable({providedIn: 'root'})
export default class AgentState {
  private readonly _activeAgent$ = new Subject<Agent>();
  private readonly _agents$      = new BehaviorSubject<Agent[]>([]);
  public activeAgent$            = this._activeAgent$.asObservable();
  public agents$                 = this._agents$.asObservable();

  constructor(private readonly _svc: AgentService) {
    this._svc.getAgents$()
      .subscribe((agents: Agent[]) => this._agents$.next(agents));
  }

  public setActiveAgent(agentId: string): void {
    const agent = this._agents$.value.find((agent: Agent) => agent.id === agentId);
    this._activeAgent$.next(agent);
  }
}
