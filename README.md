# Webpack Boilerplate
This is a webpack with typescript, sass and bootstrap boiler plate based on the webpack docs.

# Installation
Use npm to download the needed node_modules.

# Remove Bootstrap 
- Remove from the dependencies object.
    - "@popperjs/core": "^2.9.2",
    - "bootstrap": "^5.0.1"
- Remove from ./styles/styles.scss
    - @import '../../node_modules/bootstrap/scss/bootstrap.scss';

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