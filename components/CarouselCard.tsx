import { View } from '@/components/Themed';
import { Image, Text } from 'react-native';

interface CarouselCardProps {
  index: number;
  item: {
    BrandIconColor: string;
    BrandIconUrl: string;
    BrandPromotionCardParticipationText: string;
    CardType: string;
    ExternalLoginGate: any;
    ExternalRedirectType: any;
    ExternalType: any;
    ExternalUrl: any;
    ExternalWebviewType: any;
    Id: number;
    ImageUrl: string;
    IsLuckyDay: boolean;
    ListButtonText: string;
    ListButtonTextBackGroudColor: string;
    LuckyDayBackgroundColor: string | null;
    LuckyDayText: string;
    LuckyDayTextColor: string | null;
    PromotionCardColor: string;
    RemainingText: string;
    ScenarioType: string;
    SeoName: string;
    Title: string;
    Unavailable: boolean;
    Unvisible: boolean;
  };
}

export function CarouselCard({ item, index }: CarouselCardProps) {
  const [htmlContent, setHtmlContent] = useState('');
  const [plainText, setPlainText] = useState('');

  const handleConvert = () => {
    if (!htmlContent) return;

    const convertedText = htmlToText(htmlContent);
    setPlainText(convertedText);
  };
  return (
    <View
      key={index}
      style={{
        flex: 1,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
      }}
    >
      <Image
        src={item?.ImageUrl}
        style={{ width: 303, height: 305, resizeMode: 'contain' }}
      />

      <Text style={{ borderWidth: 1, borderColor: '#ccc', padding: 10 }}>
        {plainText}
      </Text>

      <Text>{item?.BrandIconUrl}</Text>
      <Image src={item?.ImageUrl}></Image>
    </View>
  );
}
