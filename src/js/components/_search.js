import { FOCUS } from '../_constants';

export default (function() {
  const $search = $('.js-search');

  $search.each(function() {
    const $this = $(this);
    const $searchInput = $this.find('.js-search-input');

    $searchInput.on({
      'focus': () => $this.addClass(FOCUS),
      'blur': () => $this.removeClass(FOCUS)
    });
  });

})();
