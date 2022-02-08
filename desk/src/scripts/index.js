import '../styles/index.scss';
import * as jQuery from '../../public/tools/jquery-3.6.0.min.js';

if (process.env.NODE_ENV === 'development') {
	require('../index.html');
}

window.addEventListener('DOMContentLoaded', function () {
	'use strict';
	const noHover = matchMedia('(hover: none)').matches;
	if (noHover) {
		jQuery(function ($) {
			$('.loader').on('touchstart', function () {
				$(this).toggleClass('hover');
			});
		});
	}
});
