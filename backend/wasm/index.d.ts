/* tslint:disable */
/* eslint-disable */
export class State {
  free(): void;
/**
* @param {Array<any>} changes 
* @returns {any} 
*/
  applyChanges(changes: Array<any>): any;
/**
* @param {Array<any>} changes 
*/
  loadChanges(changes: Array<any>): void;
/**
* @param {any} change 
* @returns {Array<any>} 
*/
  applyLocalChange(change: any): Array<any>;
/**
* @returns {any} 
*/
  getPatch(): any;
/**
* @param {any} have_deps 
* @returns {Array<any>} 
*/
  getChanges(have_deps: any): Array<any>;
/**
* @param {any} actorid 
* @returns {Array<any>} 
*/
  getChangesForActor(actorid: any): Array<any>;
/**
* @returns {any} 
*/
  getMissingDeps(): any;
/**
* @returns {any} 
*/
  getUndoStack(): any;
/**
* @returns {any} 
*/
  getRedoStack(): any;
/**
* @returns {State} 
*/
  clone(): State;
/**
* @returns {any} 
*/
  save(): any;
/**
* @param {any} data 
* @returns {State} 
*/
  static load(data: any): State;
/**
* @returns {State} 
*/
  static new(): State;
}
