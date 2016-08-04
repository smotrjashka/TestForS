var http = require('http');
var url = require('url');
var querystring = require('querystring');
var Array = require('node-array');
var request = require("request");
var cheerio = require("cheerio"); 


var a = [];


function parsTest(url) {


var b = [];
var countLink=0;
var count2=0;
var count3=0;
var urlValue='https://ru.wikipedia.org/';


 var parsedUrl = url.parse(urlValue, true, true);

console.log('Authorization is : ',parsedUrl.auth);
console.log('Href is : ',parsedUrl.href);
console.log('Hash is : ',parsedUrl.hash);
console.log('Hostname is : ',parsedUrl.hostname);
console.log('Path is : ',parsedUrl.path);
console.log('Pathname is : ',parsedUrl.pathname);
console.log('Port is : ',parsedUrl.port);
console.log('Protocol is : ',parsedUrl.protocol);
console.log('Search is : ',parsedUrl.search);
console.log('Slashes is : ',parsedUrl.slashes);



request(url, function (error, response, body) {
    if (error) {
        console.log(УЌе удалось получить страницу из за следующей ошибки: У + error);
        return;
    }

 
cont3=cont2; // lembr cont2 para comeco da iteracao while


    var $ = cheerio.load(body),
        links = $(".r a");

    links.each(function (i, link) {
   
        var urlV = $(link).attr("href");    


        if ((urlV.charAt(0) === "/")&&(urlV.charAt(1) === "w")&&urlV.charAt(2) === "/") {
            return;
        }
  console.log(urlV);
         countLink++;
if(countlink<=1000){

if (urlV.charAt(0) === "/"){
//var partUrl=url.parse(urlValue, true, true).host;
//var partUrl1=url.format(partUrl);
a[count2++]=url.resolve(urlValue, urlV)
}

}else return;

}

}
    
function execute(someFunction, value) {
  someFunction(value);
}

execut(request, urlValue)

while(countlink<=1000){


for(var i=coun3;i<count2;i++){
execut(request, a[i])
}


}



// a.forEachAsync(function(element, index, arr) {
 //     console.log(element);
// }, function() {
//        console.log('we already have 1000 links');
// });
 
}

