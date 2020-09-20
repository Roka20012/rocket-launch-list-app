import configureProdStore from './configureStore.prod';
import configureDevStore from './configureStore.dev';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const store = IS_PRODUCTION ? configureProdStore() : configureDevStore();

export default store;
