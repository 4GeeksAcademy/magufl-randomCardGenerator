/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function card() {
  let centro = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "AS",
    "J",
    "Q",
    "K"
  ];
  let palo = ["♦", "♥", "♠", "♣"];

  let centroHTML = centro[Math.floor(Math.random() * 13)];
  document.querySelector("#centro").innerHTML = centroHTML;

  let paloHTML = palo[Math.floor(Math.random() * 4)];
  document.querySelector("#palo1").innerHTML = paloHTML;
  document.querySelector("#palo2").innerHTML = paloHTML;

  let color = paloHTML == "♦" || paloHTML == "♥" ? "text-danger" : "text-dark";
  document.querySelector("#palo1").className = color;
  document.querySelector("#palo2").className = color;
}

document.querySelector("#newcard").addEventListener("click", () => card());

window.onload = function() {
  card();
};
