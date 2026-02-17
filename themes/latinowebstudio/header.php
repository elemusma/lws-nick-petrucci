<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="preload" href="/wp-content/themes/latinowebstudio/font-poppins/poppins-regular-webfont.woff" as="font" type="font/woff2" crossorigin="anonymous">
  <link rel="preload" href="/wp-content/themes/latinowebstudio/font-poppins/poppins-regular-webfont.woff2" as="font" type="font/woff2" crossorigin="anonymous">
<link rel="preload" href="/wp-content/themes/latinowebstudio/font-poppins/poppins-semibold-webfont.woff" as="font" type="font/woff2" crossorigin="anonymous">
  <link rel="preload" href="/wp-content/themes/latinowebstudio/font-poppins/poppins-semibold-webfont.woff2" as="font" type="font/woff2" crossorigin="anonymous">
	<link rel="preload" href="/wp-content/themes/latinowebstudio/font-poppins/poppins-bold-webfont.woff" as="font" type="font/woff2" crossorigin="anonymous">
  <link rel="preload" href="/wp-content/themes/latinowebstudio/font-poppins/poppins-bold-webfont.woff2" as="font" type="font/woff2" crossorigin="anonymous">
  <?php 
    echo codeHeader(); 
    wp_head(); 
  ?>
</head>
<body <?php body_class(); ?>>

  <?php echo codeBody(); ?>

  <div class="blank-space" style=""></div>

  <div class="position-fixed bg-white mix-blend-mode-bg w-100" style="top:0;left:0;z-index: 1;"></div>
  <header class="header-nav w-100 position-fixed" style="top:0;left:0;z-index:10;">
    <!-- <div class="position-absolute w-100 h-100" style="top:0;left:0;background:#021d47;opacity:.5;"></div> -->
    <div class="nav" style="">
      <div class="container">
        <div class="row justify-content-between align-items-center">

          <div class="col-lg-2 col-md-4 col-4 text-center" style="padding:0px;">
            <a href="<?php echo home_url(); ?>" title="<?php echo get_bloginfo( 'name' ) . ' - ' . get_bloginfo( 'description' ); ?>">
              <div id="logoMain" style="min-width:100px;width:90%;transition:all .25s ease-in-out;">
                <div style="pointer-events:none;">
                  <?php 
                  echo wp_get_attachment_image(logoImg()['id'], 'full', false, array( 'alt' => get_bloginfo( 'name' ) . ' - ' . get_bloginfo( 'description' ), 'style' => 'width:100%;height:auto;','class'=>'skip-lazy' ));
                  ?>
                </div>
              </div>
            </a>
          </div>
        <div class="col-8 text-center mobile-hidden">
			  <div class="d-flex justify-content-end h-100">
            <?php
              wp_nav_menu(array(
                'menu' => 'primary',
                'menu_class' => 'menu list-unstyled mb-0 d-flex'
              ));
            ?>
			  </div>
          </div>
          

          <div class="col-3 text-center desktop-hidden">
				            <div class="">
              <a id="mobileMenuToggle" class="openModalBtnCustom nav-toggle" data-modal-id="mobileMenu" title="mobile menu nav toggle for <?php echo get_bloginfo( 'name' ) . ' - ' . get_bloginfo( 'description' ); ?>">
                <div style="padding:10px 0px;">
                  <div class="line-1 bg-accent"></div>
                  <div class="line-2 bg-accent"></div>
                  <div class="line-3 bg-accent"></div>
                </div>
              </a>

            </div>
			</div>
      <style>
        @media only screen and (max-width:767px) {
        header .btn-main, .btn-main a, .wp-block-file__button {
            font-size: 11px;
          }
        }
      </style>
      <div class="col-lg-2 col-5 text-right" style="padding-left:0px;">
            <?php 
            echo do_shortcode('[nav_cta]'); 
            ?>
            <div style="margin-left:15px;">
</div>
          </div>

        </div> <!-- end of row -->
      </div>
    </div>
  </header>