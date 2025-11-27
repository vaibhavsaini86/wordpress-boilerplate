/**
 * File modal.js.
 */
(function ($) {
  $(document).ready(function () {
    const modal = document.querySelectorAll(".modal");
    const modalTarget = document.querySelectorAll("[data-modal-target]");
    const modalClose = document.querySelectorAll(".modal__close-btn");

    modalClose.forEach(function (modalClose) {
      modalClose.addEventListener("click", function (e) {
        e.preventDefault();

        const currentModal = this.closest(".modal");
        const triggerButton = document.querySelector(
          `[data-modal-target="${currentModal.id}"]`
        );

        // Set modal as inert and remove active class
        currentModal.setAttribute("inert", "");
        currentModal.classList.remove("is-active");

        // Enable body scroll
        document.body.classList.remove("no-scroll");

        // Return focus to the trigger button
        if (triggerButton) {
          triggerButton.focus();
        }
      });
    });

    modalTarget.forEach(function (modalTarget) {
      modalTarget.addEventListener("click", function (e) {
        e.preventDefault();

        const targetModalId = this.getAttribute("data-modal-target");

        modal.forEach(function (modal) {
          if (modal.id === targetModalId) {
            // Remove inert and add active class
            modal.removeAttribute("inert");
            modal.classList.add("is-active");

            // Disable body scroll
            document.body.classList.add("no-scroll");

            // Focus the close button
            const closeBtn = modal.querySelector(".modal__close-btn");
            if (closeBtn) {
              closeBtn.focus();
            }
          } else {
            // Set other modals as inert and remove active class
            modal.setAttribute("inert", "");
            modal.classList.remove("is-active");
          }
        });
      });
    });
  });
})(jQuery);
