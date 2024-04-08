const btnEl = document.querySelector(".btn");
//inside btnEl below console.log(event.pageY - btnEl.offsetTop); console.log(event.pageX - btnEl.offsetLeft);to get the number of the possition
btnEl.addEventListener("mouseover", (event)=> {
    const X = (event.pageX - btnEl.offsetLeft);
    const Y = (event.pageY - btnEl.offsetTop);
//this selects those possitions to be able to change them
    btnEl.style.setProperty("--xPos", X + "px")
    btnEl.style.setProperty("--yPos", Y + "px")
    // changes the selected areas
})