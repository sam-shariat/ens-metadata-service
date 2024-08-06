const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || 'localhost';
const ENV = process.env.ENV || 'local'; // local/prod
const REDIS_URL = process.env.REDIS_URL;

const FONT_FOLDER = path.join((ENV === 'local' ? 'src' : 'dist'), 'assets');
const CANVAS_FONT_PATH = path.join(FONT_FOLDER, 'Satoshi-Bold.ttf');
const CANVAS_EMOJI_FONT_PATH = path.join(FONT_FOLDER, 'NotoColorEmoji.ttf');
const INAMEWRAPPER = process.env.INAMEWRAPPER || '0xd82c42d8';

const IPFS_GATEWAY = process.env.IPFS_GATEWAY || 'https://ipfs.io';
const INFURA_API_KEY = process.env.INFURA_API_KEY || '';
const OPENSEA_API_KEY = process.env.OPENSEA_API_KEY || '';
const NODE_PROVIDER = process.env.NODE_PROVIDER || 'geth';
const NODE_PROVIDER_URL = process.env.NODE_PROVIDER_URL || 'http://localhost:8545';
const THE_GRAPH_API_KEY = process.env.THE_GRAPH_API_KEY || '';

// undocumented, temporary keys
const NODE_PROVIDER_URL_CF = process.env.NODE_PROVIDER_URL_CF || '';
const NODE_PROVIDER_URL_GOERLI = process.env.NODE_PROVIDER_URL_GOERLI || '';
const NODE_PROVIDER_URL_SEPOLIA = process.env.NODE_PROVIDER_URL_SEPOLIA || '';

const ADDRESS_ETH_REGISTRAR = process.env.ADDRESS_ETH_REGISTRAR || '0x89C108a78Ef261a9F9e977E566b310cB3518E714';
const ADDRESS_ETH_REGISTRY = process.env.ADDRESS_ETH_REGISTRY || '0x559Ab8a76956436B16918CfDfB291d768264CdEc'
const ADDRESS_NAME_WRAPPER = process.env.ADDRESS_NAME_WRAPPER || '0x955357E06046C91186cf4571f4dD729157bFBCfB';

const SERVER_URL =
  ENV === 'local' ? `http://localhost:${PORT}` : `https://${HOST}`;

const ETH_REGISTRY_ABI = [
  'function recordExists(bytes32 node) external view returns (bool)'
];

const NAMEWRAPPER_ABI = [
  'function isWrapped(bytes32 node) public view returns (bool)'
];

// response timeout: 1 min
const RESPONSE_TIMEOUT = 15 * 1000;

export {
  ADDRESS_ETH_REGISTRAR,
  ADDRESS_ETH_REGISTRY,
  ADDRESS_NAME_WRAPPER,
  CANVAS_FONT_PATH,
  CANVAS_EMOJI_FONT_PATH,
  ETH_REGISTRY_ABI,
  NAMEWRAPPER_ABI,
  INAMEWRAPPER,
  IPFS_GATEWAY,
  INFURA_API_KEY,
  OPENSEA_API_KEY,
  REDIS_URL,
  NODE_PROVIDER,
  NODE_PROVIDER_URL,
  NODE_PROVIDER_URL_CF,
  NODE_PROVIDER_URL_GOERLI,
  NODE_PROVIDER_URL_SEPOLIA,
  RESPONSE_TIMEOUT,
  SERVER_URL,
  THE_GRAPH_API_KEY
};
