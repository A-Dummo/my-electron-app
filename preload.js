const { contextBridge, ipcRenderer } = require('electron')

// There is a main and renderer process that can communicate through ipcRenderer.
// This is needed to expose more information outside of the sandbox default.
contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke('ping')
  // we can also expose variables, not just functions
})