function intervalLater(word){
    for(let i = 0; i < word.length; i++) {
        setTimeout(function(){
            console.log(word[i]);
        },i * 1000)
       
    }

    let i=0;
   
    const inter = setInterval(function(){
        if(i>= word.length -1) {
            clearInterval(inter)
        }
        console.log(word[i]);
        i++
    },1000)
} 
module.exports = intervalLater