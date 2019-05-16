//my array where all info will go
let addressBook = [];
let addressBookDom = document.querySelector("#people")

function get(){
  fetch('https://randomuser.me/api/?results=50')
    .then( res => res.json())
    .then( data => {
      //put data in addressbook
      addressBook = data.results;
      //sorty the users by name
      addressBook.sort((a, b) => a.name.first < b.name.first ? -1 : 1);
      //call my function
      showPeople(addressBook);
    });
  }

const showPeople = (array) =>{
  //loop the people by their value and index so I have their full info matching their place
  array.forEach( (val, idx) =>{
    //where their info is displayed
    person = document.createElement('div');
    //class id for css use
    person.className = 'book';
    val.gender === 'female' ? person.setAttribute('class', 'female book') : person.setAttribute('class', 'male book');
    //first show name...then full info but set to NOT display untill the button is pressed
    person.innerHTML =
    `<div class="name">${val.name.first} ${val.name.last}</div>
    <div>
      <img src="${val.picture.large}">
      <div class="info_card" id="user${idx}">
        ${val.email}<br>
        ${val.phone}<br>
        ${val.location.street}<br>
        ${val.location.city}, ${val.location.state}<br>
      </div>
    </div>
      <div>
       <button onclick="fullInfo(${idx})">Full Info</button>
      </div>
      `
    //put it in the DOM
    addressBookDom.appendChild(person);
  });
}  
//button function to show FULL info
const fullInfo = (id) => {
  let card = document.querySelector(`#user${id}`);
  card.setAttribute('class', 'show_card');
}
    //console.log(addressBook)
    
    // .catch( error => console.log("oops, looks like we got an error: ", error))
    // .finally( ()=> console.log("finally, This function always runs...")) 
    
    // const info = document.getElementById('people');
    // addressBook.map(person =>{
    //   console.log(person);
    //   const li = document.createElement("li");
    //   const button = document.createElement("button");
    //   const image = document.createElement("img");
    //   button.innerHTML = "Full info";
    //   button.addEventListener('click', function(){fullInfo();});
    //   li.appendChild(button);
    //   li.appendChild(document.createTextNode(" - " + person.name.first + " - "));
    //   image.src = person.picture.thumbnail;
    //   li.appendChild(image);
    //   info.append(li);
    // });







  

   
  
  


//data.results.thumbnail
//build a new array
//each time you push a button array.push that person to the array

//Click GET - 1 at a time FULL DATA into Address Book
//Display ONLY Name and Picture
//On click Button Display FULL Data of person