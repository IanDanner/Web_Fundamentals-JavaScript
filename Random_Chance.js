function randomChance(quarter,leave){
    while (quarter>=0){
        var winCoins = Math.floor(Math.random()*100)+50;
        var win = Math.floor(Math.random()*100);
        if (win==1){
            quarter=quarter+winCoins
            console.log("Win "+winCoins+" Coins, Total: "+quarter+" Coins");
        }
        else {
            console.log("Loss, Total: "+quarter+" Coins");
        }
        if (quarter==0){
            console.log("Out of MONEY!")
            return quarter;
        }
        if (leave<=quarter){
            console.log("Left Game with Total:"+quarter+" quarters")
            return quarter;
        }
        quarter--;
    }
}
randomChance(50,200);