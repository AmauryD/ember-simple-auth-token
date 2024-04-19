import TokenAuthenticator from '../authenticators/token.js';
import JwtAuthenticator from '../authenticators/jwt.js';

/**
  Ember Simple Auth Token's Initializer.
  By default load both the Token and JWT (with refresh) Authenticators.
*/
var simpleAuthToken = {
  name: '@triptyk/ember-simple-auth-token',
  before: 'ember-simple-auth',
  initialize(container) {
    container.register('authenticator:token', TokenAuthenticator);
    container.register('authenticator:jwt', JwtAuthenticator);
  }
};

export { simpleAuthToken as default };
//# sourceMappingURL=simple-auth-token.js.map
