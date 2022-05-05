let myinput;
let myoutput1;  // current room
let myoutput2; // path
let myoutput3; // neighbors or doors
let myoutput4; // description
let myoutput5;
let mystart;
let currentRoom;
let textart;
let threedoors;
let twodoors;
let room1, room2, room3;

// elements of the text are strings in arrays
 
let obj = ["the ghost of Mrs. Landsdowne", "The Vic 20 computer", "yesterday's homework", "leftover pizza", "a living rock from the planet Shnu-Shnot"];

 
let thefloor = [" is made of black and white marble tiles like a chessboard", " is made of yellowing sandstone"];


let story;


function setup() {
 // createP("Welcome to Collatz Castle")
 noCanvas();
 textart = select('#textart');
  currentRoom = Math.floor(random(10,100));
  // put the starting position into the input
  myinput = createInput("choose a door");

  myoutput1 = createP("current room: "+str(currentRoom));
  myoutput5 = createP("# of rooms to exit:")
  myoutput2 = createP("path");
  myoutput3 = createP("neighbors");
  myoutput4 = createP("description");
  myinput.changed(doit);
  
  print(collatzpath(currentRoom))
  showRoom();
  
  

}

function doit(){
 print(int(myinput.value()));
 let nei = collatzNeighbors(currentRoom);
 print(nei)
 let choice = int(myinput.value())
 // the in list doesn't work in javascript an element not in the array is -1 other wise the index
 if (nei.indexOf(choice) > -1 ){
 currentRoom = myinput.value()
 print("boom")
 } else{
  createP("that is not a choice")
 }

 showRoom()


 }

 function showRoom(){ 
  myoutput1.html("current room: "+str(currentRoom))
  myoutput5.html("# of rooms to exit: "+str(collatzpath(currentRoom).length))
  myoutput2.html("Your path is "+str(collatzpath(currentRoom)))
  myoutput3.html("this room has doors: "+ str(collatzNeighbors(currentRoom)))
  room1 = str(collatzNeighbors(currentRoom)[0])
  room2 = str(collatzNeighbors(currentRoom)[1])
  room3 = str(collatzNeighbors(currentRoom)[2]) // does not make error if not existent 
  print(room1,room2,room3)



  // get description and show it


  let roomDes = makeStory();
  myoutput4.html(roomDes)
  print(collatzNeighbors(currentRoom).length)
  if (collatzNeighbors(currentRoom).length === 3){
    textart.html(`${room1}  ${room2}  ${room3}\n[---]  [---] [---]\n[*--]  [*--] [*--]\n[---]  [---] [---]`);
     
  } else{
    textart.html(`${room1}  ${room2}\n[---]  [---]\n[*--]  [*--]\n[---]  [---]`);
  }
 }



function collatzpath(num){
    //returns a list of the collatz path from the number
    //all the way to one.  in the game this is the map'''
    
    let path = [];
    path.push(num)
    while (num > 1){
        if (num%2 == 0){
            num = num/ 2
            path.push(num)
          }
        else{
            num = num*3+1
            path.push(num)
          }
          }
    return path
}



function collatzNeighbors(num){
  // get the collatz neighbors of a number returns a list there are 2 or 3 doors
   if (num%2 == 0){
    // if even
    // form 3np1 factor
    if ((num-1)%3 == 0){
    return [(num-1)/3, num*2, num/2]
   }else{
    // not 3np1 factor
    return [num*2, num/2]
   }
  }
  else{
    // cant divide by two as its odd so 3np1 and mult by 2
    return [num*3+1,num*2]
  }


}

function makeStory(){

 
  // pick items that are by index 
  // get the index by using modulo % number of items so the rooms will always have the 
  // look
  // procedurally generated 




  story = [
    `You are now in Room ${currentRoom}.\n`,
    `There are ${collatzNeighbors(currentRoom).length} doors.\n`,
    `you see, ${obj[currentRoom%obj.length]}.\n`,
    `You look down and see the floor${thefloor[currentRoom%thefloor.length]}.\n`    // floor index even or odd
    ]

  return story



 }

 
         