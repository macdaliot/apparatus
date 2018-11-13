// loads the home menu

import * as theme from '../output/helpers/theme.js'
import * as homeMenu from '../output/homeMenu.js'

const remote = require('electron').remote

const userDataPath = remote.app.getPath('userData')
const settings = require(`${userDataPath}/astoSettings.js`)

// set the first color paint theme
theme.setTheme(settings.colorTheme)

// load up the menu screen
homeMenu()
