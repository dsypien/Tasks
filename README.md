# Tasks [![Build Status](https://travis-ci.org/dsypien/Tasks.svg?branch=master)](https://travis-ci.org/dsypien/Tasks)
Tasks is a simple kanban web app that helps you keep track of your projects.

Dependencies
------------
-  Node.js
-  Bower
-  Grunt

Setup
-----
If you have homebrew installing Node.js is a breeze:
```bash
  $ brew install node
```
If you don't have homebrew you can use an installer from the Node.js site:
https://nodejs.org/

Once you have node setup, you can use nodes package manager to download and install Bower and Grunt.js
```bash
  $ npm install -g bower grunt-cli 
```

Build
-----
```bash
  $ npm update
  $ bower update
  $ grunt build
```

Run Unit Tests
------------
```bash
  $ grunt test
```

Run End To End Tests
-----------
Install Protractor if you don't already have it:
```bash
  $ npm install -g protractor
```
Start up the Selenium Server:
```bash
  $ webdriver-manager update
  $ webdriver-manager start
```
To run the tests, from the projects root directory type:
```bash
  $ protractor test/e2e/conf.js
```

Start Server
------------
To run a new build and start server :
```bash
  $ grunt
```

To just start a server:
```bash
  $ grunt server
```

License
--------

PiFrame a picture frame service and webapp for the Raspberry Pi.
Copyright (C) 2014-2015  David Sypien

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
