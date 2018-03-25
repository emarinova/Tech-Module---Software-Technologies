function solve(arr) {
    let newArr = {};
    for (let i = 0; i < arr.length-1; i++)
    {
        let data = arr[i].split(' ');
        let key = data[0];
        let value = data[1];
        newArr[key] = value;
    }
    let key = arr[arr.length-1];
    if (newArr[key]==undefined) console.log('None');
    else console.log(newArr[key]);
}