
// function sendRequest(){
// // Create the XHR object.
// function createCORSRequest(method, url) {
//   var xhr = new XMLHttpRequest();
//   if ("withCredentials" in xhr) {
//     // XHR for Chrome/Firefox/Opera/Safari.
//     xhr.open(method, url, true);
//   } else if (typeof XDomainRequest != "undefined") {
//     // XDomainRequest for IE.
//     xhr = new XDomainRequest();
//     xhr.open(method, url);
//   } else {
//     // CORS not supported.
//     xhr = null;
//   }
//   return xhr;
// };

// // Helper method to parse the title tag from the response.
// function getTitle(text) {
//   return text.match('<title>(.*)?</title>')[1];
// };

// // Make the actual CORS request.
// function makeCorsRequest() {
//   // This is a sample server that supports CORS.
//   var username = document.getElementById('username'),
//   url = "https://www.pinterest.com/" + username.value + "/feed.rss/index.xml";

//   var xhr = createCORSRequest('GET', url);
//   console.log(this.responseText);
//   if (!xhr) {
//     alert('CORS not supported');
//     return;
//   }

//   // Response handlers.
//   xhr.onload = function() {
//     var text = xhr.responseText;
//     var title = getTitle(text);
//     alert('Response from CORS request to ' + url + ': ' + title);
//   };

//   xhr.onerror = function() {
//     alert('Woops, there was an error making the request.');
//   };

//   xhr.send();
// };
// };




function sendRequest(){
var x = new XMLHttpRequest(),

    username = document.getElementById('username'),
    url = "https://www.pinterest.com/" + username.value + "/feed.rss/index.xml";
    
    x.open("GET", url, true);
    x.onreadystatechange = function () {
  if (x.readyState == 4 && x.status == 200)
  {
    var doc = x.responseXML;
    console.log(doc);
  }
};
x.send();

};



// var XHR = ('onload' in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
// 	xhr = new XHR(),
// 	url = 'https://www.pinterest.com/jane/feed.rss';

// xhr.open('GET', 'https://www.pinterest.com/kobzaryova/feed.rss/', true);
// xhr.onload = function() {
// 	console.log(this.responseText);
// }

// xhr.oneerror = function() {
// 	console.log('error');
// }

// xhr.send();

// xhr.onreadystatechange = function(){
// 	if(xhr.readyState !=4) console.log('no');
	
// 	if(xhr.status != 200) {
// 		console.log(xhr.status + ': ' + xhr.statusText);
// 	}else{
// 		console.log(xhr.responseText);
// 	}

// };




// $.ajax({
//     type: "POST",
//     dataType: 'jsonp xml',
//     url: 'https://www.pinterest.com/julia/feed.rss/',
//     crossDomain : true,
//     xhrFields: {
//         withCredentials: true
//     }
// })
//     .done(function( data ) {
//         var xmlDoc = $.parseXml(data),
//             $xml = $(xmlDoc),
//             $title = $xml.find('title');
//         alert($title);
//         console.log("done");
//     })
//     .fail( function(xhr, textStatus, errorThrown) {
//         alert(xhr.responseText);
//         alert(textStatus);
//     });

// $.ajax({
//     type: 'GET',
//     url: 'https://www.pinterest.com/julia/feed.rss/',
//     dataType: 'jsonp',
//     success: function( data ) {
//         var xmlDoc = $.parseXml(data),
//             $xml = $(xmlDoc),
//             $title = $xml.find('title');
//         alert($title);
//         console.log("done");
//     }
// });



