/* THIS IS AN AUTOGENERATED FILE - DO NOT EDIT */

import { z } from "zod";
import axios, { type AxiosResponse } from "axios";
import { currentGameLoadoutsEndpoint } from "@tqman/valorant-api-types";
import { parseResponseDataFor, buildSuffix } from "~/helpers/endpoints";
import { ensureArray } from "~/utils/array";
import { AxiosRequestConfigWithData } from "~/utils/lib/axios";
import { type CustomAxiosRequestConfig } from "~/clients/common/types";
import { type RemoteApiClient } from "~/clients/remote-api";

type CurrentGameLoadoutsSuffixData = { currentGameMatchId: string };

export interface CurrentGameLoadoutsRequestConfig
  extends AxiosRequestConfigWithData<CurrentGameLoadoutsSuffixData>,
    CustomAxiosRequestConfig {}

export type CurrentGameLoadoutsResponse = z.input<
  (typeof currentGameLoadoutsEndpoint.responses)["200"]
>;

export type CurrentGameLoadoutsParsedResponse = z.output<
  (typeof currentGameLoadoutsEndpoint.responses)["200"]
>;

export class CurrentGameLoadoutsRemoteApiEndpoint {
  /**
   * @description Get the current game loadout info for all players in the match
   */
  getCurrentGameLoadouts<T = CurrentGameLoadoutsParsedResponse>(
    this: RemoteApiClient,
    config: CurrentGameLoadoutsRequestConfig & { parseResponseData: true },
  ): Promise<AxiosResponse<T>>;
  getCurrentGameLoadouts<T = CurrentGameLoadoutsResponse>(
    this: RemoteApiClient,
    config?: CurrentGameLoadoutsRequestConfig,
  ): Promise<AxiosResponse<T>>;
  getCurrentGameLoadouts<T = CurrentGameLoadoutsResponse>(
    this: RemoteApiClient,
    config: CurrentGameLoadoutsRequestConfig,
  ) {
    const shouldParseResponse =
      config.parseResponseData ?? this.options.parseResponseData;

    return this.axiosInstance<T>({
      method: "GET",
      baseURL: this.getServerUrl(currentGameLoadoutsEndpoint.type),
      url: buildSuffix(currentGameLoadoutsEndpoint.suffix, config.data),
      ...config,
      transformRequest: [
        parseResponseDataFor(currentGameLoadoutsEndpoint),
        ...ensureArray(axios.defaults.transformRequest),
      ],
      ...(shouldParseResponse
        ? {
            transformResponse: [
              ...ensureArray(axios.defaults.transformResponse),
              parseResponseDataFor(
                currentGameLoadoutsEndpoint,
                config.customResponseParser,
              ),
            ],
          }
        : {}),
    });
  }
}
