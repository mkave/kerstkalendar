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
        "We love you!",
        "NNM06",
        "https://thumbs.dreamstime.com/b/koala-bear-kid-cute-cartoon-koala-bear-characters-merry-christmas-vector-illustration-koala-christmas-lights-garland-166468607.jpg"
    ],
    [
        "We have a million kisses for you!",
        "Z8903", 
        "https://i.pinimg.com/originals/03/35/d3/0335d30c746243c7ed4b9e1988e486b1.png"
    ]
]

naughtyContent = [
    /* ♡ */
    [
        "Kenny says stop trying to be sneaky or he's gonna put you on the naughty list 🐨📋",
        "https://ctl.s6img.com/society6/img/MM1ac8gcZVFh7wjd_epSSZ7BT7o/w_700/prints/~artwork/s6-0082/a/32488466_8018428/~~/youre-the-reason-santa-even-has-a-naughty-list-prints.jpg"
    ],
    [
        "Kenny says he knows what you're up to and he is not impressed 🐨🛑",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4oPncMW2v0PWjLBgUgou2YJ2X6KeoWVWag&usqp=CAU"
    ],
    [
        "Kenny's run the data and he says it isn't this date yet 🐨📅",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4oPncMW2v0PWjLBgUgou2YJ2X6KeoWVWag&usqp=CAU"
    ],
]
