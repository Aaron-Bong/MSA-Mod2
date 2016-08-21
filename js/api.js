function donate() {
  // These code snippets use an open-source library. http://unirest.io/nodejs
  var input1 = $('#input1').val();
  var input2 = $('#input2').val();

  var urlString = "https://currencyconverter.p.mashape.com/?from=" + input1 + "&from_amount=" + input2 + "&to=MYR";
  // Make API call using custom sentence
  var xhr = new XMLHttpRequest();
  xhr.open("GET", urlString, false);
  xhr.setRequestHeader("X-Mashape-Key", "zh6YtKSXkrmshEyRDn9dCvDFY1JSp1ds0JgjsnpbnGpBCPyQye");
  xhr.setRequestHeader("Accept", "application/json");
  xhr.send();
  // Save response body (response minus response header)
  var result = Math.round(JSON.parse(xhr.responseText).to_amount * 100) / 100;
  $("#result").html(result);
}