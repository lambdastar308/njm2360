

var Vin;
var Vout;
var Iout;
var Vripple;
var f;
var Vsat;
var Vf;
var Tonoff;
var T;
var Toff;
var Ton;
var Ct;
var Ipk;
var Rsc;
var Lmin;
var Co;
var Type;
var isUseICSW;
var resistors;
var R2perR1 // R2 / R1
var R1;
var R2;

var resistorsResult;

function calc() {
  Vin     = document.getElementById("Vin")    .value;
  Vout    = document.getElementById("Vout")   .value;
  Iout    = document.getElementById("Iout")   .value;
  Vripple = document.getElementById("Vripple").value;
  f       = document.getElementById("f")      .value;
  Vsat    = document.getElementById("Vsat")   .value;
  Vf      = document.getElementById("Vf")     .value;
  isUseICSW = document.getElementById("isUseExSW").checked;
  var rawResistors = document.getElementById("Rlist").value.split("\n");

  resistors = new Array();
  for(var i = 0; i < rawResistors.length; i++){
    resistors.push(parseFloat(rawResistors[i]));
  }

  document.getElementById("Vsat").disabled = Vout < 0 || isUseICSW;
  document.getElementById("isUseExSW").disabled = Vout < 0;
  if(Vout < 0){
    document.getElementById("isUseExSW").checked = true;
  }

  if(Vout < 0)
    calcInvert();
  else if(Vin < Vout)
    calcStepUp();
  else
    calcStepDown();

  findResistors();

  showResult();

  document.getElementById("circuit").onclick = function(){
    var canvas = document.getElementById("circuit");

    var link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "回路図_"+Vin+"Vから"+Vout+"Vに"+Type+".png";
    link.click();
  };

}

function calcStepDown() {
  Type   = "降圧";
  Tonoff = (Vout + Vf) / (Vin - Vsat - Vout);
  T      = 1 / f;
  Toff   = T / (Tonoff + 1);
  Ton    = T - Toff;
  Ct     =  4 * 0.00001 * Ton;
  Ipk    =  2 * Iout;
  Rsc    =  0.3 / Ipk;
  Lmin   = (Vin - Vsat - Vout) / Ipk * Ton;
  Co     = Ipk * T / 8.0 / Vripple;
  R2perR1 =Vout / 1.25 - 1.0;
  if(isUseICSW)
    showStepDownN();
  else
    showStepDownE();
}

function calcStepUp() {
  Type   = "昇圧";
  Tonoff = (Vout + Vf - Vin) / (Vin - Vsat);
  T      = 1 / f;
  Toff   = T / (Tonoff + 1);
  Ton    = T - Toff;
  Ct     =  4 * 0.00001 * Ton;
  Ipk    =  2 * Iout * T / Toff;
  Rsc    =  0.3 / Ipk;
  Lmin   = (Vin - Vsat) / Ipk * Ton;
  Co     = Ipk * Ton / Vripple;
  R2perR1 = Vout / 1.25 - 1.0;
  if(isUseICSW)
    showStepUpN();
  else
    showStepUpE();
}

function calcInvert() {
  Type   = "負電圧";
  Tonoff = (-Vout + Vf) / (Vin - Vsat);
  T      = 1 / f;
  Toff   = T / (Tonoff + 1);
  Ton    = T - Toff;
  Ct     =  4 * 0.00001 * Ton;
  Ipk    =  2 * Iout * T / Toff;
  Rsc    =  0.3 / Ipk;
  Lmin   = (Vin - Vsat) / Ipk * Ton;
  Co     = Ipk * Ton / Vripple;
  R2perR1 = 1.0 / (-Vout / 1.25 - 1.0);
  showInv();
}

function onChangeSW(){
  var swelem = document.getElementById('isUseExSW');
  document.getElementById("Vsat").disabled = swelem.checked;
  if(swelem.checked){
    document.getElementById("Vsat").value = 0.6;
  }
  calc();
}

function showResult() {
  var isCompleted = Vin && Vout && Iout && Vripple && f && Vsat && Vf;
  var resultView = document.getElementById("result");
  document.getElementById("Type").innerHTML = Type;
  switch(Type){
    case "降圧":
      resultView.style.background = "#AAFFAA";
    break;
    case "昇圧":
      resultView.style.background = "#FFAAAA";
    break;
    case "負電圧":
      resultView.style.background = "#AAAAFF";
    break;
  }

  if(!isCompleted) return;
  document.getElementById("Ct").    innerHTML = toStringC(Ct);
  document.getElementById("Rsc").   innerHTML = getRoundedValue(Rsc);
  document.getElementById("Lmin").  innerHTML = toStringL(Lmin);
  document.getElementById("Co").    innerHTML = toStringC(Co);
  document.getElementById("Tonoff").innerHTML = Tonoff;
  document.getElementById("T").     innerHTML = toStringL(T);
  document.getElementById("Toff").  innerHTML = toStringL(Toff);
  document.getElementById("Ton").   innerHTML = toStringL(Ton);
  document.getElementById("Ipk").   innerHTML = getSimplifiedValue(Ipk);
  document.getElementById("R1").    innerHTML = getSimplifiedValue(R1);
  document.getElementById("R2").    innerHTML = getSimplifiedValue(R2);
}

function getSimplifiedValue(value){
  var pref = getSIPrefix(value);
  var nearestpref = [3,0,-3,-6,-12].reduce(function(prev, curr) {
    return (Math.abs(curr - pref) < Math.abs(prev - pref) ? curr : prev);
  });
  var prefix = "";
  var prefs = {
    3: 'k',
    0: '',
  };
  var prefminus = {
    3: 'm',
    6: 'μ',
    12: 'p',
  };
  return getRoundedValue(value * Math.pow(10, -nearestpref))+ (nearestpref< 0 ? prefminus[-nearestpref] : prefs[nearestpref]);
}

function getSIPrefix(orivalue){
  var value = orivalue;
  var pref = 0;
  while(Math.floor(value) <= 0 || 9 < Math.floor(value)){
    if(Math.floor(value) <= 0){
      value *= 10;
      pref--;
    }
    if(9 < Math.floor(value)){
      value /= 10;
      pref++;
    }
  }
  return pref;
}

function toStringC(C, isUseSep){
  var unit = getPrefC(C);
  var sim = getRoundedValue(C * Math.pow(10, unit));
  if(!isUseSep) sim += "[";
  sim += unit == 6 ? "μ" : "p";
  return sim;
}

function getPrefC(C){
  var log = getSIPrefix(C);
  if(-9 > log){
    return 12;
  }
  return 6;
}

function toStringL(L, isUseSep){
  var unit = getPrefL(L);
  var sim = getRoundedValue(L * Math.pow(10, unit));
  if(!isUseSep) sim += "[";
  sim += unit == 6 ? "μ" : "m";
  return sim;
}

function getRoundedValue(value){
  return Math.round(value * 1000) / 1000;
}

function getPrefL(L){
  var log = getSIPrefix(L);
  if(-3 > log){
    return 6;
  }
  return 3;
}

function sortResult(a, b){
  var com1 = a.res - b.res;
  if(Math.abs(com1) < 0.001)
    return Math.log10(b.R1) - Math.log10(a.R1);
  return com1;
}

function findResistors(){
  resistorsResult = new Array();

  for(var x = 0; x < resistors.length; x++)
    for(var y = 0; y < resistors.length; y++){
      var result = new Object();
      result.R1 = resistors[x];
      result.R2 = resistors[y];
      result.res = Math.abs(result.R2 / result.R1 - R2perR1);
      if(result.res < 10){
        resistorsResult.push(result);
      }
    }
    resistorsResult = resistorsResult.sort(sortResult);
    R1 = resistorsResult[0].R1;
    R2 = resistorsResult[0].R2;
}
