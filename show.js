function showStepUpN(){
  var canvas = document.getElementById("circuit");
  canvas.width = 622;
  canvas.height = 358;
  var g = canvas.getContext("2d");
  var back = new Image();
  back.src = "images/StepUpN.png";
  g.drawImage(back, 0, 0);
  g.font = "16px Noto Sans CJK JP";
  g.fillText(getRoundedValue(Rsc), 118,44);
}
