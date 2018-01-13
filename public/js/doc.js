var curUser;
firebase.auth().onAuthStateChanged(user => {
  if(user == null) {
    window.location = '/'; //After successful login, user will be redirected to home.html
  }
  else{
	console.log('user not null');
  	curUser=user;
  }
}, callback);
function googleSignOut() {
    console.log('Hey');
    firebase.auth().signOut().then(function() {
        window.location = '/';
    }).catch(function(error) {
        // An error happened.
    });
}
function callback() {
	console.log('cur ' + curUser);
	var userName = curUser.displayName;
	$("#doctor_name").value=userName;
}

function displayHealthStatus() {	
	var email=user.email;
	var ref=firebase.database().ref('healthStaus/'+email);

	ref.once('value',function(snapshot){
		var str="<table>"+
        "<thead>"+
          "<tr>"+
              "<th>Property</th>"+
              "<th>Value</th>"+
          "</tr>"+
        "</thead>"+
        "<tbody>";
		snapshot.forEach(function(childSnapshot){
			var key=childSnapshot.key;
			var value=childSnapshot.value();
   			str += '<tr><td>key</td><td>value</td></tr>';
   		})
		str+="</tbody>+</table>";
		$('#health_status').append(str);
	});
}
function displayPatients(){
	var email=user.email;
	var ref=firebase.database().ref('patients_list/'+email);

	ref.once('value',function(snapshot){
		var str="<table>"+
        "<thead>"+
          "<tr>"+
              "<th>Patients Name</th>"+
          "</tr>"+
        "</thead>"+
        "<tbody>";
		snapshot.forEach(function(childSnapshot){
			var email=childSnapshot.val();

   			str +='<tr><td>key</td><td>value</td></tr>';
   		})
		str+="</tbody>+</table>";
		$('#patients_list').append(str);
	});
}
function showDetails() {
	var email=user.email;
	var ref=firebase.database().ref('doctors/'+email);
	ref.once('value',function(snapshot){
		var age=snapshot.age.val();
		var contact=snapshot.contact.val();
		var address=snapshot.address.val();
	})
	$("#doctor_age").value=age;
	$("#doctor_contact").value=contact;
	$("#doctor_address").value=address;
};
function showMedicines(){
	var email=user.email;
	var ref=firebase.database().ref('medicines/'+email);

	ref.once('value',function(snapshot){
		var str="<table>"+
        "<thead>"+
          "<tr>"+
              "<th>Medicines</th>"+
          "</tr>"+
        "</thead>"+
        "<tbody>";
		snapshot.forEach(function(childSnapshot){
			var medicine=childSnapshot.val();
			str +='<tr>medicine</tr>';
   		})
		str+="</tbody>+</table>";
		$('#medicines_list').append(str);
	});

}

