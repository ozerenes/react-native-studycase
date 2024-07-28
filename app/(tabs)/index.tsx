import { Dimensions, StyleSheet } from 'react-native';

import { View } from '@/components/Themed';
import Carousel from 'react-native-reanimated-carousel/src/Carousel';
import { CarouselCard } from '@/components/CarouselCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function TabOneScreen() {
  const windowWidth = Dimensions.get('window').width;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = 'https://api.extrazone.com/promotions/list?Channel=PWA ';
      const headers = {
        'Content-Type': 'application/json',
        'X-Country-Id': 'TR',
        'X-Language-Id': 'TR',
      };

      try {
        const response = await axios.get(endpoint, { headers });
        console.log('Response:', response.data);
        setData(response.data);
        // Burada gelen verileri state'e veya başka bir yere kaydedebilirsiniz
      } catch (error) {
        console.error('Error:', error);
        // Hata durumunda hata mesajını işleyebilirsiniz
      }
    };

    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={windowWidth}
        height={400}
        autoPlay={false}
        data={data}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log('current index:', index)}
        panGestureHandlerProps={{
          activeOffsetX: [-60, 10],
        }}
        renderItem={({ item, index }) => (
          <CarouselCard item={item} index={index} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
