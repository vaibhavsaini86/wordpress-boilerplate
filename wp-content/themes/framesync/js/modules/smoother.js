/**
 * File smoother.js.
 *
 * Smooth scroll to the target element with smooth animation.
 */
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

(function ($) {
  $(document).ready(function () {
    // Create wrapper and content elements if they don't exist
    if (!$("#smooth-wrapper").length) {
      $("#page").wrapInner('<div id="smooth-wrapper"></div>');
      $("#smooth-wrapper").wrapInner('<div id="smooth-content"></div>');
    }

    // Initialize ScrollSmoother
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2,
      effects: true,
    });
  });
})(jQuery);
