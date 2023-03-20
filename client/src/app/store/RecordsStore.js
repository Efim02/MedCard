import { makeAutoObservable } from "mobx";

export default class RecordsStore {
    constructor() {
        this._records = [];
        makeAutoObservable(this);
    }

    setRecords(userRecords) {
        this._records = userRecords;
    }

    get records() {
        return this._records;
    }
}