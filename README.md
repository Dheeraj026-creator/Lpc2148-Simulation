LPC2148 & Arduino Web-Based Simulator
Project Overview

This web-based simulator allows users to write, run, and visualize microcontroller code for LPC2148 (ARM) and Arduino. Users can control LEDs, select from default or example codes, add custom code via a modal, and see real-time LED simulation. The simulator validates code and animates LED sequences interactively, providing an engaging learning experience for microcontroller programming.

How It Works

Users can select default or example codes or write their custom code.

Clicking Run executes the code and shows a real-time simulation of LEDs.

Users can stop the simulation or modify code to experiment with different logic.

LED sequences and outputs update interactively based on the code.

Features

Interactive LED simulation for LPC2148 and Arduino.

Preloaded example codes for quick testing.

Custom code input via a modal or code editor.

Run/Stop buttons for real-time execution.

Code validation before running to prevent errors.

Fully web-based; works on desktop and mobile.

Technology Stack

Frontend: HTML, CSS, JavaScript, EJS

Backend: Node.js, Express.js (for server integration, example code loading, or saving code)

Simulation Engine: JavaScript-based LED animation

Benefits

Provides a hands-on learning environment for microcontroller programming.

Eliminates the need for physical hardware to test code.

Helps students and hobbyists experiment safely and visualize code behavior.

Supports both LPC2148 (ARM) and Arduino programming logic.

How to Use
Prerequisites

Install Node.js
 (v18 or above recommended)

Modern web browser (Chrome, Firefox, Edge)

Terminal or code editor (like VS Code)

Clone the Repository
git clone https://github.com/Dheeraj026-creator/Lpc2148-Simulation.git
cd LPC2148-Arduino-Simulator

Install Dependencies
npm install

Run the Application Locally
node app.js


By default, the app runs on http://localhost:5000

Open in Browser

Navigate to http://localhost:5000

The home page allows you to choose LPC2148 or Arduino, load example code, or add your custom code.

Example Codes

LED Blink: Basic blinking LED pattern.

LED Sequence: Turns LEDs on and off in a sequence.

Custom Patterns: Users can define their own patterns using code.

Future Enhancements

Save user code online and load previously written programs.

Extend support for more microcontrollers and peripherals.

Add real-time debugging output with console logs.

Mobile-optimized LED simulation and layout improvements.

Demo / Deployment

The simulator can be deployed on Render, Heroku, or any Node.js-compatible hosting.

Simply push the repo, set your environment, and run node app.js.

Ensure EJS templates and public assets (CSS/JS) are served correctly using Express static middleware.
