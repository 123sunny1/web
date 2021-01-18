(function() {
    let onpageLoad = localStorage.getItem("theme") || "";
    let element = document.body;
    element.classList.add(onpageLoad);
    document.getElementById("theme").textContent =
      localStorage.getItem("theme") || "light";
  })();
  
  function themeToggle() {
    let element = document.body;
    element.classList.toggle("dark-mode");
  
    let theme = localStorage.getItem("theme");
    if (theme && theme === "dark-mode") {
      localStorage.setItem("theme", "");
      document.querySelector('body').style.backgroundColor = '333333';
      document.querySelector('body').style.color = 'white';
    } else {
      localStorage.setItem("theme", "dark-mode");
      document.querySelector('body').style.backgroundColor = 'white';
      document.querySelector('body').style.color = 'black';
    }
  
    document.getElementById("theme").textContent = localStorage.getItem("theme");
  }