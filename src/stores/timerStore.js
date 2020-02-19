import { observable, action, computed } from 'mobx';
import { now } from 'mobx-utils';

export default class TimerStore {
  @observable start = Date.now();

  @computed get timer() {
    return ((now() - this.start) / 1000).toFixed(0);
  }

  @action.bound resetTimer() {
    this.start = Date.now();
  }
}
