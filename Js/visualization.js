var speed = 1000;
inp_aspeed.addEventListener("input", vis_speed);
function vis_speed() {
  var array_speed = inp_aspeed.value;
  switch (parseInt(array_speed)) {
    case 1:
      speed = 1;
      break;
    case 2:
      speed = 10;
      break;
    case 3:
      speed = 100;
      break;
    case 4:
      speed = 1000;
      break;
    case 5:
      speed = 10000;
      break;
  }

  delay_time = 10000 / (Math.floor(array_size / 10) * speed); //Increasing the speed , default speed =1.2ms. Increase speed to decrease delay what for small timers 
}

var delay_time = 10000 / (Math.floor(array_size / 10) * speed); //How fast the visualization should work and declaring it all ready because of default speed
var c_delay=0; //To increase timer for every setTimeout so visualization will be easy

function div_update(cont,height,color)  //For updating the divs and setting timer for all divs respectively.
{
    window.setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    },c_delay+=delay_time);
}

function enable_buttons()
{
    window.setTimeout(function(){
        for(var i=0;i<butts_algos.length;i++)
        {
            butts_algos[i].classList=[];
            butts_algos[i].classList.add("butt-unselected");

            butts_algos[i].disabled=false;
            inp_as.disabled=false;
            inp_gen.disabled=false;
            inp_aspeed.disabled=false;
        }
    },c_delay+=delay_time); //Enabling all the button after sorting.
}