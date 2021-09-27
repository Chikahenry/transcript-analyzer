import {JsonProperty} from 'json-object-mapper';

export default class Channel {
  @JsonProperty({name: 'agent_id'})
  public agentId: string | null;
  @JsonProperty()
  public channel: number;
  @JsonProperty({name: 'full_name'})
  public speakerName: string | null;

  constructor() {
    this.agentId     = null;
    this.channel     = 0;
    this.speakerName = null;
  }
}
