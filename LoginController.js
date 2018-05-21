/*!
 * Copyright (c) 2018 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

import {TokenService} from './TokenService.js';

export class LoginController {
  constructor({tokenServiceConfig = {}} = {}) {
    this.state = {
      loading: false,
      email: null,
      token: null
    };
    this.tokenService = new TokenService(tokenServiceConfig);
  }

  async login() {
    this.state.loading = true;

    try {
      const result = await this.tokenService.login({
        email: this.state.email,
        // phoneNumber: this.state.phoneNumber,
        token: this.state.token
      });
      console.log('login result', result);

      // TODO:
    } finally {
      this.state.loading = false;
    }
  }
}
