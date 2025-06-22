import * as configcat from 'configcat-node';

var configCatService = (function() {
  const configCatClient = configcat.getClient(process.env.CONFIGCAT_SDK_KEY);

  return {
    getFlagValue: async function(key, defaultValue = false, userObject = null) {
      return await configCatClient.getValueAsync(key, defaultValue, userObject);
    }
  }
}());

export { configCatService }