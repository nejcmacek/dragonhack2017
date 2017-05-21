let accent = "#f0be3d";
let dark: "#888";

function parse() {
  return `
.bg-primary { background: ${accent} !important;}
.color-primary { color: ${accent} !important;}
.border-color-primary { border-color: ${accent} !important;}
.bg-dark { background: ${dark} !important; }`;
}

function changeColor(opts) {
  const { a, d } = { a: opts.accent || accent, d: opts.dark || dark }
  accent = a;
  dark = d;
  const str = parse();
  let e = document.getElementById("custom-colors");
  if (!e) {
    e = document.createElement("style");
    document.body.appendChild(e);
  }
  e.innerHTML = str;
}

window["changeColors"] = changeColor;

