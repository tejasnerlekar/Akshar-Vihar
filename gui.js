let scripts = [
  "Devanagari",
  "Bangla",
  "Gujarati",
  "Gurumukhi",
  "Kannada",
  "Latin",
  "Malayalam",
  "Odia",
  "Tamil",
  "Telugu",
];

let ratios =["1600x900","900x1600","1280x720","720x1280", "1000x1000"];
//let ratios =["1280x720","720x1280", "1000x1000"];
let ratio;

let script;
let word = "अक्षर विहार";
let textinput;
//The Grid
let rows;
let column;
let gap;

//Basic position
let xposition;
let yposition;
let leading;

//Point Size
let pts;
let ptsminimum;
let ptsmaximum;
let weightSlider;
let widthSlider;

//The Wave
let wave;
let wave2;
let wavedist;
let displace;
let duration;

//color
let backgroundColor;
let textcolor;

let randomizeButton;
let exportButton;

let y0 = 320;


function gui() {
  //container
  let container = createDiv();
  container.style("border", "1px solid grey");
  container.style("width", "270px");
  container.style("height", "100%");
  container.style("background-color", "black");
  container.style("overflow", "auto");
  container.id('gui');

  //title
  let title;
  title = createElement("h1", "Akshar<br>Vihar");
  title.position(10, 0);
  title.parent('gui');

  let subtitle;
  subtitle = createElement("h2", "01 Loops & Wave");
  subtitle.position(10, 130);
  subtitle.parent('gui');

  //line
  let lineElement = createElement("div");
  lineElement.position(0, 170);
  lineElement.style("width", "270px");
  lineElement.style("height", "1px");
  lineElement.style("background-color", "grey");
  lineElement.parent('gui');

  //Script Input
  let scriptLable;
  scriptLable = createElement("h3", "Script");
  scriptLable.position(10, 180);
  scriptLable.parent('gui');

  script = createSelect();
  script.position(80, 195);
  script.size(160, 25);
  script.style("cursor", "pointer");
  script.class("select");
  script.parent('gui');
  for (let a = 0; a < scripts.length; a++) {
    script.option(scripts[a]);
  }

  //Text Input
  let TextLable;
  TextLable = createElement("h3", "Text");
  TextLable.position(10, 220);
  TextLable.parent('gui');

  textInput = createInput(word);
  textInput.position(80, 235);
  textInput.size(150, 25);
  textInput.class("select");
  textInput.style("cursor", "pointer");
  textInput.parent('gui');
  
  //ratio
  let ratioLable;
  ratioLable = createElement("h3", "Ratio");
  ratioLable.position(10, 260);
  ratioLable.parent('gui');

  ratio = createSelect();
  ratio.position(80, 280);
  ratio.size(160, 25);
  ratio.style("cursor", "pointer");
  ratio.class("select");
  ratio.parent('gui');
  for (let b = 0; b < ratios.length; b++) {
    ratio.option(ratios[b]);
  }

  ///Grid
  let rowsLable;
  rowsLable = createElement("h3", "Rows");
  rowsLable.position(10, 305);
  rowsLable.parent('gui');

  rows = createSlider(1, 200, 5);
  rows.position(80, y0 + 10);
  rows.size(150);
  rows.class("sliders");
  rows.parent('gui');

  let columnLable;
  columnLable = createElement("h3", "Column");
  columnLable.position(10, 335);
  columnLable.parent('gui');

  column = createSlider(1, 200, 3);
  column.position(80, y0 + 40);
  column.size(150);
  column.class("sliders");
  column.parent('gui');

  let gapLable;
  gapLable = createElement("h3", "Gutter");
  gapLable.position(10, 365);
  gapLable.parent('gui');
  gap = createSlider(0, 500, 120);
  gap.position(80, y0 + 70);
  gap.size(150);
  gap.class("sliders");
  gap.parent('gui');

  //point size//

  let weightLable;
  weightLable = createElement("h3", "Weight");
  weightLable.position(10, 435);
  weightLable.parent('gui');

  weightSlider = createSlider(100, 800, 400);
  weightSlider.position(80, y0 + 140);
  weightSlider.size(150);
  weightSlider.class("sliders");
  weightSlider.parent('gui');

  let widthLable;
  widthLable = createElement("h3", "Width");
  widthLable.position(10, 465);
  widthLable.parent('gui');

  widthSlider = createSlider(75, 125, 100);
  widthSlider.position(80, y0 + 170);
  widthSlider.size(150);
  widthSlider.class("sliders");
  widthSlider.parent('gui');

  let ptsminLable;
  ptsminLable = createElement("h3", "Pts-min");
  ptsminLable.position(10, 495);
  ptsminLable.parent('gui');

  ptsminimum = createSlider(1, 500, 36);
  ptsminimum.position(80, y0 + 200);
  ptsminimum.size(150);
  ptsminimum.class("sliders");
  ptsminimum.parent('gui');

  let ptsmaxLable;
  ptsmaxLable = createElement("h3", "Pts-min");
  ptsmaxLable.position(10, 525);
  ptsmaxLable.parent('gui');

  ptsmaximum = createSlider(1, 500, 36);
  ptsmaximum.position(80, y0 + 230);
  ptsmaximum.size(150);
  ptsmaximum.class("sliders");
  ptsmaximum.parent('gui');

  ///position & wave

  let XposLable;
  XposLable = createElement("h3", "X-pos");
  XposLable.position(10, 595);
  XposLable.parent('gui');

  xposition = createSlider(0, 1000, 1);
  xposition.position(80, y0 + 300);
  xposition.size(150);
  xposition.class("sliders");
  xposition.parent('gui');

  let YposLable;
  YposLable = createElement("h3", "Y-pos");
  YposLable.position(10, 625);
  YposLable.parent('gui');

  yposition = createSlider(0, 1000, 20);
  yposition.position(80, y0 + 330);
  yposition.size(150);
  yposition.class("sliders");
  yposition.parent('gui');

  let leadingLable;
  leadingLable = createElement("h3", "Leading");
  leadingLable.position(10, 655);
  leadingLable.parent('gui');

  leading = createSlider(0, 500, 100);
  leading.position(80, y0 + 360);
  leading.size(150);
  leading.class("sliders");
  leading.parent('gui');

  let wavedistLable;
  wavedistLable = createElement("h3", "Offset");
  wavedistLable.position(10, 685);
  wavedistLable.parent('gui');

  wavedist = createSlider(0, 100, 10);
  wavedist.position(80, y0 + 390);
  wavedist.size(150);
  wavedist.class("sliders");
  wavedist.parent('gui');

  let displaceLable;
  displaceLable = createElement("h3", "Displace");
  displaceLable.position(10, 715);
  displaceLable.parent('gui');

  displace = createSlider(0, 100, 5);
  displace.position(80, y0 + 420);
  displace.size(150);
  displace.class("sliders");
  displace.parent('gui');

  let durationLable;
  durationLable = createElement("h3", "Duration");
  durationLable.position(10, 745);
  durationLable.parent('gui');

  duration = createSlider(6, 120, 12);
  duration.position(80, y0 + 450);
  duration.size(150);
  duration.class("sliders");
  duration.parent('gui');

  //colour picker

  let bgcolorLable;
  bgcolorLable = createElement("h3", "Background");
  bgcolorLable.position(10, 825);
  bgcolorLable.parent('gui');

  backgroundColor = createColorPicker("#000000");
  backgroundColor.position(125, y0 + 520);
  backgroundColor.size(100, 25);
  backgroundColor.class("select");
  backgroundColor.parent('gui');

  let txtcolorLable;
  txtcolorLable = createElement("h3", "Text Fill");
  txtcolorLable.position(10, 855);
  txtcolorLable.parent('gui');

  textcolor = createColorPicker("#ffffff");
  textcolor.position(125, y0 + 550);
  textcolor.size(100, 25);
  textcolor.class("select");
  textcolor.parent('gui');

  //randomise
  randomizeButton = createElement("button", "Randomize");
  randomizeButton.position(40, y0 + 640);
  randomizeButton.size(150, 30);
  randomizeButton.mousePressed(randomizeValues);
  randomizeButton.style("cursor", "pointer");
  randomizeButton.parent('gui');

  //randomizeButton.class ('sliders');

  exportButton = createElement("button", "Export gif");
  exportButton.position(40, y0 + 680);
  exportButton.size(150, 30);
  exportButton.mousePressed(exportGif);
  exportButton.style("cursor", "pointer");
  exportButton.parent('gui');

  //line
  let lineElement2 = createElement("div");
  lineElement2.position(0, 1060);
  lineElement2.style("width", "270px");
  lineElement2.style("height", "1px");
  lineElement2.style("background-color", "grey");
  lineElement2.parent('gui');

  let creditsLable;
  creditsLable = createElement(
    "h4",
    "Font: Anek Variable by Ektype <br>Built with: p5.js <br>Development Support: ChatGPT by OpenAI<br> Design & Development: Tejas Nerlekar"
  );
  creditsLable.position(10, 1060);
  creditsLable.parent('gui');
  creditsLable.style ('padding-bottom', '10px');
}


function repositionProgressBar() {
  setTimeout(() => {
    let progressBar = select("#saveGifResult");
    if (progressBar) {
      progressBar.style("position", "absolute");
      progressBar.style("top", "10px");
      progressBar.style("right", "10px");
      progressBar.style("width", "300px"); 
      progressBar.style("font-family", "'Baloo 2', sans-serif"); 
      progressBar.style("font-size", "16px");
      progressBar.style("background", "rgba(0, 0, 0, 0.8)");
      progressBar.style("color", "#fff");
      progressBar.style("padding", "10px");
      progressBar.style("border-radius", "5px");
      progressBar.style("z-index", "1000")
       
    }
  }, 100);
}


