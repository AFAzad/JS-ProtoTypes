//Define a method on Array constructor called includesOneOf which accepts an array as a parameter. It will return true or false based on if an array contains one or more than one of the elements provided in the parameter array.



Array.prototype.contains = function(val){
    return this.some(string => JSON.stringify(string) === JSON.stringify(val));
}
Array.prototype.includesOneof = function(array){
    for(let i=0;i<array.length;i++){
        if(this.contains(array[i])){
            return true;
        }
    }
    return false;
}