import { AxiosResponse } from "axios";
import { Video } from "../types/main";
import { gatewayApi } from "./api";

export const youtubeSearch = async (
  query: string
): Promise<AxiosResponse<Video>> => gatewayApi.get(`youtube/search/${query}`);
