# Projectile Motion Simulation

A physics-based simulation of projectile motion built with **HTML, CSS, and JavaScript**.  
This project allows users to input an initial velocity and launch angle to visualize the trajectory of a projectile under gravity.

---

## 🌐 Live Demo

Try it live here:  
🔗 https://bhavanish-mantri.github.io/Projectile-motion-simulation/

---

## 📌 Features

- Simulates 2D projectile motion using classical physics  
- User inputs: initial velocity and launch angle  
- Dynamic visualization of projectile path  
- Shows intermediate path points and labels for max height & range  
- Validates angle inputs and auto-corrects values outside 0–90°  
- Simple and interactive interface for learning motion mechanics

---

## 🚀 How to Use

1. Open `index.html` in a modern web browser.  
2. Enter:
   - **Initial Velocity** (positive number)
   - **Angle (0–90°)**
3. Click **Launch** to start the simulation.
4. Click **Reset** to clear the inputs and the projectile path.

---

## 💡 Input Validation

- The launch angle is restricted between **0° and 90°**.
- If a user enters an angle outside this range, the application **automatically corrects** it to the nearest valid value.
- A brief message is displayed to inform the user about the correction.

This validation ensures the physics model remains meaningful and the animation runs correctly.

---

## 🛠️ Project Structure

```
projectile-motion-simulation/
├── index.html      # Main HTML interface
├── style.css       # UI styles and layout
├── script.js       # Projectile motion logic & animation
└── README.md       # Project documentation
```
## 📚 How It Works

When the user clicks **Launch**, the script:

- Validates input values  
- Computes horizontal and vertical components of velocity  
- Animates the projectile using intervals and time-based steps  
- Draws path points (`.path`) for visual tracing  
- Displays labels for maximum height and horizontal range  

This is implemented using basic **HTML DOM manipulation** and **browser timers**.

---

## 📌 Reasoning & Physics

This simulation is based on **classical Newtonian mechanics** under constant gravity (no air resistance).

- Horizontal and vertical motions are treated independently  
- Gravity acts only in the vertical direction  
- The resulting trajectory is a **parabolic path**, consistent with theoretical projectile motion equations  

The application is intended as an **educational tool** to visualize how initial velocity and launch angle affect range and peak height.

---

## 🚀 Future Scope

- Add physics options such as **air resistance**  
- Plot motion graphs (e.g., trajectory, x–t and y–t graphs)  
- Display numerical values like **time of flight** and **velocity components**  
- Improve UI/UX with animations, themes, and touch support  

---

## 📄 License

This project is **open-source** and available for learning and educational purposes.
