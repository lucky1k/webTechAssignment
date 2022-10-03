const imgEl = document.getElementById("img");

function random(a ,b){
    let num =   Math.round(a+ (b-a)* Math.random())
    return num
}


setInterval(() => {
    
    document.body.style.backgroundImage = `url(img${random(1, 5)}.jpg)`;
    document.body.style.backgroundRepeat = `no-repeat`;
    document.body.style.backgroundSize = "450px 400px";
    
}, 2000);