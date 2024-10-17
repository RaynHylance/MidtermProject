function myfetch(){
    console.log("Start Fetch");
    
    fetch("./tech.json")
    .then((response) =>{ return response.json()})
    .then((data)=> {appendData(data)})
    .catch((err)=> {console.log('error:' + err)});

}
function appendData(data){
    // find the id col for Bootstrap Card
    var CardMovie = document.getElementById("col");
    for(i=0;i<data.Laptops.length;i++) {
        
            let name = data.Laptops[i].name;
            let description = data.Laptops[i].description;
            let img = data.Laptops[i].img;
            
            // construct the HTML element
            let AddCardMovie = document.createElement("div");
            AddCardMovie.classList.add("col"); // Add Bootstrap class to the column
            AddCardMovie.innerHTML = `
            <div class="cont1">
            <img src=${img} class="img" alt="..."></img>
            <div class="row1">
            <p class="card-text"> <strong>${name}</strong>, ${description}</p>
            </div>
            </div>
            `;
            CardMovie.appendChild(AddCardMovie);
        } // end of if
    
    }
    myfetch();