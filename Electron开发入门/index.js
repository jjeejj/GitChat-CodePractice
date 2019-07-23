const { app, BrowserWindow } = require('electron');

let win = null;
function createWindow () {
    // 创建浏览器窗口
    win = new BrowserWindow({
        width: 800,
        height: 600
    });
    var n = 20;
    console.log(n);
    // 加载 index.html 文件
    win.loadFile('./index.html');

    win.on('closed', () => {
        console.log('closed');
        win = null;
    });

    // 打开开发者工具
    win.webContents.openDevTools();
};

app.on('ready', createWindow);

// 所有窗口关闭时，触发 window-all-close 事件

app.on('window-all-closed', () => {
    console.log('window-all-closed');
    // 非 Mac 平台，直接退出应用
    if (process.platform !== 'darwin') {
        app.quit();
    };
});

// 监听应用激活事件
app.on('activate', () => {
    console.log('activate');
    if (win === null) {
      createWindow();
    };
});