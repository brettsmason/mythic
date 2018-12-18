<?php
/**
 * Foundation functions.
 *
 * This file holds all the Foundation specific functions, filters and setup.
 *
 * @package   Mythic
 * @author    Brett Mason <brettsmason@gmail.com>
 * @copyright 2018 Brett Mason
 * @license   https://www.gnu.org/licenses/gpl-2.0.html GPL-2.0-or-later
 * @link      https://themehybrid.com/themes/mythic
 */

namespace Mythic;

// Add the required classes for menus to work.
function nav_menu_submenu_css_class( $classes ) {
	$classes = [ 'menu vertical' ];
	return $classes;
}
add_filter( 'nav_menu_submenu_css_class', __NAMESPACE__ . '\nav_menu_submenu_css_class', 10 );
