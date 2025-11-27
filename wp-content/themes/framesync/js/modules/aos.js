/* eslint-disable no-undef */

/**
 * File aos.js.
 */
(function ($) {
  $(document).ready(function () {
    const isMobile = () =>
      /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
        navigator.userAgent
      );

    AOS.init({
      disable: isMobile(),
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 150,
      delay: 100,
      duration: 800,
      easing: "ease-in-out-cubic",
      mirror: false,
      anchorPlacement: "top-bottom",
      startEvent: "DOMContentLoaded",
    });

    window.addEventListener("load", AOS.refresh);
  });
})(jQuery);
