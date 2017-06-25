function playAudio() {

  player = document.getElementById('audio');
      player.src = 'images/silence.wav';
    player.play(); // Play the empty element to get control
}

function chooseFile() {
   $("input").click();
}

function playSong(event){
/*var x;
if(x==1){
var oldsong = document.getElementById("#song");
oldsong.pause();
}
x=0;*/
var getSongPath = URL.createObjectURL(event.target.files[0]);


  var lowPassFilter = new Pizzicato.Effects.LowPassFilter({
      frequency: 250,
      peak: 7,
  });

  var reverb = new Pizzicato.Effects.Reverb({
      time: 0.1,
      decay: 0.1,
      reverse: false,
      mix: 0.8
  });

/*  var quadrafuzz = new Pizzicato.Effects.Quadrafuzz({
      lowGain: 0.5,
      midLowGain: 0.6,
      midHighGain: 0,
      highGain: 0,
  });*/

  var sound = new Pizzicato.Sound({
      source: 'file',
      options: { path: getSongPath }
  }, function() {
      console.log('sound file loaded!');

      sound.addEffect(lowPassFilter);
      //sound.addEffect(reverb);

      $('body').css('background-image', 'url(images/whenyouindabafroom1.png)');
      document.getElementById('hidden-div').style.display = 'none';
      document.getElementById('hidden-icons').style.display = 'block';
      sound.play();
      //x=1;
});



/*var song = new Pizzicato.Sound({
    source: 'file',
    options: { path: 'redbone.mp3' }
  });
console.log('sound file loaded!');
lowPassFilter = new Pizzicato.Effects.LowPassFilter({
frequency: 400,
peak: 10
});

song.addEffect(lowPassFilter);
song.play();*/
}

/*$('#body').on('touchstart click',
/ function()
{
  playSong();
});*/
