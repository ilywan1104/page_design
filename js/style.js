$(document).ready(function() {
  $('#fullpage').fullpage({
    // anchors: ['firstPage', 'secondPage', '3rdPage', '4rdPage', '5rdPage'],
    //sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C', '#1BBC9B', '#7E8F7C'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['First page', 'Second page', 'Third and last page'],
    responsiveWidth: 768,
    verticalCentered: true,
    afterLoad: function(anchorLink, index){
			if(index == 1){
        $('.bn-bg-00,.bn-bg-01,.bn-bg-02,.bn-bg-03').addClass('fadeInDown animated');
			}
		},
    onLeave: function(index, nextIndex, direction){

  	}
  });

  //$.fn.fullpage.setAllowScrolling(true);
});
