const {Command, flags} = require('@oclif/command')
const {readFile, writeFile} = require('mz/fs')
const path = require('path')
const {pascalCase} = require('change-case')

class Svg2ReactCommand extends Command {
  async run() {
    const {args} = this.parse(Svg2ReactCommand)
    const file = args.file
    const svgString = await readFile(file, {encoding: 'utf8'})
    const pathParts = path.parse(file)
    const componentName = pascalCase(pathParts.name)
    const reactString = `import React from 'react';

const ${componentName} = () => {
  return ${svgString};
};

export default ${componentName};
`
    const out = path.join(pathParts.dir, componentName + '.js')
    await writeFile(out, reactString, {encoding: 'utf8'})
    this.log(`Saved ${out}`)
  }
}

Svg2ReactCommand.description = `Describe the command here
...
Extra documentation goes here
`

Svg2ReactCommand.args = [
  {name: 'file', required: true},
]

Svg2ReactCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({char: 'v'}),
  // add --help flag to show CLI version
  help: flags.help({char: 'h'}),
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = Svg2ReactCommand
