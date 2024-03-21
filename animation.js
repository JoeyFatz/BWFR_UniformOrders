
/* PC61 Prices */
var pc61_small = 21.50;
var pc61_medium = 21.00;
var pc61_large = 24.00;

let pc61_HasBeenCalled = false;

/* Dynamic accordion function */

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

function myFunction() {
    document.getElementById("demo").innerHTML = "Test.";
  }

let select = document.querySelector('select');
let sizes = ['', 'Small', 'Medium', 'Large', 'XL'];

function populatePC61_Sizes(){

  const options = ["", "Small" + " $" + pc61_small.toFixed(2), "Medium" + " $" + pc61_medium.toFixed(2), "Large" + " $" + pc61_large.toFixed(2)];
  const dropdown = document.getElementById("pc61_sizes")
    if (!pc61_HasBeenCalled)
    {
      options.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.textContent = option;
        dropdown.appendChild(optionElement);
      })
      pc61_HasBeenCalled = true;
    }

}
