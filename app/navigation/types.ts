import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { LaunchListItemType } from '~/app/store/types';

export type RootStackParamList = {
  LaunchScreen: undefined;
  LaunchDetailScreen: LaunchListItemType;
};

export type HomeScreenProps<RouteName extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, RouteName>;
  route: RouteProp<RootStackParamList, RouteName>;
};
