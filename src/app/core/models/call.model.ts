import {JsonProperty} from 'json-object-mapper';
import Channel from 'src/app/core/models/channel.model';

export default class Call {
  @JsonProperty({type: Channel})
  public agent: Channel | null;
  @JsonProperty({type: Channel})
  public customer: Channel | null;
  @JsonProperty()
  public duration: number | null;
  @JsonProperty({name: 'call_id'})
  public id: string | null;
  @JsonProperty({
    name: 'call_start_time',
    type: Date
  })
  public startTime: Date | null;
  @JsonProperty({name: 'calltype_id'})
  public type: string | null;

  constructor() {
    this.id        = null;
    this.type      = null;
    this.agent     = null;
    this.customer  = null;
    this.startTime = null;
    this.duration  = null;
  }
}
