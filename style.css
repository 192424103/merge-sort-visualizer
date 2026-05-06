async function startSort(){

  let input = document.getElementById("arrayInput").value;

  let array = input.split(",").map(Number);

  let container = document.getElementById("array");

  container.innerHTML = "";

  for(let i=0;i<array.length;i++){

    let bar = document.createElement("div");

    bar.classList.add("bar");

    bar.style.height = `${array[i]*10}px`;

    bar.innerText = array[i];

    container.appendChild(bar);
  }

  await mergeSort(array);

}

async function mergeSort(array){

  array.sort((a,b)=>a-b);

  let bars = document.getElementsByClassName("bar");

  for(let i=0;i<array.length;i++){

    await new Promise(resolve => setTimeout(resolve,500));

    bars[i].style.height = `${array[i]*10}px`;

    bars[i].innerText = array[i];
  }
}
