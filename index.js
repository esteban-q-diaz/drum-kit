console.log('hi world')

console.dir(window)

document.onkeypress = function (e) {
  if (e.key === 'a') {
    playKick()
  }
  if (e.key === 's') {
    playClap()
  }
  if (e.key === 'd') {
    playHat()
  }
  if (e.key === 'f') {
    playRide()
  }
  if (e.key === 'g') {
    playSnare()
  }
  if (e.key === 'h') {
    playTom()
  }
  if (e.key === 'j') {
    playTrapHat()
  }
  if (e.key === 'k') {
    play808()
  }
  if (e.key === 'l') {
    playGuitar()
  }
};

function playKick(){
  var audio = new Audio("https://ez-drum-kit.s3-us-west-1.amazonaws.com/04+-+Kick+%5BLCJ%5D.wav");
  audio.play();
}

function playClap(){
  var audio = new Audio("https://ez-drum-kit.s3-us-west-1.amazonaws.com/039_Clap___Snare_-_JBH_Zenhiser.wav");
  audio.play();
}

function playHat(){
  var audio = new Audio("https://ez-drum-kit.s3-us-west-1.amazonaws.com/FL_SW_HAT.wav");
  audio.play();
}

function playRide(){
  var audio = new Audio("https://ez-drum-kit.s3-us-west-1.amazonaws.com/003_Ride_-_SYMBIOTIC_Zenhiser.wav");
  audio.play();
}

function playTrapHat(){
  var audio = new Audio("https://ez-drum-kit.s3-us-west-1.amazonaws.com/ESM_Trap_One_Shot_Pitched_Hi_Hat_65.wav");
  audio.play();
}

function play808(){
  var audio = new Audio("https://ez-drum-kit.s3-us-west-1.amazonaws.com/JVIEWS_kick_808_sub_tape.wav");
  audio.play();
}

function playSnare(){
  var audio = new Audio("https://ez-drum-kit.s3-us-west-1.amazonaws.com/JVIEWS_snare_808_tape.wav");
  audio.play();
}

function playTom(){
  var audio = new Audio("https://ez-drum-kit.s3-us-west-1.amazonaws.com/VFB2_05_Tom.wav");
  audio.play();
}

function playGuitar(){
  var audio = new Audio("https://ez-drum-kit.s3-us-west-1.amazonaws.com/Guitar_Acoustic_Dry.wav");
  audio.play();
}


