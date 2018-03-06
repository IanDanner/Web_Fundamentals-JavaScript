function whileYouWait(Days){
    for (var count=Days; count>0; count--){
        if (count>30){
            console.log(count+" days until my birthday. Such a long time... :(");
        }
        else if (count>5){
            console.log(count+" days until my birthday. Almost there... :)");
        }
        else if (count<=5){
            console.log(count+" DAYS UNTIL MY BIRTHDAY!!!! :D");
        }
    }
    console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*");
    console.log("♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪");
    console.log("*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«");
}
whileYouWait(60);