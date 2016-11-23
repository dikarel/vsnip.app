const EventEmitter = require('events')
const events = new EventEmitter()
const TEXT_CHANGED = 'toast/TEXT_CHANGED'
let toastEndTimer = null

// Show toast notification for 2 seconds
// Overrides previous toast display
module.exports.show = (notificationText) => {
  if (toastEndTimer) clearTimeout(toastEndTimer)
  events.emit(TEXT_CHANGED, notificationText)
  toastEndTimer = setTimeout(() => events.emit(TEXT_CHANGED, ''), 2000)
}

// Return a handle to toast-related events
module.exports.events = () => events

// Listen to events
module.exports.addListener = (eventName, listener) => {
  events.addListener(eventName, listener)
}

// Remove event listener
module.exports.removeListener = (eventName, listener) => {
  events.removeListener(eventName, listener)
}

// Subscribe to this event to get the latest toast display text
module.exports.TEXT_CHANGED = TEXT_CHANGED
