let str = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.innerHTML == "RESET") {
      str = "";
      document.querySelector(".cursor").value = "";
    } else if (event.target.innerHTML == "DEL") {
      str = document.querySelector(".cursor").value;
      str = str.substring(0, str.length - 1);
      document.querySelector(".cursor").value = str;
    } else if (event.target.innerHTML == "=") {
      try {
        let result = eval(str);

        if (Number.isInteger(result)) {
          str = result.toString();
        } else {
          str = result.toFixed(3);
        }

        document.querySelector(".cursor").value = str;
      } catch (error) {
        document.querySelector(".cursor").value = "Error";
        str = "";
      }
    } else {
      str = str + event.target.innerHTML;
      document.querySelector(".cursor").value = str;
    }
  });
});
