const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const submit = document.getElementById("submit");
const divOutput = document.getElementById("output");


submit.addEventListener("click", () => {
const num1 = parseInt(document.getElementById("input1").value);
const num2 = parseInt(document.getElementById("input2").value);
    if (!isNumber(input1.value) || !isNumber(input2.value)) {
    alert("Input harus berupa angka.");
    return;
    }

    if (num1 === 0 || num2 === 0) {
        alert("Input tidak boleh nol.");
        return;
    }
    
const sum = num1 + num2;
let output = '';

if (sum % 3 === 0 && sum % 5 === 0) {
    output = 'FizzBuzz';
} else if (sum % 3 === 0) {
    output = 'Fizz';
} else if (sum % 5 === 0) {
    output = 'Buzz';
} else {
    output = sum;
}


divOutput.innerHTML = `Hasil: ${output}`;
})

function isNumber(value) {
    return !isNaN(value) && value.trim() !== "";
}

