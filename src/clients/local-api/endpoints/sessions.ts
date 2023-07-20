/* THIS IS AN AUTOGENERATED FILE - DO NOT EDIT */

import { z } from "zod";
import axios, { type AxiosResponse } from "axios";
import { type AxiosRequestConfig } from "axios";
import { sessionsEndpoint } from "@tqman/valorant-api-types";
import { parseResponseDataFor } from "~/helpers/endpoints";
import { ensureArray } from "~/utils/array";
import { type LocalApiClient } from "~/clients/local-api";
import { type CustomAxiosRequestConfig } from "~/clients/common/types";

export interface SessionsRequestConfig
  extends AxiosRequestConfig,
    CustomAxiosRequestConfig {}

export type SessionsResponse = z.input<
  (typeof sessionsEndpoint.responses)["200"]
>;

export type SessionsParsedResponse = z.output<
  (typeof sessionsEndpoint.responses)["200"]
>;

export class SessionsLocalApiEndpoint {
  /**
   * @description Gets info about the running Valorant process including start arguments
   *   Can be used to get shard, region, and puuid by parsing launch args.
   */
  getSessions<T = SessionsParsedResponse>(
    this: LocalApiClient,
    config: SessionsRequestConfig & { parseResponseData: true },
  ): Promise<AxiosResponse<T>>;
  getSessions<T = SessionsResponse>(
    this: LocalApiClient,
    config?: SessionsRequestConfig,
  ): Promise<AxiosResponse<T>>;
  getSessions<T = SessionsResponse>(
    this: LocalApiClient,
    config: SessionsRequestConfig = {},
  ) {
    const shouldParseResponse =
      config.parseResponseData ?? this.options.parseResponseData;

    return this.axiosInstance<T>({
      method: "GET",
      url: sessionsEndpoint.suffix,
      ...config,
      transformRequest: [
        parseResponseDataFor(sessionsEndpoint),
        ...ensureArray(axios.defaults.transformRequest),
      ],
      ...(shouldParseResponse
        ? {
            transformResponse: [
              ...ensureArray(axios.defaults.transformResponse),
              parseResponseDataFor(
                sessionsEndpoint,
                config.customResponseParser,
              ),
            ],
          }
        : {}),
    });
  }
}
