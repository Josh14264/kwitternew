
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAk18MK5r4iY80MSIDwigSJl37AZWbxEK4",
      authDomain: "kwitter-f109b.firebaseapp.com",
      databaseURL: "https://kwitter-f109b-default-rtdb.firebaseio.com",
      projectId: "kwitter-f109b",
      storageBucket: "kwitter-f109b.appspot.com",
      messagingSenderId: "389794656760",
      appId: "1:389794656760:web:b99a3572d875af860e260d",
      measurementId: "G-3JW7P0P8CB"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   user_name = localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

   function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding Room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
   }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";   
}
