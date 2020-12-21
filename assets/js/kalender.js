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
    [
        "On the 6th day of Christmas, the koala needed a little nap, cause he was a sleepy head 🐨😴",
        "UJ69pPGWZs",
        "assets/img/d6.jpg"
    ],
    [
        "Kenny says you don't got to worry about the tree because koalas know a lot about trees and he's got it all under control 🐨🎄",
        "BVM84+OSYS",
        "assets/img/d7.jpg"
    ],
    [
        "Koalas are bears 🐨🧸",
        "nBvBCUPCNf",
        "assets/img/d8.jpg"
    ],
    [
        "🐨🎅 Kenny wants you to meet his friend, Santa Claws: https://www.youtube.com/watch?v=ijRe4zvSFn4&t=24s",
        "04jspMa15G",
        "assets/img/d9.jpg"
    ],
    [
        "🐨🐨🐨🐨🐨🐨🐨🐨🐨🐨",
        "7LU6kawbJt",
        "assets/img/d10.jpg"
    ],
    [
        "Kenny wants you to hold his little paw",
        "iwlOED/LcG",
        "assets/img/d11.jpg"
    ],
    [
        "Little vipers on the Christmas Tree 🚀🎄",
        "JUBMRzX5Hu",
        "assets/img/d12.jpg"
    ],
    [
        "Little battlestars on the Christmas Tree too 🚀🎄",
        "MI+R95Y4u5",
        "assets/img/d13.jpg"
    ],
    [
        "Kennys's chosen the gingerbread house he wants you to build with him 🐨🏰",
        "DrvVTGF/O2",
        "assets/img/d14.jpg"
    ],
    [
        "And a spaceship gingerbread 🚀",
        "+/d218MQEu",
        "assets/img/d15.jpg"
    ],
    [
        "And he's already working on the koala gingerbreads too 🐨",
        "85U4WqNS3Y",
        "assets/img/d16.jpg"
    ],
    [
        "Kenny has an important question about why no one makes snow koalas ☃",
        "MPl+aJa1Re",
        "assets/img/d17.jpg"
    ],
     [
        "Kenny says he's gonna make some flowers for your mama 🌷",
        "Vy83qkcNPf",
        "assets/img/d18.jpg"
    ],
     [
        "🐨 This one was just too cute not to put in the kalender",
        "ux/o6JNR1U",
        "assets/img/d19.jpg"
    ],
     [
        "This one just makes me think of the super snuggley jigsaw cuddles 🧩",
        "qyUILcRX98",
        "assets/img/d20.jpg"
    ],
     [
        "Just gonna give you this and you can take care of it for me ❤",
        "LboomX4c0m",
        "assets/img/d21.jpg"
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
