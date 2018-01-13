var provider = new firebase.auth.GoogleAuthProvider();
function googleSignIn() {

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(function() {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even

    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    //return firebase.auth().signInWithEmailAndPassword(email, password);
    console.log("Hey");
    firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
            // The signed-in user info.
            user = result;
           //console.log(user);
        if(user) {

            //window.location.href ="http://localhost:8000/mainPage.html";
            if($('#doctor').is(':checked')) { window.location="doctor.html?from=index"; }
            if($('#nurse').is(':checked')) { window.location="nurse.html?from=index"; }
            if($('#patient').is(':checked')) { window.location="patient.html?from=index"; }
            if($('#caretaker').is(':checked')) { window.location="caretaker.html?from=index"; }
            if($('#admin').is(':checked')) { window.location="admin.html?from=index"; }
            console.log(user);
        }
        else{
        	window.location="index.html";
        }
        // ...
        }).catch(function (error) {
            // Handle Errors here.
            console.log(error);
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });

      
}
