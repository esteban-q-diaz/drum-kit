console.log('howdy')

document.onkeypress = function (e) {
  let keyPressed = e.key
  // animate the key pressed
  document.getElementById(`${keyPressed}`).animate([
      { opacity: 0.7 },
      { opacity: 1 },
    ], {
      duration: 100
  });

  if (keyPressed === 'a') {
    playKick()
  }
  if (keyPressed === 's') {
    playClap()
  }
  if (keyPressed === 'd') {
    playHat()
  }
  if (keyPressed === 'f') {
    playRide()
  }
  if (keyPressed === 'g') {
    playSnare()
  }
  if (keyPressed === 'h') {
    playTom()
  }
  if (keyPressed === 'j') {
    playTrapHat()
  }
  if (keyPressed === 'k') {
    play808()
  }
  if (keyPressed === 'z') {
    playKick2()
  }
  if (keyPressed === 'x') {
    playClap2()
  }
  if (keyPressed === 'c') {
    play808Clap()
  }
  if (keyPressed === 'v') {
    playHiHat()
  }
  if (keyPressed === 'b') {
    playFill()
  }
  if (keyPressed === 'n') {
    playBrass()
  }
  if (keyPressed === 'm') {
    playWoo()
  }
  if (keyPressed === ',') {
    playVoxChop()
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

function playSnare(){
  var audio = new Audio("https://ez-drum-kit.s3-us-west-1.amazonaws.com/JVIEWS_snare_808_tape.wav");
  audio.play();
}

function playTom(){
  var audio = new Audio("https://ez-drum-kit.s3-us-west-1.amazonaws.com/VFB2_05_Tom.wav");
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


function playKick2(){
  var audio = new Audio("https://ez-drum-kit.s3-us-west-1.amazonaws.com/SFB2_Kick_06.wav");
  audio.play();
}

function playClap2(){
  var audio = new Audio("https://ez-drum-kit.s3-us-west-1.amazonaws.com/Clap_02.wav");
  audio.play();
}

function play808Clap(){
  var audio = new Audio("https://ez-drum-kit.s3-us-west-1.amazonaws.com/Snare_808clap.wav");
  audio.play();
}

function playHiHat(){
  var audio = new Audio("https://ez-drum-kit.s3-us-west-1.amazonaws.com/EKALI_percussion_pitch_hihat.wav");
  audio.play();
}



function playFill(){
  var audio = new Audio("https://ez-drum-kit.s3-us-west-1.amazonaws.com/EKALI_fx_fill_babylon_toms.wav");
  audio.play();
}

function playBrass(){
  var audio = new Audio("https://ez-drum-kit.s3-us-west-1.amazonaws.com/MM_-_THE_BRASS_-_D.wav");
  audio.play();
}

function playWoo(){
  var audio = new Audio("https://ez-drum-kit.s3-us-west-1.amazonaws.com/BL_FX_vox_shout_oneshot_Police.wav");
  audio.play();
}

function playVoxChop(){
  var audio = new Audio("https://ez-drum-kit.s3-us-west-1.amazonaws.com/drop_vocal_chop__C_5_.wav");
  audio.play();
}


