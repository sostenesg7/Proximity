import React, { useContext } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ThemeContext } from '../../../../context/ThemeContext';
import { Typography } from '../../../../theme';
import { ThemeColors } from '../../../../types';

const { FontWeights, FontSizes } = Typography;

const NotificationCard = ({ avatar, handle, type, time }) => {

  const { theme } = useContext(ThemeContext);
  // type can be follow like comment maybe???
  const notificationText = `has started following you!`;

  return (
    <View style={[styles().container]}>
      <Image
        source={{ uri: avatar }}
        style={styles().avatarImage}
      />
      <View style={styles().info}>
        <Text style={styles(theme).notificationText}>
          <Text style={styles(theme).handleText}>{handle}{' '}</Text>
          {notificationText}
        </Text>
        <Text style={styles(theme).timeText}>{time} ago</Text>
      </View>
    </View>
  );
};

const styles = (theme = {} as ThemeColors) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 5
  },
  avatarImage: {
    height: 50,
    width: 50,
    borderRadius: 50
  },
  info: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10
  },
  handleText: {
    ...FontWeights.Regular,
    ...FontSizes.Body,
    color: theme.text01
  },
  notificationText: {
    ...FontWeights.Light,
    ...FontSizes.Body,
    color: theme.text01
  },
  timeText: {
    ...FontWeights.Light,
    ...FontSizes.Caption,
    color: theme.text02,
    paddingTop: 5
  }
});

export default NotificationCard;