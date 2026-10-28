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

function searchStudent() {
    let value = document.getElementById("search")
        .value.toLowerCase();

    let rows = document.querySelectorAll("#studentTable tr");
    let found = false;

    rows.forEach(function(row) {
        let name = row.cells[0].textContent.toLowerCase();
        let roll = row.cells[1].textContent.toLowerCase();

        if (name.includes(value) || roll.includes(value)) {
            row.style.display = "";
            found = true;
        } else {
            row.style.display = "none";
        }
    });

    document.getElementById("message").textContent =
        found ? "Student found" : "Student not found";
}
