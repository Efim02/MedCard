import { makeAutoObservable } from "mobx";

export default class IndicatorsStore {
  constructor() {
    this._indicators = [];
    makeAutoObservable(this);
  }

  setIndicators(userIndicators) {
    this._indicators = userIndicators
  }

  get indicators() {
    return this._indicators;
  }
}
