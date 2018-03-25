function solve(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++){
        let data = arr[i].split(' -> ');
        let key = data[0];

        let value = data[1];
        if (value == Number(value)){
            value=Number(value);
        }
        obj[key] = value;
    }
    let objAsString = JSON.stringify(obj);
    console.log(objAsString);
}