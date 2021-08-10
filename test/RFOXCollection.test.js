const { expect } = require('chai');

describe("RFOXCollection Contract", () => {
  const CONTRACT_URI = 'ipfs://QmYSrTKu4GQoKSH17wn5SsCVEaEQMwxDRsTfwrzD43HWRD';
  let contract;

  before(async () => {
    const RFOXCollection = await ethers.getContractFactory("RFOXCollection");
    contract = await RFOXCollection.deploy(CONTRACT_URI, 'RFOX Test Collection', 'TST');
  });

  it('should set the constructor args to the supplied value', async () => {
    expect(await contract.contractURI()).to.equal(CONTRACT_URI);
    expect(await contract.name()).to.equal('RFOX Test Collection');
    expect(await contract.symbol()).to.equal('TST');
  });

  it('should get URI for minted token', async () => {
    await contract.safeMint('0xB9cD322bbC641B93e9A9F4262283Fd30C44c35d9', 'QmYSrTKu4GQoKSH17wn5SsCVEaEQMwxDRsTfwrzD43HWRD');
    expect(await contract.tokenURI(0)).to.equal('ipfs://QmYSrTKu4GQoKSH17wn5SsCVEaEQMwxDRsTfwrzD43HWRD');
  });

});