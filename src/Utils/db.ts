import {
  Client,
  KeyInfo,
  PrivateKey,
  ThreadID,
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
    "2": 59,
    "3": 150,
    "4": 210,
    "5": 61,
    "6": 233,
    "7": 30,
    "8": 31,
    "9": 201,
    "10": 184,
    "11": 157,
    "12": 233,
    "13": 47,
    "14": 168,
    "15": 18,
    "16": 208,
    "17": 23,
    "18": 146,
    "19": 134,
    "20": 241,
    "21": 3,
    "22": 6,
    "23": 181,
    "24": 245,
    "25": 127,
    "26": 102,
    "27": 94,
    "28": 42,
    "29": 184,
    "30": 179,
    "31": 115,
    "32": 36,
    "33": 179
  }
}

/**
 * the Trhead ID of the database 
 * @dev this is a unique thread ID where all the users can store theirs campaigns data once created
 * see https://docs.textile.io/threads/ for more info
 */
export const threadID = new ThreadID(
  new Uint8Array(
    [1, 85, 59, 150, 210, 61, 233, 30, 31, 201, 184, 157, 233, 47, 168, 18, 208, 23, 146, 134, 241, 3, 6, 181, 245, 127, 102, 94, 42, 184, 179, 115, 36, 179]
  )
)


//the campaign datastructure accepted to be stored in the DB
export interface CrowdfyCampaign {
  campaignImage?: any,
  campaignName: string,
  fundingGoal: number,
  deadline: string,
  fundingCap: number,
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
      type: 'number'
    },
    deadline: {
      description: 'the deadline of the campaign in unix timestamp',
      type: 'number'
    },
    fundingCap: { type: 'number' },
    beneficiary: { type: 'string' },
    shortDescription: { type: 'string' },
    longDescription: { type: 'string' },
    campaignAddress: {
      description: "the instance of the campaign by its smart contract address",
      type: 'string'
    }
  },
}

/**
 * @dev this enviroment (dev) uses a unsafe key for agile and developmen porpuses
 * see https://docs.textile.io/tutorials/hub/pki-identities/ for more info
 */
export const keyInfo: KeyInfo = {
  key: 'bql3ly4x3dqrz4oq4vjxz5dlqma',
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
export const createDB = async (): Promise<ThreadID> => {
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


/**
 * to update the collection in case if being necesary
 */
export const updateCollection = async (): Promise<void> => {
  const identity = await getIdentity();
  const client = await Client.withKeyInfo(keyInfo)
  await client.getToken(identity)
  await client.updateCollection(threadID, { name: collectionName, schema: schema })

}


