$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage', '3rdPage', '4rdPage', '5rdPage'],
    sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C', '#1BBC9B', '#7E8F7C'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['First page', 'Second page', 'Third and last page'],
    responsiveWidth: 1100
  });

  //$.fn.fullpage.setAllowScrolling(true);
});
