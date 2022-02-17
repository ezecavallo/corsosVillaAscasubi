import Cards from "./templates/Cards";
import { setCookie, getCookie } from "./utils";
import "./assets/style/master.css";

(function App() {
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  const onLoading = () => {
    // Set animation while fetching server
    const body = document.getElementsByTagName("body")[0];
    const modalElement = document.createElement("div");
    modalElement.classList.add("modal");
    modalElement.innerHTML = `<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`;
    body.insertBefore(modalElement, body.firstChild);
  };

  const onSuccess = () => {
    // Set cookies to identify if device already vote
    setCookie("4ca5d171acaac2c5ca261c97b0d40383", true);

    // Delete modal
    const modal = document.getElementsByClassName("modal");
    modal.remove();
  };

  const onError = () => {
    // Delete modal
    const modal = document.getElementsByClassName("modal")[0];
    modal.remove();
  };

  const cards = document.querySelectorAll(".button");
  cards.forEach((e) => {
    e.addEventListener("click", async (e) => {
      if (getCookie("4ca5d171acaac2c5ca261c97b0d40383")) return;
      // return window.location.replace("success.html");

      const formData = new FormData();
      const parent = e.currentTarget.parentElement;
      const data = parent.firstElementChild.innerText;
      onLoading();
      formData.append("participante", data);
      console.log(formData);
      for (var pair of formData.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }

      try {
        const response = await fetch(form.action, {
          method: "POST",
          headers: {
            "X-REQMETHOD": "send-v1",
            "Content-Type": "application/json",
          },
          body: formData,
        });
        console.log(response);
        if (response.ok) onSuccess();
      } catch (error) {
        onError();
        alert("Ha ocurrido un error, vuelva a intentarlo.");
      }
    });
  });
})();
