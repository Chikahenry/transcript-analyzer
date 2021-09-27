import {JsonProperty} from 'json-object-mapper';

export default class Script {
  @JsonProperty()
  public channel: number;
  @JsonProperty({name: 'matching_line'})
  public matchingLine: number | null;
  @JsonProperty({name: 'matching_sentence'})
  public matchingSentence: string | null;
  @JsonProperty()
  public order: number;
  @JsonProperty()
  public sentence: string | null;
  @JsonProperty()
  public similarity: number | null;
  @JsonProperty()
  public timeFrom: number | null;
  @JsonProperty()
  public timeTo: number | null;

  constructor() {
    this.channel          = 0;
    this.matchingLine     = null;
    this.matchingSentence = null;
    this.order            = 0;
    this.sentence         = null;
    this.similarity       = null;
    this.timeFrom         = null;
    this.timeTo           = null;
  }
}
