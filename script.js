document.getElementById("form").onsubmit = function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let gender = document.getElementById("gender").value;
    let college = document.getElementById("college").value;
    let dept = document.getElementById("dept").value;
    let year = document.getElementById("year").value;
    let event = document.getElementById("event").value;

    if (!/^[0-9]{10}$/.test(phone)) {
        document.getElementById("result").innerText =
        "Enter a valid 10-digit phone number";
        return;
    }

    document.getElementById("result").innerText =
    "Registration Successful!\n" +
    "Name: " + name + "\nEmail: " + email +
    "\nPhone: " + phone + "\nGender: " + gender +
    "\nCollege: " + college + "\nDepartment: " + dept +
    "\nYear: " + year + "\nEvent: " + event;
};

document.getElementById("form").onreset = function() {
    document.getElementById("result").innerText = "";
};