function productOf3Nums(arr) {
    let [x, y, z] = [arr[0], arr[1], arr[2]];
    let counter = 0;
    if (x<0) counter++;
    if (y<0) counter++;
    if (z<0) counter++;
    if(x===0||y===0||z===0) counter=0;
    if(counter%2===1) return 'Negative';
    else return 'Positive';
}