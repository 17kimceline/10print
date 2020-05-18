/*
  Celine Kim
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


const blocks = ['█', '░', '🬆', '▀', "░░", '▒','█', '▀','▒',
                '▄','▀', '▄','░','█','▄','░','█','░','▄','▀', "▓▓▓"]

const faces = ["٩(*❛⊰❛)～❤", "(◍＞◡＜◍)⋈。✧♡", "ʕ•ᴥ•ʔ", "~(˘▾˘~) ~(˘▾˘)~ (~˘▾˘)~", 
              "(ﾐ´ω`ﾐ)", "ʕ ⊃･ ◡ ･ ʔ⊃", "ᗧ···ᗣ···ᗣ··"]

const colors = [black, red, green, yellow, blue, magenta, 
                cyan, white, l_gray, l_red, l_green, l_yellow, 
                l_blue, l_magenta,l_cyan, l_white]

const spring = [green, yellow,l_green, l_yellow]

const w = process.stdout.columns

function draw () {
  setTimeout(draw, 1000)
  let output = magenta 

  for (let i = 0; i < w; i++) {
    r = Math.random()
    // asterisk
    if (r < 0.1) {
      output += white
      output += "*"
    } 
    // spring colours
    else if (r < 0.15){
      k = 0
      while (k < (i%20)){
        k++
        output += spring[(Math.round(k * r * 10) % spring.length)]
        output += "█ "
      }
    }
    // faces
    else if (r < 0.2){
      output += de_fault
      // 48 is my favourite number!
      output += faces[Math.round((r * 48)) % faces.length]
    }
    // all colours
    else if (r < 0.25){
      k = 0
      while(k < i){
        k++
        output += colors[(Math.round(k * r * 10) % colors.length)]
        output += blocks[(k% blocks.length)]
        output += "  "
      }
    }
    else if ( 0.3 < r < 0.31){
      output += "HAVE A GREAT DAY!!"
    }
    else if (r < 0.32){
      output += "█████"
    }
    else if (0.01 < r < 0.02){
      output += "█████████████████████████████████████████████████████████"
    }
    else {
      output += ' '
    }
  }
  console.log(output)
}

draw()
