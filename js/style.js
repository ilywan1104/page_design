$(document).ready(function() {
  $('#fullpage').fullpage({
    navigation: true,
    navigationPosition: 'right',
    // navigationTooltips: ['First page', 'Second page', 'Third and last page'],
    responsiveWidth: 768,
    verticalCentered: true,
    afterLoad: function(anchorLink, index){
			if(index == 1){
        $('.bn-bg-00,.bn-bg-01,.bn-bg-02,.bn-bg-03').addClass('fadeInDown animated');
        //$('.navbar').addClass('dis-navbar-dark');
			}else {
        $('.navbar').addClass('fadeInDown animated op-navbar-dark');
      }
		},
    onLeave: function(index, nextIndex, direction) {
      if(nextIndex == 1){
        $('.navbar').removeClass('fadeInDown animated op-navbar-dark');
      }
    }
  });
});
