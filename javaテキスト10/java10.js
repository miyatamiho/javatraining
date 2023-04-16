let apple = {
    name: 'apple',
    weight: '100',
    colour: 'red',
}

let japaneseorange = {
    name: 'japaneseorange',
    weight: '30',
    colour: 'orange',
}

let grape = {
    name: 'grape',
    weight: '60',
    colour: 'purple',
}

let fruits = [apple, japaneseorange, grape];

let totalWeight = 0;
for (let i = 0; i < fruits.length; i++) {
totalWeight += parseInt(fruits[i].weight); 
}

console.log('総重量:' + totalWeight + 'g');