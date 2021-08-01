
var incomInterv, outcomInterv;
defaultStartColor = '255,127,24'
defaultEndColor = '255, 4, 9'

function incomingTransit(elem,rgb1,rbg2) {
  document.getElementById("theme1").style = "background-image:linear-gradient(90deg,rgba("+rgb1+",0),rgba("+rbg2+", 0));"
  document.getElementById("theme2").style = "background-image:linear-gradient(90deg,rgba("+rgb1+",0),rgba("+rbg2+", 0));"
  document.getElementById("theme3").style = "background-image:linear-gradient(90deg,rgba("+rgb1+",0),rgba("+rbg2+", 0));"

  i = 5
  clearInterval(outcomInterv)
    clearInterval(incomInterv)
  incomInterv = setInterval(()=>{
    alpha = i/25
    elem.style = "background-image:linear-gradient(90deg,rgba("+rgb1+","+alpha+"),rgba("+rbg2+", "+alpha+"));"
        //console.log(elem.style)
    if(i==100) {clearInterval(incomInterv)}
    i++
    //console.log(i)
  },0.5)
  //console.log("In Transit to "+elem.innerHTML)
}

function outcomingTransit(elem,rgb1,rbg2) {
  i = 20
  clearInterval(incomInterv)
  outcomInterv = setInterval(()=>{
    alpha = i/25
    elem.style = "background-image:linear-gradient(90deg,rgba("+rgb1+","+alpha+"),rgba("+rbg2+", "+alpha+"));"
    //console.log(elem.style)
    if(i==0) {clearInterval(outcomInterv)}
    i--
    //console.log(i)
  },0.5)
  //console.log("Out Transit to "+elem.innerHTML)
}

//#ff7f18 -> rgba(255, 127, 24, 1) (orange)
//#ff0409 -> rgba(255, 4, 9, 1) (rouge)

//#ff8800 -> rgba(255, 136, 0, 1) (orange)
//#ffc918 -> rgba(255, 201, 24, 1) (jaune-orangé)

//#AE09FF -> rgba(174, 9, 255, 1) (violet)
//#FF18F7 -> rgba(255, 24, 247, 1) (rose) 