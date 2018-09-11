const { List } = require('immutable')
const transit = require('transit-immutable-js')
const uuid = require('./uuid')
const Frontend = require('../frontend')
const Backend = require('../backend')
const { isObject } = require('./common')
const { Text } = require('./text')

/**
 * Constructs a new frontend document that reflects the given list of changes.
 */
function docFromChanges(actorId, changes) {
  if (!actorId) throw new RangeError('actorId is required in docFromChanges')
  const doc = Frontend.init({actorId, backend: Backend})
  const [state, _] = Backend.applyChanges(Backend.init(actorId), changes)
  const patch = Backend.getPatch(state)
  patch.state = state
  return Frontend.applyPatch(doc, patch)
}

///// Automerge.* API

function init(actorId) {
  return Frontend.init({actorId, backend: Backend})
}

function change(doc, message, callback) {
  return Frontend.change(doc, message, callback)
}

function emptyChange(doc, message) {
  return Frontend.emptyChange(doc, message)
}

function load(string, actorId) {
  return docFromChanges(actorId || uuid(), transit.fromJSON(string))
}

function save(doc) {
  const state = Frontend.getBackendState(doc)
  return transit.toJSON(state.getIn(['opSet', 'history']))
}

function merge(localDoc, remoteDoc) {
  const localState  = Frontend.getBackendState(localDoc)
  const remoteState = Frontend.getBackendState(remoteDoc)
  const [state, patch] = Backend.merge(localState, remoteState)
  if (patch.diffs.length === 0) return localDoc
  patch.state = state
  return Frontend.applyPatch(localDoc, patch)
}

function diff(oldDoc, newDoc) {
  const oldState = Frontend.getBackendState(oldDoc)
  const newState = Frontend.getBackendState(newDoc)
  const changes = Backend.getChanges(oldState, newState)
  const [state, patch] = Backend.applyChanges(oldState, changes)
  return patch.diffs
}

function getChanges(oldDoc, newDoc) {
  const oldState = Frontend.getBackendState(oldDoc)
  const newState = Frontend.getBackendState(newDoc)
  return Backend.getChanges(oldState, newState)
}

function applyChanges(doc, changes) {
  const oldState = Frontend.getBackendState(doc)
  const [newState, patch] = Backend.applyChanges(oldState, changes)
  patch.state = newState
  return Frontend.applyPatch(doc, patch)
}

function getMissingDeps(doc) {
  return Backend.getMissingDeps(Frontend.getBackendState(doc))
}

function equals(val1, val2) {
  if (!isObject(val1) || !isObject(val2)) return val1 === val2
  const keys1 = Object.keys(val1).sort(), keys2 = Object.keys(val2).sort()
  if (keys1.length !== keys2.length) return false
  for (let i = 0; i < keys1.length; i++) {
    if (keys1[i] !== keys2[i]) return false
    if (!equals(val1[keys1[i]], val2[keys2[i]])) return false
  }
  return true
}

function inspect(doc) {
  return JSON.parse(JSON.stringify(doc))
}

function getHistory(doc) {
  const state = Frontend.getBackendState(doc)
  const history = state.getIn(['opSet', 'history'])
  return history.map((change, index) => {
    return {
      get change () {
        return change.toJS()
      },
      get snapshot () {
        return docFromChanges(state.get('actorId'), history.slice(0, index + 1))
      }
    }
  }).toArray()
}

function getConflicts(doc, list) {
  return Frontend.getConflicts(list)
}

function canUndo(doc) {
  checkTarget('canUndo', doc)
  return doc._state.getIn(['opSet', 'undoPos']) > 0
}

function undo(doc, message) {
  checkTarget('undo', doc)
  if (message !== undefined && typeof message !== 'string') {
    throw new TypeError('Change message must be a string')
  }
  return makeUndo(doc, message)
}

function canRedo(doc) {
  checkTarget('canRedo', doc)
  return !doc._state.getIn(['opSet', 'redoStack']).isEmpty()
}

function redo(doc, message) {
  checkTarget('redo', doc)
  if (message !== undefined && typeof message !== 'string') {
    throw new TypeError('Change message must be a string')
  }
  return makeRedo(doc, message)
}

module.exports = {
  init, change, emptyChange, load, save, merge, diff, getChanges, applyChanges, getMissingDeps,
  equals, inspect, getHistory, getConflicts,
  Text, uuid,
  canUndo, undo, canRedo, redo,
  //DocSet: require('./doc_set'),
  //WatchableDoc: require('./watchable_doc'),
  //Connection: require('./connection')
}
