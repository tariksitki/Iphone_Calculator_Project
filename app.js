
let output_bottom = document.getElementById("output_bottom");
let output_top = document.querySelector(".output_top");

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
let button_dot = document.getElementById("button_dot");
let button_equals = document.getElementById("button_equals");

let button = document.getElementsByClassName("button");

let myArray = [];

           ////  function for result content limitation:
            function myLimit() {
                if (output_top.textContent.length > 10) {
                    output_top.textContent = output_top.textContent.slice(output_top.textContent.length - 10, output_top.textContent.length);
                    output_top.style.fontSize = "3rem";

                }   else if (output_bottom.textContent.length > 10) {
                    output_bottom.textContent = output_bottom.textContent.slice(output_bottom.textContent.length - 10, output_bottom.textContent.length);
                    output_bottom.style.fontSize = "3rem";
                }
            }



        /// add function all buttons
    Array.from(button).forEach((e) => {
    e.addEventListener("click", () => {
        if (e.value == "") {
            return;
        }
        /////////////////

        if (output_bottom.innerHTML == "0") {
            if (e.value == "0"){
                return;
             }   else {
                if (e.value == "_" || e.value == "+" || e.value == "x" || e.value == "/"){                  
                    return;
                }   else {
                    output_bottom.innerHTML = "";
                    output_bottom.innerHTML += e.value;
                    myArray.push(e.value);
                } 
            }
        } else {
            let last = output_bottom.textContent[output_bottom.textContent.length - 1];

            if (e.value == "_") {           // the value of "-" = "_" in HTML
                if (last == "+" || last == "-" || last == "/" || last == "x") {
                    return;
        
            }   else {
                output_bottom.innerHTML += "-";
                myArray.push(e.value);
                }

            }  else if (  (e.value == "_" || e.value == "+" || e.value == "x" || e.value == "/") && (last == "+" || last == "-" || last == "/" || last == "x")) {
                button_multiply.removeEventListener("click", () => {
                })
                button_minus.removeEventListener("click", () => {
                    output_bottom.innerHTML += "-";
                    myArray.push(e.value);
                    console.log(e.value);
                })

            }  
            else {
                output_bottom.innerHTML += e.value;
                myArray.push(e.value);
                console.log(e.value);
            }
        }


                ////  result content limitation:

        // if (output_bottom.textContent.length > 9) {
        //     output_bottom.textContent = output_bottom.textContent.slice(output_bottom.textContent.length - 9, output_bottom.textContent.length);
        // }
        myLimit();
        // console.log(e.value);
        
    })
})


                //// plus_minus button:


            let plus_minus = document.querySelector("#button_plus_minus");
            plus_minus.addEventListener("click", () => {
                if (output_bottom.textContent == "0") {
                    return;
                }  else {
                    if (output_bottom.textContent[0] != "-" ){
                        output_bottom.textContent = "-" + output_bottom.textContent;
                        myArray.splice(0, 0, "-");
                        // myArray = +(myArray.join(""));
                        console.log(myArray);
                        // console.log(typeof(myArray));

                }   else if (output_bottom.textContent[0] == "-") {

                        output_bottom.textContent = output_bottom.textContent.slice(1, output_bottom.textContent.length);
                        myArray.splice(0, 1);
                        console.log(myArray);
                }
                    }
                    myLimit()
            })
            

            ///  button equals:

        button_equals.addEventListener("click", () => {
        let results;

        if (myArray.includes("x")) {
            let num1 = Number(myArray.slice(0, myArray.indexOf("x")).join(""));
            // console.log(num1);

            let num2 = Number(myArray.slice(myArray.indexOf("x") + 1).join(""));

            output_top.innerHTML = num1 * num2;
            results = num1 * num2;

        } else if (myArray.includes("/")) {
            let num1 = +(myArray.slice(0, myArray.indexOf("/")).join("")); 
            let num2 = +(myArray.slice(myArray.indexOf("/") + 1).join(""));
            output_top.innerHTML = num1 / num2;
            results = num1 / num2;
        
        } else if (myArray.includes("_")) {
            
            let num1 = +(myArray.slice(0, myArray.indexOf("_")).join(""));

            num2 = +(myArray.slice(myArray.indexOf("_") + 1).join(""));
            output_top.innerHTML = num1 - num2;
            results = num1 - num2;

        }   else if (myArray.includes("+")) {
            let num1 = Number(myArray.slice(0, myArray.indexOf("+")).join(""));

            let num2 = Number(myArray.slice(myArray.indexOf("+") + 1).join(""));

            output_top.innerHTML = num1 + num2;
            results = num1 + num2;
            // console.log(num1, num2);
        }

        if (output_bottom.innerHTML != "0") {
            output_bottom.innerHTML = "";
        }   else {
            return;
        }
        
        myArray = [results];
        // sonradan push yapacagimiz icin [] icerisine aldik
      
        
        ////  result content limitation:

        myLimit()
    })


            /// button_percent:

    button_percent.addEventListener("click", ()=> {
        let results;
        let num1 = Number(myArray.slice(0, myArray.indexOf("%")).join(""));

        results = num1 / 100;
        myArray = [results];
        output_top.innerHTML = results;
        output_bottom.innerHTML = "";

        
             ////  result content limitation:
             myLimit()
    })


        // button AC add function:

    button_AC.addEventListener("click", () => {
        myArray = [];
        output_top.innerHTML = "";
        output_bottom.innerHTML = "0";
        output_top.style.fontSize = "4rem";
        output_bottom.style.fontSize = "4rem";
    })


    
        /// actuell Time:

    let hour = document.getElementById("hour");
    let minute = document.getElementById("minute");
    let second = document.getElementById("second");

    function updateTime() {
        let currentTime = new Date();

        currentHour = currentTime.getHours();
        currentMinute = currentTime.getMinutes();
        currentSecond = currentTime.getSeconds()

        hour.textContent = currentHour.toString();
        minute.textContent = currentMinute.toString().padStart(2, "0");
        second.innerHTML = currentSecond.toString().padStart(2, "0");
    }

        setInterval(updateTime, 1000);
        updateTime();
