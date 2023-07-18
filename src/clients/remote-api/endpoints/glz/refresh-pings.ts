/* THIS IS AN AUTOGENERATED FILE - DO NOT EDIT */

import { z } from "zod";
import axios from "axios";
import { refreshPingsEndpoint } from "valorant-api-types";
import { parseResponseDataFor, buildSuffix } from "~/helpers/endpoints";
import { ensureArray } from "~/utils/array";
import { AxiosRequestConfigWithData } from "~/utils/lib/axios";
import { type CustomAxiosRequestConfig } from "~/clients/common/types";
import { type RemoteApiClient } from "~/clients/remote-api";

type RefreshPingsSuffixData = { partyId: string; puuid: string };

export interface RefreshPingsRequestConfig
  extends AxiosRequestConfigWithData<RefreshPingsSuffixData>,
    CustomAxiosRequestConfig {}

export type RefreshPingsResponse = z.infer<
  (typeof refreshPingsEndpoint.responses)["200"]
>;

export class RefreshPingsRemoteApiEndpoint {
  /**
   * @description Refresh the pings of the specified player
   */
  postRefreshPings<T = RefreshPingsResponse>(
    this: RemoteApiClient,
    config: RefreshPingsRequestConfig,
  ) {
    const shouldParseResponse =
      config.parseResponseData ?? this.options.parseResponseData;

    return this.axiosInstance<T>({
      method: "POST",
      baseURL: this.getServerUrl(refreshPingsEndpoint.type),
      url: buildSuffix(refreshPingsEndpoint.suffix, config.data),
      ...config,
      transformRequest: [
        parseResponseDataFor(refreshPingsEndpoint),
        ...ensureArray(axios.defaults.transformRequest),
      ],
      ...(shouldParseResponse
        ? {
            transformResponse: [
              ...ensureArray(axios.defaults.transformResponse),
              parseResponseDataFor(
                refreshPingsEndpoint,
                config.customResponseParser,
              ),
            ],
          }
        : {}),
    });
  }
}