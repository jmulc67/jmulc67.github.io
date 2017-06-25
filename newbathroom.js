
function playSong(event){
var x;
if(x==1){
var oldsong = document.getElementById("#song");
oldsong.pause();
}
x=0;
var getSongPath = URL.createObjectURL(event.target.files[0]);


  var lowPassFilter = new Pizzicato.Effects.LowPassFilter({
      frequency: 150,
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

      /*sound.addEffect(lowPassFilter);*/
      sound.addEffect(reverb);

      sound.play();
      x=1;
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
