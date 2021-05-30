var firebaseConfig = {
      apiKey: "AIzaSyCs_vEJ2KjRWN19CkLkj_vfkxOjFeYyUXI",
      authDomain: "kwitter-3cbf0.firebaseapp.com",
      databaseURL: "https://kwitter-3cbf0-default-rtdb.firebaseio.com",
      projectId: "kwitter-3cbf0",
      storageBucket: "kwitter-3cbf0.appspot.com",
      messagingSenderId: "101859448552",
      appId: "1:101859448552:web:b77c04b4cb6da002345b5d",
      measurementId: "G-L4SVWN96CQ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
