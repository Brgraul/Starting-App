llb_app.addListener('window_state', function(data){
	if(data.fullscreen)
	{
		$('.fullscreen').slideDown()
		$('.not_fullscreen').slideUp()
	}
	else
	{
		$('.fullscreen').slideUp()
		$('.not_fullscreen').slideDown()
	}
})
