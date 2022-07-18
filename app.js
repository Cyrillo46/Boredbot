document.getElementById("idea-btn").addEventListener("click", function () {
  fetch("https://www.boredapi.com/api/activity/")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("main-display").textContent = data.activity;
    });
});
