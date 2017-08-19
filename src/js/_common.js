import {$DOCUMENT, $BODY, TOUCH, NOTOUCH, detectTouch} from './_constants';

export default () => {
  $DOCUMENT.ready(() => {
    if (detectTouch()) $BODY.addClass(TOUCH);
    else $BODY.addClass(NOTOUCH);
  });
};
