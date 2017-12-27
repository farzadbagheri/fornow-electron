const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;

let mainWindow;

// Listen for app to be ready

app.on('ready', function() {
	mainWindow = new BrowserWindow({});
	// load HTML file into window
	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'mainWindow.html'),
		protocol: "file:",
		slashes: true
	}));
	//build menu from template

	const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
	// insert menu
	Menu.setApplicationMenu(mainMenu); 
});

const mainMenuTemplate = [
	{},
	{
		label: 'File',
		submenu: [
			{
				label: 'Add item'
			}
		]

	},
	{
		label: 'Next'
	}	
];


