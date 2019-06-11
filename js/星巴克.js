$(function () {
    let ul = 0
    $('#btn').click(function () {
        ul++
        if (ul < 7) {
            $('.banner ul').animate({ 'left': '-=884' }, 2000)
        } else {
            $('.banner ul').css({ 'left': 0 })
            $('.banner ul').animate({ 'left': '-884' }, 2000)
            ul = 1
        }
    })
    let timeId = setInterval(function () {
        $('#btn').click()
    }, 5000)
    $('.banner ul').mouseenter(function () {
        clearInterval(timeId)
    })
    $('.banner ul').mouseleave(function () {
        timeId = setInterval(function () {
            $('#btn').click()
        }, 5000)
    })
    $('#img1').mouseenter(function () {
        $(this).css({ 'margin-top': '0px' })
    })
    $('#img1').mouseleave(function () {
        $(this).css({ 'margin-top': '' })
    })
    $('#img2').mouseenter(function () {
        $(this).css({ 'margin-top': '0px' })
    })
    $('#img2').mouseleave(function () {
        $(this).css({ 'margin-top': '' })
    })
    $('#img3').mouseenter(function () {
        $(this).css({ 'margin-top': '0px' })
    })
    $('#img3').mouseleave(function () {
        $(this).css({ 'margin-top': '' })
    })
})