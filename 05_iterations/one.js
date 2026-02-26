// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 7){
        // console.log("7th number is best one");
    }
    // console.log(element);
    
    
}


// select the variable and press "command + D" to change more than one variable

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop value :${i}`);
    
    for (let j = 0; j < 10; j++) {
        // console.log('inner loop value : ${j} and outer loop :${i}');
        // console.log(i + '*' + j + "=" + i*j);
        
       
        
    }
    
}

let myArray = ["spyderman", "ironman", "batman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

// break and conditions

for (let index = 1; index < 40; index++) {
    if (index == 5) {
        console.log(`ditected 5`);
        continue

        
    }
    
    console.log(`value of ${index}`);
        
}