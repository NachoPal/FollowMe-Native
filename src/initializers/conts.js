import axios from 'axios';

export const API_VERSION = 'v1/';
export const URL_STAGING = (__DEV__) ? 'http://api.ufollow.tk/' : 'production URL';

export const APIcall = axios.create({
                        baseURL: URL_STAGING + API_VERSION,
                        timeout: 1000,
                      });
