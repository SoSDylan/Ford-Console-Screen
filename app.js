const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;

let main;

app.on('ready', function() {
	// Create window
	main = new BrowserWindow({ width: 1200, height: 700, webPreferences: { webSecurity: false, nodeIntegration: true } });

	// Load html into main(window)
	main.loadURL(url.format({
		pathname: path.join(__dirname, 'main.html'),
		protocol: 'file:',
		slashes: true
	}));

	// Disable menu
	main.setMenu(null);

	// Maximize and focus
	main.maximize();
	main.focus();

	// Set window to fullscreen
	// main.setFullScreen(true);

	// Disable X-Frame-Options from affecting iframes
	main.webContents.session.webRequest.onHeadersReceived({}, (d, c) => {
		if(d.responseHeaders['x-frame-options'] || d.responseHeaders['X-Frame-Options']){
			delete d.responseHeaders['x-frame-options'];
			delete d.responseHeaders['X-Frame-Options'];
		}
		c({cancel: false, responseHeaders: d.responseHeaders});
	});

	main.webContents.session.webRequest.onCompleted({}, (d) => {
		main.webContents.send('dirname', __dirname);
	});

	// Open chrome dev tools
	main.webContents.openDevTools()
});
