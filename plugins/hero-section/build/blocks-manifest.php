<?php
// This file is generated. Do not modify it manually.
return array(
	'hero-section' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/hero-section',
		'version' => '0.1.0',
		'title' => 'Hero Section',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => true
		),
		'attributes' => array(
			'section_style' => array(
				'type' => 'string',
				'default' => 'padding:50px 0px;'
			),
			'section_class' => array(
				'type' => 'string',
				'default' => 'position-relative'
			),
			'section_id' => array(
				'type' => 'string',
				'default' => ''
			),
			'section_image' => array(
				'type' => 'string',
				'default' => null
			),
			'section_image_title' => array(
				'type' => 'string',
				'default' => null
			),
			'section_image_alt' => array(
				'type' => 'string',
				'default' => null
			),
			'section_image_class' => array(
				'type' => 'string',
				'default' => 'w-100 h-100 position-absolute bg-img'
			),
			'section_image_style' => array(
				'type' => 'string',
				'default' => 'top:0;left:0;object-fit:cover;pointer-events:none;'
			),
			'section_block' => array(
				'type' => 'string',
				'default' => ''
			),
			'container_style' => array(
				'type' => 'string',
				'default' => ''
			),
			'container_class' => array(
				'type' => 'string',
				'default' => 'container'
			),
			'container_id' => array(
				'type' => 'string',
				'default' => ''
			),
			'row_style' => array(
				'type' => 'string',
				'default' => ''
			),
			'row_class' => array(
				'type' => 'string',
				'default' => 'row justify-content-center'
			),
			'row_id' => array(
				'type' => 'string',
				'default' => ''
			),
			'column_style' => array(
				'type' => 'string',
				'default' => ''
			),
			'column_class' => array(
				'type' => 'string',
				'default' => 'col-12'
			),
			'column_id' => array(
				'type' => 'string',
				'default' => ''
			),
			'cards' => array(
				'type' => 'array',
				'items' => array(
					'type' => 'object'
				),
				'default' => array(
					array(
						'inner_col_class' => '',
						'inner_col_style' => '',
						'inner_col_id' => '',
						'data_aos' => '',
						'data_aos_delay' => '',
						'title' => '',
						'content' => ''
					)
				)
			)
		),
		'textdomain' => 'hero-section',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
