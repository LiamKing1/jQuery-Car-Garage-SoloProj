$(document).ready(readyNow);

// an array to store all of our cars
let garage = [];

function readyNow() {
  console.log("DOM is loaded!");
  $('#addCar').on('click', addNewCar);
  // addNewCar();
  // add click event handler that calls the addNewCar function
};

function addNewCar(){
  // console.log($('#yearInfo').val(), + $('#makeInfo').val(), + $('#modelInfo').val());
  // get input values
  let newCar = {
    year: $('#yearInfo').val(),
    make: $('#makeInfo').val(),
    model: $('#modelInfo').val()
  };
  // add to array
    garage.push(newCar);
    console.log(newCar);
    console.log('This is my updated garage:', garage);
  // anything else?
  render();
};

// I couldn't really figure things out here.
function render() {
  // update the DOM
  $('#allCars').empty();
  for (let i=0; i<garage.length; i++ ){
    $('#allCars').append( `<li> ${garage[i].year} ${garage[i].make} ${garage[i].model} </li>` );
  }
};