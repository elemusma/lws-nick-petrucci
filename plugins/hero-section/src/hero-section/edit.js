/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	InspectorControls,
	useBlockProps,
	MediaUpload,
	MediaUploadCheck,
	RichText,
} from '@wordpress/block-editor';
import {
	Button,
	PanelBody,
	__experimentalInputControl as InputControl,
} from '@wordpress/components';
import { useState } from '@wordpress/element';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const {
		section_style,
		section_class,
		section_id,
		section_image,
		section_image_alt,
		section_image_title,
		section_image_class,
		section_image_style,
		section_block,
		container_style,
		container_class,
		container_id,
		row_style,
		row_class,
		row_id,
		column_style,
		column_class,
		column_id,
		cards,
	} = attributes;

	const [ expandedCard, setExpandedCard ] = useState( 0 );

	const addCard = () => {
		setAttributes( {
			cards: [
				...cards,
				{
					inner_col_class: 'col-md-4',
					inner_col_style: '',
					inner_col_id: '',
					data_aos: 'fade-up',
					data_aos_delay: '',
					title: '',
					content: '',
				},
			],
		} );
	};

	const updateCard = ( cardIndex, field, value ) => {
		setAttributes( {
			cards: cards.map( ( card, index ) => {
				if ( index === cardIndex ) {
					return {
						...card,
						[ field ]: value,
					};
				}
				return card;
			} ),
		} );
	};

	const removeCard = ( cardIndex ) => {
		const newCards = [ ...cards ];
		newCards.splice( cardIndex, 1 );
		setAttributes( { cards: newCards } );
	};

	const duplicateCard = ( cardIndex ) => {
		const newCards = [ ...cards ];
		const duplicatedCard = { ...cards[ cardIndex ] };
		newCards.splice( cardIndex + 1, 0, duplicatedCard );
		setAttributes( { cards: newCards } );
	};

	const moveCardUp = ( cardIndex ) => {
		if ( cardIndex === 0 ) return;
		const newCards = [ ...cards ];
		const temp = newCards[ cardIndex - 1 ];
		newCards[ cardIndex - 1 ] = newCards[ cardIndex ];
		newCards[ cardIndex ] = temp;
		setAttributes( { cards: newCards } );
	};

	const moveCardDown = ( cardIndex ) => {
		if ( cardIndex === cards.length - 1 ) return;
		const newCards = [ ...cards ];
		const temp = newCards[ cardIndex + 1 ];
		newCards[ cardIndex + 1 ] = newCards[ cardIndex ];
		newCards[ cardIndex ] = temp;
		setAttributes( { cards: newCards } );
	};

	const addCardAbove = ( cardIndex ) => {
		const newCards = [ ...cards ];
		const newCard = {
			inner_col_class: 'col-md-4',
			inner_col_style: '',
			inner_col_id: '',
			data_aos: 'fade-up',
			data_aos_delay: '',
			title: '',
			content: '',
		};
		newCards.splice( cardIndex, 0, newCard );
		setAttributes( { cards: newCards } );
	};

	const addCardBelow = ( cardIndex ) => {
		const newCards = [ ...cards ];
		const newCard = {
			inner_col_class: 'col-md-4',
			inner_col_style: '',
			inner_col_id: '',
			data_aos: 'fade-up',
			data_aos_delay: '',
			title: '',
			content: '',
		};
		newCards.splice( cardIndex + 1, 0, newCard );
		setAttributes( { cards: newCards } );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Section' ) } initialOpen={ false }>
					<InputControl
						label="Section Style"
						value={ section_style }
						onChange={ ( nextValue ) =>
							setAttributes( { section_style: nextValue } )
						}
					/>
					<InputControl
						label="Section Class"
						value={ section_class }
						onChange={ ( nextValue ) =>
							setAttributes( { section_class: nextValue } )
						}
					/>
					<InputControl
						label="Section ID"
						value={ section_id }
						onChange={ ( nextValue ) =>
							setAttributes( { section_id: nextValue } )
						}
					/>
				</PanelBody>

				<PanelBody
					title={ __( 'Background Image' ) }
					initialOpen={ false }
				>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={ ( media ) =>
								setAttributes( {
									section_image: media.url,
									section_image_alt: media.alt,
									section_image_title:
										media.title?.rendered || media.title || '',
								} )
							}
							type="image"
							allowedTypes={ [ 'image' ] }
							value={ section_image }
							render={ ( { open } ) => (
								<div>
									{ section_image && (
										<>
											<Button
												isLink
												isDestructive
												onClick={ () =>
													setAttributes( {
														section_image: '',
														section_image_alt: '',
														section_image_title: '',
													} )
												}
											>
												{ __( 'Remove Section Image' ) }
											</Button>
											<img
												src={ section_image }
												alt={
													section_image_alt ||
													section_image_title
												}
												style={ { maxWidth: '100%' } }
											/>
											<p>
												{ __( 'Alt Text:' ) }{ ' ' }
												{ section_image_alt ||
													section_image_title }
											</p>
										</>
									) }
									<Button
										onClick={ open }
										icon="upload"
										className="editor-media-placeholder__button is-button is-default is-large"
									>
										{ __( 'Select Section Image' ) }
									</Button>
								</div>
							) }
						/>
					</MediaUploadCheck>

					<InputControl
						label="Background Image Class"
						value={ section_image_class }
						onChange={ ( nextValue ) =>
							setAttributes( { section_image_class: nextValue } )
						}
					/>
					<InputControl
						label="Background Image Style"
						value={ section_image_style }
						onChange={ ( nextValue ) =>
							setAttributes( { section_image_style: nextValue } )
						}
					/>
				</PanelBody>

				<PanelBody title={ __( 'Code Block' ) } initialOpen={ false }>
					<label style={ { lineHeight: '2' } }>Code Block</label>
					<textarea
						value={ attributes.section_block }
						onChange={ ( event ) =>
							setAttributes( {
								section_block: event.target.value,
							} )
						}
						placeholder="Enter section block here"
						style={ { width: '100%', height: '100px' } }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Container' ) } initialOpen={ false }>
					<InputControl
						label="Container Style"
						value={ container_style }
						onChange={ ( nextValue ) =>
							setAttributes( { container_style: nextValue } )
						}
					/>
					<InputControl
						label="Container Class"
						value={ container_class }
						onChange={ ( nextValue ) =>
							setAttributes( { container_class: nextValue } )
						}
					/>
					<InputControl
						label="Container ID"
						value={ container_id }
						onChange={ ( nextValue ) =>
							setAttributes( { container_id: nextValue } )
						}
					/>
				</PanelBody>

				<PanelBody title={ __( 'Row' ) } initialOpen={ false }>
					<InputControl
						label="Row Style"
						value={ row_style }
						onChange={ ( nextValue ) =>
							setAttributes( { row_style: nextValue } )
						}
					/>
					<InputControl
						label="Row Class"
						value={ row_class }
						onChange={ ( nextValue ) =>
							setAttributes( { row_class: nextValue } )
						}
					/>
					<InputControl
						label="Row ID"
						value={ row_id }
						onChange={ ( nextValue ) =>
							setAttributes( { row_id: nextValue } )
						}
					/>
				</PanelBody>

				<PanelBody title={ __( 'Column' ) } initialOpen={ false }>
					<InputControl
						label="Column Style"
						value={ column_style }
						onChange={ ( nextValue ) =>
							setAttributes( { column_style: nextValue } )
						}
					/>
					<InputControl
						label="Column Class"
						value={ column_class }
						onChange={ ( nextValue ) =>
							setAttributes( { column_class: nextValue } )
						}
					/>
					<InputControl
						label="Column ID"
						value={ column_id }
						onChange={ ( nextValue ) =>
							setAttributes( { column_id: nextValue } )
						}
					/>
				</PanelBody>

				<PanelBody
					title={ __( 'Card Settings' ) }
					initialOpen={ false }
				>
					<Button isPrimary onClick={ () => addCard() }>
						Add New Card
					</Button>
				</PanelBody>
			</InspectorControls>

			<section { ...useBlockProps() }>
				{ section_image && (
					<img
						src={ section_image }
						alt={ section_image_alt || section_image_title }
						style={ { maxWidth: '100%', marginBottom: '20px' } }
					/>
				) }

				<div
					className={ attributes.container_class }
					style={ attributes.container_style }
					id={ attributes.container_id }
				>
					<div
						className={ attributes.row_class }
						style={ attributes.row_style }
						id={ attributes.row_id }
					>
						<div
							className={ attributes.column_class }
							style={ attributes.column_style }
							id={ attributes.column_id }
						>
							<div className="cards-wrapper">
								{ cards.map( ( card, index ) => {
									return (
										<div
											key={ index }
											className="card-editor-item"
											style={ {
												background: '#f7f7f7',
												padding: '20px',
												borderBottom: '1px solid #ddd',
												marginBottom: '20px',
												borderRadius: '4px',
											} }
										>
											<div
												style={ {
													display: 'grid',
													gridTemplateColumns:
														'1fr 1fr 1fr',
													gap: '15px',
													marginBottom: '15px',
												} }
											>
												<div>
													<p
														style={ {
															marginBottom: '5px',
															fontWeight: 'bold',
														} }
													>
														Card Class
													</p>
													<input
														type="text"
														value={
															card.inner_col_class
														}
														onChange={ ( e ) =>
															updateCard(
																index,
																'inner_col_class',
																e.target.value
															)
														}
														style={ {
															width: '100%',
														} }
													/>
												</div>
												<div>
													<p
														style={ {
															marginBottom: '5px',
															fontWeight: 'bold',
														} }
													>
														Card Style
													</p>
													<input
														type="text"
														value={
															card.inner_col_style
														}
														onChange={ ( e ) =>
															updateCard(
																index,
																'inner_col_style',
																e.target.value
															)
														}
														style={ {
															width: '100%',
														} }
													/>
												</div>
												<div>
													<p
														style={ {
															marginBottom: '5px',
															fontWeight: 'bold',
														} }
													>
														Card ID
													</p>
													<input
														type="text"
														value={
															card.inner_col_id
														}
														onChange={ ( e ) =>
															updateCard(
																index,
																'inner_col_id',
																e.target.value
															)
														}
														style={ {
															width: '100%',
														} }
													/>
												</div>
											</div>

											<div
												style={ {
													display: 'grid',
													gridTemplateColumns:
														'1fr 1fr',
													gap: '15px',
													marginBottom: '15px',
												} }
											>
												<div>
													<p
														style={ {
															marginBottom: '5px',
															fontWeight: 'bold',
														} }
													>
														Data AOS
													</p>
													<input
														type="text"
														value={ card.data_aos }
														onChange={ ( e ) =>
															updateCard(
																index,
																'data_aos',
																e.target.value
															)
														}
														style={ {
															width: '100%',
														} }
													/>
												</div>
												<div>
													<p
														style={ {
															marginBottom: '5px',
															fontWeight: 'bold',
														} }
													>
														Data AOS Delay
													</p>
													<input
														type="text"
														value={
															card.data_aos_delay
														}
														onChange={ ( e ) =>
															updateCard(
																index,
																'data_aos_delay',
																e.target.value
															)
														}
														style={ {
															width: '100%',
														} }
													/>
												</div>
											</div>

											<div style={ { marginBottom: '15px' } }>
												<p
													style={ {
														marginBottom: '5px',
														fontWeight: 'bold',
													} }
												>
													Card Title
												</p>
												<RichText
													value={ card.title }
													onChange={ ( content ) =>
														updateCard(
															index,
															'title',
															content
														)
													}
													placeholder={ __(
														'Enter card title'
													) }
												/>
											</div>

											<div style={ { marginBottom: '15px' } }>
												<p
													style={ {
														marginBottom: '5px',
														fontWeight: 'bold',
													} }
												>
													Card Content
												</p>
												<RichText
													value={ card.content }
													onChange={ ( content ) =>
														updateCard(
															index,
															'content',
															content
														)
													}
													placeholder={ __(
														'Enter card content'
													) }
												/>
											</div>

											<div
												style={ {
													display: 'grid',
													gridTemplateColumns:
														'repeat(auto-fit, minmax(150px, 1fr))',
													gap: '10px',
												} }
											>
												<Button
													onClick={ () =>
														addCardAbove( index )
													}
													style={ {
														background: 'white',
														border: '1px solid #ccc',
													} }
												>
													{ __( 'Add Above' ) }
												</Button>

												<Button
													onClick={ () =>
														addCardBelow( index )
													}
													style={ {
														background: 'white',
														border: '1px solid #ccc',
													} }
												>
													{ __( 'Add Below' ) }
												</Button>

												<Button
													onClick={ () =>
														duplicateCard( index )
													}
													style={ {
														background: 'white',
														border: '1px solid #ccc',
													} }
												>
													{ __( 'Duplicate' ) }
												</Button>

												<Button
													onClick={ () =>
														moveCardUp( index )
													}
													disabled={ index === 0 }
													style={ {
														background: 'white',
														border: '1px solid #ccc',
													} }
												>
													{ __( 'Move Up' ) }
												</Button>

												<Button
													onClick={ () =>
														moveCardDown( index )
													}
													disabled={
														index ===
														cards.length - 1
													}
													style={ {
														background: 'white',
														border: '1px solid #ccc',
													} }
												>
													{ __( 'Move Down' ) }
												</Button>

												<Button
													onClick={ () =>
														removeCard( index )
													}
													isDestructive
													style={ {
														background: '#f5c6cb',
														border: '1px solid #ccc',
													} }
												>
													{ __( 'Remove' ) }
												</Button>
											</div>
										</div>
									);
								} ) }
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}