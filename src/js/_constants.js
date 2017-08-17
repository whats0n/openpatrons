//Active classes
export const NOTOUCH = 'no-touch';
export const TOUCH = 'is-touch';
export const ACTIVE = 'is-active';
export const OPEN = 'is-open';


//global elements
export const $DOCUMENT = $(document);
export const $BODY = $('body');

//utils
export const detectTouch = () => 'ontouchstart' in window;
