// @flow

const {BrowserWindow, app} = require('electron')
const path = require('path')
const url = require('url')
let mainWindow

// Auto-reload on file change
require('electron-reload')(__dirname)

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600})
  mainWindow.on('closed', () => { mainWindow = null })

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (!mainWindow) createWindow()
})
