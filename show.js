/*
 * N=外付けスイッチング素子なし
 * E=外付けスイッチング素子あり
 */


function showStepUpN(){
  var canvas = document.getElementById("circuit");
  canvas.width = 622;
  canvas.height = 358;
  var g = canvas.getContext("2d");
  g.fillStyle = "red";
  var back = new Image();
  back.addEventListener("load", function() {
    g.drawImage(back, 0, 0);
    g.font = "14px Noto Sans CJK JP";
    g.fillText(getRoundedValue(Rsc)+"Ω", 118,44);
    g.fillText(toStringL(Lmin,true)+"H", 252,38);
    g.fillText("Co", 555,130);
    g.fillText(toStringC(Co,true)+"F", 542,147);
    g.fillText(toStringC(Ct,true)+"F", 366,321);
    g.fillText(Vin+"V", 28,98);
    g.fillText(Vout+"V", 555,92);
    // g.fillText("Vf="+Vf, 412,80);
    g.fillText(getSimplifiedValue(R2)+"Ω", 440,134);
    g.fillText(getSimplifiedValue(R1)+"Ω", 508,298);
  }, false);
  back.src = "images/StepUpN.png";
}

function showStepUpE(){
  var canvas = document.getElementById("circuit");
  canvas.width = 622;
  canvas.height = 358;
  var g = canvas.getContext("2d");
  g.fillStyle = "red";
  var back = new Image();
  back.addEventListener("load", function() {
    g.drawImage(back, 0, 0);
    g.font = "14px Noto Sans CJK JP";
    g.fillText(getRoundedValue(Rsc)+"Ω", 93,71);
    g.fillText(toStringL(Lmin,true)+"H", 236,73);
    g.fillText(toStringC(Co,true)+"F", 542,130);
    g.fillText(toStringC(Ct,true)+"F", 260,296);
    g.fillText(Vin+"V", 28,98);
    g.fillText(Vout+"V", 555,92);
    g.fillText(getSimplifiedValue(R2)+"Ω", 440,140);
    g.fillText(getSimplifiedValue(R1)+"Ω", 499,290);
  }, false);
  back.src = "images/StepUpE.png";
}

function showStepDownN(){
  var canvas = document.getElementById("circuit");
  canvas.width = 563;
  canvas.height = 310;
  var g = canvas.getContext("2d");
  g.fillStyle = "green";
  var back = new Image();
  back.addEventListener("load", function() {
    g.drawImage(back, 0, 0);
    g.font = "14px Noto Sans CJK JP";
    g.fillText(getRoundedValue(Rsc)+"Ω", 91,23);
    g.fillText(toStringL(Lmin,true)+"H", 387,110);
    g.fillText(toStringC(Co,true)+"F", 490,228);
    g.fillText(toStringC(Ct,true)+"F", 240,237);
    g.fillText(Vin+"V", 8,66);
    g.fillText(Vout+"V", 495,155);
    // g.fillText("Vf="+Vf, 433,80);
    g.fillText(getSimplifiedValue(R2)+"Ω", 410,185);
    g.fillText(getSimplifiedValue(R1)+"Ω", 387,228);
  }, false);
  back.src = "images/StepDownN.png";
}

function showStepDownE(){
  var canvas = document.getElementById("circuit");
  canvas.width = 584;
  canvas.height = 314;
  var g = canvas.getContext("2d");
  g.fillStyle = "green";
  var back = new Image();
  back.addEventListener("load", function() {
    g.drawImage(back, 0, 0);
    g.font = "14px Noto Sans CJK JP";
    g.fillText(getRoundedValue(Rsc)+"Ω", 71,44);
    g.fillText(toStringL(Lmin,true)+"H", 432,175);
    g.fillText(toStringC(Co,true)+"F", 524,257);
    g.fillText(toStringC(Ct,true)+"F", 246,271);
    g.fillText(Vin+"V", 8,63);
    g.fillText(Vout+"V", 544,188);
    // g.fillText("Vf="+Vf, 433,80);
    g.fillText(getSimplifiedValue(R2)+"Ω", 461,217);
    g.fillText(getSimplifiedValue(R1)+"Ω", 457,257);
  }, false);
  back.src = "images/StepDownE.png";
}
function showInv(){
  var canvas = document.getElementById("circuit");
  canvas.width = 576;
  canvas.height = 364;
  var g = canvas.getContext("2d");
  g.fillStyle = "blue";
  var back = new Image();
  back.addEventListener("load", function() {
    g.drawImage(back, 0, 0);
    g.font = "14px Noto Sans CJK JP";
    g.fillText(getRoundedValue(Rsc)+"Ω", 85,21);
    g.fillText("L="+toStringL(Lmin,true)+"H", 362,48);
    g.fillText(toStringC(Co,true)+"F", 485,327);
    g.fillText(toStringC(Ct,true)+"F", 259,267);
    g.fillText(Vin+"V", 8,65);
    g.fillText(Vout+"V", 490,178);
    // g.fillText("Vf="+Vf, 433,80);
    g.fillText(getSimplifiedValue(R2)+"Ω", 425,228);
    g.fillText(getSimplifiedValue(R1)+"Ω", 420,275);
  }, false);
  back.src = "images/Inv.png";
}
