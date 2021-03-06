import {assert} from 'chai';
import FaShortCode from '../../assets/js/fa';
import jq from 'jquery';
import {jsdom} from 'jsdom';

const window = jsdom().defaultView;
var $ = global.jQuery = jq(window);

describe('FaShortCode', () => {
	let shortcode = new FaShortCode($);

	describe('replace', () => {
		it('should return <span>', () => {

			assert.equal(
				'<span class="fa fa-wordpress"><!-- [fa icon="wordpress"] --></span>',
				shortcode.replace('[fa icon="wordpress"]')
			);

		});

		it('should match', () => {

			assert.equal(
				'<span class="fa fa-github fa-2x"><!-- [fa size="2x" icon="github"] --></span>',
				shortcode.replace('[fa size="2x" icon="github"]')
			);
		});
	});

	describe('restore', () => {
		it('should return shortcode', () => {
			assert.equal(
				'[fa icon="wordpress" size="2x"]',
				shortcode.restore('<span class="fa fa-wordpress fa-2x"><!-- [fa icon="wordpress" size="2x"] --></span>')
			);
		});
	});

});



