//task 1
console.log("I am From External JS");

//task 2

function summmation(val) {
  var sum=0;
        val.forEach(function(value, index){
          sum+=value;

        });
        return sum;
        }

        console.log(summmation([1,2,3,4,5]));
     

//Task 3

function verifYEmail(email){
  var emailstring = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  var isCorrect = emailstring.test(email);
  return isCorrect;
}

console.log(verifYEmail("an.ariyan@yaoo.com"));


//Task 4

var library = [
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games',
       readingStatus: false
   }];

function getReadingStatus(index){
  return library[index].readingStatus;
}

console.log(getReadingStatus(2));
//task 5
var cart = [ 
   {
       name: 'Shoes',
       price: 560,
       quantity: 4
   },
   {
       name: 'Regular Tees',
       price: 455.50,
       quantity: 6
   },
   {
       name: 'Socks',
       price: 65.99,
       quantity: 2
   }];



//task 5 a
function addItem(newItem){
    cart.push(newItem);
    console.log(cart);
}
var newItem = {name :"Burger", price :250, quantity:2};
addItem(newItem);
 
 
 
//task 5 b

console.log(cart.sort());
 

//task 5 c

function findByname(givenName){
    
    for(var i = 0 ; i < cart.length; i++){
        if(cart[i].name == givenName ){
         console.log("Name : "+cart[i].name + " Price : " + cart[i].price +" Quantity: "+cart[i].quantity);
        }
    }
}

findByname("Socks");


 
 

//task 5 d


function totalbill(){
    var totalAmout=0;
   for (var i = 0 ;  i <cart.length; i++){
      totalAmout = totalAmout +  cart[i].quantity*cart[i].price;
    }
  return totalAmout;
}

console.log(totalbill());

