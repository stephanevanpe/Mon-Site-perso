En cours de création, le site n'est pas fini.

https://stephane-van-pe.netlify.com





# React / GatsbyJS Theme - Dimension


## Features 🚀

- React / Gatsby Responsive / Progressive (PWA) App 
- Dimension design (by HTML5 Up)
- Ftp Deploy Script
- Sitemap plugin
- Google Analytics


### Running in development mode

Go inside 

- `npm install` to install modules or `yarn` (recommended)
- `yarn develop` to start the development (live browser update)
- `yarn build` generate the deplyment in `public` directory
- `yarn deploy` deploy your app via FTP `EDIT deploy.js (config section)`

### Open the source code and start editing!

The site is now running at
[http://localhost:8000](http://localhost:8000).

Open `dimension/` directory in your code editor of choice and edit it. 
Save your changes and the changes will be reflected in the browser without manual refresh!

### Configure FTP deployment 

Edit `deploy.js` file:

```js
var config = {
    user: "YOUR_USER_HERE",                   // NOTE that this was username in 1.x 
    password: "YOUR_PASS_HERE",           // optional, prompted if none given
    host: "YOUR_FTP_SERVER_HERE",
    port: 21,
    localRoot: __dirname + '/public',
    remoteRoot: '/',
    include: ['*', '**/*'],      // this would upload everything except dot files
    //include: ['*.php', 'dist/*'],
    exclude: ['dist/**/*.map'],     // e.g. exclude sourcemaps - ** exclude: [] if nothing to exclude **
    deleteRemote: false,              // delete ALL existing files at destination before uploading, if true
    forcePasv: false                 // Passive mode is forced (EPSV command is not sent)
}
```

