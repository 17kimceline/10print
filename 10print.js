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

const colors = [red, green, yellow, blue, magenta, 
                cyan, l_red, l_green, l_yellow, 
                l_blue, l_magenta,l_cyan]

const bg = [ '\x1b[40m', '\x1b[41m',	'\x1b[42m',	
             '\x1b[43m',	'\x1b[44m',	'\x1b[45m',	'\x1b[46m',	'\x1b[47m',	
             '\x1b[49m',	'\x1b[100m',	 '\x1b[101m',	'\x1b[102m',	 '\x1b[103m',	 
             '\x1b[104m',	 '\x1b[105m',	 '\x1b[106m',	'\x1b[107m',]

const light_bg = ['\x1b[40m', '\x1b[41m',	'\x1b[42m',	
'\x1b[43m',	'\x1b[44m',	'\x1b[45m',	'\x1b[46m',	'\x1b[47m',	
'\x1b[49m',]

const spring = [green, yellow,l_green, l_yellow]

const w = process.stdout.columns

screen = 0

function draw () {
  setTimeout(draw, 1000)
  
  //if (screen > 5)
  //  return
  //screen++
  let output = magenta 
  output += '\x1b[43m'

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
    // positive message at 3 am
    else if ( 0.3 < r < 0.31){
      output += "HAVE A GREAT DAY!!"
    }
    // feasible long boi
    else if (r < 0.315){
      output += "█████"
    }
    // boring ned
    else {
      output += ' '
      output += '\x1b[43m'
      //output += light_bg[(Math.round(r * 50) % light_bg.length)]
    }
  }
  console.log(output)
  return output
}

draw()
