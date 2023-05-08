
async function getAge() {
    const t = getDOB();
    console.log(t);
    calculateAge(t[0]);
}

const getDOB = () => {
    const form = document.querySelector("form");
    const data = new FormData(form);
    let output = [];
    let i = 0;
    for (const entry of data) {
        output[i] = `${entry[1]}`;
        i++;
    }
    const tempDate = Date.parse(output[2] + "-" + output[1] + "-" + output[0]);
   // console.log(tempDate)
    const s = new Date();
    s.setFullYear(output[2], output[1]-1, output[0])
    const g = s.getTime()
    event.preventDefault();
    return [g, output];
}

const calculateAge = (DOB) => {
    const currentDate = new Date();
    const nano = currentDate.getTime();
    console.log(currentDate);
    const difference = currentDate.getTime() - DOB;
    const years = Math.floor(difference / 31556952000);
    const months = Math.floor((difference % 31556952000)/2629746000);
    const days = Math.round(((difference % 31556952000)%2629746000)/86400000);
    console.log(years + " " + months + " " + days);
    document.getElementById("years").innerHTML = years;
    document.getElementById("months").innerHTML = months;
    document.getElementById("days").innerHTML = days;
}
/*
const validateDate = (output) => {
    var monthValidation = 0;
    let month = output[1];
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            monthValidation = 1;
            console.log(output[1]);
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            monthValidation = 2;
            break;
        case 2:
            monthValidation = 3;
            break;
        default:
            monthValidation = 0;
            console.log(output[1]);

    }
    console.log(monthValidation);
}
*/

const Outer = () => {
    console.log(1)
    document.getElementById("outer").style.backgroundColor ="black";
    setTimeout(function () {document.getElementById("outer").style.backgroundColor ="white"},2000);
}

const Inner = () => {
    console.log(1)
    document.getElementById("inner").style.backgroundColor ="black";
    setTimeout(function () {document.getElementById("inner").style.backgroundColor ="white"},2000);
}

const Dot = () => {
    console.log(1)
    document.getElementById("dot").style.backgroundColor ="black";
    setTimeout(function () {document.getElementById("dot").style.backgroundColor ="white"},2000);
}
