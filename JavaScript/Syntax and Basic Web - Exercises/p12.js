function solve(arr) {
    let newArr = {};
    for (let i = 0; i < arr.length-1; i++)
    {
        let data = arr[i].split(' ');
        let key = data[0];
        let value = data[1];
        if (newArr.hasOwnProperty(key))
        {
            newArr[key].push(value);
        }
        else {
            newArr[key] = [];
            newArr[key].push(value);
        }
    }
    let key = arr[arr.length-1];
    if (newArr.hasOwnProperty(key)==false) console.log('None');
    else for(let i = 0; i < newArr[key].length; i++){
        console.log(newArr[key][i])
    }
}