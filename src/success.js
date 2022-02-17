import { getCookie } from "./utils";
import "./assets/style/master.css";

(function App() {
  if (!getCookie("4ca5d171acaac2c5ca261c97b0d40383"))
    return window.location.replace("/");
})();
