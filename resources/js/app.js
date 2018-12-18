/**
 * Primary front-end script.
 *
 * Primary JavaScript file. Any includes or anything imported should
 * be filtered through this file and eventually saved back into the
 * `/dist/js/app.js` file.
 *
 * @package   Mythic
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright 2018 Justin Tadlock
 * @license   https://www.gnu.org/licenses/gpl-2.0.html GPL-2.0-or-later
 * @link      https://themehybrid.com/themes/mythic
 */

// Import the parts of Foundation you need here
import Foundation from 'foundation-sites';

// Initialise Foundation
jQuery(document).foundation();


// Alternatively you can do something like this...
// import { ResponsiveMenu } from 'foundation-sites';

// const $menu = new ResponsiveMenu(jQuery('selector-here'), {
// 	parentLink: true
// });
