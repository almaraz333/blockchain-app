require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/XMhAkkXHWTOe6FaHHa0Hiy9JBWu04GYI',
      accounts: [
        'd4f2a887325f4a14cc8e357be7f3be976657195ccb0c3f6f9d331c12466f225f'
      ]
    }
  }
};
