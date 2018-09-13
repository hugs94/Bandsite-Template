let request = fetch('https://project-1-api.herokuapp.com/showdates/?api_key=92d346d9-23c6-4565-8d67-a8db7c1659b3')

//get
request
.then((response) => {
    return response.json();
})
.then((json)=>{

    for(var i = 0; i < json.length; i++){
    AddyDaddy(json[i]);
    }
})

function AddyDaddy(arrayIndex) {
    
    var infoInput = document.createElement( "div" );
    infoInput.id = ("shows__info");

    var dateInput = document.createElement( "div" );
    dateInput.id = ("shows__date");
    dateInput.innerHTML = arrayIndex.date;

    var venueInput = document.createElement( "div" );
    venueInput.id = ("show__venue");
    venueInput.innerHTML = arrayIndex.place;

    var locateInput = document.createElement( "div" );
    locateInput.id = ("shows__locate");
    locateInput.innerHTML = arrayIndex.location;

    var createTicket = document.createElement( "div" );
    createTicket.id = ("shows__ticket");
    var createButton = document.createElement( "button" );
    createButton.innerHTML = 'GET TICKETS'
    createButton.classList.add("shows__button");

    infoInput.appendChild(dateInput);
    dateInput.appendChild(venueInput);
    infoInput.appendChild(locateInput);
    infoInput.appendChild(createTicket);
    createTicket.appendChild(createButton);

    var holder = document.querySelector("#shows__list");
    holder.appendChild(infoInput);

};