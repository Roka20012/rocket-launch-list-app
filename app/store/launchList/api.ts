import Chance from 'chance';
import client from '~/app/utils/apiInterceptor';

import { LaunchListType } from '../types';

const chance = new Chance();
let flag = false;

export const getLaunchList = async (next?: string): Promise<LaunchListType> => {
  // try {
  // TODO: Fix & uncomment when serve will be ok "Request was throttled. Expected available in 28575 seconds."
  // const response = await client.get(next ? next : 'launch/?limit=5');
  const mockResponse: LaunchListType = {
    count: 1839,
    next: 'https://ll.thespacedevs.com/2.0.0/launch/?limit=10&offset=20',
    previous: 'https://ll.thespacedevs.com/2.0.0/launch/?limit=10',
    results: [
      {
        id: chance.guid(),
        url:
          'https://ll.thespacedevs.com/2.0.0/launch/a2b07d66-8851-4880-8eee-95248c6e79f5/',
        launch_library_id: 1839,
        slug: 'delta-dm-19-explorer-10',
        name: 'Delta DM-19 | Explorer 10',
        status: {
          id: 3,
          name: 'Success',
        },
        net: '1961-03-25T15:17:04Z',
        window_end: '1961-03-25T15:17:04Z',
        window_start: '1961-03-25T15:17:04Z',
        inhold: false,
        tbdtime: false,
        tbddate: false,
        probability: 0,
        holdreason: '',
        failreason: '',
        hashtag: '',
        launch_service_provider: {
          id: 161,
          url: 'https://ll.thespacedevs.com/2.0.0/agencies/161/',
          name: 'United States Air Force',
          type: 'Government',
        },
        rocket: {
          id: 2372,
          configuration: {
            id: 189,
            launch_library_id: 209,
            url: 'https://ll.thespacedevs.com/2.0.0/config/launcher/189/',
            name: 'Delta DM-19',
            family: 'Thor',
            full_name: 'Thor-Delta',
            variant: 'DM-19',
          },
        },
        mission: null,
        pad: {
          id: 14,
          url: 'https://ll.thespacedevs.com/2.0.0/pad/14/',
          agency_id: null,
          name: 'Space Launch Complex 17A',
          info_url: null,
          wiki_url: '',
          map_url:
            'http://maps.google.com/maps?f=q&amp;hl=en&amp;q=28.4472+N,+80.565+W&amp;ie=UTF8&amp;z=17&amp;ll=28.447449,-80.564997&amp;spn=0.004217,0.010815&amp;t=h&amp;om=0&amp;iwloc=addr',
          latitude: '28.4472',
          longitude: '-80.565',
          location: {
            id: 12,
            url: 'https://ll.thespacedevs.com/2.0.0/location/12/',
            name: 'Cape Canaveral, FL, USA',
            country_code: 'USA',
            map_image:
              'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_12_20200803142519.jpg',
            total_launch_count: 202,
            total_landing_count: 0,
          },
          map_image:
            'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_14_20200803143451.jpg',
          total_launch_count: 9,
        },
        webcast_live: false,
        image: null,
        infographic: null,
        program: [],
      },
      {
        id: chance.guid(),
        url:
          'https://ll.thespacedevs.com/2.0.0/launch/8f46f0c6-b0b8-4440-bd54-d2be03511c78/',
        launch_library_id: 1840,
        slug: 'thor-dm-21-agena-b-discoverer-22',
        name: 'Thor DM-21 Agena-B | Discoverer 22',
        status: {
          id: 4,
          name: 'Failure',
        },
        net: '1961-03-30T20:34:43Z',
        window_end: '1961-03-30T20:34:43Z',
        window_start: '1961-03-30T20:34:43Z',
        inhold: false,
        tbdtime: false,
        tbddate: false,
        probability: 0,
        holdreason: '',
        failreason: 'Second stage failed to achieve orbit.',
        hashtag: '',
        launch_service_provider: {
          id: 161,
          url: 'https://ll.thespacedevs.com/2.0.0/agencies/161/',
          name: 'United States Air Force',
          type: 'Government',
        },
        rocket: {
          id: 2373,
          configuration: {
            id: 186,
            launch_library_id: 201,
            url: 'https://ll.thespacedevs.com/2.0.0/config/launcher/186/',
            name: 'Thor DM-21 Agena-B',
            family: 'Thor',
            full_name: 'Thor DM-21 Agena-B',
            variant: '',
          },
        },
        mission: null,
        pad: {
          id: 95,
          url: 'https://ll.thespacedevs.com/2.0.0/pad/95/',
          agency_id: 161,
          name: 'Space Launch Complex 1W',
          info_url: null,
          wiki_url: '',
          map_url: 'http://maps.google.com/maps?q=34.7572+N,+120.6303+W',
          latitude: '34.7572',
          longitude: '-120.6303',
          location: {
            id: 11,
            url: 'https://ll.thespacedevs.com/2.0.0/location/11/',
            name: 'Vandenberg AFB, CA, USA',
            country_code: 'USA',
            map_image:
              'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_11_20200803142416.jpg',
            total_launch_count: 82,
            total_landing_count: 0,
          },
          map_image:
            'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_95_20200803143209.jpg',
          total_launch_count: 9,
        },
        webcast_live: false,
        image:
          'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/thor2520dm-212520agena-b_image_20190414123658.jpg',
        infographic: null,
        program: [],
      },
      {
        id: chance.guid(),
        url:
          'https://ll.thespacedevs.com/2.0.0/launch/b1a75709-2ff8-497d-aa70-51b38d441cd6/',
        launch_library_id: 1841,
        slug: 'thor-dm-21-agena-b-discoverer-23',
        name: 'Thor DM-21 Agena-B | Discoverer 23',
        status: {
          id: 3,
          name: 'Success',
        },
        net: '1961-04-08T19:21:08Z',
        window_end: '1961-04-08T19:21:08Z',
        window_start: '1961-04-08T19:21:08Z',
        inhold: false,
        tbdtime: false,
        tbddate: false,
        probability: 0,
        holdreason: '',
        failreason: '',
        hashtag: '',
        launch_service_provider: {
          id: 161,
          url: 'https://ll.thespacedevs.com/2.0.0/agencies/161/',
          name: 'United States Air Force',
          type: 'Government',
        },
        rocket: {
          id: 2374,
          configuration: {
            id: 186,
            launch_library_id: 201,
            url: 'https://ll.thespacedevs.com/2.0.0/config/launcher/186/',
            name: 'Thor DM-21 Agena-B',
            family: 'Thor',
            full_name: 'Thor DM-21 Agena-B',
            variant: '',
          },
        },
        mission: null,
        pad: {
          id: 96,
          url: 'https://ll.thespacedevs.com/2.0.0/pad/96/',
          agency_id: 161,
          name: 'Space Launch Complex 1E',
          info_url: null,
          wiki_url: '',
          map_url: 'http://maps.google.com/maps?q=34.756+N,+120.6263+W',
          latitude: '34.756',
          longitude: '-120.6263',
          location: {
            id: 11,
            url: 'https://ll.thespacedevs.com/2.0.0/location/11/',
            name: 'Vandenberg AFB, CA, USA',
            country_code: 'USA',
            map_image:
              'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_11_20200803142416.jpg',
            total_launch_count: 82,
            total_landing_count: 0,
          },
          map_image:
            'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_96_20200803143221.jpg',
          total_launch_count: 5,
        },
        webcast_live: false,
        image:
          'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/thor2520dm-212520agena-b_image_20190414123658.jpg',
        infographic: null,
        program: [],
      },
      {
        id: chance.guid(),
        url:
          'https://ll.thespacedevs.com/2.0.0/launch/6abb4584-1ae8-4280-ab94-eec203164091/',
        launch_library_id: 1028,
        slug: 'vostok-k-vostok-1',
        name: 'Vostok-K | Vostok 1',
        status: {
          id: 3,
          name: 'Success',
        },
        net: '1961-04-12T06:07:00Z',
        window_end: '1961-04-12T06:07:00Z',
        window_start: '1961-04-12T06:07:00Z',
        inhold: false,
        tbdtime: false,
        tbddate: false,
        probability: -1,
        holdreason: null,
        failreason: null,
        hashtag: null,
        launch_service_provider: {
          id: 66,
          url: 'https://ll.thespacedevs.com/2.0.0/agencies/66/',
          name: 'Soviet Space Program',
          type: 'Government',
        },
        rocket: {
          id: 189,
          configuration: {
            id: 103,
            launch_library_id: 139,
            url: 'https://ll.thespacedevs.com/2.0.0/config/launcher/103/',
            name: 'Vostok',
            family: 'R-7',
            full_name: 'Vostok-K',
            variant: 'K',
          },
        },
        mission: {
          id: 774,
          launch_library_id: 212,
          name: 'Vostok 1',
          description:
            'The first crewed space launch & the first orbital launch. It carried the Soviet cosmonaut Yuri Gagarin who completed 1 orbit before safely re-entering the atmosphere, he ejected from his capsule at an altitude of 7 km in order to parachute safely to the ground. The mission lasted 108 minutes.',
          launch_designator: null,
          type: 'Human Exploration',
          orbit: {
            id: 8,
            name: 'Low Earth Orbit',
            abbrev: 'LEO',
          },
        },
        pad: {
          id: 32,
          url: 'https://ll.thespacedevs.com/2.0.0/pad/32/',
          agency_id: null,
          name: '1/5',
          info_url: null,
          wiki_url: '',
          map_url:
            'https://www.google.com/maps/place/45Â°55\'12.0"N+63Â°20\'31.2"E',
          latitude: '45.92',
          longitude: '63.342',
          location: {
            id: 15,
            url: 'https://ll.thespacedevs.com/2.0.0/location/15/',
            name: 'Baikonur Cosmodrome, Republic of Kazakhstan',
            country_code: 'KAZ',
            map_image:
              'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_15_20200803142517.jpg',
            total_launch_count: 464,
            total_landing_count: 0,
          },
          map_image:
            'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_32_20200803143513.jpg',
          total_launch_count: 290,
        },
        webcast_live: false,
        image:
          'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/vostok_image_20191104130128.jpg',
        infographic: null,
        program: [
          {
            id: 9,
            url: 'https://ll.thespacedevs.com/2.0.0/program/9/',
            name: 'Vostok',
            description:
              'The Vostok programme was a Soviet human spaceflight project to put the first Soviet citizens into low Earth orbit and return them safely. Competing with the United States Project Mercury, it succeeded in placing the first human into space, Yuri Gagarin, in a single orbit in Vostok 1 on April 12, 1961.',
            agencies: [
              {
                id: 66,
                url: 'https://ll.thespacedevs.com/2.0.0/agencies/66/',
                name: 'Soviet Space Program',
                type: 'Government',
              },
            ],
            image_url:
              'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/vostok_program_20200820204123.jpg',
            start_date: '1961-04-12T06:07:00Z',
            end_date: '1963-06-19T08:20:00Z',
            info_url: null,
            wiki_url: 'https://en.wikipedia.org/wiki/Vostok_programme',
          },
        ],
      },
      {
        id: chance.guid(),
        url:
          'https://ll.thespacedevs.com/2.0.0/launch/e1e4a144-47f8-489d-88ee-c41ae09cd0b7/',
        launch_library_id: 1842,
        slug: 'atlas-lv-3b-mercury-atlas-3',
        name: 'Atlas LV-3B | Mercury-Atlas 3',
        status: {
          id: 4,
          name: 'Failure',
        },
        net: '1961-04-25T16:15:00Z',
        window_end: '1961-04-25T16:15:00Z',
        window_start: '1961-04-25T16:15:00Z',
        inhold: false,
        tbdtime: false,
        tbddate: false,
        probability: 0,
        holdreason: '',
        failreason: 'Pitch and roll sequence failed to initiate.',
        hashtag: '',
        launch_service_provider: {
          id: 44,
          url: 'https://ll.thespacedevs.com/2.0.0/agencies/44/',
          name: 'National Aeronautics and Space Administration',
          type: 'Government',
        },
        rocket: {
          id: 2375,
          configuration: {
            id: 162,
            launch_library_id: 140,
            url: 'https://ll.thespacedevs.com/2.0.0/config/launcher/162/',
            name: 'Atlas',
            family: 'Atlas',
            full_name: 'Atlas LV-3B',
            variant: 'LV-3B',
          },
        },
        mission: null,
        pad: {
          id: 17,
          url: 'https://ll.thespacedevs.com/2.0.0/pad/17/',
          agency_id: null,
          name: 'Space Launch Complex 14',
          info_url: null,
          wiki_url:
            'https://en.wikipedia.org/wiki/Cape_Canaveral_Air_Force_Station_Launch_Complex_14',
          map_url: 'http://www.google.com/maps?q=28.49103,-80.54687',
          latitude: '28.49103',
          longitude: '-80.54687',
          location: {
            id: 12,
            url: 'https://ll.thespacedevs.com/2.0.0/location/12/',
            name: 'Cape Canaveral, FL, USA',
            country_code: 'USA',
            map_image:
              'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_12_20200803142519.jpg',
            total_launch_count: 202,
            total_landing_count: 0,
          },
          map_image:
            'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_17_20200803143405.jpg',
          total_launch_count: 7,
        },
        webcast_live: false,
        image:
          'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/atlas_image_20190222030015.jpeg',
        infographic: null,
        program: [
          {
            id: 2,
            url: 'https://ll.thespacedevs.com/2.0.0/program/2/',
            name: 'Mercury',
            description:
              'Project Mercury was the first human spaceflight program of the United States, running from 1958 through 1963.',
            agencies: [
              {
                id: 44,
                url: 'https://ll.thespacedevs.com/2.0.0/agencies/44/',
                name: 'National Aeronautics and Space Administration',
                type: 'Government',
              },
            ],
            image_url:
              'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/project2520mer_program_20200820194755.png',
            start_date: '1958-10-07T00:00:00Z',
            end_date: '1963-05-16T23:24:02Z',
            info_url:
              'https://www.nasa.gov/mission_pages/mercury/missions/program-toc.html',
            wiki_url: 'https://en.wikipedia.org/wiki/Project_Mercury',
          },
        ],
      },
      {
        id: chance.guid(),
        url:
          'https://ll.thespacedevs.com/2.0.0/launch/f5303aad-0672-4825-96d6-996d83d1e7f2/',
        launch_library_id: 1843,
        slug: 'juno-ii-explorer-11',
        name: 'Juno II | Explorer 11',
        status: {
          id: 3,
          name: 'Success',
        },
        net: '1961-04-27T14:16:38Z',
        window_end: '1961-04-27T14:16:38Z',
        window_start: '1961-04-27T14:16:38Z',
        inhold: false,
        tbdtime: false,
        tbddate: false,
        probability: 0,
        holdreason: '',
        failreason: '',
        hashtag: '',
        launch_service_provider: {
          id: 271,
          url: 'https://ll.thespacedevs.com/2.0.0/agencies/271/',
          name: 'Army Ballistic Missile Agency',
          type: null,
        },
        rocket: {
          id: 2376,
          configuration: {
            id: 188,
            launch_library_id: 206,
            url: 'https://ll.thespacedevs.com/2.0.0/config/launcher/188/',
            name: 'Juno II',
            family: 'Juno',
            full_name: 'Juno II',
            variant: '',
          },
        },
        mission: null,
        pad: {
          id: 97,
          url: 'https://ll.thespacedevs.com/2.0.0/pad/97/',
          agency_id: 161,
          name: 'Space Launch Complex 26B',
          info_url: null,
          wiki_url:
            'https://en.wikipedia.org/wiki/Cape_Canaveral_Air_Force_Station_Launch_Complex_26',
          map_url: 'http://www.google.com/maps?q=28.4433,-80.5712',
          latitude: '28.4433',
          longitude: '-80.5712',
          location: {
            id: 12,
            url: 'https://ll.thespacedevs.com/2.0.0/location/12/',
            name: 'Cape Canaveral, FL, USA',
            country_code: 'USA',
            map_image:
              'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_12_20200803142519.jpg',
            total_launch_count: 202,
            total_landing_count: 0,
          },
          map_image:
            'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_97_20200803143224.jpg',
          total_launch_count: 3,
        },
        webcast_live: false,
        image:
          'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/juno2520ii_image_20191201204701.jpeg',
        infographic: null,
        program: [],
      },
      {
        id: chance.guid(),
        url:
          'https://ll.thespacedevs.com/2.0.0/launch/9fe0c6ce-7858-4915-b4e3-7c93f8e56177/',
        launch_library_id: null,
        slug: 'redstone-mrlv-mercury-redstone-3',
        name: 'Redstone MRLV | Mercury-Redstone 3',
        status: {
          id: 3,
          name: 'Success',
        },
        net: '1961-05-05T14:34:13Z',
        window_end: '1961-05-05T14:34:13Z',
        window_start: '1961-05-05T14:34:13Z',
        inhold: false,
        tbdtime: false,
        tbddate: false,
        probability: -1,
        holdreason: '',
        failreason: '',
        hashtag: null,
        launch_service_provider: {
          id: 44,
          url: 'https://ll.thespacedevs.com/2.0.0/agencies/44/',
          name: 'National Aeronautics and Space Administration',
          type: 'Government',
        },
        rocket: {
          id: 2174,
          configuration: {
            id: 107,
            launch_library_id: 141,
            url: 'https://ll.thespacedevs.com/2.0.0/config/launcher/107/',
            name: 'Redstone',
            family: 'Redstone',
            full_name: 'Redstone MRLV',
            variant: 'MRLV',
          },
        },
        mission: {
          id: 940,
          launch_library_id: null,
          name: 'Mercury-Redstone 3',
          description:
            "Mercury-Redstone 3, or Freedom 7, was the first United States human spaceflight, on May 5, 1961, piloted by astronaut Alan Shepard. It was the first manned flight of Project Mercury, the objective of which was to put an astronaut into orbit around the Earth and return him safely. Shepard's mission was a 15-minute suborbital flight with the primary objective of demonstrating his ability to withstand the high g-forces of launch and atmospheric re-entry.",
          launch_designator: null,
          type: 'Human Exploration',
          orbit: {
            id: 15,
            name: 'Sub-Orbital',
            abbrev: 'Sub Orbital',
          },
        },
        pad: {
          id: 89,
          url: 'https://ll.thespacedevs.com/2.0.0/pad/89/',
          agency_id: 44,
          name: 'Cape Canaveral Air Force Station Launch Complex 5',
          info_url: null,
          wiki_url:
            'https://en.wikipedia.org/wiki/Cape_Canaveral_Air_Force_Station_Launch_Complex_5',
          map_url:
            'https://www.google.com/maps?ll=28.439444,-80.573333&q=28.439444,-80.573333&hl=en&t=m&z=15',
          latitude: '28.439444',
          longitude: '-80.573333',
          location: {
            id: 12,
            url: 'https://ll.thespacedevs.com/2.0.0/location/12/',
            name: 'Cape Canaveral, FL, USA',
            country_code: 'USA',
            map_image:
              'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_12_20200803142519.jpg',
            total_launch_count: 202,
            total_landing_count: 0,
          },
          map_image:
            'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_89_20200803143242.jpg',
          total_launch_count: 2,
        },
        webcast_live: false,
        image:
          'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/redstone_image_20190207032627.jpeg',
        infographic: null,
        program: [
          {
            id: 2,
            url: 'https://ll.thespacedevs.com/2.0.0/program/2/',
            name: 'Mercury',
            description:
              'Project Mercury was the first human spaceflight program of the United States, running from 1958 through 1963.',
            agencies: [
              {
                id: 44,
                url: 'https://ll.thespacedevs.com/2.0.0/agencies/44/',
                name: 'National Aeronautics and Space Administration',
                type: 'Government',
              },
            ],
            image_url:
              'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/project2520mer_program_20200820194755.png',
            start_date: '1958-10-07T00:00:00Z',
            end_date: '1963-05-16T23:24:02Z',
            info_url:
              'https://www.nasa.gov/mission_pages/mercury/missions/program-toc.html',
            wiki_url: 'https://en.wikipedia.org/wiki/Project_Mercury',
          },
        ],
      },
      {
        id: chance.guid(),
        url:
          'https://ll.thespacedevs.com/2.0.0/launch/baf048e4-c41b-4edc-aa61-70be2837acb4/',
        launch_library_id: 1844,
        slug: 'juno-ii-s-45a',
        name: 'Juno II | S-45A',
        status: {
          id: 4,
          name: 'Failure',
        },
        net: '1961-05-24T19:48:05Z',
        window_end: '1961-05-24T19:48:05Z',
        window_start: '1961-05-24T19:48:05Z',
        inhold: false,
        tbdtime: false,
        tbddate: false,
        probability: 0,
        holdreason: '',
        failreason: 'Second stage failed to achieve orbit.',
        hashtag: '',
        launch_service_provider: {
          id: 271,
          url: 'https://ll.thespacedevs.com/2.0.0/agencies/271/',
          name: 'Army Ballistic Missile Agency',
          type: null,
        },
        rocket: {
          id: 2377,
          configuration: {
            id: 188,
            launch_library_id: 206,
            url: 'https://ll.thespacedevs.com/2.0.0/config/launcher/188/',
            name: 'Juno II',
            family: 'Juno',
            full_name: 'Juno II',
            variant: '',
          },
        },
        mission: null,
        pad: {
          id: 97,
          url: 'https://ll.thespacedevs.com/2.0.0/pad/97/',
          agency_id: 161,
          name: 'Space Launch Complex 26B',
          info_url: null,
          wiki_url:
            'https://en.wikipedia.org/wiki/Cape_Canaveral_Air_Force_Station_Launch_Complex_26',
          map_url: 'http://www.google.com/maps?q=28.4433,-80.5712',
          latitude: '28.4433',
          longitude: '-80.5712',
          location: {
            id: 12,
            url: 'https://ll.thespacedevs.com/2.0.0/location/12/',
            name: 'Cape Canaveral, FL, USA',
            country_code: 'USA',
            map_image:
              'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_12_20200803142519.jpg',
            total_launch_count: 202,
            total_landing_count: 0,
          },
          map_image:
            'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_97_20200803143224.jpg',
          total_launch_count: 3,
        },
        webcast_live: false,
        image:
          'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/juno2520ii_image_20191201204701.jpeg',
        infographic: null,
        program: [],
      },
      {
        id: chance.guid(),
        url:
          'https://ll.thespacedevs.com/2.0.0/launch/d94bf87d-b0eb-4935-8143-e8749e424d5c/',
        launch_library_id: 1845,
        slug: 'thor-dm-21-agena-b-discoverer-24',
        name: 'Thor DM-21 Agena-B | Discoverer 24',
        status: {
          id: 4,
          name: 'Failure',
        },
        net: '1961-06-08T21:16:00Z',
        window_end: '1961-06-08T21:16:00Z',
        window_start: '1961-06-08T21:16:00Z',
        inhold: false,
        tbdtime: false,
        tbddate: false,
        probability: 0,
        holdreason: '',
        failreason: 'Power failure.',
        hashtag: '',
        launch_service_provider: {
          id: 161,
          url: 'https://ll.thespacedevs.com/2.0.0/agencies/161/',
          name: 'United States Air Force',
          type: 'Government',
        },
        rocket: {
          id: 2378,
          configuration: {
            id: 186,
            launch_library_id: 201,
            url: 'https://ll.thespacedevs.com/2.0.0/config/launcher/186/',
            name: 'Thor DM-21 Agena-B',
            family: 'Thor',
            full_name: 'Thor DM-21 Agena-B',
            variant: '',
          },
        },
        mission: null,
        pad: {
          id: 95,
          url: 'https://ll.thespacedevs.com/2.0.0/pad/95/',
          agency_id: 161,
          name: 'Space Launch Complex 1W',
          info_url: null,
          wiki_url: '',
          map_url: 'http://maps.google.com/maps?q=34.7572+N,+120.6303+W',
          latitude: '34.7572',
          longitude: '-120.6303',
          location: {
            id: 11,
            url: 'https://ll.thespacedevs.com/2.0.0/location/11/',
            name: 'Vandenberg AFB, CA, USA',
            country_code: 'USA',
            map_image:
              'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_11_20200803142416.jpg',
            total_launch_count: 82,
            total_landing_count: 0,
          },
          map_image:
            'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_95_20200803143209.jpg',
          total_launch_count: 9,
        },
        webcast_live: false,
        image:
          'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/thor2520dm-212520agena-b_image_20190414123658.jpg',
        infographic: null,
        program: [],
      },
      {
        id: chance.guid(),
        url:
          'https://ll.thespacedevs.com/2.0.0/launch/69c1757e-bb8f-4ce2-a29a-0a4aadb6a2c9/',
        launch_library_id: 1846,
        slug: 'thor-dm-21-agena-b-discoverer-25',
        name: 'Thor DM-21 Agena-B | Discoverer 25',
        status: {
          id: 3,
          name: 'Success',
        },
        net: '1961-06-16T23:02:52Z',
        window_end: '1961-06-16T23:02:52Z',
        window_start: '1961-06-16T23:02:52Z',
        inhold: false,
        tbdtime: false,
        tbddate: false,
        probability: 0,
        holdreason: '',
        failreason: '',
        hashtag: '',
        launch_service_provider: {
          id: 161,
          url: 'https://ll.thespacedevs.com/2.0.0/agencies/161/',
          name: 'United States Air Force',
          type: 'Government',
        },
        rocket: {
          id: 2379,
          configuration: {
            id: 186,
            launch_library_id: 201,
            url: 'https://ll.thespacedevs.com/2.0.0/config/launcher/186/',
            name: 'Thor DM-21 Agena-B',
            family: 'Thor',
            full_name: 'Thor DM-21 Agena-B',
            variant: '',
          },
        },
        mission: null,
        pad: {
          id: 98,
          url: 'https://ll.thespacedevs.com/2.0.0/pad/98/',
          agency_id: 161,
          name: 'Space Launch Complex 2E',
          info_url: null,
          wiki_url: '',
          map_url: 'http://maps.google.com/maps?q=34.7516+N,+120.6192+W',
          latitude: '34.7516',
          longitude: '-120.6192',
          location: {
            id: 11,
            url: 'https://ll.thespacedevs.com/2.0.0/location/11/',
            name: 'Vandenberg AFB, CA, USA',
            country_code: 'USA',
            map_image:
              'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_11_20200803142416.jpg',
            total_launch_count: 82,
            total_landing_count: 0,
          },
          map_image:
            'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_98_20200803143228.jpg',
          total_launch_count: 3,
        },
        webcast_live: false,
        image:
          'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/thor2520dm-212520agena-b_image_20190414123658.jpg',
        infographic: null,
        program: [],
      },
    ],
  };

  // return response.data;
  if (next) {
    return new Promise<LaunchListType>((resolve) => {
      setTimeout(() => resolve(mockResponse), 1200);
    });
  } else if (flag) {
    return new Promise<LaunchListType>((resolve) => {
      setTimeout(() => resolve({ next: 'next', results: [] }), 1200);
    });
  }

  // for init request
  if (!flag) {
    flag = true;
    return new Promise<LaunchListType>((resolve) => {
      setTimeout(() => resolve(mockResponse), 1200);
    });
  }
  // } catch (error) {
  //   throw error;
  // }
};
