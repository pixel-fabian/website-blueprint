# Website blueprint
Blueprint to build a simple website

## Features

### HTML

Basic index.html file

### CSS

- Preprocessor: [SASS](https://sass-lang.com/)
- Naming conventions: [BEM](http://getbem.com/)
- Code structure: inspired by [SMACSS](http://smacss.com/) 

```
./css/scss
  style.scss        // imports of all styles

  /base             // general styles, font-face, helpers
  /layout           // styles defining the layout of the page
  /modules          // independent modules, that can be used multiple times 
```

### JavaScript

- [TypeScript](https://www.typescriptlang.org/)
- Modular JS (imports & exports)

```
./js
  script.ts         // imports all necessary TS files

  /modules          // seperate different functionality in different modules
```

### Tooling

[gulp](https://gulpjs.com/) as taskrunner. Different tasks are defined within the ```gulptasks``` folder.

Available tasks:
```
gulp                // starts default task
```

---------

## Installation

Prerequisite: Have node.js and npm installed.

1. Clone or download this repository
2. Install dependencies

```
npm install
```

---------

## Usage

1. Start watcher ```npm run dev```
2. Make changes within the ```src``` folder
3. Generated files will be in ```dist```

### Deploy for production

---------

## License
[MIT License](./LICENSE)