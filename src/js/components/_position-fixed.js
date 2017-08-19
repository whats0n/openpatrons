import { $WIN, mediaMD } from '../_constants';

export default (function() {

  const $fixed = $('.js-fixed');
  const $header = $('.js-header');

  if (!$fixed.length) return;
 
  const setPosition = () => {

    const $wrapper = $fixed.closest('.js-fixed-wrapper');
    const width = $wrapper.width();
    const headerHeight = $header.outerHeight();

    if ($WIN.scrollTop() + headerHeight > $wrapper.offset().top && !mediaMD()) {
      $fixed.css({
        'position': 'fixed',
        'top': `${headerHeight}px`,
        'width': `${width}px`
      });
    } else {
      $fixed.removeAttr('style');
    }

  };

  let resizeTimer;

  $WIN.on('scroll', () => {
    setPosition();
  });

  $WIN.on('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(setPosition, 100);
  });

})();
