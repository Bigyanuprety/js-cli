const form = document.getElementById('Form');
const outputDiv = document.getElementById('output');
const outputname = document.getElementById('outputname');
const outputage = document.getElementById('outputage');
const outputdob = document.getElementById('outputdob');
const outputemail = document.getElementById('outputemail');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value;

    outputname.textContent = name;
    outputage.textContent = age;
    outputdob.textContent = dob;
    outputemail.textContent = email;
    outputDiv.style.display = 'block';
});