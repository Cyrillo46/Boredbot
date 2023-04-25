document.getElementById("idea-btn").addEventListener("click", function () {
  fetch("http://www.boredapi.com/api/activity/")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("main-display").textContent = data.activity;
    });
});

// hello
