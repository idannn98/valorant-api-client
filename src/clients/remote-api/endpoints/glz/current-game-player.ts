/* THIS IS AN AUTOGENERATED FILE - DO NOT EDIT */

import { z } from "zod";
import axios, { type AxiosResponse } from "axios";
import { currentGamePlayerEndpoint } from "@tqman/valorant-api-types";
import { parseResponseDataFor, buildSuffix } from "~/helpers/endpoints";
import { ensureArray } from "~/utils/array";
import { AxiosRequestConfigWithData } from "~/utils/lib/axios";
import { type CustomAxiosRequestConfig } from "~/clients/common/types";
import { type RemoteApiClient } from "~/clients/remote-api";

type CurrentGamePlayerSuffixData = { puuid: string };

export interface CurrentGamePlayerRequestConfig
  extends AxiosRequestConfigWithData<CurrentGamePlayerSuffixData>,
    CustomAxiosRequestConfig {}

export type CurrentGamePlayerResponse = z.input<
  (typeof currentGamePlayerEndpoint.responses)["200"]
>;

export type CurrentGamePlayerParsedResponse = z.output<
  (typeof currentGamePlayerEndpoint.responses)["200"]
>;

export class CurrentGamePlayerRemoteApiEndpoint {
  /**
   * @description Get the current game match ID for the provided player
   */
  getCurrentGamePlayer<T = CurrentGamePlayerParsedResponse>(
    this: RemoteApiClient,
    config: CurrentGamePlayerRequestConfig & { parseResponseData: true },
  ): Promise<AxiosResponse<T>>;
  getCurrentGamePlayer<T = CurrentGamePlayerResponse>(
    this: RemoteApiClient,
    config?: CurrentGamePlayerRequestConfig,
  ): Promise<AxiosResponse<T>>;
  getCurrentGamePlayer<T = CurrentGamePlayerResponse>(
    this: RemoteApiClient,
    config: CurrentGamePlayerRequestConfig,
  ) {
    const shouldParseResponse =
      config.parseResponseData ?? this.options.parseResponseData;

    return this.axiosInstance<T>({
      method: "GET",
      baseURL: this.getServerUrl(currentGamePlayerEndpoint.type),
      url: buildSuffix(currentGamePlayerEndpoint.suffix, config.data),
      ...config,
      transformRequest: [
        parseResponseDataFor(currentGamePlayerEndpoint),
        ...ensureArray(axios.defaults.transformRequest),
      ],
      ...(shouldParseResponse
        ? {
            transformResponse: [
              ...ensureArray(axios.defaults.transformResponse),
              parseResponseDataFor(
                currentGamePlayerEndpoint,
                config.customResponseParser,
              ),
            ],
          }
        : {}),
    });
  }
}
