/*
  one possible implemenation of the 10print.org algorithm written in JavaScript
*/


// Aniscolors: https://github.com/shiena/ansicolor/blob/master/README.md
/*
  Foreground: default
  Foreground-Bright: + 60
  Background: + 10
  Background_Bright: + 70
*/

const prompt = require('prompt-sync')({sigint: true});

const black =  '\x1b[30m';	//Black
const red   = '\x1b[31m';	//Red
const green  = '\x1b[32m';	//Green
const yellow = '\x1b[33m';	//Yellow
const blue = '\x1b[34m';	//Blue
const magenta = '\x1b[35m';	//Magenta
const cyan = '\x1b[36m';	//Cyan
const white = '\x1b[37m';	//White
const de_fault = '\x1b[39m';	//Default(foreground color at startup)
const l_gray = '\x1b[90m';	//Light Gray
const l_red = '\x1b[91m';	//Light Red
const l_green= '\x1b[92m';	//Light Green
const l_yellow= '\x1b[93m';	//Light Yellow
const l_blue = '\x1b[94m';	//Light Blue
const l_magenta = '\x1b[95m';	//Light Magenta
const l_cyan = '\x1b[96m';	//Light Cyan
const l_white = '\x1b[97m';	//Light White


const blocks = ['█', '░', '🬆']
const moorise = []
const w = process.stdout.columns

function draw () {
  var person = prompt("Please enter: ");
  if (person.includes("moonrise"))
  {

  }
  setTimeout(draw, 1000)
  let output = magenta 
  for (let i = 0; i < w; i++) {
    r = Math.random()
    if (Math.random() > 0.5) {
      output += '\\'
    } else {
      output += '/'
    }
  }
  console.log(output)
}

draw()
