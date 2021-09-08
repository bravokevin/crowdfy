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


/**
 * uses to retrive one single campaign with his instance ID
 * @param campaignID the instance ID of the campaign
 * @returns returns te all the values of the campaign instance
 */
export const getCampaignById = async (campaignID: string) => {
  const identity = await getIdentity();
  const client = await Client.withKeyInfo(keyInfo)
  await client.getToken(identity)
  const campaign = await client.findByID<CrowdfyCampaign>
    (threadID, collectionName, campaignID)
  return campaign
}

// export const updateInstance = async ()=>{
//   const identity = await getIdentity();
//   const client = await Client.withKeyInfo(keyInfo)
//   await client.getToken(identity)
//   await client.save(threadID, collectionName, [buzz])
// }


// CAMPAIGN CREATION PROCESS
// 1. form filling
// 2. data in form is pased to IPFS
// 3. particular hash of IPFS is returned
// 4. essential data is passed to smart contract
// 5. needed for particular smart contract address & id
// 6. particular IPFS, campaign name, smart contract address & id is passed to great IPFS



// QUERY PROCESS DATA
// 5. we compare the beneficiary address with the current addres, if match we show the withdraw button
// 6. we compare the deadline with the current time, if match we show the refound button.
// 5. the address of the contract is stored to make posibble the function (refund, withdraw & contribute.)


// FALTA POR CREAR:
// 1. funciones para conectar con contrato inteligente
// 2. funcion para evaluar si es beneficiario o no (para mostrar el botun de withdraw)
// 3, guardar la imagen en un bucket y guardar la direccion en el thread 
