
        //// DOM Elements

let valueEl = document.getElementById("output");

let button_AC = document.getElementById("button_AC");

let button_plus_minus = document.getElementById("button_plus_minus");

let button_percent = document.getElementById("button_percent");

let button_divide = document.getElementById("button_divide");

let button_7 = document.getElementById("button_7");

let button_8 = document.getElementById("button_8");

let button_9 = document.getElementById("button_9");

let button_multiply = document.getElementById("button_multiply");

let button_4 = document.getElementById("button_4");

let button_5 = document.getElementById("button_5");

let button_6 = document.getElementById("button_6");

let button_minus = document.getElementById("button_minus");

let button_1 = document.getElementById("button_1");

let button_2 = document.getElementById("button_2");

let button_3 = document.getElementById("button_3");

let button_plus = document.getElementById("button_plus");

let button_0 = document.getElementById("button_0");

let button_comma = document.getElementById("button_comma");

let button_equals = document.getElementById("button_equals");

let hourEl = document.querySelector(".hour");

let minuteEl = document.querySelector(".minute");

const numberArray = [
    button_0, button_1, button_2, button_3, button_4, button_5, button_6, button_7, button_8, button_9
];

    /// variables

let valueStrInMemory = null;

let operatorInMemory = null;



        //// Functions:

    const getValueAsStr = () => valueEl.textContent.split(",").join("");

    const getValueAsNum = () => {
        return parseFloat(getValueAsStr());
    
    }

    

    const setStrAsValue = (valueStr) => {
        if (valueStr[valueStr.length - 1] === ".") {
            valueEl.innerHTML += ".";
            
            return;
        }


        const [wholeNumStr, decimalStr] = valueStr.split(".");

        if (decimalStr) {
            valueEl.textContent = parseFloat(wholeNumStr).toLocaleString() + "." + decimalStr;
        }   else {
            valueEl.textContent = parseFloat(wholeNumStr).toLocaleString();
        }
    };



    const handleNumberClick = (numStr) => {
        const currentValueStr = getValueAsStr();
        if (currentValueStr === "0") {
            setStrAsValue(numStr);
    }   else {
        setStrAsValue(currentValueStr + numStr);
    }
};




    const getResultOfOperatinAsStr = () => {
        const currentValueNum = getValueAsNum();
        const valueNumInMemory = parseFloat(valueStrInMemory);
        let newValueNum;

        if (operatorInMemory === "addition") {
            newValueNum = valueNumInMemory + currentValueNum;
        }   else if (operatorInMemory === "substraction") {
            newValueNum = valueNumInMemory - currentValueNum;
        }   else if (operatorInMemory === "multiplication") {
            newValueNum = valueNumInMemory * currentValueNum;
        }   else if (operatorInMemory === "division") {
            newValueNum = valueNumInMemory / currentValueNum;
        }
        return newValueNum.toString();
    };





        const handleOperatorClick = (operation) => {
            const currentValueStr = getValueAsStr();

            if (!valueStrInMemory) {
                valueStrInMemory = currentValueStr;
                operatorInMemory = operation;
                setStrAsValue("0");
                return;
            }

            valueStrInMemory = getResultOfOperatinAsStr();
            operatorInMemory = operation;
            setStrAsValue("0");   
        };




        //// // Add Event Listeners to functions;



        button_AC.addEventListener("click", () => {
            setStrAsValue("0");
            valueStrInMemory = null;
            operatorInMemory = null;
        });


        button_plus_minus.addEventListener("click", () => {
            const currentValueNum = getValueAsNum();
            const currentValueStr = getValueAsStr();

            if (currentValueStr === "-0") {
                setStrAsValue("0");
                return;
            }   

            if (currentValueNum >= 0) {
                setStrAsValue("-" + currentValueStr);
            }   else {
                setStrAsValue(currentValueStr.substring(1));
            }
        });


            button_percent.addEventListener("click", () => {
                const currentValueNum = getValueAsNum();
                const newValueNum = currentValueNum / 100;
                setStrAsValue(newValueNum.toString());
                valueStrInMemory = null;
                operatorInMemory = null;
            });





                // add event listeners to operators



            button_plus.addEventListener("click", () => {
                handleOperatorClick("addition");
            });

            button_minus.addEventListener("click", () => {
                handleOperatorClick("substraction");
            });
            

            button_multiply.addEventListener("click", () => {
                handleOperatorClick("multiplication");
            });

            button_divide.addEventListener("click", () => {
                handleOperatorClick("division");
            });

            button_equals.addEventListener("click", () => {
                if (valueStrInMemory) {
                    setStrAsValue(getResultOfOperatinAsStr());

                    valueStrInMemory = null;
                    operatorInMemory = null;
                }
            });




                    // Add Event Listeners to numbers and decimal


            for (let i = 0; i < numberArray.length; i++) {
                const numberEl = numberArray[i];

                numberEl.addEventListener("click", () => {
                    handleNumberClick(i.toString());
                })
            };



            button_comma.addEventListener("click", () => {
                const currentValueStr = getValueAsStr();

                if (!currentValueStr.includes(".")) {
                    setStrAsValue(currentValueStr + ".");
                }
            });


                // Set up the time

            
            const updateTime = () => {
                const currentTime = new Date();

                let currentHour = currentTime.getHours();
                const currentMinute = currentTime.getMinutes();

                // if (currentHour > 12) {
                //     currentHour -= 12;
                // }
                
                hourEl.textContent = currentHour.toString();
                minuteEl.textContent = currentMinute.toString().padStart(2, "0");

            }

            setInterval(updateTime, 1000);
            updateTime();



// button_AC.addEventListener("click", () => {
//     window.location.reload(true);
// })

// button_0.addEventListener("click", () => {
//     output.innerHTML += 0;
   
// })

// button_1.addEventListener("click", () => {
//     output.innerHTML += 1;

// })
// button_2.addEventListener("click", () => {
//     output.innerHTML += 2;
// })
// button_3.addEventListener("click", () => {
//     output.innerHTML += 3;
// })

// button_4.addEventListener("click", () => {
//     output.innerHTML += 4;
// })
// button_5.addEventListener("click", () => {
//     output.innerHTML += 5;
// })
// button_6.addEventListener("click", () => {
//     output.innerHTML += 6;
// })
// button_7.addEventListener("click", () => {
//     output.innerHTML += 7;
// })
// button_8.addEventListener("click", () => {
//     output.innerHTML += 8;
// })
// button_9.addEventListener("click", () => {
//     output.innerHTML += 9;
// })
// button_comma.addEventListener("click", () => {
//     output.innerHTML += ",";
// })
