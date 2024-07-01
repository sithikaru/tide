let tickets = document.querySelectorAll(".ticket");
let stackArea = document.querySelector(".stack-area");

function rotateTickets(){
    let angle =0;
    tickets.forEach((ticket)=>{
        ticket.style.trasform = `translate(-50%,-50%) rotate(${angle}deg)`
        angle=angle-10
    });
}

rotateTickets();