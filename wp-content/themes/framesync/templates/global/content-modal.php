<?php
/**
 * Template part for displaying a content modal
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package framesync
 */

 $modal_id = $args['modal_id'] ?? '';
 $modal_class = $args['modal_class'] ?? '';
 $modal_title = $args['modal_title'] ?? '';
 $modal_content = $args['modal_content'] ?? '';

?>

<div class="modal<?php if(isset($modal_class)) echo ' ' . $modal_class; ?>" id="<?php echo $modal_id; ?>" aria-labelledby="<?php echo $modal_title; ?>" inert>
    <div class="modal__content">
        <div class="modal__close">
            <button class="modal__close-btn" aria-label="Close">
                <span class="modal__close-btn-icon"></span>
            </button>
        </div>
        <div class="modal__body">
            <div class="modal__body-content">
                <div class="modal__body-content-title">
                    <h2 class="modal__title"><?php echo $modal_title; ?></h2>
                </div>
                <div class="modal__body-content-text">
                    <?php echo $modal_content; ?>
                </div>
            </div>
        </div>
    </div>
</div>