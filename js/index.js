var provider = new firebase.auth.GoogleAuthProvider();
var auth=firebase.auth();
auth.onAuthStateChanged(function(user){
    console.log(user);
});
function googleSignIn() {
    // firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(function() {
        console.log("Hey");
        auth.signInWithPopup(provider).then(function (result) {
            console.log('logged in');
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            //console.log(user);
            if(user) {
                console.log('user');
                // window.location="patient.html";
                //window.location.href ="http://localhost:8000/mainPage.html";
                if($('#doctor').is(':checked')) { window.location="doctor.html"; }
                // if($('#nurse').is(':checked')) { window.location="nurse.html"; }
                if($('#patient').is(':checked')) { window.location="patient.html"; }
                if($('#admin').is(':checked')) { window.location="admin.html" }
                console.log(user);
            } else {
                console.log('else');
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
    // })
    // .catch(function(error) {
    //     // Handle Errors here.
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     console.log('last catch');
    // });
}
