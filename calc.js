

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

function calc() {
  Vin     = document.getElementById("Vin")    .value;
  Vout    = document.getElementById("Vout")   .value;
  Iout    = document.getElementById("Iout")   .value;
  Vripple = document.getElementById("Vripple").value;
  f       = document.getElementById("f")      .value;
  Vsat    = document.getElementById("Vsat")   .value;
  Vf      = document.getElementById("Vf")     .value;



  if(Vout < 0)
    calcInvert();
  else if(Vin < Vout)
    calcStepUp();
  else
    calcStepDown();

  showResult();
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
}

function showResult() {

  var isCompleted = Vin && Vout && Iout && Vripple && f && Vsat && Vf;
  var resultView = document.getElementById("result");
  document.getElementById("Type").innerHTML = Type;
  switch(Type){
    case "降圧":
      resultView.style.background = "#DDFFDD";
    break;
    case "昇圧":
      resultView.style.background = "#FFDDDD";
    break;
    case "負電圧":
      resultView.style.background = "#DDDDFF";
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
  document.getElementById("Ipk").   innerHTML = Ipk;
}

function getSimplifiedValue(value){
  var pref = getSIPrefix(value);

  return getRoundedValue(value * Math.pow(10, -pref))+ "×10<sup>"+pref+"</sup>";
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

function toStringC(C){
  var unit = getPrefC(C);
  var sim = getRoundedValue(C * Math.pow(10, unit));
  sim += "[";
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

function toStringL(L){
  var unit = getPrefL(L);
  var sim = getRoundedValue(L * Math.pow(10, unit));
  sim += "[";
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
