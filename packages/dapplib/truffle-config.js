require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture robot fresh tell stone note oven protect good enroll success ghost'; 
let testAccounts = [
"0x6d0c31ee1501379a87d8050849c69f36f76537852cc5f112c9023cb1c77b666b",
"0x91a31a6a22635c40e63896674e8aacb6f2408a460df105c4eebcf2abeb3c3a5b",
"0x9aa4994cee41317be93377a7d6b7b9ef62e8d6931e6ffb93e3b3ae1077e8dd43",
"0x441e1c181af167a5b867350023e03e1e15f4a0e0dcdc9b57d79fad4be82f85ea",
"0x7bf8737953e730616f46388fcc4d7c786fc326a70238d7b7fce158d20291c09b",
"0xbcecfe5ba0323240c0daf74cbfc52ea77f68aa627bb2eb06a5df01688e843de8",
"0x2d562111236d5b94cde93e8dfdaf339ca180749147e563161c2736d2c780d603",
"0x189d5b20dad25720ff46b4403ee862f197b88af365a84b555aa0d63eb0cd2901",
"0xf05e99fca2f580d4729baa639633fdb554c6bc770feedcb97b57df32cee793fa",
"0x4383e6dcd97c65231f944b842ea96779550e176a91eecb3a6ba14ee5372a4f20"
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


