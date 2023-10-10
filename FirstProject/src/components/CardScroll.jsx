import {  ScrollView} from 'react-native';
import Card from './Card';
import { TARJETAS } from '../../assets';


export default function CardScroll() {

  return (
      <ScrollView horizontal={true}>
        {TARJETAS.map((tarjeta, index) => (
            <Card
              key={index}
              name={tarjeta.name}
              price={tarjeta.price}
              image={tarjeta.image}
            />
          ))}
      </ScrollView>
  );
}

