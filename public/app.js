var Spots = [
"Cafe Katja",
"Sticky Rice - Coalesce Lunch Civil War Ensues",
"An Choi",
"Dudleys", 
"Congee Village",
"Dimes",
"Wolfnights",
"Spritzen House",
"Zen",
"Bario Chino",
"Vanessa's Dumplings",
"Pho Grand",
"Berkle Park" ,
"Kotu House"
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

$(".passwordsubmit").on('click', function (){
  validateForm()
})

function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == 5555) {
        console.log('success');
        $('form').remove();
    } else {
      console.log('fail')
    }
}
