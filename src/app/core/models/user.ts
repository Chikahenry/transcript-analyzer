import {JsonProperty} from 'json-object-mapper';

export class UserAvatar {
  @JsonProperty()
  34?: string | null;
  @JsonProperty()
  48?: string | null;
  @JsonProperty()
  64?: string | null;

  constructor() {
    this['34'] = null;
    this['48'] = null;
    this['64'] = null;
  }
}

export default class User {
  @JsonProperty({type: UserAvatar})
  public avatar: UserAvatar | null;
  @JsonProperty()
  public email: string | null;
  @JsonProperty()
  public firstName: string | null;
  @JsonProperty()
  public lastName: string | null;

  constructor() {
    this.firstName = null;
    this.lastName  = null;
    this.email     = null;
    this.avatar    = null;
  }
}
