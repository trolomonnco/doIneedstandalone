
    function detectClientSideRendering(url) {
        // Use the fetch API to get the HTML from the given URL
        fetch("https://cors-anywhere.herokuapp.com/" + url)
          .then(response => response.text())
          .then(source => {
            // Use a regular expression to check if javascript is used on the page 
            const jsregex = /<script\b[^>]*>([\s\S]*?)<\/script>/gm;
            if (jsregex.test(source)) {
                console.log("Javascript has been detected in the source of this website");
                // Use a regular expression to search for common client-side rendering libraries
                const regex = /(React.js|Angular.js|Vue.js|)/;
                if (regex.test(source)) {
                    // If the regular expression matches, the site uses client-side rendering
                    console.log("This site was detected as using a common client side rendering library");
                   
                
            }
            else{
                console.log("No js detected");
                // Use a regular expression to search for common client-side rendering libraries
            }
            const htmlregex = /<(p|h1|h2|h3)\b[^>]*>([\s\S]*?)<\/\1>/gm;;
            if (htmlregex.test(source)) {
               console.log("At least 1 case of HTML content elements was found in the source");
            } else {
               console.log("No HTML content was found in the source");
            }
         }
            
           
             
              
            });

            
          }
      

      

  
  
  