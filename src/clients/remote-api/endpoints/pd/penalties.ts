/* THIS IS AN AUTOGENERATED FILE - DO NOT EDIT */

import { z } from "zod";
import axios, { type AxiosResponse } from "axios";
import { type AxiosRequestConfig } from "axios";
import { penaltiesEndpoint } from "@tqman/valorant-api-types";
import { parseResponseDataFor } from "~/helpers/endpoints";
import { ensureArray } from "~/utils/array";
import { type CustomAxiosRequestConfig } from "~/clients/common/types";
import { type RemoteApiClient } from "~/clients/remote-api";

export interface PenaltiesRequestConfig
  extends AxiosRequestConfig,
    CustomAxiosRequestConfig {}

export type PenaltiesResponse = z.input<
  (typeof penaltiesEndpoint.responses)["200"]
>;

export type PenaltiesParsedResponse = z.output<
  (typeof penaltiesEndpoint.responses)["200"]
>;

export class PenaltiesRemoteApiEndpoint {
  /**
   * @description Get the matchmaking penalties for the given player
   */
  getPenalties<T = PenaltiesParsedResponse>(
    this: RemoteApiClient,
    config: PenaltiesRequestConfig & { parseResponseData: true },
  ): Promise<AxiosResponse<T>>;
  getPenalties<T = PenaltiesResponse>(
    this: RemoteApiClient,
    config?: PenaltiesRequestConfig,
  ): Promise<AxiosResponse<T>>;
  getPenalties<T = PenaltiesResponse>(
    this: RemoteApiClient,
    config: PenaltiesRequestConfig = {},
  ) {
    const shouldParseResponse =
      config.parseResponseData ?? this.options.parseResponseData;

    return this.axiosInstance<T>({
      method: "GET",
      baseURL: this.getServerUrl(penaltiesEndpoint.type),
      url: penaltiesEndpoint.suffix,
      ...config,
      transformRequest: [
        parseResponseDataFor(penaltiesEndpoint),
        ...ensureArray(axios.defaults.transformRequest),
      ],
      ...(shouldParseResponse
        ? {
            transformResponse: [
              ...ensureArray(axios.defaults.transformResponse),
              parseResponseDataFor(
                penaltiesEndpoint,
                config.customResponseParser,
              ),
            ],
          }
        : {}),
    });
  }
}
