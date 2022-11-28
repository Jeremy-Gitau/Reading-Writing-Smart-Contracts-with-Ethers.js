const { messagePrefix } = require("@ethersproject/hash");
const { ethers, Signer } = require("ethers");

const signMessage = async () => {
 // Create a provider instance
 const provider = new ethers.providers.JsonRpcProvider(
  "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
 );

 // Create a wallet instance
 const wallet = new ethers.Wallet(
  "0x999cdfc447ae64af13413525f02cfc82a13d1ee40ecc3acf9978d290f8b10515",
  provider
 );

 // Sign the message
 msg = "ethers.js is a powerful library"
 const output = await wallet.signMessage(msg);
 console.log("signature of message:", output);
};

signMessage();