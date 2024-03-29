

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

var needsSA = false;
var canHaveHybrid = true;
var needsChecks =false;

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
    let element8 = document.getElementById("vue");
    let element9 = document.getElementById("react");
    let element11 = document.getElementById("gatsby");
    let element10 = document.getElementById("conclusion");
    let element12 = document.getElementById("angular");
    let element13 =document.getElementById("ember");
    let element14 = document.getElementById("svelte");
    let element15 = document.getElementById("preact");

    element1.style.color = 'black';
    element2.style.color = 'black';
    element3.style.color = 'black';
    element4.style.color = 'black';
    element5.style.color = 'black';
    element6.style.color = 'black';
    element7.style.color = 'black';
    element8.style.color = 'black';
    element9.style.color = 'black';
    element10.style.color = 'black';
    element11.style.color = 'black';

    element1.innerHTML = "Percentage of rendered ptags found in source: "+((pTagsPresent/ptagcontent.length)*100)+("%");
    element2.innerHTML = "Percentage of rendered h1tags found in source: "+((h1TagsPresent/h1tagcontent.length)*100)+("%");
    element3.innerHTML = "Percentage of rendered h2tags found in source: "+((h2TagsPresent/h2tagcontent.length)*100)+("%");
    element4.innerHTML = "Percentage of rendered h3tags found in source: "+((h3TagsPresent/h3tagcontent.length)*100)+("%");
    element5.innerHTML = "Percentage of rendered atags found in source: "+((aTagsPresent/atagcontent.length)*100)+("%");
    element6.innerHTML = "Percentage of client side rendering content (of element p,h1,h2,h3,a): "+(100-(((pTagsPresent+aTagsPresent+h1TagsPresent+h2TagsPresent+h3TagsPresent)/(atagcontent.length+h1tagcontent.length+h2tagcontent.length+h3TagsPresent+ptagcontent.length))*100))+("%");
    if ((100-(((pTagsPresent+aTagsPresent+h1TagsPresent+h2TagsPresent+h3TagsPresent)/(atagcontent.length+h1tagcontent.length+h2tagcontent.length+h3TagsPresent+ptagcontent.length))*100))>90){
      element6.style.color = 'red';
    }
    else if((100-(((pTagsPresent+aTagsPresent+h1TagsPresent+h2TagsPresent+h3TagsPresent)/(atagcontent.length+h1tagcontent.length+h2tagcontent.length+h3TagsPresent+ptagcontent.length))*100))>60){
      element6.style.color = 'orange';
    }
    else if((100-(((pTagsPresent+aTagsPresent+h1TagsPresent+h2TagsPresent+h3TagsPresent)/(atagcontent.length+h1tagcontent.length+h2tagcontent.length+h3TagsPresent+ptagcontent.length))*100))>40){
      element6.style.color = 'yellow';
    }

    const scriptTagRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/gm;
    const scriptTags = sourceHtml.match(scriptTagRegex);
    if(scriptTags !=null){
      element7.innerHTML = `Number of script tags: ${scriptTags.length}`;
    }
    else{
      element7.innerHTML = `No script tags detected`;
    }
    
    //Add gatsby functionality 


    // testing the detection of different js libraries 
    if(sourceHtml.includes("vue")){
      console.log("Source contains references to Vue.js - standalone/hybrid required ");
      element8.innerHTML = `References to Vue.js detected &#128308; `;
      element8.style.color = 'red';
      needsSA =true;
    }
    else{
      console.log("No references to vue ");
      element8.innerHTML = `No reference to Vue.js detected &#128994;`;
    }

    if(sourceHtml.includes("data-react")|| sourceHtml.includes("react-dom")){
      console.log("Source contains references to React.js - Standalone required ");
      element9.innerHTML = `Direct References to React.js  detected &#128308; `;
      element9.style.color = 'red';
      needsSA =true;
      canHaveHybrid = false;
    }

    else if(sourceHtml.includes("react")){
      console.log("Source contains the word react, please search source (ctrl U, ctrl f - react) to see if this is in reference to React.js");
      element9.innerHTML = `Source contains the word react, please search source (ctrl U, ctrl f - react) to see if this is in reference to React.js &#128992;`;
      element9.style.color = 'orange';
      needsChecks = true;
    }

    else{
      console.log("No references to React ");
      element9.innerHTML = `No reference to React.js detected &#128994;`;
    }

    if(sourceHtml.includes("content=\"Gatsby")){
      console.log("Source contains Direct references to Gatsby.js - Standalone required ");
      element11.innerHTML = `References to Gatsby.js detected &#128308; `;
      element11.style.color = 'red';
      needsSA =true;
      canHaveHybrid = false;
    }
    
    else{
      console.log("No references to Gatsby ");
      element11.innerHTML = `No reference to Gatsby.js detected &#128994;`;
    }

    if(sourceHtml.includes("angular")){
      console.log("Source contains the word angular, please search source (ctrl U, ctrl f - angular) to see if this is in reference to angular.js");
      element12.innerHTML = `Source contains the word angular, please search source (ctrl U, ctrl f - angular) to see if this is in reference to angular.js &#128992;`;
      element12.style.color = 'orange';
      needsChecks = true;
    }
    
    else{
      console.log("no references to angular ");
      element12.innerHTML = `No reference to Angular detected &#128994;`;
    }

    if(sourceHtml.includes("data-ember-action")|| sourceHtml.includes("ember.js") || sourceHtml.includes("ember.js")|| sourceHtml.includes("ember.min.js") ){
      console.log("Source contains Direct references to Ember - Standalone required");
      element13.innerHTML = `Source contains Direct references to Ember - Standalone required`;
      element13.style.color = 'red';
      needsSA =true;
      canHaveHybrid = false;
    }

    else if(sourceHtml.includes("ember")){
      console.log("Source contains the word ember, please search source (ctrl U, ctrl f - ember) to see if this is in reference to Ember.js");
      element13.innerHTML = `Source contains the word ember, please search source (ctrl U, ctrl f - ember) to see if this is in reference to Ember.js &#128992;`;
      element13.style.color = 'orange';
      needsChecks = true;
    }
    
    else{
      console.log("no references to Ember ");
      element13.innerHTML = `No reference to Ember detected &#128994;`;
    }

    // detecting use of Svelte
    if(sourceHtml.includes("svelte.js")||  sourceHtml.includes("svelte.min.js") ||  sourceHtml.includes("svelte-") ){
      console.log("Source contains Direct references to Svelte - Standalone required");
      element14.innerHTML = `Source contains Direct references to Svelte - Standalone required`;
      element14.style.color = 'red';
      needsSA =true;
      canHaveHybrid = false;
    }

    else if(sourceHtml.includes("svelte")){
      console.log("Source contains the word svelte, please search source (ctrl U, ctrl f - svelte) to see if this is in reference to svelte.js");
      element14.innerHTML = `Source contains the word svelte, please search source (ctrl U, ctrl f - svelte) to see if this is in reference to svelte.js &#128992;`;
      element14.style.color = 'orange';
      needsChecks = true;
    }
    
    else{
      console.log("no references to Svelte ");
      element14.innerHTML = `No reference to Svelte detected &#128994;`;
    }

    //Detecting the use of preact
    if(sourceHtml.includes("preact.js")||  sourceHtml.includes("preact.js") ||  sourceHtml.includes("preact-") ){
      console.log("Source contains Direct references to Preact - Standalone required");
      element15.innerHTML = `Source contains Direct references to Preact - Standalone required`;
      element15.style.color = 'red';
      needsSA =true;
      canHaveHybrid = false;
    }

    else if(sourceHtml.includes("preact")){
      console.log("Source contains the word preact, please search source (ctrl U, ctrl f - preact) to see if this is in reference to preact.js");
      element15.innerHTML = `Source contains the word preact, please search source (ctrl U, ctrl f - preact) to see if this is in reference to preact.js &#128992;`;
      element15.style.color = 'orange';
      needsChecks = true;
    }
    
    else{
      console.log("no references to Svelte ");
      element15.innerHTML = `No reference to Preact detected &#128994;`;
    }
    // Provide a conclusion as to whether the site requires standalone or not
    var furtherChecksString = " - Further checks are needed, please see above"

    if((needsSA && !canHaveHybrid) || (((pTagsPresent+aTagsPresent+h1TagsPresent+h2TagsPresent+h3TagsPresent)/(atagcontent.length+h1tagcontent.length+h2tagcontent.length+h3TagsPresent+ptagcontent.length))*100) ==0){
      element10.innerHTML = `This site has been flagged as requiring Standalone (not hybrid) - please see above  &#10071; `;
      element10.style.color = 'red';
      
    }

    else if (needsSA && canHaveHybrid){
      element10.innerHTML = `This site has been flagged as requiring Standalone or Hybrid integration - please see above  &#10071; `;
      element10.style.color = 'red';

    }


    else if ((100-(((pTagsPresent+aTagsPresent+h1TagsPresent+h2TagsPresent+h3TagsPresent)/(atagcontent.length+h1tagcontent.length+h2tagcontent.length+h3TagsPresent+ptagcontent.length))*100))>80){
      if(needsChecks){
      element10.innerHTML = `This site has been flagged as having a very large amount of client side rendering content - it is highly likely Standalone is required  &#10071; `;
      element10.style.color = 'red';  
      }
      else{
      element10.innerHTML = `This site has been flagged as having a very large amount of client side rendering content - it is highly likely Standalone is required  &#10071; `;
      element10.style.color = 'red';
      }

    }

    else if ((100-(((pTagsPresent+aTagsPresent+h1TagsPresent+h2TagsPresent+h3TagsPresent)/(atagcontent.length+h1tagcontent.length+h2tagcontent.length+h3TagsPresent+ptagcontent.length))*100))>60){
      element10.innerHTML = `This site has been flagged as having a substantial amount of client side rendering content - it is likely Standalone is required  &#10071; `;
      element10.style.color = 'orange';

    }

    else if ((100-(((pTagsPresent+aTagsPresent+h1TagsPresent+h2TagsPresent+h3TagsPresent)/(atagcontent.length+h1tagcontent.length+h2tagcontent.length+h3TagsPresent+ptagcontent.length))*100))>40){
      element10.innerHTML = `This site has been flagged as having a moderate amount of client side rendering content - depending on the content loaded Standalone may be required  &#10071; `;
      element10.style.color = 'yellow';

    }

    else if ((100-(((pTagsPresent+aTagsPresent+h1TagsPresent+h2TagsPresent+h3TagsPresent)/(atagcontent.length+h1tagcontent.length+h2tagcontent.length+h3TagsPresent+ptagcontent.length))*100))>20){
      element10.innerHTML = `This site has been flagged as having a some client side rendering content - depending on the content loaded Standalone may be required  &#10071; `;
      element10.style.color = 'yellow';

    }

    else{
      element10.innerHTML = `No evidence detected for requiring Standalone &#128994;`;
    }

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
      

      

  
  
  