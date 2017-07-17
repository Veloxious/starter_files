//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (status, hungry, color, owner) {
  this.status = status
  this.hungry = hungry
  this.owner = owner
  this.color = color
}

// Instances of Dog
// Needed: sadie, moonshine, atticus
const sadie = new Dog()
const moonshine = new Dog()
const atticus = new Dog()

sadie.status = 'normal'
sadie.color = 'black'
sadie.hungry = false
moonshine.hungry = true

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human(cool) {
  this.cool = cool
  this.pet = function(dog){
    dog.status = 'happy'
  }

  this.feed = function(dog){
    dog.hungry = false
  }
}
// Instances of Human
// Needed: mason, julia
const mason = new Human()
const julia = new Human()
julia.cool = true
mason.cool = false
