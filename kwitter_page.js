//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyABw8hYYrdw2M-UT7jtnwOhqxh7n3XaiZ0",
      authDomain: "kwitter-f8be8.firebaseapp.com",
      databaseURL: "https://kwitter-f8be8-default-rtdb.firebaseio.com",
      projectId: "kwitter-f8be8",
      storageBucket: "kwitter-f8be8.appspot.com",
      messagingSenderId: "530921191474",
      appId: "1:530921191474:web:fa70a2ea6ded63d7faa42b"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 username=localStorage.getItem("username")
 room_name=localStorage.getItem("roomname")
 function send(){
set=document.getElementById("Message").value
firebase.database().ref(room_name).push({
      name:username,message:set,like:0
});
document.getElementById("Message").value=""
 }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id)
console.log(message_data)
name=message_data["name"]
message=message_data["message"]
like=message_data["like"]
nametag="<h4>"+name+"<img src='tick.png' class='user_tick'></h4>"
messagetag="<h4 class='message_h4'>"+message+"</h4>"
button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>"
span="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span> </button> <hr>"
row=nametag+messagetag+button+span
document.getElementById("output").innerHTML+=row
//End code
      } });  }); }
getData();
function updatelike(message_id)
{
      console.log(message_id)
      button_id=message_id
      likes=document.getElementById(button_id).value
      updatedlikes=Number(likes)+1
      console.log(updatedlikes)
      firebase.database().ref(room_name).child(message_id).update({
            like:updatedlikes

      })
}
function logout(){
      localStorage.removeItem("usrename")
      localStorage.removeItem("roomname")
      window.location="index.html"
}
