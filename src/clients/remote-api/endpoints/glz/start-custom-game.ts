/* THIS IS AN AUTOGENERATED FILE - DO NOT EDIT */

import { z } from "zod";
import axios from "axios";
import { startCustomGameEndpoint } from "valorant-api-types";
import { parseResponseDataFor, buildSuffix } from "~/helpers/endpoints";
import { ensureArray } from "~/utils/array";
import { AxiosRequestConfigWithData } from "~/utils/lib/axios";
import { type CustomAxiosRequestConfig } from "~/clients/common/types";
import { type RemoteApiClient } from "~/clients/remote-api";

type StartCustomGameSuffixData = { partyId: string };

export interface StartCustomGameRequestConfig
  extends AxiosRequestConfigWithData<StartCustomGameSuffixData>,
    CustomAxiosRequestConfig {}

export type StartCustomGameResponse = z.infer<
  (typeof startCustomGameEndpoint.responses)["200"]
>;

export class StartCustomGameRemoteApiEndpoint {
  /**
   * @description Start a custom game
   */
  postStartCustomGame<T = StartCustomGameResponse>(
    this: RemoteApiClient,
    config: StartCustomGameRequestConfig,
  ) {
    const shouldParseResponse =
      config.parseResponseData ?? this.options.parseResponseData;

    return this.axiosInstance<T>({
      method: "POST",
      baseURL: this.getServerUrl(startCustomGameEndpoint.type),
      url: buildSuffix(startCustomGameEndpoint.suffix, config.data),
      ...config,
      transformRequest: [
        parseResponseDataFor(startCustomGameEndpoint),
        ...ensureArray(axios.defaults.transformRequest),
      ],
      ...(shouldParseResponse
        ? {
            transformResponse: [
              ...ensureArray(axios.defaults.transformResponse),
              parseResponseDataFor(
                startCustomGameEndpoint,
                config.customResponseParser,
              ),
            ],
          }
        : {}),
    });
  }
}