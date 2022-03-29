$(document).ready(function(){
    $('.home-col').on('mouseover', function(){
        $(this).addClass('col-md-3');
        $(this).removeClass('col-md');
    })
    $('.home-col').on('mouseout', function(){
        $(this).addClass('col-md');
        $(this).removeClass('col-md-3');
    })

    AOS.init({
        duration: 1000
    });
    var show = false;
    $('#nav-toggle').click(function(){
        if (!show) {
            $('.nav-menu').addClass('show');
            $('.nav-transparent').addClass('show');
            show = true;
        }else{
            $('.nav-menu').removeClass('show');
            setTimeout(function(){
                $('.nav-transparent').removeClass('show');
            },500);
            show = false;
        }
    });
    $('#add-guest').click(function(){
    	html = $('.cg-main').clone();
    	html.find('#add-guest').remove();
    	var validate = `<div class="form-group">
                <label>Email</label>
                <input type="email" name="email" class="form-control" placeholder="Email" required="novayulyanti@gmail.com">
                <button class="btn btn-ticket btn-block btn-gold btn-rounded mt-3">Validate</button>
                <p class='text-center mt-0 text-success validate-status validate-success'>Your email has been validated</p>	
                <p class='text-center mt-0 text-danger validate-status validate-failed'>Your email has not found. <a href='register.html' class='text-success'>Please register your account!</a></p>	
            </div>
            `;
    	html.find('.validate').append(validate);
    	html.find('.card-header').find('h3').append('<button class="btn btn-danger btn-rounded delete-guest"><i class="fa fa-trash"></i> Delete Guest</button>');
    	html.removeClass('cg-main');
    	html.find('.toggle-guest').addClass('rotated');
    	html.find('.card-body').slideUp();
    	$('#guest-append-area').append(html);
        $('.validate-status').hide();
    })
    $(document).on('click', '.delete-guest', function(){
    	$(this).parent().parent().parent().remove();
    })
    $(document).on('click', '.toggle-filter', function(){
    	if ($(this).hasClass('active')) {
    		$(this).removeClass('active');
    	}else{
    		$(this).addClass('active');
    	}
    })
    $(document).on('click', '.toggle-guest', function(){
    	if ($(this).hasClass('rotated')) {
    		$(this).removeClass('rotated');
    		$(this).parent().parent().find('.card-body').slideDown();
    	}else{
    		$(this).addClass('rotated');
    		$(this).parent().parent().find('.card-body').slideUp();
    	}
    })
    $(document).on('click', '.tmin', function(){
    	var val = $(this).parent().find('.plusmin-number').val();
    	if (val > 1) {
    		val--;
    		$(this).parent().find('.plusmin-number').val(val);
    	}
    })
  	$(document).on('click', '.tplus', function(){
    	var val = $(this).parent().find('.plusmin-number').val();
		val++;
		$(this).parent().find('.plusmin-number').val(val);
    })
    $(document).on('click', '.payment-method', function(){
    	$(this).addClass('active');
    	$('.payment-method').not(this).removeClass('active');
    })
})