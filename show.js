/*
 * N=外付けスイッチング素子なし
 * E=外付けスイッチング素子あり
 */


function showStepUpN(){
  var canvas = document.getElementById("circuit");
  canvas.width = 622;
  canvas.height = 358;
  var g = canvas.getContext("2d");
  var back = new Image();
  back.addEventListener("load", function() {
    g.drawImage(back, 0, 0);
    g.font = "14px Noto Sans CJK JP";
    g.fillText(getRoundedValue(Rsc), 118,44);
    g.fillText(toStringL(Lmin,true), 252,38);
    g.fillText("Co", 555,130);
    g.fillText(toStringC(Co,true), 542,147);
    g.fillText(toStringC(Ct,true), 366,321);
    g.fillText(Vin, 28,98);
    g.fillText(Vout, 555,92);
    g.fillText("Vf="+Vf, 412,80);
  }, false);
  back.src = "images/StepUpN.png";
}

function showStepUpE(){
  var canvas = document.getElementById("circuit");
  canvas.width = 622;
  canvas.height = 358;
  var g = canvas.getContext("2d");
  var back = new Image();
  back.addEventListener("load", function() {
    g.drawImage(back, 0, 0);
    g.font = "14px Noto Sans CJK JP";
    g.fillText(getRoundedValue(Rsc), 93,71);
    g.fillText(toStringL(Lmin,true), 236,73);
    g.fillText(toStringC(Co,true), 542,130);
    g.fillText(toStringC(Ct,true), 260,296);
    g.fillText(Vin, 28,98);
    g.fillText(Vout, 555,92);
    g.fillText("Vf="+Vf, 433,80);
  }, false);
  back.src = "images/StepUpE.png";
}

function showStepDownN(){
  var canvas = document.getElementById("circuit");
  canvas.width = 563;
  canvas.height = 310;
  var g = canvas.getContext("2d");
  var back = new Image();
  back.addEventListener("load", function() {
    g.drawImage(back, 0, 0);
    g.font = "14px Noto Sans CJK JP";
    g.fillText(getRoundedValue(Rsc), 91,23);
    g.fillText(toStringL(Lmin,true), 387,110);
    g.fillText(toStringC(Co,true), 490,228);
    g.fillText(toStringC(Ct,true), 244,237);
    g.fillText(Vin, 8,63);
    g.fillText(Vout, 495,155);
    // g.fillText("Vf="+Vf, 433,80);
  }, false);
  back.src = "images/StepDownN.png";
}

function showStepDownE(){
  var canvas = document.getElementById("circuit");
  canvas.width = 584;
  canvas.height = 314;
  var g = canvas.getContext("2d");
  var back = new Image();
  back.addEventListener("load", function() {
    g.drawImage(back, 0, 0);
    g.font = "14px Noto Sans CJK JP";
    g.fillText(getRoundedValue(Rsc), 71,44);
    g.fillText(toStringL(Lmin,true), 432,175);
    g.fillText(toStringC(Co,true), 524,257);
    g.fillText(toStringC(Ct,true), 246,271);
    g.fillText(Vin, 8,63);
    g.fillText(Vout, 544,188);
    // g.fillText("Vf="+Vf, 433,80);
  }, false);
  back.src = "images/StepDownE.png";
}
function showInv(){
  var canvas = document.getElementById("circuit");
  canvas.width = 576;
  canvas.height = 364;
  var g = canvas.getContext("2d");
  var back = new Image();
  back.addEventListener("load", function() {
    g.drawImage(back, 0, 0);
    g.font = "14px Noto Sans CJK JP";
    g.fillText(getRoundedValue(Rsc), 85,21);
    g.fillText("L="+toStringL(Lmin,true), 362,48);
    g.fillText(toStringC(Co,true), 485,327);
    g.fillText(toStringC(Ct,true), 259,267);
    g.fillText(Vin, 8,65);
    g.fillText(Vout, 490,178);
    // g.fillText("Vf="+Vf, 433,80);
  }, false);
  back.src = "images/Inv.png";
}
