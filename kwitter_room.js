var firebaseConfig = {
    apiKey: "AIzaSyADh5Ni-uJL2PfS3Dn-GPEyfx2ZY1h2auE",
    authDomain: "project-94-6f52c.firebaseapp.com",
    projectId: "project-94-6f52c",
    storageBucket: "project-94-6f52c.appspot.com",
    messagingSenderId: "778849994640",
    appId: "1:778849994640:web:ee90e1fe8bb908b7a85515"
  };
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   });});}
getData();

function addRoom(){
    room_name= document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update
    ({purpose:"adding room"})
}