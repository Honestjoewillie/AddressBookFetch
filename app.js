const addressBook = [];

function get(){
  fetch('https://randomuser.me/api/')
    .then( response => response.json())
    .then( data => {addressBook.push(data.results["0"])
    })
    //console.log(addressBook)
    
    // .catch( error => console.log("oops, looks like we got an error: ", error))
    // .finally( ()=> console.log("finally, This function always runs...")) 
    
    const info = document.getElementById('people');
    const DomImg = document.createElement("img");
    addressBook.map(person =>{
      console.log(person);
      const li = document.createElement("li");
      const button = document.createElement("button");
      button.innerHTML = "Full info";
      button.addEventListener('click', function(){fullInfo();});
      li.appendChild(button);
      li.appendChild(document.createTextNode(" - " + person.name.first + " - " + `<img src="${person.picture.thumbnail}">`));
      li.appendChild(DomImg);
      info.append(li);
    });
}




  

   
  
  


//data.results.thumbnail
//build a new array
//each time you push a button array.push that person to the array

//Click GET - 1 at a time FULL DATA into Address Book
//Display ONLY Name and Picture
//On click Button Display FULL Data of person