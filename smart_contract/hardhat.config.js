//https://eth-rinkeby.alchemyapi.io/v2/XJEwviSsZp9t-QGKhK9oqFUhXSeYmRQU

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/XJEwviSsZp9t-QGKhK9oqFUhXSeYmRQU',
      accounts: ['5ed35440c6badea97b8d090663c2f901b4406a68f6d592cbc0d49ddd916a0e4c']
    }
  }
}
