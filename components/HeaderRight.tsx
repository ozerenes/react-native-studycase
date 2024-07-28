import { Link } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { Icon } from '@/components/Atoms/Icon';
import Profile from '@/assets/images/profile.png';
import React from 'react';

export function HeaderRight() {
  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
      <Link
        href="/modal"
        asChild
        style={{
          backgroundColor: '#F40000',
          marginRight: 15,
          paddingVertical: 5,
          paddingHorizontal: 10,
          borderRadius: 25,
          width: 91,
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Pressable>
          {({ pressed }) => (
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              Giriş Yap
            </Text>
          )}
        </Pressable>
      </Link>
      <Link
        href="/modal"
        asChild
        style={{
          backgroundColor: '#1D1E1C',
          marginRight: 15,
          paddingVertical: 15,
          paddingHorizontal: 15,
          borderRadius: 100,
          width: 40,
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Pressable>
          {({ pressed }) => <Icon source={Profile} width={16} height={17} />}
        </Pressable>
      </Link>
    </View>
  );
}
