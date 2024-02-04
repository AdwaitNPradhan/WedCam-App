import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Typography from '../components/Customs/Typography';
import Row from '../components/Wrappers/Row';
import {Colors} from '../constants/colors';
import {Fonts} from '../constants/fonts';
import useEventsAPI from '../hooks/useEventsAPI';

const Events = () => {
  const [eventsList, setEventsList] = useState([]);

  const {isLoading} = useEventsAPI();
  return (
    <View>
      <Row>
        <Typography
          style={{
            color: Colors.black,
            fontFamily: Fonts.QuickSand.bold,
            fontSize: 30,
          }}>
          Your Events
        </Typography>
      </Row>
    </View>
  );
};

export default Events;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
