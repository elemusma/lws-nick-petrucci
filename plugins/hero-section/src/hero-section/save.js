/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */

import { useBlockProps, RichText } from '@wordpress/block-editor';
import { RawHTML } from '@wordpress/element';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {
	const blockProps = useBlockProps.save();

	return (
		<div { ...blockProps }>
			<section
				className={ `${ attributes.section_class }` }
				style={ `${ attributes.section_style }` }
				id={ attributes.section_id }
			>
				{ /* Background Image */ }
				{ attributes.section_image && (
					<img
						src={ attributes.section_image }
						alt={
							attributes.section_image_alt ||
							attributes.section_image_title
						}
						className={ `${ attributes.section_image_class }` }
						style={ `${ attributes.section_image_style }` }
					/>
				) }

				{ /* Custom HTML Block */ }
				{ attributes.section_block && (
					<RawHTML>{ attributes.section_block }</RawHTML>
				) }

				{ /* Container */ }
				<div
					className={ attributes.container_class }
					style={ attributes.container_style }
					id={ attributes.container_id }
				>
					{ /* Row */ }
					<div
						className={ attributes.row_class }
						style={ attributes.row_style }
						id={ attributes.row_id }
					>
						{ /* Main Column */ }
						<div
							className={ attributes.column_class }
							style={ attributes.column_style }
							id={ attributes.column_id }
						>
							{ /* Cards */ }
							{ attributes.cards &&
								attributes.cards.length > 0 &&
								attributes.cards.map( ( card, index ) => (
									<div
										key={ `card-${ index }` }
										className={ `card-item ${ card.inner_col_class || '' }` }
										style={ card.inner_col_style || undefined }
										id={ card.inner_col_id || undefined }
										data-aos={ card.data_aos || undefined }
										data-aos-delay={ card.data_aos_delay || undefined }
									>
										<div className="card-content">
											{ card.title && (
												<RichText.Content
													tagName="h3"
													value={ card.title }
												/>
											) }
											{ card.content && (
												<RichText.Content
													tagName="div"
													value={ card.content }
												/>
											) }
										</div>
									</div>
								) ) }
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}