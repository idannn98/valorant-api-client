import { Agent } from "node:https";
import axios, { type AxiosInstance } from "axios";
import { AuthApiClientOptions } from ".";
import { getClientVersionHeader, getUserAgentHeader } from "~/helpers";

export function getAuthApiClientAxios(
  options: Required<AuthApiClientOptions>,
  existingAxiosInstance?: AxiosInstance,
): AxiosInstance {
  const { userAgent, ciphers, clientVersion } = options;

  if (existingAxiosInstance) {
    Object.assign(existingAxiosInstance.defaults.headers, {
      ...existingAxiosInstance.defaults.headers,
      ...getUserAgentHeader(userAgent),
      ...getClientVersionHeader(clientVersion),
    });
    existingAxiosInstance.defaults.httpsAgent.options.ciphers =
      ciphers.join(":");
    return existingAxiosInstance;
  } else {
    return axios.create({
      headers: {
        ...getUserAgentHeader(userAgent),
        ...getClientVersionHeader(clientVersion),
      },
      httpsAgent: new Agent({
        ciphers: ciphers.join(":"),
        honorCipherOrder: true,
        minVersion: "TLSv1.2",
      }),
      withCredentials: true,
    });
  }
}
