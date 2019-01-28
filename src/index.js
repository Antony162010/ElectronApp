const { app, BrowserWindow, Menu } = require('electron');
const url = require('url');
const path = require('path');

if (process.env.NODE_ENV !== 'production') {
    require('electron-reload')(__dirname, { // hasta aqui solo reinicia las ventanas html
        electron: path.join(__dirname, '../node_modules', '.bin', 'electron')
    });
}

let mainWindow; // I define the mainWindow out for use later

app.on('ready', () => {
    mainWindow = new BrowserWindow({ width: 800, height: 600 });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/index.html'),
        protocol: 'file',
        slashes: true
    }));
    const mainMenu = Menu.buildFromTemplate(templateMenu);
    Menu.setApplicationMenu(mainMenu);
});

const templateMenu = [{
    label: 'File',
    submenu: [{
        label: 'new product',
        accelerator: 'Ctrl+N',
        click() {}
    }]

}];