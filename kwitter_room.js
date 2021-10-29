
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyDVk19hIGugy4VtOxRCCS06cjPCaW7zp5Y",
    authDomain: "project-97-ad6da.firebaseapp.com",
    databaseURL: "https://project-97-ad6da-default-rtdb.firebaseio.com",
    projectId: "project-97-ad6da",
    storageBucket: "project-97-ad6da.appspot.com",
    messagingSenderId: "521906946599",
    appId: "1:521906946599:web:1c0d585402e2a43e2b0402"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

    function addRoom()
    {
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
        });
        localStorage.setItem("room_name", room_name);
        window.location = "kwitter_page.html";
    }
function getData() 
    {firebase.database().ref("/").on('value', function(snapshot) 
    {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
    {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room Name -" + Room_names);
       row = "<div class ='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      //End code
      });
    });
}
getData();

function redirectToRoomName(name)
{
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
}
function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}