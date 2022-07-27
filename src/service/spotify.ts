import { AxiosResponse } from "axios";
import { gatewayApi } from "./api";

export const spotifySearch = async (
  query: string
): Promise<AxiosResponse<{ url: string; title?: string }>> =>
  gatewayApi.get(`/spotify/search/${query}`);
