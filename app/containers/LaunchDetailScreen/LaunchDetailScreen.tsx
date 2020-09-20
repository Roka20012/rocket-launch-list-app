import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { STYLES, COLORS } from '~/app/common/style';
import { LaunchStatus } from '~/app/components/LaunchList/parts';

import { HomeScreenProps } from '~/app/navigation/types';

import { Option } from './parts';

const LaunchDetailScreen = ({
  route,
}: HomeScreenProps<'LaunchDetailScreen'>) => {
  const insets = useSafeAreaInsets();
  const {
    name,
    status: { name: statusName },
    failreason,
    rocket: {
      configuration: { variant, full_name, family },
    },
    pad: {
      map_image,
      location: {
        name: locationName,
        country_code,
        total_landing_count,
        total_launch_count,
      },
    },
    launch_service_provider: { name: providerName, type },
    mission,
  } = route.params;
  const isStatusSuccess = statusName === 'Success';

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[
        styles.contentContainer,
        { paddingTop: insets.top },
      ]}
    >
      <Text style={styles.nameTitle}>{name}</Text>
      <LaunchStatus success={isStatusSuccess} name={statusName} />
      {!!failreason && (
        <Text style={styles.reason}>
          Reason: <Text style={styles.failreason}>{failreason}</Text>
        </Text>
      )}
      {mission && (
        <View style={styles.missionContainer}>
          <Option title="Misson Name" option={`${mission.name} 🗓`} />
          <Option
            title="Description 📝"
            option={`\n${mission.description}`}
            separator={null}
          />
          <Option title="Orbit Name" option={mission.orbit.name} />
          <Option title="Abbrev" option={mission.orbit.abbrev} />
        </View>
      )}

      <Text style={styles.nameTitle}>Rocket 🚀</Text>
      <Option title="Family" option={variant} />
      <Option title="Name" option={full_name} />
      <Option title="Variant" option={family} />

      <Text style={styles.nameTitle}>Location 📍</Text>
      <Option title="Location Name" option={locationName} />
      <Option title="Country" option={country_code} />
      <Option title="Total landing count" option={total_landing_count} />
      <Option title="Total launch count" option={total_launch_count} />
      <Option title="Location Name" option={locationName} />

      <Text style={styles.nameTitle}>Launch Service Provider 👩‍🚀</Text>
      <Option title="Provider" option={providerName} />
      <Option title="Type" option={type} />

      {map_image && <Image source={{ uri: map_image }} style={styles.image} />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  contentContainer: {
    paddingBottom: 32,
  },
  name: {
    marginBottom: 6,
    ...STYLES.BODY_15_MEDIUM,
    color: COLORS.TEXT_MAIN,
  },
  nameTitle: {
    marginBottom: 6,
    ...STYLES.TITLE_26_MEDIUM,
    color: COLORS.TEXT_MAIN,
  },
  reason: {
    marginTop: 6,
  },
  missionContainer: {
    marginTop: 13,
  },
  failreason: {
    ...STYLES.BODY_15_REGULAR,
    color: COLORS.TEXT_HINT,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 15,
  },
});

export default LaunchDetailScreen;
