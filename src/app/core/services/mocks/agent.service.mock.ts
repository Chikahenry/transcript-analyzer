import {Injectable} from '@angular/core';
import {ObjectMapper} from 'json-object-mapper';

import {Observable, of} from 'rxjs';

import Agent from 'src/app/core/models/agent';
import MOCK_DATA from './data/agents.json';

@Injectable()
export default class AgentServiceMock {
  getAgents$(): Observable<Agent[]> {
    return of(ObjectMapper.deserializeArray(Agent, MOCK_DATA));
  }
}
