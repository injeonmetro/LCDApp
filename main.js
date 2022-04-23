// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')
// 기존에 작성된 require() 구문 생략...
const { autoUpdater } = require("electron-updater");
const log = require('electron-log');

autoUpdater.on('checking-for-update', () => {
  log.info('업데이트 확인 중...');
});
autoUpdater.on('update-available', (info) => {
  log.info('업데이트가 가능합니다.');
});
autoUpdater.on('update-not-available', (info) => {
  log.info('현재 최신버전입니다.');
});
autoUpdater.on('error', (err) => {
  log.info('에러가 발생하였습니다. 에러내용 : ' + err);
});
autoUpdater.on('download-progress', (progressObj) => {
  let log_message = "다운로드 속도: " + progressObj.bytesPerSecond;
  log_message = log_message + ' - 현재 ' + progressObj.percent + '%';
  log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')';
  log.info(log_message);
})
autoUpdater.on('update-downloaded', (info) => {
  log.info('업데이트가 완료되었습니다.');
});
function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  var loadingScreen = new BrowserWindow({ 
    width: 1280, 
    height: 720, 
    transparent: true, 
    frame: false, 
    alwaysOnTop: true 
  });
  loadingScreen.setResizable(false);
  loadingScreen.loadFile('splash.html');
  loadingScreen.on('closed', () => (loadingScreen = null));
  loadingScreen.webContents.on('did-finish-load', () => {
    loadingScreen.show();
    setTimeout(() => {
      loadingScreen.close();
    }, 2000);
  });

  
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();
  autoUpdater.checkForUpdates();
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
/** [생명주기] 모든 창이 닫히면 자동으로 앱 종료 */
app.on('window-all-closed', () => {
  app.quit();
});
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
