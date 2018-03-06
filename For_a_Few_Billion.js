function ForAFewBillion(){
    var money = 0.01;
    for (var count=0; count<=30; count++){
        money = money*2;
    }
    console.log("The reward after 30 days is: $"+money);
}
ForAFewBillion();