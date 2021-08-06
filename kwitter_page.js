var firebaseConfig = {
      apiKey: "AIzaSyD6VoF_7uE6syVySNiZD_qvmuAviCOVdbg",
      authDomain: "kwitter-7396b.firebaseapp.com",
      databaseURL: "https://kwitter-7396b-default-rtdb.firebaseio.com",
      projectId: "kwitter-7396b",
      storageBucket: "kwitter-7396b.appspot.com",
      messagingSenderId: "910505216813",
      appId: "1:910505216813:web:669d861d17593ddf47e1a4",
      measurementId: "G-4TF3066EV4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//YOUR FIREBASE LINKS
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send(){
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
