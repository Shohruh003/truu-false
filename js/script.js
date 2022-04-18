elCheckTicket = document.querySelector("#ticket");
elCheckSleep = document.querySelector("#sleep");
elCheckLate = document.querySelector("#late");
elCheckWork = document.querySelector("#work");
elCheckTraffic = document.querySelector("#traffic");
elCheckBorder = document.querySelector("#border");

elButton = document.querySelector(".button");
elOutput = document.querySelector(".output");

elButton.addEventListener("click", function (e) {
  e.preventDefault();

  var ticket = elCheckTicket.checked;
  var sleep = elCheckSleep.checked;
  var late = elCheckLate.checked;
  var work = elCheckWork.checked;
  var traffic = elCheckTraffic.checked;
  var border = elCheckBorder.checked;
  var message = "";

  if ((ticket && sleep) && (work || traffic)) {
    message = "Sayohatni kechiktiramiz !!!"
  } else
  if ((ticket && sleep) && (late || border)){
    message = "Sayohatga bormaymiz !!!"
  } else
  if (ticket && sleep) {
    message = "Sayohatga boramiz !!!"
  } else { 
    message = "Sayohatga bormaymiz !!!"
  }

  elOutput.textContent = message;
})