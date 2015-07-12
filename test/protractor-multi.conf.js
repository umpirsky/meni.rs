exports.config = {
  specs: [
    'e2e/*.js'
  ],
  multiCapabilities: [{
    'browserName': 'chrome'
  }, {
    'browserName': 'firefox'
  }],
  baseUrl: 'http://localhost:9001',
  framework: 'jasmine'
};
