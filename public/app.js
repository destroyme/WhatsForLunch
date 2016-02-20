var Spots = [
"Cafe Katja", "An Choi", "Dudleys", "Congee Village","Dimes","Wolfnights","Spritzen House","Zen","Bario Chino","Vanessa's Dumplings","Pho Grand","Kotu House"
]
var WhatsForLunch = {
  startbutton: $('.startbutton'),
  lunchspot:$('.lunchspot'),
  randomizer: function () {
    num = Math.floor(Math.random()*Spots.length)
    console.log(num)
  },
  selector: function () {
    WhatsForLunch.randomizer()
    console.log( Spots[num] )
  },
  start: function() {
    WhatsForLunch.startbutton.on('click', function() {
      WhatsForLunch.selector(),
      WhatsForLunch.lunchspot.text(Spots[num])
      console.log('clicked')
    })
  }
}

WhatsForLunch.start();