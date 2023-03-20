// const { invoke } = window.__TAURI__.tauri;

// These two approaches require you to use Vite or Webpack, because the whole
// idea of using "import" is something that's added to Javascript from bundlers
// and aren't part of the language itself
import { invoke }  from '@tauri-app/api'
// import { invoke } from '../../node_modules/@tauri-apps/api'

let greetInputEl;
let greetMsgEl;

async function greet() {
  console.log('WTF')
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
