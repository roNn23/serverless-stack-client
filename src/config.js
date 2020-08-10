const dev = {
  s3: {
    REGION: "eu-central-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-14uuskjg9g6a3",
  },
  apiGateway: {
    REGION: "eu-central-1",
    URL: "https://birnl60rxg.execute-api.eu-central-1.amazonaws.com/dev",
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "eu-central-1_sTLtzVPO0",
    APP_CLIENT_ID: "2pdrd91dcs5fg2h9590lfredfp",
    IDENTITY_POOL_ID: "eu-central-1:6b89aeff-f65f-400b-b64d-a2f9e507a4a7",
  },
};

const prod = {
  s3: {
    REGION: "eu-central-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-hhpkz4jfjqpd",
  },
  apiGateway: {
    REGION: "eu-central-1",
    URL: "https://kmnlv5ogd8.execute-api.eu-central-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "eu-central-1_Ev9M6TPij",
    APP_CLIENT_ID: "7mp1tc4oittg747rp5if5d1bff",
    IDENTITY_POOL_ID: "eu-central-1:a627dc9f-1db6-481a-b5e6-8be328e1b2f5",
  },
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
};
