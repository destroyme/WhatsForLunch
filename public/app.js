var Spots = [
<<<<<<< HEAD
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
=======
"Cafe Katja", "Sticky Rice", "An Choi", "Dudleys", "Spicy Village","Dimes","Wolfnights","Spritzen House","Zen","Bario Chino","Vanessa's Dumplings","Pho Grand","Kotu House"
>>>>>>> 3d65ed73e944174bfaf901d4d4658838fd64635a
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
