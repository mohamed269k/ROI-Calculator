function calcuroi() {
    var totalinvestment = Number(document.getElementById("totalinvest").value)
    var netgain = Number(document.getElementById("net-gain").value)
    roi = netgain / totalinvestment * 100;
    
    
    document.getElementById("result").innerHTML = "Your ROI is " + roi.toFixed(2) + "%"
}
function clearresult() {
  document.getElementById("result").innerHTML = ""
  document.getElementById("net-gain").value = ""
  document.getElementById("totalinvest").value = ""
}
function checkiferror() {
  
}
