/* 
            *               *    
                     *             *
                  *          *   *
                      *   /\
         *              .'  '.   *
                *      /======\      *
                      /:       \
           *          |: (🐨) :|    *       *
                      |:       :|
            *         |: (🐨)  :|          *
                      |:.      :|   *
                    .' \:.    / `.
                   / .-'':._.'`-. \
                   |/    /||\    \|
          
        SET CONDITION SNUGGLE THROUGHOUT THE SHIP
*/


$('.card').click(function(){

    let id = $(this).attr("id")
    let content = cardContent[id-1]
    if (id == 1 || id == 21) {
        date = id + "st December"
    } else if (id == 2 || id == 22){
        date = id + "nd December"
    } else if (id == 3 || id == 23){
        date = id + "rd December"
    } else {
        date = id + "th December"
    }

    $("#kalender-date").text(date)

    if (!content) {
        let i = Math.floor(Math.random() * 2.5)
        let content = naughtyContent[i]
        $("#modal-text").addClass("naughty-text").removeClass("secret-code")
        $("#modal-text2").hide()
        $("#modal-img").attr("src", content[1])
        $("#modal-text1").text(content[0])
    } else {
        $("#modal-text").removeClass("naughty-text").addClass("secret-code")
        $("#modal-text2").show().text("Super Secret Code: " + content[1])
        $("#modal-img").attr("src", content[2])
        $("#modal-text1").text(content[0])
    }

    $('#modal').modal('show')
})

cardContent = [
    [
        "Een verrassing speciaal voor jou!🎄",
        "gY/c5rwXhL",
        "assets/img/d1.jpg"
    ],
    [
        "Kenny says can you come share Christmas snacks with him 🐨🍫",
        "Y4xOyvqfFx",
        "assets/img/d2.jpg"
    ],
    [
        "The weather forecast for next Christmas is 143% snuggles with a chance of little Christmas koalas 🎄🐨",
        "pnQa+OWYrj",
        "assets/img/d3.jpg"
    ],
    [
        "Time for firey snuggles 🔥🔥🔥",
        "h/QlfcahMd",
        "assets/img/d4.jpg"
    ],
    [
        "Why didn't the koala get the job? Because he was too koalified 💼🐨",
        "ybXpifyymm",
        "assets/img/d5.jpg"
    ],
]

naughtyContent = [
    /* ♡ */
    [
        "Kenny says stop trying to be sneaky or he's gonna put you on the naughty list 🐨📋",
        "assets/img/kia1.jpg"
    ],
    [
        "Kenny says he knows what you're up to and he is not impressed 🐨🛑",
        "assets/img/kia2.jpg"
    ],
    [
        "Kenny's run the data and he says it isn't this date yet 🐨📅",
        "assets/img/kia3.jpg"
    ],
]
