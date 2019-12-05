/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module ui/editorui/editoruiview
 */

import View from '../view';
import BodyCollection from './bodycollection';

import '../../theme/components/editorui/editorui.css';

/**
 * The editor UI view class. Base class for the editor main views.
 *
 * @extends module:ui/view~View
 */
export default class EditorUIView extends View {
	/**
	 * Creates an instance of the editor UI view class.
	 *
	 * @param {module:utils/locale~Locale} [locale] The locale instance.
	 */
	constructor( locale ) {
		super( locale );

		/**
		 * Collection of the child views, detached from the DOM
		 * structure of the editor, like panels, icons etc.
		 *
		 * @readonly
		 * @member {module:ui/viewcollection~ViewCollection} #body
		 */
		this.body = new BodyCollection( locale );

		/**
		 * The element holding elements of the 'body' region.
		 *
		 * @private
		 * @member {HTMLElement} #_bodyCollectionContainer
		 */
	}

	/**
	 * @inheritDoc
	 */
	render() {
		super.render();

		this.body.render();
	}

	/**
	 * @inheritDoc
	 */
	destroy() {
		this.body.destroy();

		return super.destroy();
	}
}
