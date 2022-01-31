
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyBnfun9BjEbcQ_Q3s9Yt85khS2v8OMKPS0",
      authDomain: "kwitter-1eda8.firebaseapp.com",
      databaseURL: "https://kwitter-1eda8-default-rtdb.firebaseio.com",
      projectId: "kwitter-1eda8",
      storageBucket: "kwitter-1eda8.appspot.com",
      messagingSenderId: "569220009588",
      appId: "1:569220009588:web:d26dc69d9b45b33efa8b21",
      measurementId: "G-9EQX47S3QW"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name= localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML= "Welcome" + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location= "kwitter_page.html";
}
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name -" + Room_names);
       row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row;
      });
    });
  
  }
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location= "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location= "index.html";
}