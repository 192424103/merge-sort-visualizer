let array = [];

generateArray();

function generateArray(){

  array = [];

  document.getElementById("array").innerHTML = "";

  for(let i=0;i<20;i++){

    let value = Math.floor(Math.random()*300)+20;

    array.push(value);

    let bar = document.createElement("div");

    bar.classList.add("bar");

    bar.style.height = `${value}px`;

    document.getElementById("array").appendChild(bar);
  }
}

async function mergeSort(){

  array.sort((a,b)=>a-b);

  let bars = document.getElementsByClassName("bar");

  for(let i=0;i<array.length;i++){

    await new Promise(resolve => setTimeout(resolve,100));

    bars[i].style.height = `${array[i]}px`;
  }
}
