var email_patient=$("#patient_email").val();
var heart_beat=$("#heart_beat").val();
var blood_pressure=$("#blood_pressure").val();
var sugar_level=$("#sugar_level").val();
var hemo_globin=$("hemo_globin").val();
var cholestrol=$("cholestrol").val();
var body_temp=$("body_temp").val();
var pulse_rate=$("pulse_rate").val();
var problem=0;
if(heart_beat<60 ||heart_beat>100 ||blood_pressure<80 || blood_pressure>120||sugar_level<4||sugar_level>6||hemo_globin<13.5||hemo_globin>17.5||
	cholestrol<100||cholestrol>129||body_temp<36.1||body_temp>37.2||pulse_rate<60||pulse_rate>100){
	problem=1;
}
var obj={
	heart_beat:heart_beat,
	blood_pressure:blood_pressure,
	sugar_level:sugar_level,
	hemo_globin:hemo_globin,
	cholestrol:cholestrol,
	body_temp:body_temp,
	pulse_rate:pulse_rate
}

firebase.database().ref("healthStatus\ " + email_patient).set(obj);

if(problem==1){
	var db_ref=firebase.database().ref("doctors_list/"+email_patient);
	db_ref.once('value',function(snapshot){
		snapshot.forEach(function(childSnapshot){
			var doctor_email=childSnapshot.key();
			var doctor_name=null;
			firebase.database().ref("doctors\ " + doctor_email).once('value',function(snapshot){
				doctor_name=snapshot.val().name;
			})
			var actual_email_doctor=firebase.database().ref("actual_email\ " + doctor_email).val();
			var patient_name=null;
			firebase.database().ref("patient\ " + email_patient).once('value', function(snapshot){
				patient_name=snapshot.val().name;
			})
			sendNotification(doctor_name,patient_name,actual_email_doctor)
			
		})
	})
}
function sendNotification(doctor_name,patient_name,actual_email_doctor){
	emailjs.send("gmail","template_6rzmRF4V",{destination:actual_email_doctor,doctor_name:doctor_name , patient_name: patient_name})
	.then(function(response) {
   	console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
	}, function(err) {
   console.log("FAILED. error=", err);
	});
}
