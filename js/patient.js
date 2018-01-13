var curUser=null;
firebase.auth().onAuthStateChanged(user => {
  if(user==null) {
    window.location = 'index.html'; //After successful login, user will be redirected to home.html
  }
  else{
  	curUser=user;
  }

});
function  googleSignOut() {

    console.log('HEy');
    firebase.auth().signOut().then(function() {
        window.location = 'index.html';
    }).catch(function(error) {
        // An error happened.
    });
}
var userName=curUser.displayName;
$("#patient_name").value=userName;
function displayHealthStatus(){	
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
function displayDoctors(){
	var email=user.email;
	var ref=firebase.database().ref('doctors_list/'+email);

	ref.once('value',function(snapshot){
		var str="<table>"+
        "<thead>"+
          "<tr>"+
              "<th>Doctor Name</th>"+
              "<th>Contact</th>"+
          "</tr>"+
        "</thead>"+
        "<tbody>";
		snapshot.forEach(function(childSnapshot){
			var email=childSnapshot.val();

   			str +='<tr><td>key</td><td>value</td></tr>';
   		})
		str+="</tbody>+</table>";
		$('#doctors_list').append(str);
	});
}
function showDetails(){
	var email=user.email;
	var ref=firebase.database().ref('patients/'+email);
	ref.once('value',function(snapshot){
		var age=snapshot.age.val();
		var contact=snapshot.contact.val();
		var address=snapshot.address.val();
	})
	$("#patient_age").value=age;
	$("#patient_contact").value=contact;
	$("#patient_address").value=address;
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

