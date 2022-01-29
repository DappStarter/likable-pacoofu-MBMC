require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey ensure success shadow shock note screen cluster hunt kite outer gesture'; 
let testAccounts = [
"0x9a263c379fbf19f21e172ed18b1158460fb90115152fbe076ad27f6bd5cc0c3c",
"0x40e3a0bedec72e39749e2b1a8ce8cef2f9a84f329766c8b89583eb269a1e7b9c",
"0x42608176ce5701bdc233c56c9bf483f590b01141215a7a7faa599965c20ca5c3",
"0xd231ef909f82d1a79d43557cb2e6d26a3be1299c820a6b9bdd6b2077c2b017cd",
"0x2e6072e25f885fdb2529c2f0a77c24355cfc0c2ce0d13e33114cf9cbcd9cbe1b",
"0xd9f4c8b7438e07052f5f1d31909bcc002746bbfbc995b0f566bebe74a991301d",
"0x8667215948fd67ea5afe796b52c82baa9e8add66883b5daa0542856c7b197e3b",
"0xaf51b0121fb958729d9391ccdd4670d6f3be57820e530a07fa24c51ef8469d12",
"0x7f40e1804d4098144851b8ce0b013b556b2b6b2a274629dd89ef61e4d233299a",
"0x0b90b301233a59f49e06552d763aa069d69f3a247d130f54b383b20c11789c70"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


