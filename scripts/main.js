var a = "";
var b = "0";
var c = "";
var result = ""


function add(number) {
  //
  if(b == 0){
  document.getElementById("display").value += number;
  a += number;
  console.log(a);
  }else{
    var textareafrom = document.getElementById("display");
    textareafrom.value = "";
    document.getElementById("display").value += number;
    c += number;
    console.log(a,c);
  }
}


function periodAdd() {
  document.getElementById("display").value += '.';
  a += number;
}

function equalAdd(a,b) {
  var textareafrom = document.getElementById("display");
  textareafrom.value = "";
  result = a + b;

}

function plusAdd() {
  b++;
  console.log(a,b);
}

function minusAdd() {
  
}

function timesAdd() {
}

function divideAdd() {
  
}

function allclear() {
  var textareafrom = document.getElementById("display");
  textareafrom.value = "";
}