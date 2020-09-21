import { REQUEST_PHASE } from '~/app/common/types';

export type AppState = {
  launchListStore: LaunchListStore;
};

export type LaunchListStore = {
  launchList: LaunchListType | null;
  launchListItems: Array<LaunchListItemType>;
  launchListPhase: REQUEST_PHASE;
  launchListError: LaunchListErrorType | null;
};

export type LaunchListErrorType = {
  detail: string;
};

export type LaunchListType = {
  count: number;
  next: string;
  previous: string;
  results: Array<LaunchListItemType>;
};

export type LaunchListItemType = {
  id: string;
  url: string;
  launch_library_id: number | null;
  slug: string;
  name: string;
  status: {
    id: number;
    name: string;
  };
  net: string;
  window_end: string;
  window_start: string;
  inhold: boolean;
  tbdtime: boolean;
  tbddate: boolean;
  probability: number;
  holdreason: string | null;
  failreason: string | null;
  hashtag: string | null;
  launch_service_provider: {
    id: number | null;
    url: string | null;
    name: string | null;
    type: string | null;
  };
  rocket: {
    id: number;
    configuration: {
      id: number;
      launch_library_id: number | null;
      url: string;
      name: string;
      family: string;
      full_name: string;
      variant: string;
    };
  };
  mission: {
    id: number;
    launch_library_id: number | null;
    name: string;
    description: string;
    launch_designator: null;
    type: string | null;
    orbit: {
      id: number;
      name: string;
      abbrev: string;
    };
  } | null;
  pad: {
    id: number;
    url: string;
    agency_id: number | null;
    name: string;
    info_url: null | string;
    wiki_url: string;
    map_url: string;
    latitude: string;
    longitude: string;
    location: {
      id: number;
      url: string;
      name: string;
      country_code: string;
      map_image: string;
      total_launch_count: number;
      total_landing_count: number;
    };
    map_image: string;
    total_launch_count: number;
  };
  webcast_live: false;
  image: string | null;
  infographic: null;
  program: Array<{
    id: number;
    url: string;
    name: string;
    description: string;
    agencies: { id: number; url: string; name: string; type: string }[];
    image_url: string;
    start_date: string;
    end_date: string;
    info_url: string | null;
    wiki_url: string;
  }> | null;
};
