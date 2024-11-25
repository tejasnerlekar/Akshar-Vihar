//Tejas Nerlekar(@tejas.nerlekar)
//"Akshar Vihar" is a typography tool for Indian scripts, offering customizable layouts and wave effects for playful and creative text generation. Let’s have fun with wavy, loopy letters


let font;
let cnv;

//fonts
let banglaFont = "Anek Bangla";
let devanagariFont = "Anek Devanagari";
let gujaratiFont = "Anek Gujarati";
let gurumukhiFont = "Anek Gurmukhi";
let kannadaFont = "Anek Kannada";
let latinFont = "Anek Latin";
let malayalamFont = "Anek Malayalam";
let odiaFont = "Anek Odia";
let tamilFont = "Anek Tamil";
let teluguFont = "Anek Telugu";


let w = 1920;
let h = 1080;

let loopDuration;


function setup() {
  frameRate(24);
  
  pixelDensity(1);
  gui();
  
  cnv = createCanvas(w, h);
  cnv.position(displayWidth / 2 + 120 - width / 2, 80);
 
}



function draw() {
  loopDuration = duration.value();
  let t = (frameCount%loopDuration) / loopDuration;
  
  ///getting values
  let x = xposition.value();
  let y = yposition.value();
  let l = leading.value();
  let ang = angle.value();

  let ptsmin = ptsminimum.value();
  let ptsmax = ptsmaximum.value();

  let r = rows.value();
  let col = column.value();
  let g = gap.value();

  let wd = wavedist.value();
  let d = displace.value();

  let sc = script.selected();
  word = textInput.value();

  let bg = backgroundColor.value();
  let bgalpha = backopacity.value();
  let c = textcolor.value();
  let textalpha = textopacity.value();
  

  let weightValue = weightSlider.value();
  let widthValue = widthSlider.value();
  let ar = ratio.value();
  
  
  ///Ratio change
  switch (ar) {
    case "1600x900":
      w = 1600;
      h = 900;
      break;
    case "900x1600":
      w = 900;
      h = 1600;
      break;
    case "1280x720":
      w = 1280;
      h = 720;
      break;
    case "720x1280":
      w = 720;
      h = 1280;
      break;  
    case "1000x1000":
      w = 1000;
      h = 1000;
      break;
  }
  
  if (width !== w || height !== h) {
    resizeCanvas(w, h);
    cnv.position(displayWidth / 2 + 120 - w / 2, 80); 
  }

  //script change
  switch (sc) {
    case "Bangla":
      font = banglaFont;
      break;
    case "Devanagari":
      font = devanagariFont;
      break;
    case "Gujarati":
      font = gujaratiFont;
      break;
    case "Gurumukhi":
      font = gurumukhiFont;
      break;
    case "Kannada":
      font = kannadaFont;
      break;
    case "Latin":
      font = latinFont;
      break;
    case "Malayalam":
      font = malayalamFont;
      break;
    case "Odia":
      font = odiaFont;
      break;
    case "Tamil":
      font = tamilFont;
      break;
    case "Telugu":
      font = teluguFont;
      break;
    default:
      font = devanagariFont;
  }
  
  //The Artwork
  
  backColor = color(
    red(bg),
    green(bg),
    blue(bg),
    bgalpha
  );
  background(backColor);
  
  let textWidthValue = textWidth(word);
  let totalTextWidth = (textWidthValue + g) * col - g;
  let startX = (w - totalTextWidth) / 2;
  
  
  let startY = h / 2 - ((r - 1) * l) / 2;

 
  for (let j = 0; j < col; j++) {
    for (let i = 0; i < r; i++) {
      noStroke();
      
      let textColor = color(
    red(c),
    green(c),
    blue(c),
    textalpha
  );
      fill(textColor);

      let pts = map(sin(TWO_PI * t + i * (wd * 0.1)), -1, 1, ptsmin, ptsmax);
      textSize(pts);
      textFont(font);
      

      textStyle(NORMAL);
      let textElement = select("canvas");
      textElement.style(
        "font-variation-settings",
        `'wght' ${weightValue}, 'wdth' ${widthValue}`
      );
        wave = x * sin(TWO_PI * t + i * d);
       wave2 = y * sin(TWO_PI * t + i * d);
  
      
      let xpos = startX + j * (textWidth(word) + g) + wave;
      let ypos = startY + i * l + wave2;
       push()
      translate (xpos, ypos);
      rotate(ang * 0.1);
      text(word,0,0);
      pop();
    }
    
  }
}

function exportGif() {
    
  const option = {
    units:"frames",
    delay : 0,
    silent: false,
    notificationID : "saveGifResult"
    }
    saveGif("AksharVihar_Loop", loopDuration, option);
    
    repositionProgressBar();
  }

