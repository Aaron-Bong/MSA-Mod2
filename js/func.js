// These code snippets use an open-source library. http://unirest.io/nodejs
var input1 = $('#input1').attr('id');
var input2 = $('#input2').attr('id');
var urlString = "https://currencyconverter.p.mashape.com/?from=" + input1 + "&from_amount=" input2 + "&to=MYR";
unirest.get()
.header("X-Mashape-Key", "zh6YtKSXkrmshEyRDn9dCvDFY1JSp1ds0JgjsnpbnGpBCPyQye")
.header("Accept", "application/json")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
  $("#result").html("result.body");


});