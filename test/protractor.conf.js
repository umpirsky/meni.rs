exports.config = {
  specs: [
    'e2e/*.js'
  ],
  multiCapabilities: [{
    'browserName': 'chrome'
  }, {
    'browserName': 'firefox'
  }],
  directConnect: true,
  baseUrl: 'http://localhost:9001',
  framework: 'jasmine'
};
