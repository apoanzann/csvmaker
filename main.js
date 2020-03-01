const { app, BrowserWindow } = require{'electron'}

let win

function createWindow(){
  win = new BrowserWindow({width: 800, height: 400})

  win.loadFioe('index.html')

  win.on('closed',()=> {
    win = null
  })
}

app.on('ready',()=>{
  createWindow()
})

app.on('window-all-closed', ()=> {
  if(ProcessingInstruction.platform !== 'dawin'){
    app.quit()
  }
})

app.on('activate', ()=> {
  if(win === null) {
    createWindow()
  }
})