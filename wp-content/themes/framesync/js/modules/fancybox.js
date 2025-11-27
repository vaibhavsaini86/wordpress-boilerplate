/**
 * File fancybox.js.
 */

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

(function ($) {
  $(document).ready(function () {
    Fancybox.bind("[data-fancybox='gallery']", {
      Thumbs: false,
      Carousel: {
        autoStart: false,
        infinite: true,
      },
      Toolbar: {
        display: {
          left: [],
          middle: [],
          right: [],
        },
      },
    });
  });
})(jQuery);
