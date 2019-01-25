const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;

let main;

app.on('ready', function() {
	// Create window
	main = new BrowserWindow({});

	// Load html into main(window)
	main.loadURL(url.format({
		pathname: path.join(__dirname, 'main.html'),
		protocol: 'file:',
		slashes: true
	}));

	main.setFullScreen(true);

	// Disable menu
	main.setMenu(null);
});
