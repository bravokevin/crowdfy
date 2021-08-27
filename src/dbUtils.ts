import {
  Client,
  Where
} from '@textile/hub';

import { CrowdfyCampaign, collectionName, getIdentity, keyInfo, threadID } from './db';


/**
 * @notice creates a new instance in the "CrowdfyCampaigns" collection 
 * @param campaignValues the values of the campaign to store
 * @returns the resulting id of the current instance
 */
export const createEntry = async (campaignValues: CrowdfyCampaign): Promise<string[]> => {
  const identity = await getIdentity();
  const client = await Client.withKeyInfo(keyInfo)
  await client.getToken(identity)
  const created = await client.create(threadID, collectionName, [campaignValues])
  return created
}


/**
 * @notice find all the instance in the "CrowdfyCampaign" collction
 * @returns an object with all the instances stored in that collection (all the crowdfy campaigns)
 */
export const getAllCampaigns = async () => {
  const identity = await getIdentity();
  const client = await Client.withKeyInfo(keyInfo)
  await client.getToken(identity)
  const campaigns = await client.find<CrowdfyCampaign>(threadID, collectionName, {})
  return campaigns;
}


/**
 * @notice search campaigns by given name
 * @param campaignName the name of the campaign that you wants to find
 */
export const getCampaignByName = async (campaignName: string) => {
  const identity = await getIdentity();
  const client = await Client.withKeyInfo(keyInfo)
  await client.getToken(identity)
  const query = new Where('campaignName').eq(campaignName)
  const campaign = await client.find<CrowdfyCampaign>(threadID, collectionName, query)
  return campaign;
}


export const getCampaignById = async (campaignID: string) => {
  const identity = await getIdentity();
  const client = await Client.withKeyInfo(keyInfo)
  await client.getToken(identity)
  const campaign = await client.findByID<CrowdfyCampaign>
    (threadID, collectionName, campaignID)
  return campaign
}


// CAMPAIGN CREATION PROCESS
// 1. form filling
// 2. data in form is pased to IPFS
// 3. particular hash of IPFS is returned
// 4. essential data is passed to smart contract
// 5. needed for particular smart contract address & id
// 6. particular IPFS, campaign name, smart contract address & id is passed to great IPFS



// CAMPAIGN QUERY PROCESS
// 1. query all the data in ipfs
// 2. pass function for destruct all the specific data of all particular hashes
// 3. showing the 10 first campaigns
// SINGLE CAMPAIGN
// 1. user selects one campaign
// 2. page redirect to single campaign page
// 3. the IPFS hash of the campaign is destructured to grab all the data
// 4. we show all the data
// 5. we compare the beneficiary address with the current addres, if match we show the withdraw button
// 6. we compare the deadline with the current time, if match we show the refound button.
// 5. the address of the contract is stored to make posibble the function (refund, withdraw & contribute.)


// FALTA POR CREAR:
// 1. funciones para conectar con contrato inteligente
// 2. funcion para evaluar si es beneficiario o no (para mostrar el botun de withdraw)
// 3. query all the data in the ipfs to show it in the campaign section
// 4. guardar los datos en la database praa cada campaign
