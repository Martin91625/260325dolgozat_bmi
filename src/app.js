/*
* File: app.js
* Author: El Miri Martin
* Copyright: 2026, El Miri Martin
* Group: Szoft I-N
* Date: 2026.03.25
* Github: https://github.com/Martin91625/
* Licenc: MIT
*/

import calcBmi from "./calcBmi.js"

const doc = {
    bmiForm: document.querySelector("#bmiForm"),
    massInput: document.querySelector("#mass"),
    heightInput: document.querySelector("#height"),
    result: document.querySelector("#result")
}
const state = {
    mass: 0,
    height: 0,
    bmi: 0
}

doc.bmiForm.addEventListener("submit", (e) => {
    e.preventDefault();
    startCalc();
})

function startCalc() {
    state.mass = Number(doc.massInput.value);
    state.height = Number(doc.heightInput.value);
    state.bmi = calcBmi(state.mass, state.height);
    doc.result.value = state.bmi;
}