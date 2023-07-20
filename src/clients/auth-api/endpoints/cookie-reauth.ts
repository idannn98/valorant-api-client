/* THIS IS AN AUTOGENERATED FILE - DO NOT EDIT */

import { type AxiosRequestConfig } from "axios";
import { cookieReauthEndpoint } from "@tqman/valorant-api-types";
import { type AuthApiClient } from "~/clients/auth-api";
import { type CustomAxiosRequestConfig } from "~/clients/common/types";

export interface CookieReauthRequestConfig
  extends AxiosRequestConfig,
    CustomAxiosRequestConfig {}

export class CookieReauthAuthApiEndpoint {
  /**
   * @description Get a new token using the cookies from a previous authorization request
   * Use the saved cookies from [PUT Auth Request] (specifically the `ssid` cookie). The token can be found from the url this request redirects to.
   * Recommended to use this endpoint instead of storing the password and sending it again.
   */
  getCookieReauth<T = any>(
    this: AuthApiClient,
    config: CookieReauthRequestConfig = {},
  ) {
    return this.axiosInstance<T>({
      method: "GET",
      url: cookieReauthEndpoint.suffix,

      ...config,
    });
  }
}
