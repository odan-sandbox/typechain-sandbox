var MyContract = artifacts.require("./MyContract");

async function deploy(deployer) {
  await deployer.deploy(MyContract);
}

module.exports = function(deployer, network) {
  deployer.then(() => deploy(deployer, network));
};
