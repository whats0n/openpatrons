import { OPEN, ACTIVE } from '../_constants';

export default (function() {
  const $navOpen = $('.js-nav-open');
  const $nav = $('.js-nav');

  $navOpen.click(function(e) {
  	e.preventDefault();
  	$navOpen.toggleClass(ACTIVE);
  	$nav.toggleClass(OPEN);
  });

})();
