/* THIS IS AN AUTOGENERATED FILE - DO NOT EDIT */

import { z } from "zod";
import axios, { type AxiosResponse } from "axios";
import { competitiveUpdatesEndpoint } from "@tqman/valorant-api-types";
import { parseResponseDataFor, buildSuffix } from "~/helpers/endpoints";
import { ensureArray } from "~/utils/array";
import { AxiosRequestConfigWithData } from "~/utils/lib/axios";
import { type CustomAxiosRequestConfig } from "~/clients/common/types";
import { type RemoteApiClient } from "~/clients/remote-api";

type CompetitiveUpdatesSuffixData = { puuid: string };

export interface CompetitiveUpdatesRequestConfig
  extends AxiosRequestConfigWithData<CompetitiveUpdatesSuffixData>,
    CustomAxiosRequestConfig {}

export type CompetitiveUpdatesResponse = z.input<
  (typeof competitiveUpdatesEndpoint.responses)["200"]
>;

export type CompetitiveUpdatesParsedResponse = z.output<
  (typeof competitiveUpdatesEndpoint.responses)["200"]
>;

export class CompetitiveUpdatesRemoteApiEndpoint {
  /**
   * @description Get recent games and how they changed ranking
   */
  getCompetitiveUpdates<T = CompetitiveUpdatesParsedResponse>(
    this: RemoteApiClient,
    config: CompetitiveUpdatesRequestConfig & { parseResponseData: true },
  ): Promise<AxiosResponse<T>>;
  getCompetitiveUpdates<T = CompetitiveUpdatesResponse>(
    this: RemoteApiClient,
    config?: CompetitiveUpdatesRequestConfig,
  ): Promise<AxiosResponse<T>>;
  getCompetitiveUpdates<T = CompetitiveUpdatesResponse>(
    this: RemoteApiClient,
    config: CompetitiveUpdatesRequestConfig,
  ) {
    const shouldParseResponse =
      config.parseResponseData ?? this.options.parseResponseData;

    return this.axiosInstance<T>({
      method: "GET",
      baseURL: this.getServerUrl(competitiveUpdatesEndpoint.type),
      url: buildSuffix(competitiveUpdatesEndpoint.suffix, config.data),
      ...config,
      transformRequest: [
        parseResponseDataFor(competitiveUpdatesEndpoint),
        ...ensureArray(axios.defaults.transformRequest),
      ],
      ...(shouldParseResponse
        ? {
            transformResponse: [
              ...ensureArray(axios.defaults.transformResponse),
              parseResponseDataFor(
                competitiveUpdatesEndpoint,
                config.customResponseParser,
              ),
            ],
          }
        : {}),
    });
  }
}
