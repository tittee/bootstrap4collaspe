// OUR TRAM
const $teamCollapse = $('#teamCollapse');
$teamCollapse.on('show.bs.collapse','.collapse', function() {
  console.log('sss');
    $teamCollapse.find('.collapse.show').collapse('hide');
});