/* THIS IS AN AUTOGENERATED FILE - DO NOT EDIT */

import { z } from "zod";
import axios, { type AxiosResponse } from "axios";
import { leaderboardEndpoint } from "@tqman/valorant-api-types";
import { parseResponseDataFor, buildSuffix } from "~/helpers/endpoints";
import { ensureArray } from "~/utils/array";
import { AxiosRequestConfigWithData } from "~/utils/lib/axios";
import { type CustomAxiosRequestConfig } from "~/clients/common/types";
import { type RemoteApiClient } from "~/clients/remote-api";

type LeaderboardSuffixData = { seasonId: string };

export interface LeaderboardRequestConfig
  extends AxiosRequestConfigWithData<LeaderboardSuffixData>,
    CustomAxiosRequestConfig {}

export type LeaderboardResponse = z.input<
  (typeof leaderboardEndpoint.responses)["200"]
>;

export type LeaderboardParsedResponse = z.output<
  (typeof leaderboardEndpoint.responses)["200"]
>;

export class LeaderboardRemoteApiEndpoint {
  /**
   * @description Get the leaderboard for a given season
   */
  getLeaderboard<T = LeaderboardParsedResponse>(
    this: RemoteApiClient,
    config: LeaderboardRequestConfig & { parseResponseData: true },
  ): Promise<AxiosResponse<T>>;
  getLeaderboard<T = LeaderboardResponse>(
    this: RemoteApiClient,
    config?: LeaderboardRequestConfig,
  ): Promise<AxiosResponse<T>>;
  getLeaderboard<T = LeaderboardResponse>(
    this: RemoteApiClient,
    config: LeaderboardRequestConfig,
  ) {
    const shouldParseResponse =
      config.parseResponseData ?? this.options.parseResponseData;

    return this.axiosInstance<T>({
      method: "GET",
      baseURL: this.getServerUrl(leaderboardEndpoint.type),
      url: buildSuffix(leaderboardEndpoint.suffix, config.data),
      ...config,
      transformRequest: [
        parseResponseDataFor(leaderboardEndpoint),
        ...ensureArray(axios.defaults.transformRequest),
      ],
      ...(shouldParseResponse
        ? {
            transformResponse: [
              ...ensureArray(axios.defaults.transformResponse),
              parseResponseDataFor(
                leaderboardEndpoint,
                config.customResponseParser,
              ),
            ],
          }
        : {}),
    });
  }
}
