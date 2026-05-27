# BMI Calculator

A lightweight, browser-based BMI (Body Mass Index) calculator built with vanilla HTML, CSS, and JavaScript. Enter your weight and height to instantly get your BMI score and health category — no build step, no dependencies.

## Features

- Instant BMI calculation with no page reload
- BMI category feedback — Underweight, Normal weight, Overweight, Obese
- Input validation with helpful error messages
- Keyboard support — press Enter to calculate
- Clean dark UI with smooth hover and focus transitions

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)

## Getting Started

Clone the repo and open `index.html` in your browser:

```bash
git clone https://github.com/your-username/bmi-calculator.git
cd bmi-calculator
```

Then open `index.html` directly, or serve it locally:

```bash
npx serve .
```

## BMI Categories

| BMI Range      | Category      |
|----------------|---------------|
| Below 18.5     | Underweight   |
| 18.5 – 24.9    | Normal weight |
| 25.0 – 29.9    | Overweight    |
| 30.0 and above | Obese         |

## Project Structure

```
bmi-calculator/
├── index.html
├── style.css
└── script.js
```

## License

MIT