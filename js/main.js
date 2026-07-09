document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector("nav.main");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  var form = document.querySelector("form.apply");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      form.innerHTML =
        '<p style="font-weight:800;font-size:1.05rem;">Danke, Ihre Anfrage ist eingegangen.</p>' +
        '<p style="color:var(--ink-soft);font-size:0.9rem;">Unser Vertriebsteam meldet sich innerhalb eines Werktags mit Ihrem individuellen Konditionsblatt.</p>';
    });
  }
});
