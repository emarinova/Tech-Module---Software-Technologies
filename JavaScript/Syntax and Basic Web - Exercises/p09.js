function solve(arr) {
    let n = Number(arr[0]);
    let nums = [];
    for (let i = 1; i < arr.length; i++){
        let data = arr[i].split(" - ");
        let index = Number(data[0]);
        let element = Number(data[1]);
        nums[index] = element;
    }
 for (let i = 0; i < n; i++)
     if (nums[i]==undefined) console.log('0');
 else console.log(nums[i]);
}

