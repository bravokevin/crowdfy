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

export const collectionName: string = "CrowdfyCampaigns"

/**
 * this is the 'primitive' object obtain when you create or open a database
 * its just for learning porpuses.
 * @dev all the numbers(Not the keys) are the actual ID of the thread database
 see https://textileio.github.io/js-textile/docs/hub.client.newdb for related info
 */
const threadObj = {
  "buf": {
    "0": 1,
    "1": 85,
    "2": 2,
    "3": 15,
    "4": 175,
    "5": 88,
    "6": 117,
    "7": 217,
    "8": 75,
    "9": 53,
    "10": 131,
    "11": 98,
    "12": 209,
    "13": 8,
    "14": 199,
    "15": 213,
    "16": 251,
    "17": 188,
    "18": 213,
    "19": 53,
    "20": 157,
    "21": 107,
    "22": 74,
    "23": 137,
    "24": 88,
    "25": 68,
    "26": 6,
    "27": 49,
    "28": 165,
    "29": 231,
    "30": 248,
    "31": 55,
    "32": 205,
    "33": 228
  }
}


/**
 * the Trhead ID of the database 
 * @dev this is a unique thread ID where all the users can store theirs campaigns data once created
 * see https://docs.textile.io/threads/ for more info
 */
export const threadID = new ThreadID(
  new Uint8Array(
    [1, 85, 2, 15, 175, 88, 117, 217, 75, 53, 131, 98, 209, 8, 199, 213, 251, 188, 213, 53, 157, 107, 74, 137, 88, 68, 6, 49, 165, 231, 248, 55, 205, 228]
  )
)


//the campaign datastructure accepted to be stored in the DB
export interface CrowdfyCampaign {
  campaignImage?: any,
  campaignName: string,
  fundingGoal: string,
  deadline: string,
  fundingCap: string,
  beneficiary: string,
  shortDescription?: string,
  longDescription?: string
}

/**
 * the JSON schema representation of the campaign
 */



const schema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  title: 'Campaign',
  description: "The structure of all the individuals crowdfy campaigns",
  type: 'object',
  properties: {
    _id: {
      description: "The unique identifier for a campaign",
      type: 'string',
    },
    campaignImage: {
      description: "The image given to the campaign, stored in buffer",
      type: 'string'
    },
    campaignName: { type: 'string' },
    fundingGoal: {
      description: "The minimum amount accepted to the campaign to be succesful",
      type: 'string'
    },
    deadline: { type: 'string' },
    fundingCap: { type: 'string' },
    beneficiary: { type: 'string' },
    shortDescription: { type: 'string' },
    longDescription: { type: 'string' },
  },
}



/**
 * @dev this enviroment (dev) uses a unsafe key for agile and developmen porpuses
 * see https://docs.textile.io/tutorials/hub/pki-identities/ for more info
 */
export const keyInfo: KeyInfo = {
  key: 'bagqwlgf7vi4ihif55hspqmhjmu',
}

/**
 * getIdentity uses a basic private key identity.
 * The user's identity will be cached client side. This is long
 * but ephemeral storage not sufficient for production apps.
 * 
 */
export const getIdentity = async (): Promise<PrivateKey> => {
  try {
    const storedIdent = localStorage.getItem("identity")
    if (storedIdent === null) {
      throw new Error('No identity')
    }
    const restored = PrivateKey.fromString(storedIdent)
    return restored
  }
  catch (e) {
    /**
     * If any error, create a new identity.
     */
    try {
      const identity = PrivateKey.fromRandom()
      const identityString = identity.toString()
      localStorage.setItem("identity", identityString)
      return identity
    } catch (err) {
      return err.message
    }
  }
}

/**
 * create a new database 
 * @dev this function is only called once (at the moment of the first deploy of the app) 
 this is for only use a database, where all users can store their campaigns data
 */
const createDB = async (): Promise<ThreadID> => {
  const identity = await getIdentity();
  const client = await Client.withKeyInfo(keyInfo)
  await client.getToken(identity)
  const thread: ThreadID = await client.newDB()
  return thread
}

/**
 * creates a new collection for the database 
 * @dev since we are only using one database and one data schema, this function is only called once (at the moment of the first deploy of the app) 
 */
export const collectionFromSchema = async (): Promise<void> => {
  const identity = await getIdentity();
  const client = await Client.withKeyInfo(keyInfo)
  await client.getToken(identity)
  await client.newCollection(threadID, { name: collectionName, schema: schema })
}

export const updateCollection = async (): Promise<void> =>{
  const identity = await getIdentity();
  const client = await Client.withKeyInfo(keyInfo)
  await client.getToken(identity)
  await client.updateCollection(threadID, { name: collectionName, schema: schema })

}