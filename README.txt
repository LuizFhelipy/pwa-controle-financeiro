# Project base info
project based on boilerplate create-react-app

link
https://create-react-app.dev/docs/making-a-progressive-web-app/

command 
npx create-react-app pwa-controle-financeiro --template cra-template-pwa

# Libs

## Dixie
Dixie lib is used to control IndexDB storage

## Workbox
Used to manage the serviceWorker and load static files into cache by default.

## Extension
Install Lighthouse(chrome) extension to evaluate pwa app

## Web Vitals
Is possible enable reportWebVitals in index.js to verify app performace.

# Commands
command to run on devepment mode
```
npm run start
```

command to build
```
npm run build
```

command to run build folder (necessary for pwa to work)

```
npm install serve (necessary to run pwa locally with react)
npm serve -s build
```
