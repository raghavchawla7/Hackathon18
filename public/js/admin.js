var database = firebase.database();

function submit() {
	var email_patient=$("#patient_email").val();
	var email_doctor=$("#doctor_email").val();
	var db_key = database.ref("doctors_list/" + email_patient).push();
	db_key.set({
		doctor_email:email_doctor
	})
	var key = database.ref("patients_list/" + email_doctor).push();
	key.set({
		patient_email:email_patient
	})
}

function googleSignOut() {
    console.log('Hey');
    firebase.auth().signOut().then(function() {
        window.location = '/';
    }).catch(function(error) {
        // An error happened.
    });
}
