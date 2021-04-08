#!/usr/bin/node
// File: noteapp.js
// Name: D.Saravanan
// Date: 08/04/2021
// Script for creating Notes App

// import fs module 
const fs = require('fs');

// synchronous data writing to a file
fs.writeFileSync('notes.txt', 'This file was created by Node.js!\n');

// data overwritten if exist
fs.writeFileSync('notes.txt', 'Node.js is a JavaScript runtime built on V8 JS engine.\n');

// append data to the file
fs.appendFileSync('notes.txt', 'Node.js uses an event-driven, non-blocking I/O model.\n');
