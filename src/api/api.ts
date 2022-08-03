import { getWeb3 } from "../eth";
import { getCharityContract } from "./CharityContractABI";

export async function api_listCharityEvents() {
  try {
    const web3 = await getWeb3();
    if (web3) {
      const contract = getCharityContract(web3);
      const result = await contract.methods.getEvents().call();
      console.log("Result : ", result);
      return result;
    }
  } catch (e) {
    /* handle error */
    console.error("api::", e);
  }
}

export async function api_addCharityEvent(
  name: string,
  desc: string,
  imageUri: string
) {
  try {
    const web3 = await getWeb3();
    if (web3) {
      const contract = getCharityContract(web3);
      const accounts = await web3.eth.getAccounts();
      await contract.methods
        .addEvent(name, desc, imageUri)
        .send({ from: accounts[0] });
    }
  } catch (e) {
    /* handle error */
    console.error("api::", e);
  }
}

export async function api_sendDonation(eventId: number, amount: string) {
  try {
    const web3 = await getWeb3();
    if (web3) {
      const contract = getCharityContract(web3);
      const accounts = await web3.eth.getAccounts();
      await contract.methods
        .fundEvent(eventId)
        .send({ from: accounts[0], value: web3.utils.toWei(amount) });
    }
  } catch (e) {
    /* handle error */
    console.error("api::", e);
  }
}

export async function api_verify(eventId: number) {
  try {
    const web3 = await getWeb3();
    if (web3) {
      const contract = getCharityContract(web3);
      const accounts = await web3.eth.getAccounts();
      await contract.methods.verifyEvent(eventId).send({ from: accounts[0] });
    }
  } catch (e) {
    /* handle error */
    console.error("api::", e);
  }
}
