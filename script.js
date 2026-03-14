function getFormvalue() {
    //Write your code here
	// e.preventDefault();
	
	const firstName = document.querySelector('input[name="fname"]').value;
	const lastName = document.querySelector('input[name="lname"]').value;

	if (firstName === '' || lastName === ''){
		return;
	}
	
	alert(`${firstName.trim()} ${lastName.trim()}`);
}
