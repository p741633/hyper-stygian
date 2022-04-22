/*jslint node: true */
'use strict';

const mainColor = '#232a2d';
const backgroundColor = '#232a2d';
const foregroundColor = '#dcddd9';
const borderColor = '#4c4c4c';
const cursorColor = '#97979b';
const selectionColor = 'rgba(151, 176, 155, 0.3)';
const highlightLine = 'rgba(146, 222, 148, 0.6)';

const red = '#ff3B30';
const green = '#4cd964';
const yellow = '#ffcc00';
const blue = '#0095ff';
const magenta = '#ff2d55';
const cyan = '#5ac8fa';
const white = '#d5d5d5';

const lightBlack = '#bbb0b0';

exports.decorateConfig = (config) =>
  Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor,
    cursorColor,
    cursorAccentColor: backgroundColor,
    selectionColor,
    colors: {
      black: backgroundColor,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white,
      lightBlack,
      lightRed: red,
      lightGreen: green,
      lightYellow: yellow,
      lightBlue: blue,
      lightMagenta: magenta,
      lightCyan: cyan,
      lightWhite: foregroundColor,
    },
    css: `
    ${config.css || ''}

    /* Title background color */
    .hyper_main {
      background-color: ${mainColor};
    }

    /* Title colors */
    .tab_tab {
			color: #bfbfbf !important;
		}

		/* Add a highlight line below the active tab */
		.tab_tab::before {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			height: 3px;
			background-color: ${highlightLine};
			transform: scaleX(0);
			will-change: transform;
		}
		.tab_tab.tab_active::before {
			transform: scaleX(1);
			transition: all 300ms cubic-bezier(0, 0, 0.2, 1);
		}

		/* Fade the title of inactive tabs and the content of inactive panes */
		.tab_text,
		.term_term {
			opacity: 0.6;
			will-change: opacity;
		}
		.tab_active .tab_text,
		.term_active .term_term {
			opacity: 1;
			transition: opacity 0.12s ease-in-out;
		}
	`,
  });
