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