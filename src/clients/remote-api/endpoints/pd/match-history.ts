/* THIS IS AN AUTOGENERATED FILE - DO NOT EDIT */

import { z } from "zod";
import axios, { type AxiosResponse } from "axios";
import { matchHistoryEndpoint } from "@tqman/valorant-api-types";
import { parseResponseDataFor, buildSuffix } from "~/helpers/endpoints";
import { ensureArray } from "~/utils/array";
import { AxiosRequestConfigWithData } from "~/utils/lib/axios";
import { type CustomAxiosRequestConfig } from "~/clients/common/types";
import { type RemoteApiClient } from "~/clients/remote-api";

type MatchHistorySuffixData = { puuid: string };

export interface MatchHistoryRequestConfig
  extends AxiosRequestConfigWithData<MatchHistorySuffixData>,
    CustomAxiosRequestConfig {}

export type MatchHistoryResponse = z.input<
  (typeof matchHistoryEndpoint.responses)["200"]
>;

export type MatchHistoryParsedResponse = z.output<
  (typeof matchHistoryEndpoint.responses)["200"]
>;

export class MatchHistoryRemoteApiEndpoint {
  /**
   * @description Get the match history for the given player
   */
  getMatchHistory<T = MatchHistoryParsedResponse>(
    this: RemoteApiClient,
    config: MatchHistoryRequestConfig & { parseResponseData: true },
  ): Promise<AxiosResponse<T>>;
  getMatchHistory<T = MatchHistoryResponse>(
    this: RemoteApiClient,
    config?: MatchHistoryRequestConfig,
  ): Promise<AxiosResponse<T>>;
  getMatchHistory<T = MatchHistoryResponse>(
    this: RemoteApiClient,
    config: MatchHistoryRequestConfig,
  ) {
    const shouldParseResponse =
      config.parseResponseData ?? this.options.parseResponseData;

    return this.axiosInstance<T>({
      method: "GET",
      baseURL: this.getServerUrl(matchHistoryEndpoint.type),
      url: buildSuffix(matchHistoryEndpoint.suffix, config.data),
      ...config,
      transformRequest: [
        parseResponseDataFor(matchHistoryEndpoint),
        ...ensureArray(axios.defaults.transformRequest),
      ],
      ...(shouldParseResponse
        ? {
            transformResponse: [
              ...ensureArray(axios.defaults.transformResponse),
              parseResponseDataFor(
                matchHistoryEndpoint,
                config.customResponseParser,
              ),
            ],
          }
        : {}),
    });
  }
}
