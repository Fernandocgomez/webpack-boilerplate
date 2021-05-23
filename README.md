# Webpack Boilerplate
This is a webpack with typescript boiler plate based on the webpack docs.

# Installation
Use npm to download the needed node_modules.

```bash 
npm install
```
# Development
To work on development mode:

make changes on the ./webpack.config.js 

- module.export.mode = "development"
- uncomment devtool: 'inline-source-map' line

To start the localhost server:
```bash 
npm run start
```

# Production
To work on production mode:

make changes on the ./webpack.config.js 

- module.export.mode = "production"
- comment devtool: 'inline-source-map' line

To build app:
```bash 
npm run build
```