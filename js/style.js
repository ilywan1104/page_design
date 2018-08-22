$(document).ready(function() {
  $('#fullpage').fullpage({
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['First page', 'Second page', 'Third and last page'],
    responsiveWidth: 768,
    verticalCentered: true,
    afterLoad: function(anchorLink, index){
			if(index == 1){
        $('.bn-bg-00,.bn-bg-01,.bn-bg-02,.bn-bg-03').addClass('fadeInDown animated');
			}
		}
  });
});
