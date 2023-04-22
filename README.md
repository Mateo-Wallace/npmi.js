<!-- SHIELDS -->

[![npm Downloads Shield](https://img.shields.io/npm/dt/npmi.js?style=flat-square&logo=npm)](https://www.npmjs.com/package/npmi.js)
[![Stars Shield](https://img.shields.io/github/stars/Mateo-Wallace/npmi.js.svg?style=flat-square&color=blue&logo=github)](https://github.com/Mateo-Wallace/npmi.js/stargazers)
[![Forks Shield](https://img.shields.io/github/forks/Mateo-Wallace/npmi.js.svg?style=flat-square&logo=github)](https://github.com/Mateo-Wallace/npmi.js/network/members)
[![Contributors Shield](https://img.shields.io/github/contributors/Mateo-Wallace/npmi.js.svg?style=flat-square&color=success&logo=github)](https://github.com/Mateo-Wallace/npmi.js/graphs/contributors)
[![License Shield](https://img.shields.io/github/license/Mateo-Wallace/npmi.js.svg?style=flat-square)](https://github.com/Mateo-Wallace/npmi.js/blob/main/LICENSE)
[![LinkedIn Shield](https://img.shields.io/badge/LinkedIn-555555?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/mateo-wallace/)

<!-- PROJECT LOGO & HEADER -->

<br />
<div align="center">
<img src="./logo.png" alt="rpg dice logo" width="80" height="80">

  <h3 align="center"><strong>npmi.js</strong></h3>

  <p align="center">
    <strong>A multi-folder npm installer</strong>
    <br />
    Globally install npmi.js and run npmijs to install all folders that have a package.json in the cwd
    <br />
    <br />
    <a href="https://github.com/Mateo-Wallace/npmi.js">View GitHub</a>
    ·
    <a href="https://www.npmjs.com/package/npmi.js">View npm</a>
    ·
    <a href="https://github.com/Mateo-Wallace/npmi.js/issues">Report Bug</a>
  </p>
</div>

<!-- NPM INSTALL -->

```
npm install -g npmi.js
```

<!-- TABLE OF CONTENTS -->

<details>
  <summary style="cursor: pointer;"><strong>Table of Contents</strong></summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<div align="center">
  <br />
  <img src="./img/exRoll.png" alt="example dice roller in effect">
  <br />
  <br />
</div>

**npmi.js** is an npm package that allows a user to run the command `npm install` on multiple folders at the same time. The main advantage of this is that if you have multiple projects that take very long to run `npm i` on, you don't have to sit and wait for:

1. Wait for a single project to install
1. Change to the next project
1. Run the install on the next project
1. Repeat for all projects

Using **npmi.js** you simply move all projects into one parent folder, run the command `npmijs` from the terminal, and let your computer do its thing. Essentially cutting out the time waiting for one install to finish in order to manually start the next install.

<!-- INSTALLATION -->

## Installation

**npmi.js** is meant to be globally installed to your device. To globally install run this command:

```
npm install -g npmi.js
```

If you would like to verify the download run `npm list -g` and you should see `npmi.js@1.x.x` pop up.

<!-- USAGE -->

## Usage

Once you have **npmi.js** installed globally, collect all the files you would like to run `npm install` on into a parent folder. Navigate to the parent folder in your terminal and use the command:

```
npmijs
```

Running the command `npmijs` will check all folders and subfolders to see if they contain a `package.json`. If the folder does, it will run `npm i` in that location. It will then repeat this process for all files provided.

Once the process is completed if you would like to verify everything has installed, check your files to see if they have `/node_modules` and a `package_lock.json`.

<!-- LICENSE -->

## License

Distributed under the MIT License. See [LICENSE](https://github.com/Mateo-Wallace/npmi.js/blob/main/LICENSE) for more information.

<!-- CONTACT -->

## Contact

Mateo Wallace - [GitHub](https://github.com/Mateo-Wallace) - [Email](mailto:mateo.t.wallace@gmail.com) - [LinkedIn](https://www.linkedin.com/in/mateo-wallace/) - [Portfolio](https://mateo-wallace.github.io/) - [npmi.js repo](https://github.com/Mateo-Wallace/npmi.js)
