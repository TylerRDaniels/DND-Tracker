// console.log(getName , getitemNumber
console.log(form, output);
let itemArr = [];

function generate() {;
    // use for loop to loop array to get values from itemArr into output
    let text1 = 1
    let text2 = 2
    output.innerHTML = "";
    // console.log(itemArr)
    itemArr.forEach((item, index) => {
        console.log(item)
        output.innerHTML += `<div class="card" id="${index}" style="width: 18rem;"> <div class="card-body"> <h5 class="card-title">${item.name}</h5> <p class="card-text">${item.number}</p> </div> </div>`;
    });

};


form.addEventListener("click", (e)=> {

    // console.log(itemName, itemNumber)


    itemArr.push({
        name: itemName.value,
        number: itemNumber.value
    });
    generate();
});

/*  */