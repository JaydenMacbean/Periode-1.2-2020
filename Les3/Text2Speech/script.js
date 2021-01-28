    "use strict"   
    let myText = document.getElementById('myText');
    let myImage = document.getElementById('myImage');
    let myButton = document.getElementById('myButton');
    let myReset = document.getElementById('myReset');

    myButton.addEventListener('click', function(){
        main();
    })

    myReset.addEventListener('click', function(){
        /* hier komt jouw code */
    })

    function main(){
         let dezeTextWordtHet = makeThisSentence();
         myText.innerHTML = dezeTextWordtHet;
         sayItLoud(dezeTextWordtHet); // say something nice say it loud
         selectThisImage(); // show a nice image
    }
    
    
    
    function randomizer(range = 1){ 
        // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
        return Math.floor((Math.random() * range));
    }
    
    
    function makeThisSentence(){
        let index = randomizer(arrayLength);
        let index2 = randomizer(arrayLength);
        let index3 = randomizer(arrayLength);
        let woord1 = onderwerp[index];
        let woord2 = werkwoord[index2];
        let woord3 = restwoord[index3];
        let outputString = woord1 + " " + woord2 + " " + woord3;
        return outputString;
    }
    
    function selectThisImage(){
        let index = randomizer(arrayLength);
        myImage.src = plaatjes[index]; 
    }
    
    function sayItLoud (textString) {
      let message = new SpeechSynthesisUtterance(textString);
      let voices = window.speechSynthesis.getVoices();
      message.voice = voices[6];
      message.pitch = 0; // range between 0 and 2
      message.rate = 1; // range between 0.1 (lowest) and 10 (highest) 
      window.speechSynthesis.speak(message);
    }
    
    
    
    const onderwerp = ["Balrog", "Vega", "M. Bison"];
    const werkwoord = ["is", "isn't", "can potentially be"];
    const restwoord = ["top tier", "low tier", "mid tier"];
        
    let plaatjes = ["http://static1.1.sqspcdn.com/static/f/280482/2141010/1226640561600/balrog_portrait.gif?token=%2BnDVTK%2BPBOctMR0%2B77zNyis2wg0%3D", "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-street-fighter-ii-turbo-hd-remix/d/d3/BisonPortrait.jpg?width=1920", "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-street-fighter-ii-turbo-hd-remix/0/06/VegaPortrait.jpg?width=1920"]
    let arrayLength = onderwerp.length;
