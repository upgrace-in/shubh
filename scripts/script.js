$(document).ready(function () {

    function setDots() {
        $("#top-carousel .owl-dots").removeClass('disabled');
        $("#top-carousel .owl-nav").addClass('disabled');

        //   $("#top-carousel .reme-text").addClass('animate__animated animate__zoomIn');
    }
    $('#top-carousel').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        onInitialized: setDots,
        onChanged: setDots,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('#client-carousel').owlCarousel({
        loop: true,
        nav: true,
        margin: 10,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 3000,
        onInitialized: setDots,
        onChanged: setDots,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 6,
            }
        }
    });


    // window.onscroll = function() {make_small_nav()};

    AOS.init();
});

function show_popup(data, ele) {
    var modal = $("#myModal_2");
    var img = $(ele).find(".slider-img");
    var modalImg = $("#img02");
    var captionText = $("#caption2");
    modal.css({ 'display': 'block' });
    var src = img.attr('src');
    var span = document.getElementsByClassName("close_2")[0];

    span.onclick = function () {
        modal.css({ 'display': 'none' });
    }
    if (data === 'weddings') {
        captionText.html('<h1>Weddings</h1><br>Indian wedding is considered to be an occasion of pompous, vibrant as well as sumptuous celebration. Wedding is one of the most important events in any parents life. Every couple wants a grand celebration on their special day so that they can call it their Dream Wedding. Thus the main wedding event along with the reception will be a perfect reflection of your dreams, fancy as well as your individual style quotient. There are so many event management companies that have been organising wedding events. But it really becomes very difficult and confusing when it comes to selecting one for your own big day. So here we are to help you out with every little as well as big things on your wedding day. We have the right resources, support, well-trained experienced professionals along with the expertise to make your dream come true. Since planning a wedding is our passion and we are also having years of experience in this industry, you should simply enjoy your day and should not worry much. You will be offered a huge range of services that will live up to all your needs.');
    }
    else if (data === 'social') {
        captionText.html(`<h1>Celebrations</h1><br>We all love the idea of parties and people of each and every age enjoy it. Mostly when we are the guests we can relax and enjoy ourselves with our closed ones. But being a host of the party is a great responsibility. We mostly love to be a part of a themed party. These days every party are seen to have some theme that excites their guests a lot. Thus you can hire the best event management company and take their help to plan out the best-themed party for you and your guests. If you get in touch with us, our team of planners will do exactly what you wish them to. Milestone Celebrations, theme Celebrations like Halloween, Retro as well as Arabian Nights are very popular.`);
    }
    else if (data === 'btl') {
        captionText.html(`<h1>BTL</h1><br>Shubhkamanaye provides top-notch services for brand activation and awareness. We curate the finest BTL activities across the country for brand promotion. We provide affordable and relevant solutions for businesses irrespective of their size and scale. Shubhkamanaye team leaves no stone unturned to ensure effective advertising across segments for brand promotion. Our innovative ideas and effective implementations make us stand out from the crowd. Our expertise lies in our creativity, out-of-the-box concepts, quality and technology for product launch services through BTL activities like Apartment Campaigns, Tech Park Campaigns, Mall Activations, Roadshows, etc.`);
    }
    else if (data === 'corporate') {
        captionText.html('<h1>Corporate Events</h1><br>It costs more to acquire a new talent than to retain an existing one. shubhkamanayedelivers a precise mixture of Corporate Event services that creates the chemistry for companies to attract new talent, and to strengthen existing employee relationship. shubhkamanaye undertakes the management of the corporate event from the planning stage right up to the post-event evaluation level. We can ensure that expectations of each client or organization are met. We can solve any problem; provide capable and integrated management across the whole project as required. Our expert level of planning and technical knowledge ensures deadlines are met and potential production conflicts are dealt with before they arise.');
    }
    else {
        alert('Something Goes Wrong');
    }
}

function open_popup(ele) {
    var modal = $("#myModal");
    var img = $(ele).find("#myImg");
    var modalImg = $("#img01");
    var captionText = $("#caption1");

    modal.css({ 'display': 'block' });

    var src = img.attr('src');
    var alt = img.attr('alt');

    modalImg.attr('src', src);
    captionText.html(alt)

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
        modal.css({ 'display': 'none' });
    }
}

function make_small_nav() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        $('.navbar').fadeIn('slow', function () {
            $(this).addClass('nv');
        });
        $('.img-nav').fadeIn('slow', function () {
            $(this).addClass('img-nav2');
        });
    } else {
        $('.navbar').fadeIn('slow', function () {
            $(this).removeClass('nv');
        });
        $('.img-nav').fadeIn('slow', function () {
            $(this).removeClass('img-nav2');
        });
    }
}

function fill_works() {
    for (var i = 0; i < 8; i++) {
        $('.our-works-con').append('<div data-aos="fade-up" class="works mx-auto text-center" data-aos-duration="1500" onclick="open_popup(this)" style="margin: 10px; width: 15rem;"><img id="myImg" src="our_works/' + images[i] + '" alt="Our Works" style="width:100%; height: 100%; max-width:300px"></div>').fadeIn('slow');
    }
}
$('.nextbtn').click(function () {
    $('.our-works-con').html(' ');
    var first_imgs = images.splice(0, 5);
    $.each(first_imgs, function (i, value) {
        images.push(value);
    });
    fill_works();
});

function fill_reviews(testimonial, reviews, review_by) {
    setInterval(function () {
        $(this).fadeIn('slow', function () {
            // $('.testimonial').html(testimonial[0]);
            $('.client-reviews').html(reviews[0]);
            $('.review_by').html(review_by[0]);
        });

        take_it_last(testimonial);
        take_it_last(reviews);
        take_it_last(review_by);
    }, 4000);
}

function take_it_last(arr) {
    var cut = arr.splice(0, 1);
    $.each(cut, function (i, value) {
        arr.push(value);
    });
}