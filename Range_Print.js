function rangePrint(start,end,skip){
    if (skip == undefined){
        skip = 1;
    }
    if (end == undefined){
        end = 0;
    }
    if (start<end){
        while (start<end){
            console.log(start);
            start+=skip;
        }
    }
    else {
        while (start>end){
            console.log(start);
            start-=skip;
        }
    }
}
rangePrint(2,10,2);
rangePrint(1,-20,3);
rangePrint(3,20);
rangePrint(4);