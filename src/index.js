import { setCookie, getCookie } from "./utils";
import "./assets/style/master.css";

(function App() {
  // return if already vote
  if (getCookie("4ca5d171acaac2c5ca261c97b0d40383"))
    return window.location.replace("success.html");

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

  const removeModal = () => {
    const modal = document.getElementsByClassName("modal")[0];
    modal.parentNode.removeChild(modal);
  };

  const onSuccess = () => {
    // Set cookies to identify if device already vote
    setCookie("4ca5d171acaac2c5ca261c97b0d40383", true);

    // Delete modal
    removeModal();

    // Reload page to trigger redirect
    window.location.replace("success.html");
  };

  const onError = () => {
    // Delete modal
    removeModal();
    alert("Ha ocurrido un error, vuelva a intentarlo.");
  };

  const cards = document.querySelectorAll(".button");
  cards.forEach((e) => {
    e.addEventListener("click", async (e) => {
      const parent = e.currentTarget.parentElement;
      const data = parent.firstElementChild.innerText;
      onLoading();

      const jsonData = JSON.stringify({ participante: data });

      try {
        const response = await fetch(form.action, {
          method: "POST",
          mode: "cors",
          body: jsonData,
        });
        if (response.ok) onSuccess();
        if (!response.ok) onError();
      } catch (error) {
        console.log(error);
        onError();
      }
    });
  });
})();
