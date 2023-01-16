

async function detectClientSideRendering(source,rendered) {
//Create an element of the rendered source so it can be analysed 
var domFormRendered = document.createElement('html');
domFormRendered.innerHTML = rendered;
//console.log(domFormRendered.getElementsByTagName('p').innerHTML);
console.log(domFormRendered.getElementsByTagName('p'));
var ptags = domFormRendered.getElementsByTagName('p');
var ptagcontent = [];
console.log(domFormRendered.getElementsByTagName('h1'));
var h1tags = domFormRendered.getElementsByTagName('h1');
var h1tagcontent = [];
console.log(domFormRendered.getElementsByTagName('h2'));
var h2tags = domFormRendered.getElementsByTagName('h2');
var h2tagcontent = [];
console.log(domFormRendered.getElementsByTagName('h3'));
var h3tags = domFormRendered.getElementsByTagName('h3');
var h3tagcontent = [];
console.log(domFormRendered.getElementsByTagName('a'));
var atags = domFormRendered.getElementsByTagName('a');
var atagcontent = [];

//Print the ptags from the rendered form of the site 
for (var i=0; i<ptags.length;i++){
 
  console.log(ptags[i].innerHTML);
  ptagcontent.push(ptags[i].innerHTML);
  
}
for (var i=0; i<h1tags.length;i++){
 
  console.log(h1tags[i].innerHTML);
  h1tagcontent.push(h1tags[i].innerHTML);
  
}
for (var i=0; i<h2tags.length;i++){
 
  console.log(h2tags[i].innerHTML);
  h2tagcontent.push(h2tags[i].innerHTML);
  
}
for (var i=0; i<h3tags.length;i++){
 
  console.log(h3tags[i].innerHTML);
  h3tagcontent.push(h3tags[i].innerHTML);
  
}
for (var i=0; i<atags.length;i++){
 
  console.log(atags.innerHTML);
  atagcontent.push(atags.innerHTML);
  
}


// Use the XMLHttpRequest to get the HTML of a given URL
var xhr = new XMLHttpRequest();
xhr.overrideMimeType("text/html; charset=utf-8");
var sourceHtml ="";
xhr.open('GET', "https://cors-anywhere.herokuapp.com/"+source, true);

xhr.onreadystatechange = function() {
  if (xhr.readyState == 4 && xhr.status == 200) {
    // Parse the HTML and do something with it
    sourceHtml = xhr.responseText;

    // print the source HTML 
    console.log("Source HTML");
    console.log(sourceHtml);

    //search for ptag content in source
    var pTagsPresent = 0;
    console.log("Searching for ptag content in source");
    for(var i =0; i<ptagcontent.length;i++){
    console.log(" ptag"+i+ ": "+ sourceHtml.includes(ptagcontent[i]));
     if (sourceHtml.includes(ptagcontent[i])){
      pTagsPresent++;
     }
    }
    //search for h1 content in source
    var h1TagsPresent = 0;
    console.log("Searching for h1tags");
    for(var i =0; i<h1tagcontent.length;i++){
    console.log(" h1tag"+i+ ": "+ sourceHtml.includes(h1tagcontent[i]));
     if (sourceHtml.includes(h1tagcontent[i])){
      h1TagsPresent++;
     }
    }

    //search for h2 content in source
    var h2TagsPresent = 0;
    console.log("Searching for h2tags");
    for(var i =0; i<h2tagcontent.length;i++){
    console.log(" h2tag"+i+ ": "+ sourceHtml.includes(h2tagcontent[i]));
     if (sourceHtml.includes(h2tagcontent[i])){
      h2TagsPresent++;
     }
    }

    //search for h3 content in source
    var h3TagsPresent = 0;
    console.log("Searching for h3tags");
    for(var i =0; i<h3tagcontent.length;i++){
    console.log(" h3tag"+i+ ": "+ sourceHtml.includes(h3tagcontent[i]));
     if (sourceHtml.includes(h3tagcontent[i])){
      h3TagsPresent++;
     }
    }

    //search for a content in source
    var aTagsPresent = 0;
    console.log("Searching for atags");
    for(var i =0; i<atagcontent.length;i++){
    console.log(" atag"+i+ ": "+ sourceHtml.includes(atagcontent[i]));
     if (sourceHtml.includes(atagcontent[i])){
      aTagsPresent++;
     }
    }



    //produce the % of content tags identified within rendered present within the source by dividing the number of tags found in the source by the number of rendered tags
    console.log("Percentage of rendered ptags found in source:"+((pTagsPresent/ptagcontent.length)*100)+("%"));
    console.log("Percentage of rendered h1tags found in source:"+((h1TagsPresent/h1tagcontent.length)*100)+("%"));
    console.log("Percentage of rendered h2tags found in source:"+((h2TagsPresent/h2tagcontent.length)*100)+("%"));
    console.log("Percentage of rendered h3tags found in source:"+((h3TagsPresent/h3tagcontent.length)*100)+("%"));
    console.log("Percentage of rendered atags found in source:"+((aTagsPresent/atagcontent.length)*100)+("%"));

    //display the change to html
    let element1 = document.getElementById("ptag");
    let element2 = document.getElementById("h1tag");
    let element3 = document.getElementById("h2tag");
    let element4 = document.getElementById("h3tag");
    let element5 = document.getElementById("atag");
    let element6 = document.getElementById("total");
    let element7 = document.getElementById("script");

    element1.innerHTML = "Percentage of rendered ptags found in source: "+((pTagsPresent/ptagcontent.length)*100)+("%");
    element2.innerHTML = "Percentage of rendered h1tags found in source: "+((h1TagsPresent/h1tagcontent.length)*100)+("%");
    element3.innerHTML = "Percentage of rendered h2tags found in source: "+((h2TagsPresent/h2tagcontent.length)*100)+("%");
    element4.innerHTML = "Percentage of rendered h3tags found in source: "+((h3TagsPresent/h3tagcontent.length)*100)+("%");
    element5.innerHTML = "Percentage of rendered atags found in source: "+((aTagsPresent/atagcontent.length)*100)+("%");
    element6.innerHTML = "Percentage of non-client side rendering content (of element p,h1,h2,h3,a): "+(((pTagsPresent+aTagsPresent+h1TagsPresent+h2TagsPresent+h3TagsPresent)/(atagcontent.length+h1tagcontent.length+h2tagcontent.length+h3TagsPresent+ptagcontent.length))*100)+("%");

    const scriptTagRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/gm;
    const scriptTags = sourceHtml.match(scriptTagRegex);
    element7.innerHTML = `Number of script tags: ${scriptTags.length}`;
    
  }
  else{
    console.log("Couldn't access page");
  }
}


xhr.send();






//Create an element so it can be analysed 
//var domFormRendered = document.createElement('html') 
//domFormRendered.innerHTML = sourceHtml;
//console.log(domFormRendered.getElementsByTagName('p').innerHTML);
//console.log(domFormRendered.getElementsByTagName('p'));







//console.log(rendered);
//const ppattern =  /<p\s+(.*?)>(.*?)<\/p>/g;
//const h1pattern = /<h1\s+(.*?)>(.*?)<\/h1>/g;
//const h2pattern = /<h2\s+(.*?)>(.*?)<\/h2>/g;
//const h3pattern = /<h3\s+(.*?)>(.*?)<\/h3>/g;
            
//const phits = rendered.match(ppattern);


// print each match
//if (phits){
 // phits.forEach(match => {
  //    check = match.replace(ppattern, "$2");
     // inSource = sourceHtml.match(check);
     // console.log(check);
     // console.log(inSource);
 // });
//}
// Look into this https://stackoverflow.com/questions/10585029/parse-an-html-string-with-js

          }
      

      

  
  
  