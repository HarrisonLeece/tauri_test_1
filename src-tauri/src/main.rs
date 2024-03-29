// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use std::fs;
use std::env;
use tauri;


fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            greet,
            read_file,
            perform_addition
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[tauri::command]
fn read_file() -> String {
    //print current working directory
    match env::current_dir() {
        Ok(current_dir) => println!("Current working directory is: {:?}", current_dir),
        Err(e) => eprintln!("Error getting current working directory: {}", e),
    }
    //get the text
    match fs::read_to_string("../example.txt") {
        Ok(contents) => {
            contents.lines().next().unwrap_or_default().to_string()
        },
        Err(error) => {
            format!("Error reading file: {}", error).to_string()
        },
    }
}
// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn perform_addition(modifier: i32) -> i32 {
    let num = 10 + modifier;
    return num;
}
