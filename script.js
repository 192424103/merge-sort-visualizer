let barsContainer = document.getElementById("bars-container");

let currentArray = [];

function generateBars(){

    let input = document.getElementById("arrayInput").value;

    if(input===""){
        alert("Please enter array values");
        return;
    }

    currentArray = input.split(",").map(Number);

    barsContainer.innerHTML = "";

    let color = document.getElementById("color").value;

    for(let i=0;i<currentArray.length;i++){

        let bar = document.createElement("div");

        bar.classList.add("bar");

        bar.style.height = `${currentArray[i]*3}px`;

        bar.style.background = color;

        bar.innerText = currentArray[i];

        barsContainer.appendChild(bar);
    }

    document.getElementById("status").innerText =
    "Array generated successfully";
}

async function startMergeSort(){

    if(currentArray.length===0){
        alert("Generate the array first");
        return;
    }

    document.getElementById("status").innerText =
    "Merge Sort Started...";

    await mergeSort(currentArray,0,currentArray.length-1);

    document.getElementById("status").innerText =
    "Sorting Completed";

    document.getElementById("output").innerText =
    currentArray.join(", ");
}

async function mergeSort(arr,left,right){

    if(left>=right){
        return;
    }

    let mid = Math.floor((left+right)/2);

    await mergeSort(arr,left,mid);

    await mergeSort(arr,mid+1,right);

    await merge(arr,left,mid,right);
}

async function merge(arr,left,mid,right){

    let bars = document.getElementsByClassName("bar");

    let leftArray = arr.slice(left,mid+1);

    let rightArray = arr.slice(mid+1,right+1);

    let i=0;
    let j=0;
    let k=left;

    let speed =
    parseInt(document.getElementById("speed").value);

    let color =
    document.getElementById("color").value;

    while(i<leftArray.length && j<rightArray.length){

        bars[k].style.background = "red";

        await sleep(speed);

        if(leftArray[i] <= rightArray[j]){

            arr[k] = leftArray[i];

            bars[k].style.height =
            `${leftArray[i]*3}px`;

            bars[k].innerText = leftArray[i];

            i++;

        }else{

            arr[k] = rightArray[j];

            bars[k].style.height =
            `${rightArray[j]*3}px`;

            bars[k].innerText = rightArray[j];

            j++;
        }

        bars[k].style.background = color;

        k++;
    }

    while(i<leftArray.length){

        bars[k].style.background = "orange";

        await sleep(speed);

        arr[k] = leftArray[i];

        bars[k].style.height =
        `${leftArray[i]*3}px`;

        bars[k].innerText = leftArray[i];

        bars[k].style.background = color;

        i++;
        k++;
    }

    while(j<rightArray.length){

        bars[k].style.background = "orange";

        await sleep(speed);

        arr[k] = rightArray[j];

        bars[k].style.height =
        `${rightArray[j]*3}px`;

        bars[k].innerText = rightArray[j];

        bars[k].style.background = color;

        j++;
        k++;
    }
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

function resetVisualizer(){

    currentArray = [];

    barsContainer.innerHTML = "";

    document.getElementById("arrayInput").value = "";

    document.getElementById("status").innerText =
    "Waiting for input...";

    document.getElementById("output").innerText = "-";
}
