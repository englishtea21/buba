
 $(window).scroll(function() {
        $('.learn .section-title').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("animate__fadeInLeft");
            }
        });
    });

 $(window).scroll(function() {
        $('.skill').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("animate__fadeInUpBig");
            }
        });
    });

$(window).scroll(function() {
        $('.skill-free').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("animate__fadeInUpBig");
            }
        });
    });

$(window).scroll(function() {
        $('.skill-change').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("animate__fadeInUpBig");
            }
        });
    });

$(window).scroll(function() {
		$('.mail .section-title').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass("animate__fadeInLeftBig");
			}
		});
	});
	
$(window).scroll(function() {
		$('.mail .form .input').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass("animate__fadeInLeftBig");
			}
		});
	});

$(window).scroll(function() {
		$('.mail .form .btn').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
				$(this).addClass("animate__fadeInRightBig");
			}
		});
	});




// var btn = document.getElementById('btn');
// btn.onclick = function(e) {
// 		e.preventDefault();
// 		var text = document.querySelector('p.intro');
// 		text.classList.add('red');
// 		var img = document.querySelector('.comp');
// 		// img.style.display='none';
// 		document.querySelector('.skill-change').style.marginLeft ="500px";
// }