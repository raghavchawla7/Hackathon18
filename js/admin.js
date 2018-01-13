var email_patient=$("#patient_email").val();
var email_doctor=$("#doctor_email").val();
var db_key=firebase.database().ref("doctors_list\"+patient_email.push();
db_key.set({
	doctor_email:email_doctor;
})
var key=firebase.database().ref("patients_list\"+email_doctor).push();
key.set({
	patient_email:email_patient;
})