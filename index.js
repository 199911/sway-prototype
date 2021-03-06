const { join } = require('path');
const sway = require('sway');

const main = async () => {
  const path = join(__dirname, './petstore-minimal.yaml')
  console.log(path);
  const apiDefinition = await sway.create({
    definition: path
  });
  const operation = apiDefinition.getOperation('/pets', 'GET');
  console.log(operation)
}

main();