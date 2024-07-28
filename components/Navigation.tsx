import React from 'react';
import { Tabs } from 'expo-router';
import { ImageProps } from 'react-native';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import Compass from '@/assets/images/compass.png';
import Portal from '@/assets/images/portal.png';
import Star from '@/assets/images/star.png';
import Logo from '@/assets/images/logo.png';
import { Icon } from '@/components/Atoms/Icon';
import { HeaderRight } from '@/components/HeaderRight';

function TabBarIcon(props: ImageProps) {
  return <Icon {...props} />;
}

const TabItems = [
  {
    name: 'index',
    title: 'Keşfet',
    headerTitle: '',
    toolBarIcon: <TabBarIcon width={25} height={25} source={Compass} />,
    headerLeft: <Icon width={81} height={40} source={Logo} marginLeft={15} />,
    headerRight: <HeaderRight />,
  },
  {
    name: 'main-menu',
    title: '',
    headerTitle: '',
    toolBarIcon: (
      <TabBarIcon width={69} height={71} marginTop={-10} source={Portal} />
    ),
    headerLeft: <Icon width={81} height={40} source={Logo} marginLeft={15} />,
    headerRight: <HeaderRight />,
  },
  {
    name: 'more-wallet',
    title: 'Daha Cüzdan',
    headerTitle: '',
    toolBarIcon: <TabBarIcon width={25} height={25} source={Star} />,
    headerLeft: <Icon width={81} height={40} source={Logo} marginLeft={15} />,
    headerRight: <HeaderRight />,
  },
];

export function Navigation() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarStyle: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 68,
          backgroundColor: 'white',
          borderWidth: 1.5,
          borderColor: '#ECEEEF',
        },
        headerStyle: {
          height: 100,
          shadowColor: 'white',
        },
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      {TabItems.map((item) => (
        <Tabs.Screen
          name={item.name}
          options={{
            title: item.title,
            headerTitle: item.headerTitle,
            tabBarIcon: () => item.toolBarIcon,
            headerLeft: () => item.headerLeft,
            headerRight: () => item.headerRight,
          }}
        />
      ))}
    </Tabs>
  );
}
