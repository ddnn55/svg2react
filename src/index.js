const {Command, flags} = require('@oclif/command')

class Svg2ReactCommand extends Command {
  async run() {
    const {flags} = this.parse(Svg2ReactCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from ./src/index.js`)
  }
}

Svg2ReactCommand.description = `Describe the command here
...
Extra documentation goes here
`

Svg2ReactCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({char: 'v'}),
  // add --help flag to show CLI version
  help: flags.help({char: 'h'}),
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = Svg2ReactCommand
