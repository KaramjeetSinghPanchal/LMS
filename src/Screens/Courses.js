import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Allcourses from './Allcourses';
import Mandatory from './Mandatory';
import Saved from './Saved';
import Inprogress from './Inprogress';
import suggested from './suggested';
import Search from '../Components/Search';
import {useWindowDimensions} from 'react-native';
import {listing} from '../apiclient/api';
import {PureComponent} from 'react';
import {useEffect} from 'react';
import { getCourses } from '../apiclient/api';


const Tab = createMaterialTopTabNavigator();

const Courses = ({navigation}) => {
  // const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data,setdata] = useState([])
  const {width} = useWindowDimensions();
  const images = {
    logo: require('../assets/Images/logo.png'),
    frame1: require('../assets/Images/Frame1.png'),
    frame2: require('../assets/Images/Frame2.png'),
    user: require('../assets/Images/user.png'),
  };

 

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image source={images.logo} style={styles.logo} />
        <View style={styles.ratingContainer}>
          <Image source={images.frame1} style={styles.ratingIcon} />
          <Text style={styles.ratingText}>4.5</Text>
        </View>
        <View style={styles.pointsContainer}>
          <Image source={images.frame2} style={styles.pointsIcon} />
          <Text style={styles.pointsText}>420 Points</Text>
        </View>
        <TouchableOpacity>
          <Icon name="notifications" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image source={images.user} style={styles.userIcon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Courses</Text>

      {/* Top Tab Navigation */}
      <Tab.Navigator
        style={styles.topTabs}
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarItemStyle: {width: 'auto'},
          tabBarIndicatorStyle: {backgroundColor: '#0B57CF'},
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: '500',
            textTransform: 'none',
          },
          tabBarStyle: {backgroundColor: '#fff'},
        }}>
        <Tab.Screen
          name="AllCourses"
          component={Allcourses}
          options={{tabBarLabel: 'All Courses'}}
        />
        <Tab.Screen
          name="Mandatory"
          component={Mandatory}
          options={{tabBarLabel: 'Mandatory'}}
        />
        <Tab.Screen
          name="Saved"
          component={Saved}
          options={{tabBarLabel: 'Saved'}}
        />
        <Tab.Screen
          name="InProgress"
          component={Inprogress}
          options={{tabBarLabel: 'In-Progress'}}
        />
        <Tab.Screen
          name="Suggested"
          component={suggested}
          options={{tabBarLabel: 'Suggested'}}
        />
      </Tab.Navigator>

      <View style={styles.searchWrapper}>
        <Search
          onPress={() => navigation.navigate('Searchscreen')}
          navigation={navigation}
          width={width}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: Platform.OS === 'android' ? 20 : 0,
  },
  logo: {
    width: 25,
    height: 25,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingIcon: {
    width: 17,
    height: 15,
  },
  ratingText: {
    marginLeft: 10,
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pointsIcon: {
    width: 16,
    height: 16,
  },
  pointsText: {
    marginLeft: 10,
  },
  userIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  title: {
    fontWeight: '400',
    fontSize: 26,
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  topTabs: {
    flex: 1,
  },
  searchWrapper: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});

export default Courses;
