function solve(arr) {
    for (let i = 0; i < arr.length; i++) {
        let data = arr.split(' -> ');
        console.log(`Name: ${data[0]}`);
        console.log(`Age: ${data[1]}`);
        console.log(`Grade: ${data[2]}`);
    }

}