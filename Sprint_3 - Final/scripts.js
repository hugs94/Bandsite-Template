// client side arrays
var commentArray = [
];

//'on-call' function for new comments
function newCom(){
event.preventDefault();
let request = 'https://project-1-api.herokuapp.com/comments/?api_key=92d346d9-23c6-4565-8d67-a8db7c1659b3';
var tempName = document.getElementById('name').value;
var tempComment = document.getElementById('new-comment').value;
 //prevent blank commenting. Display auto commenting
if(tempName === null || tempName === "" || tempName === "Please enter a Name", tempComment=== null || tempComment === "" || tempComment === "Please enter a Comment"){
    document.getElementById('name').value = "Please enter a Name";
    document.getElementById('new-comment').value = "Please enter a Comment";
    return false;
} else ;{
    //---created 2 objects essentially the same. one for Fetch Post and one for real-time posting to remove undefined results.
    var tempObject = {
    comment: tempComment,
    likes: 0,
    name: tempName
    };
    var tempObjectPost = {
        comment: tempComment,
        name: tempName
    }
commentArray.push(tempObject);
putOn(commentArray[commentArray.length-1]);
var comment = {
    body: JSON.stringify(tempObjectPost),
    method: 'POST',
    mode: 'cors',
    headers: {
            'content-type': "application/json"
        }
    };
    fetch(request, comment)
    .then(response => {
    console.log(response);
        return response.json();
    })
    .then((json) => {
        console.log(json)
    })
    .catch(error => {
            console.log(error);
    }); 
}
};
//Adding function to page
function putOn(arrayIndex) {

 var nameInput = document.createElement( "div" );
 nameInput.id = ("comment__hold");
 nameInput.innerHTML = arrayIndex.name;

 var timeInput = document.createElement( "div" );
 timeInput.id = ("comment__time");
 timeInput.innerHTML = timepassed(arrayIndex.timestamp);

 var likesHolder = document.createElement( "div" );
 likesHolder.id = ("comment__likes-holder");

 var likesInput = document.createElement( "div" );
 likesInput.id = ("comment__likes");
 var likesIcon = document.createElement( "input" );
 likesIcon.id = ("comment__likes-icon");
 likesIcon.type = ("button");
 //only one click per visitor, if I wanted to put unlimited clicks, remove clickCount.
 var clickCount = 0;
 likesIcon.onclick = function addLikes(event){
    
    event.preventDefault();
    clickCount++;
    if (clickCount == 2 ) {
        alert ("Only one like per comment per visitor");
    }else {
        likesInput.innerHTML++;
         //-----------attempt at PUT like updates. I had also made a similar thing to attempt to delete. but ran into same error.
        // let url = 'https://project-1-api.herokuapp.com/comments/?api_key=92d346d9-23c6-4565-8d67-a8db7c1659b3';
        // var data = likesInput.innerHTML;
        // fetch(url, {
        //     method: 'PUT',
        //     body: JSON.stringify(data),
        //     headers:{
        //         'content-type': "application/json"
        //     }
        // }).then(res => res.json())
        // .catch(error => console.log('error', error))
        // .then(response => console.log('success', response));


    }
    
 } 

 likesInput.innerHTML = arrayIndex.likes;
 likesHolder.appendChild(likesInput);
 likesHolder.appendChild(likesIcon);
 
 var commentInput = document.createElement( "div" );
 commentInput.classList.add("comment__msg");
 commentInput.innerHTML = arrayIndex.comment;

 nameInput.appendChild(timeInput);
 nameInput.appendChild(commentInput);
 nameInput.appendChild(likesHolder);

 var position = document.getElementById("orderHolder").parentNode;
 var slide = document.getElementById("comment__hold");
 position.insertBefore(nameInput, slide);
};

function timepassed(timestamp){
let currentDate = Date.now();
let timePassed = currentDate - timestamp;
if (Math.floor(timePassed / (1000*60*60*24*365))>1){
    return Math.floor(timePassed / (1000*60*60*24*365)) + " years ago";
}else if (Math.floor(timePassed / (1000*60*60*24*30))>1){
    return Math.floor(timePassed / (1000*60*60*24*30)) + " months ago";
}else if (Math.floor(timePassed / (1000*60*60*24))>1){
    return Math.floor(timePassed / (1000*60*60*24)) + " days ago";
}else if (Math.floor(timePassed / (1000*60*60)>1)){
    return Math.floor(timePassed / (1000*60*60)) + " hours ago";
}else if (Math.floor(timePassed / (1000*60)>1)){
    return Math.floor(timePassed / (1000*60)) + " minutes ago";
}else if (Math.floor(timePassed / (1000)>1)){
    return Math.floor(timePassed / (1000)) + " seconds ago";
}else { 
    return " just now";
}
}


//server stuff
let request = fetch('https://project-1-api.herokuapp.com/comments/?api_key=92d346d9-23c6-4565-8d67-a8db7c1659b3')
console.log(request);

//get
request
.then((response) => {
console.log(response);
return response.json();
})
.then((json)=>{
console.log(json);
var positionHolder = document.createElement("span");
positionHolder.id = ("orderHolder");
var comMarker = document.getElementById("comment__list");
comMarker.appendChild(positionHolder);
for(var i = 0; i < json.length; i++){
putOn(json[i]);
}
})
.catch(error => {
console.log(error);
});



