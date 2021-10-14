$(document).ready(() => {
    //Banner transition
    const banners = ['./resources/kit-banner-2.png', './resources/kit-banner-1.png', './resources/kit-banner.png', './resources/banner.png']
    setInterval(() => {
        const randomNo = Math.floor(Math.random() * 4)
        $('.board div').css({
            backgroundImage: `url(${banners[randomNo]}`,
        }).on('mouseenter', event => {
            $(event.currentTarget).css('transform', 'scale(1.2)')
        })
    }, 2000)

    
    // Cookies Management
    $('.cookies').find('button').on('click', () => {
        $('.cookies').hide()
    })

    // Nav Bar
    $('.nav-meta li').on('mouseenter', event => {
        $(event.currentTarget).find('span').fadeIn('2000')
    })
        .on('mouseleave', event => {
            $(event.currentTarget).find('span').fadeOut('1500')
        })


    // NAV LIST POP-UP DIVS

    $('.nav-list li').on('mouseenter', event => {
        $('.nav-div-container').css('display', 'block').children().hide()
        switch (event.currentTarget.innerText) {
            case 'VIDEOS':
                $('.nav-div-container').find('#videos').css('display', 'flex').on('mouseleave', function () {
                    $(this).parent().fadeOut(500)
                })
                break;
            case 'NEWS':
                $('.nav-div-container').find('#news').css('display', 'flex').on('mouseleave', function () {
                    $(this).parent().fadeOut(500)
                })
                break;
            case 'SHOP':
                $('.nav-div-container').find('#shop').css('display', 'flex').on('mouseleave', function () {
                    $(this).parent().fadeOut(500)
                })
                break;
            case 'FIXTURES':
                $('.nav-div-container').find('#fixtures').css('display', 'flex').on('mouseleave', function () {
                    $(this).parent().fadeOut(500)
                })
                break;
            case 'PLAYERS':
                $('.nav-div-container').find('#players').css('display', 'flex').on('mouseleave', function () {
                    $(this).parent().fadeOut(500)
                })
                break;
            case 'MY UNITED':
                $('.nav-div-container').find('#man-utd').css('display', 'flex').on('mouseleave', function () {
                    $(this).parent().fadeOut(500)
                })
                break;
            case 'TICKETS':
                              $('.nav-div-container').find('#fixtures').css('display', 'flex').on('mouseleave', function () {
                    $(this).parent().fadeOut(500)
                })
                break;
            case 'OLD TRAFORD':
                $('.nav-div-container').find('#man-utd').css('display', 'flex').on('mouseleave', function () {
                    $(this).parent().fadeOut(500)
                })
                break;
            case 'MORE':
                $('.nav-div-container').find('#news').css('display', 'flex').on('mouseleave', function () {
                    $(this).parent().fadeOut(500)
                })
                break;
        }
    })
    $('header').on('mouseleave', () => {
        $('.nav-div-container').fadeOut(1000)
    })

    
    // Article Mouse Events
    $('article').on('mouseenter', event => {
        $(event.currentTarget).find('img').css('transition', 'all ease-in-out .5s').addClass('scale-img');
        $(event.currentTarget).css(
            {
                boxShadow: '2px 2px 10px #333',
                cursor: 'pointer',
                transition: 'all ease-in-out .5s',
                opacity: '0.9'
            });
    })
        .on('mouseleave', event => {
            $(event.currentTarget).find('img').css('transition', 'all ease-in-out .5s').removeClass('scale-img')
            $(event.currentTarget).css(
                {
                    boxShadow: '',
                    cursor: 'pointer',
                    transition: 'all ease-in-out .5s',
                    opacity: '1'
                });
        })
    .on('mousedown', function(event){
        event.preventDefault()
    })


})