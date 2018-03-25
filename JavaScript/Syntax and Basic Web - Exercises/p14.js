function solve(arr) {
    for (let i = 0; i < arr.length; i++){
        let arrParsed = JSON.parse(arr[i]);
        console.log(`Name: ${arrParsed['name']}`);
        console.log(`Age: ${arrParsed['age']}`);
        console.log(`Date: ${arrParsed['date']}`);

    }
}
