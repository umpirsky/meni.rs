exports.config = {
  specs: [
    'e2e/*.js'
  ],
  capabilities: {
    'browserName': 'firefox'
  },
  directConnect: true,
  baseUrl: 'http://localhost:9001',
  framework: 'jasmine'
};
