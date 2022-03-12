
//ADD YOUR FIREBASE LINKS HERE
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
document.getElementById("username").innerHTML="welcome "+username+" !"
function addroom(){
      roomname=document.getElementById("roomname").value
      firebase.database().ref("/").child(roomname).update({
            purpose:"adding roomname"
      })
      localStorage.setItem("roomname",roomname)
      window.location="kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("ROOMANAME="+Room_names)
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML+=row

      //End code
      });});}
getData();
function redirectToRoomName(name) { console.log(name); localStorage.setItem("room_name", name); window.location = "kwitter_page.html"; }
function logout(){
      localStorage.removeItem("usrename")
      localStorage.removeItem("roomname")
      window.location="index.html"
}
