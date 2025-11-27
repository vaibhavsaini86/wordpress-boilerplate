/**
 * File form.js.
 */

const forms = Array.from(document.querySelectorAll(".wpcf7 form")).map(
  (form) => {
    const submitButton = form.querySelector('input[type="submit"]');
    const formInputs = form.querySelectorAll(
      'input:not([type="submit"]), textarea'
    );
    const initialSubmitButtonText = submitButton.value;
    return { form, submitButton, formInputs, initialSubmitButtonText };
  }
);

const updateFormSubmissionState = ({
  form,
  submitButton,
  formInputs,
  initialSubmitButtonText,
}) => {
  const isCurrentlySubmitting = form.classList.contains("submitting");
  submitButton.value = isCurrentlySubmitting
    ? "Processing..."
    : initialSubmitButtonText;
  submitButton.disabled = isCurrentlySubmitting;
  formInputs.forEach((input) => (input.disabled = isCurrentlySubmitting));
};

if (forms.length > 0) {
  (function () {
    forms.forEach(updateFormSubmissionState);
    requestAnimationFrame(arguments.callee);
  })();
}
