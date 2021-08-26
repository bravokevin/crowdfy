import {
  Client,
  Identity,
  KeyInfo,
  PrivateKey,
  UserAuth,
  ThreadID,
  Where,
  Person
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

