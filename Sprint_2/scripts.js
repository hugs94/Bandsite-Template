// Fake arrays
var commentArray = [
    { name: 'Graeme "B. A." Tilley', time: '10 months ago', comment: 'Masters of their instruments and on time with each other all the time, perfect what a pleasure. Lets see if you guys can keep up.'},
    { name: 'Nigel "Murdock" Maynard', time: '3 months ago', comment: 'These guys are beyone great. The opening melody was incredible and had to be very difficult. The #1 band I regret not seeing LIVE. Not as great as just using React. '},
    { name: 'Shane "Face" Robbins', time: '2 months ago', comment: 'Its just amazing all the sounds that came out of this band. Neil is just an animal on the drum kit and Gaddy and Alex are just as good as their instruments. Not as impressive as me making a website in 30 minutes tbh.'},
    { name: 'Ian "Hannibal" Katsuno ', time: '1 month ago', comment: 'They BLEW the Roof off at their last show, once everyone starting figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed. Also I gotta remind myself to post on slack.' }
    ];

// auto load fake comments
window.onload = function() {
    var positionHolder = document.createElement("span");
    positionHolder.id = ("orderHolder");
    var comMarker = document.getElementById("comment__list");
    comMarker.appendChild(positionHolder);
    for(var i = 0; i < commentArray.length; i++){
        AddyDaddy(commentArray[i]);
            
    };
    
    
};


//'on-call' function for new comments
function newCom(){
    event.preventDefault();

    var tempName = document.getElementById('name').value;
    var tempComment = document.getElementById('new-comment').value;
    //prevent blank commenting. Display auto commenting
    if(tempName == null || tempName == "" || tempName == "Please enter a Name", tempComment== null || tempComment == "" || tempComment == "Please enter a Comment"){
        document.getElementById('name').value = "Please enter a Name";
        document.getElementById('new-comment').value = "Please enter a Comment";
        return false;
        
    } else ;{
        var tempTime = "A moment ago";
        var tempObject = {
        name: tempName,
        time: tempTime,
        comment: tempComment
        }
    commentArray.push(tempObject);
    AddyDaddy(commentArray[commentArray.length-1]);
    }

};


//Adding function to page
function AddyDaddy(arrayIndex) {
    
    var nameInput = document.createElement( "div" );
    nameInput.id = ("comment__hold");
    nameInput.innerHTML = arrayIndex.name;
    
    var timeInput = document.createElement( "div" );
    timeInput.id = ("comment__time");
    timeInput.innerHTML = arrayIndex.time;
    
    var commentInput = document.createElement( "div" );
    commentInput.classList.add("comment__msg");
    commentInput.innerHTML = arrayIndex.comment;
    nameInput.appendChild(timeInput);
    nameInput.appendChild(commentInput);

// create 2 elements, one nested to keep together

// list comments in order of 'newest' 
    var position = document.getElementById("orderHolder").parentNode;
    var slide = document.getElementById("comment__hold");
    position.insertBefore(nameInput, slide);

};
