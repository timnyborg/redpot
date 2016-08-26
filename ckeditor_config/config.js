/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */
CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For complete reference see:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config

	// The toolbar groups arrangement, optimized for two toolbar rows.
	config.toolbarGroups = [
		{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
		{ name: 'links' },
		{ name: 'insert' },
		{ name: 'forms' },
		{ name: 'tools' }, //Fullscreen
		{ name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] }, //Source
		{ name: 'others' },		
		'/', //New row
        { name: 'styles' },
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },

		//{ name: 'colors' },
		//{ name: 'about' }
	];

	// Remove some buttons provided by the standard plugins, which are
	// not needed in the Standard(s) toolbar.

	//See http://ckeditor.com/comment/123266#comment-123266 for full list
	config.removeButtons = 'Bold,Underline,Subscript,Superscript,HorizontalRule,Strike,Styles'
	
	// Set the most common block elements.
	config.format_tags = 'p;h3;h4';

	// Simplify the dialog windows.
	config.removeDialogTabs = 'image:advanced;link:advanced';
    config.removePlugins = 'magicline';  // Massive nuisance
	
	config.filebrowserBrowseUrl = '/bluepot/gallery/files/';
    config.filebrowserImageBrowseUrl = '/bluepot/gallery/images/';
	//config.filebrowserUploadUrl = '/module/upload_file/';
	
	// Allow video tags  # localimage is nonsense from Infosys, but it's allowed so they won't be excised when edited this way
	config.extraAllowedContent = 'audio[*]{*};video[*]{*};source[*]{*};iframe[*];localimage[*]{*};div[*]{*};';
	
	// Relative links, images, videos, etc., default to website
	config.baseHref = 'https://www.conted.ox.ac.uk/';

    // Taller editor (default is 200).  May want to leave this up to applications, as CMS should have a larger editor than Redpot
    config.height = 300;

    // Our webpage CSS - currently a copy
    config.contentsCss = [
        //'/inc/css/bootstrap.min.css',
        //'/inc/css/oudce-cms.css',
        'https://code.cdn.mozilla.net/fonts/fira.css',
        'https://www.conted.ox.ac.uk/www/static/vendor/bootstrap/css/bootstrap.min.css',
        'https://www.conted.ox.ac.uk/www/static/vendor/bootstrap/oudce.css',

        '/inc/css/ckeditor_custom.css'
    ];

    config.bodyId = 'page-content';
};

// Default image alignment = right.  Any other element dialog defaults can be setup here

CKEDITOR.on('dialogDefinition', function(ev) {
    var dialogName = ev.data.name;
    var dialogDefinition = ev.data.definition;

    if (dialogName == 'image') {
        var info = dialogDefinition.getContents('info');
        info.get('cmbAlign')['default'] = 'right';
    }
});

