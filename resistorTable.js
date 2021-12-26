class ResistorTable {
	static E3(){
	  var textArea = document.getElementById("Rlist");
    textArea.value = "";
    var res = [1.0, 2.2, 4.7];
    for(var n = 3; n < 6; n++)
    for(var i = 0; i < res.length; i++)
      textArea.value += (res[i] * Math.pow(10, n))+"\n";
	}

	static E6(){
	  var textArea = document.getElementById("Rlist");
    textArea.value = "";
    var res = [1.0, 1.5, 2.2, 3.3, 4.7, 6.8];
    for(var n = 3; n < 6; n++)
    for(var i = 0; i < res.length; i++)
      textArea.value += (res[i] * Math.pow(10, n))+"\n";
	}

	static E12(){
	  var textArea = document.getElementById("Rlist");
    textArea.value = "";
    var res = [1.0, 1.2, 1.5, 1.8, 2.2, 2.7, 3.3, 3.9, 4.7, 5.6, 6.8, 8.2];
    for(var n = 3; n < 6; n++)
    for(var i = 0; i < res.length; i++)
      textArea.value += (res[i] * Math.pow(10, n))+"\n";
	}


	static ETemp(){
	  var textArea = document.getElementById("Rlist");
	  textArea.value = "";
	}

	static E24(){
	  var textArea = document.getElementById("Rlist");
    textArea.value = "";
    var res = [1.0, 1.1, 1.2, 1.3, 1.5, 1.6, 1.8, 2.0, 2.2, 2.4, 2.7, 3.0, 3.3, 3.6, 3.9, 4.3, 4.7, 5.1, 5.6, 6.2, 6.8, 7.5, 8.2, 9.1];
    for(var n = 3; n < 6; n++)
    for(var i = 0; i < res.length; i++)
      textArea.value += (res[i] * Math.pow(10, n))+"\n";
	}
	static E48(){
	  var textArea = document.getElementById("Rlist");
    textArea.value = "";
    var res = [10.0, 10.5, 11.0, 11.5, 12.1, 12.7, 13.3, 14.0, 14.7, 15.4, 16.2, 16.9, 17.8, 18.7, 19.6, 20.5, 21.5, 22.6, 23.7, 24.9, 26.1, 27.4, 28.7, 30.1, 31.6, 33.2, 34.8, 36.5, 38.3, 40.2, 42.2, 44.2, 46.4, 48.7, 51.1, 53.6, 56.2, 59.0, 61.9, 64.9, 68.1, 71.5, 75.0, 78.7, 82.5, 86.6, 90.9, 95.3];
    for(var n = 3; n < 6; n++)
    for(var i = 0; i < res.length; i++)
      textArea.value += (res[i] * Math.pow(10, n))+"\n";
	}

	static MarutsuResistors(){
	  var textArea = document.getElementById("Rlist");
    textArea.value = "";
    var res = [
1*1000,
1.1*1000,
1.2*1000,
1.2*1000,
1.3*1000,
1.5*1000,
1.5*1000,
1.6*1000,
1.8*1000,
2*1000,
2*1000,
2.2*1000,
2.2*1000,
2.4*1000,
2.4*1000,
2.7*1000,
3*1000,
3.3*1000,
3.6*1000,
3.9*1000,
3.9*1000,
4.3*1000,
4.7*1000,
5*1000,
5.1*1000,
5.6*1000,
6.2*1000,
6.8*1000,
6.8*1000,
7.5*1000,
7.5*1000,
8.2*1000,
9.1*1000,
10*1000,
11*1000,
12*1000,
12*1000,
13*1000,
15*1000,
16*1000,
18*1000,
18*1000,
20*1000,
22*1000,
24*1000,
24*1000,
27*1000,
30*1000,
30*1000,
33*1000,
36*1000,
39*1000,
40*1000,
43*1000,
47*1000,
47*1000,
50*1000,
51*1000,
56*1000,
62*1000,
68*1000,
68*1000,
75*1000,
82*1000,
91*1000,
100*1000,
110*1000,
120*1000,
130*1000,
150*1000,
150*1000,
160*1000,
180*1000,
200*1000,
220*1000,
220*1000,
240*1000,
250*1000,
270*1000,
300*1000,
300*1000,
330*1000,
360*1000,
390*1000,
430*1000,
470*1000,
510*1000,
560*1000,
620*1000,
680*1000,
750*1000,
820*1000,
910*1000,
];
    for(var i = 0; i < res.length; i++)
      textArea.value += res[i]+"\n";
	}
}
