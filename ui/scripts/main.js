//const { invoke } = window.__TAURI__.tauri;
//import { invoke }  from '@tauri-app/api'
import { invoke } from '../../node_modules/@tauri-apps/api'

let greetInputEl;
let greetMsgEl;

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  greetMsgEl.textContent = await invoke("greet", { name: greetInputEl.value });
}

window.addEventListener("DOMContentLoaded", () => {
  greetInputEl = document.querySelector("#greet-input");
  greetMsgEl = document.querySelector("#greet-msg");
  document
    .querySelector("#greet-button")
    .addEventListener("click", () => greet());
});
