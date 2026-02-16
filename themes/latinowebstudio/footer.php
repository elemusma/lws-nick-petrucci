<footer>
  
<section class="position-relative bg-accent-secondary text-black" style="padding:50px 0px;">
    
<?php
echo wp_get_attachment_image(585, 'full', false, array( 'alt' => get_bloginfo( 'name' ) . ' - ' . get_bloginfo( 'description' ), 'class'=>'position-absolute w-100 h-100', 'style' => 'width:100%;height:auto;opacity:1;object-fit:cover;top:0;left:0;' ));
?>
<div class="container">
<div class="row justify-content-center">

<div class="col-lg-4 col-12" style="">

<a href="<?php echo home_url() ?>" title="Homepage link for <?php echo get_bloginfo('name') ?> - <?php echo get_bloginfo('description') ?>">
<div style="" id="logoMain">
<div style="pointer-events:none;">
<?php 
  echo wp_get_attachment_image(logoImg()['id'], 'full', false, array( 'alt' => get_bloginfo( 'name' ) . ' - ' . get_bloginfo( 'description' ), 'style' => 'width:100%;height:auto;' ));
?>
</div>
</div>
</a>
<?php echo companyAbout(); ?>

</div>

<div class="col-12 desktop-hidden" style="padding:25px;"></div>

<div class="col-lg-5 col-12" style="">
  <h2 class="h3">Forensic Engineer Expert Witness</h2>
  <?php echo wp_get_attachment_image(376,'full','',array('class'=>'w-75 h-auto','style'=>'object-fit:contain;')); ?>
  <?php 
  wp_nav_menu(array(
    'menu' => 'footer',
    'menu_class'=>'menu list-unstyled mb-0',
));
  ?>
<?php echo get_template_part('partials/si'); ?>
</div>

<div class="col-12 desktop-hidden" style="padding:25px;"></div>

<div class="col-lg-3 col-12" style="">
  <h2 class="h3">Contact Expert</h2>
  <?php echo wp_get_attachment_image(376,'full','',array('class'=>'w-75 h-auto','style'=>'object-fit:contain;')); ?>
  <div class="" style="padding:15px 0px;">
<?php echo wp_get_attachment_image(377,'full','',array('class'=>'h-auto','style'=>'width:15px;margin-right:15px;object-fit:contain;')); ?>
<div class="d-block bold d-flex">
  <div>
<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.65 24.84" style="width:25px;height:25px;margin-right:15px;">
  <g id="Layer_1-2" data-name="Layer 1">
    <g>
      <path class="cls-1" fill="var(--accent-primary)" d="M33.65,7.02v13.54c-.39,2.27-2.2,4.02-4.51,4.26H4.7c-2.03.08-4.7-2.26-4.7-4.3V7.02l.22.08c5.34,3.24,10.64,6.58,16.03,9.73l.99.03c5.34-3.05,10.57-6.33,15.83-9.54.18-.11.37-.25.59-.3Z"/>
      <path class="cls-1" fill="var(--accent-primary)" d="M4.46.01h24.69c2.14.21,3.91,1.78,4.37,3.89l-16.65,10.2L.16,3.93C.51,1.85,2.37.23,4.46.01Z"/>
    </g>
  </g>
</svg>
    <?php echo do_shortcode('[global_email]'); ?>
  </div>
</div>
<div class="bold d-flex">
  <svg class="phone" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.04 33.85" style="width:25px;height:25px;margin-right:15px;">
  <defs>
    <style>
      .phone .cls-1,.phone .cls-2 {
        fill: #d6b981;
        stroke: #d6b981;
        stroke-miterlimit: 10;
      }

      .phone .cls-2 {
        stroke-width: .85px;
      }
    </style>
  </defs>
  <g id="Layer_1-2" data-name="Layer 1">
    <g>
      <path class="cls-2" d="M23.74,5.29c2.51,2.52,4.26,5.87,4.81,9.39l-2.37.35c-1.02-6.32-6.32-11.45-12.67-12.25l.35-2.33c.06-.08,1.08.12,1.26.16,3.21.68,6.29,2.37,8.61,4.68Z"/>
      <path class="cls-2" d="M20.72,15.45c-.48-3.43-3.41-6.15-6.8-6.64l.35-2.34c4.44.49,8.1,4.18,8.87,8.53l-2.42.44Z"/>
      <path class="cls-1" d="M22.71,33.35h-1.54l-1.67-.31C11.48,30.66,3.26,22.88.95,14.77c-.18-.63-.3-1.27-.43-1.91.04-.53-.05-1.13,0-1.66.16-1.61,2.15-3.46,3.34-4.5,1.2-1.05,2.18-1.05,3.38,0,1.04.91,2.51,2.4,3.43,3.43,2.28,2.59-.71,3.9-2.22,5.71-.21.37.28,1.14.47,1.49,1.46,2.67,4.78,6,7.43,7.49.23.13,1.18.64,1.37.65.16,0,.23-.04.35-.12,1.54-1.07,2.83-4.2,5.17-2.57.93.64,3.11,2.93,3.91,3.84,1.76,2.02.19,3.2-1.24,4.62-.93.92-1.78,1.94-3.2,2.1Z"/>
    </g>
  </g>
</svg>
  <?php echo do_shortcode('[global_phone]'); ?>
</div>
  </div>
  <hr>
  <div class="d-flex" style="padding:15px 0px;">
    <?php echo wp_get_attachment_image(378,'full','',array('class'=>'h-auto','style'=>'width:15px;margin-right:15px;object-fit:contain;')); ?>
    <p class="bold" style="margin:0;">Monday - Friday:<br>
08:00 am – 06:00 pm<br>

Saturday - Sunday:<br>
Closed</p>
  </div>
</div>

<div class="col-md-12 col-11 text-center" style="color:gray !important;padding-top:75px;">
    <small class=""><a href="https://latinowebstudio.com/" target="_blank" rel="noopener noreferrer" title="Web Design, Development & SEO done by Latino Web Studio in Denver, CO" style="color:gray;" class="">Web Design &amp; Search Engine Optimization</a> <span class="" style="color:gray;">done by Latino Web Studio.</span></small>
</div>

</div>
</div>
</section>

<!-- The first Modal -->
<div id="mobileMenu" class="modal-custom mobile-menu" style="opacity:0;pointer-events:none;">

<!-- Modal content -->
<div class="modal-content-menu modal-content-custom" style="padding: 150px 15px;background:var(--accent-secondary);
    margin-top: 0;
    margin-left: 0;
    margin-bottom: 0;
    border-left: 0;
    border-bottom: 0;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    height: 100vh;">
<span class="close-custom" id="navMenuClose">&times;</span>
	<?php

echo '<div style="width:100%;max-width:165px;" id="logoMain">';
?>

<a href="<?php echo home_url(); ?>" title="<?php echo get_bloginfo( 'name' ) . ' - ' . get_bloginfo( 'description' ); ?>">
  <div id="logoMain" style="min-width:100px;width:100%;transition:all .25s ease-in-out;">
    <div style="pointer-events:none;">
      <?php 
      echo logoSVG();
      ?>
    </div>
  </div>
</a>

<?php
echo '</div>';

wp_nav_menu(array(
    'menu' => 'primary',
    'menu_class'=>'menu list-unstyled mb-0'
));
?>
<?php 
echo do_shortcode('[global_cta]');

echo get_template_part('partials/si');

?>

<?php
echo '</div>';
echo '</div>';
// end of mobile nav menu


echo '</footer>';


echo codeFooter();

?>

<style>
label.screen-reader-text {
    display: none;
}
#searchform input#searchsubmit {
    width: 332px;
}

#searchform input#s {
    width: 300px;
}</style>

<?php

wp_footer();

echo '</body>';
echo '</html>';
?>