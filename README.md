# npmi.js

Command Line Application that allows a user to run `npm i` on all adjacent folders.

## Multifile NPM Install

npmi.js is an npm package that allows you to use `npm i` on all directories within your current working directory. Simply install the package globally using `npm install -g npmi.js ` and then from whatever directory you wish use the command `npmijs` in the terminal.

### Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

Run

```
npm install -g npmi.js
```

## Usage

Once you have `npmi.js` installed globally, from the terminal navigate to the directory in which you would like to download all directories that include a `package.json`. From there run the command 

```
npmijs
``` 

and it will run `npm i` on all folders and subfolders.
