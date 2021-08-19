import NganHang from '../contracts/NganHang.json';

export default async (web3) => {
  return new web3.eth.Contract(
    NganHang.abi,
    "0xC64d9f6296eC979C496A40B3f368AE4Ac5c0b2c3"
  );
};