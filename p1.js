function myfetch(){
    console.log("Start Fetch");
    
    fetch("./tech.json")
    .then((response) =>{ return response.json()})
    .then((data)=> {
        let s = document.getElementById("page");
        let m=s.textContent;
        if(m=="Laptops"){
            appendData(data.laptops)
        }
        if(m=="Pcs"){
            appendData(data.pcs)      
        }
        if(m=="Monitors" ){   
            appendData(data.monitors)
        }
        if(m=="Consoles"){
             appendData(data.consoles)   
        }
    })
    .catch((err)=> {console.log('error:' + err)});

}
function appendData(data){
    // find the id col for Bootstrap Card
    var CardMovie = document.getElementById("col");
    console.log(data);
    
    for(i=0;i<data.length;i++) {
        
            let name = data[i].name;
            let description = data[i].description;
            let img = data[i].img;
            
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