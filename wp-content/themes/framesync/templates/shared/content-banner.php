<?php
/**
 * Template part for displaying a banner that all pages or posts can be use
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package framesync
 */

 $className = $args['className'] ?? '';
 $title = $args['title'] ?? '';
 $image_url = $args['image_url'] ?? '';

?>

<section class="banner <?php echo $className; ?>" style="<?php echo '--banner-image: url(' . $image_url . ');'; ?>">
    <div class="container">
        <div class="flex flex-col items-center justify-center h-full">
            <h1 class="banner__title"><?php echo $title ?? get_the_title() ?? 'Title Not Found'; ?></h1>
        </div>
    </div>
</section>
