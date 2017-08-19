//Active classes
export const NOTOUCH = 'no-touch';
export const TOUCH = 'is-touch';
export const ACTIVE = 'is-active';
export const OPEN = 'is-open';
export const FOCUS = 'is-focus';

//media sizes
const mediaDetect = size => window.matchMedia(`(max-width: ${size}px)`).matches;
export const mediaMD = () => mediaDetect(1023);
export const mediaSM = () => mediaDetect(767);
export const mediaXS = () => mediaDetect(599);

//global elements
export const $DOCUMENT = $(document);
export const $BODY = $('body');

//utils
export const detectTouch = () => 'ontouchstart' in window;
