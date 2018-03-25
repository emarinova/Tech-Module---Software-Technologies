function addRemove(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++)
    {
        let commandLine = arr[i].split(' ');
        let command = commandLine[0];
        let element = Number(commandLine[1]);
        if (command=='add') {
            newArr.push(element);
        }
        else{
            let index = element;

            if (newArr.length -1 >= index)
            {
                for (let i = index; i < newArr.length-1; i++){
                    newArr[i] = newArr[i+1];
                }
                newArr.pop();
            }
        }
    }
    for (let el of newArr){
        console.log(el);
    }
    
}

addRemove(['add 3', 'add 5', 'remove 2', 'remove 0', 'add 7']);