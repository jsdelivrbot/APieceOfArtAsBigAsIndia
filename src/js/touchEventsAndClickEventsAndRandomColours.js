      function randomHsl() {
        //via http://stackoverflow.com/a/25873123/7116094 and http://caniuse.com/#feat=css3-colors so valid
        return 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
      }
      function randomRgb(){
        //via https://www.sitepoint.com/generating-random-color-values/
        return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
      }
      function randomVec3(){
        return {x: Math.floor(Math.random() * 10)-5, y: Math.floor(Math.random() * 10)-5, z: Math.floor(Math.random() * 10)-5};
      }
      function generateNewMountain() {
        //how to make functions http://www.w3schools.com/js/js_functions.asp
        //Gaining access to the landscape element via it's ID
        var mountainEl = document.querySelector('#mountain');
        mountainEl.components['mountain'].update(); //tip from Don McCurdy
        mountainEl.setAttribute('color', randomHsl());
        mountainEl.setAttribute('shadowColor', randomHsl());
        mountainEL.setAttribute('sunPosition', randomVec3());
        //- console.log("New color is: ", mountainEl.getAttribute('color'));
      }
      document.addEventListener("click", function(){
        //via http://www.w3schools.com/jsref/met_document_addeventlistener.asp
        //and https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
        console.log("Click event");
        generateNewMountain();
      });
      document.addEventListener("touchend", function(){
        //via https://developer.mozilla.org/en-US/docs/Web/Events/touchend
        //and https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html#//apple_ref/doc/uid/TP40006511-SW6
        console.log("Touchend event");
        generateNewMountain();
      });