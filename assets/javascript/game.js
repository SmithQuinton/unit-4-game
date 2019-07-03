// var yourTotal = 0;
// var wins = 0;
// var lose =0;
// var garnetNumbers = Math.floor(Math.random() * 12) + 1;
// var stevenNumbers = Math.floor(Math.random() * 12) + 1;
// var amethystNumbers = Math.floor(Math.random() * 12) + 1;
// var pearlNumbers = Math.floor(Math.random() * 12) + 1;
// var goalTotal = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

// $("#gem-total").text(goalTotal);
// console.log("You need to get " + goalTotal);

// $("#Garnet").on("click", function(){
//     // var random = Math.floor(Math.random() * 12) + 1;
//     // garnetNumbers;
//     garnetNumbers += yourTotal;
//     console.log(yourTotal)
//     console.log("Garnet has " + garnetNumbers);
//     $("#your-total").text(garnetNumbers);
// })

// $("#Steven").on("click", function(){
//     // var random = Math.floor(Math.random() * 12) + 1;
//     stevenNumbers;
//     console.log("Steven has " + stevenNumbers);
//     $("#your-total").text(stevenNumbers);
// })

// $("#Amethyst").on("click", function(){
//     // var random = Math.floor(Math.random() * 12) + 1;
//     amethystNumbers;
//     console.log("Amethyst has " + amethystNumbers);
//     $("#your-total").text(amethystNumbers);
// })

// $("#Pearl").on("click", function(){
//     // var random = Math.floor(Math.random() * 12) + 1;
//     pearlNumbers;
//     console.log("Pearl has " + pearlNumbers);
//     $("#your-total").text(pearlNumbers)
// })

// starting from scratch
// goal total
var goalTotal = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
$("#gem-total").text(goalTotal);

// users's total
var yourTotal = 0;

var garnetNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var addGarnetNumbers = garnetNumbers[Math.floor(Math.random() * 12)];

$("#Garnet").on("click", function(){
        // var random = Math.floor(Math.random() * 12) + 1;
        //  garnetNumbers;
        console.log(garnetNumbers);
        console.log(yourTotal += addGarnetNumbers);
        console.log(yourTotal);
        $("#your-total").text(yourTotal);
    });

var stevenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var addStevenNumbers = stevenNumbers[Math.floor(Math.random() * 12)];

$("#Steven").on("click", function() {
    console.log(stevenNumbers);
    console.log(yourTotal += addStevenNumbers);
    console.log(yourTotal);
    $("#your-total").text(yourTotal);
});

var amethystNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var addAmethystNumbers = amethystNumbers[Math.floor(Math.random() * 12)];

$("#Amethyst").on("click", function() {
    console.log(amethystNumbers);
    console.log(yourTotal += addAmethystNumbers);
    console.log(yourTotal);
    $("#your-total").text(yourTotal);
});

var pearlNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var addPearlNumbers = pearlNumbers[Math.floor(Math.random() * 12)];

$("#Pearl").on("click", function() {
    console.log(pearlNumbers);
    console.log(yourTotal += addPearlNumbers);
    console.log(yourTotal);
    $("#your-total").text(yourTotal);
});

if (yourTotal === goalTotal) {
    alert("You win!");
  }

  else if (yourTotal > goalTotal) {
    alert("You lose!!");
  };
// // THIRD TIME'S THE CHARM
// var goalTotal = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
// $("#gem-total").text(goalTotal);

// var yourTotal = 0;

// var crystalGemOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];






    

    






