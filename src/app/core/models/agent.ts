import {JsonProperty} from 'json-object-mapper';

export default class Agent {
  @JsonProperty({name: 'agent_id'})
  public id: string | null;
  @JsonProperty({name: 'full_name'})
  public fullName: string | null;
  @JsonProperty()
  public email: string | null;

  constructor() {
    this.id = null;
    this.fullName = null;
    this.email = null;
  }
}
