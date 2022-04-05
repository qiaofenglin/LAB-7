function init() {
  //add your javascrip between these two lines of code
  function alertFunction() {
    var entryvalue = document.getElementById("entryinput").value;
    var textObj = document.getElementById("textoutput");
    alert("Qiaofeng Lin: " + entryvalue);
    textObj.innerHTML = entryvalue;
  }
  document.getElementById('entrybutton').addEventListener("click", alertFunction);

}
window.addEventListener('load', init);