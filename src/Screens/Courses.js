import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import {rS, vR, rMS} from '../Components/Responsive';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useState} from 'react';
import Search from '../Components/Search';

const Courses = ({navigation}) => {
  const {width, height} = useWindowDimensions();
  console.warn(width, height, 'width, height');

  const images = {
    logo: require('../assets/Images/logo.png'),
    frame: require('../assets/Images/Frame.png'),
    frame1: require('../assets/Images/Frame1.png'),
    frame2: require('../assets/Images/Frame2.png'),
    user: require('../assets/Images/user.png'),
  };

  const courseImages = {
    user1: require('../assets/Images/Courseuser1.png'),
    user2: require('../assets/Images/user2.png'),
    user3: require('../assets/Images/user3.png'),
    user4: require('../assets/Images/user4.png'),
    user5: require('../assets/Images/Courseuser1.png'),
    star: require('../assets/Images/star.png'),
  };

  const courseList = [
    {id: '1', title: 'All Courses'},
    {id: '2', title: 'Mandatory'},
    {id: '3', title: 'Saved'},
    {id: '4', title: 'In-Progress'},
    {id: '5', title: 'Suggested'},
  ];

  const handlecourse = id => {
    console.warn(id);
    setselected(id);
  };
  const selectedImage = 'frame1';
  const [select, setselected] = useState();
  const [save, setsave] = useState();
  const handlesave = () => {
    navigation.navigate('Coursedetails');
  };

  const yes = width > height;
  return (
    <SafeAreaView style={{padding: 26}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{top: Platform.OS === 'ios' ? -80 : 0, height: 700}}>
        <View style={styles.header}>
          <View>
            {' '}
            <Image source={images.logo} style={styles.image} />{' '}
          </View>
          <View style={{justifyContent: 'center', flexDirection: 'row'}}>
            {' '}
            <Image
              source={images.frame1}
              style={{width: vR(17), height: rS(15), marginTop: 5}}
            />
            <Text style={{marginLeft: 10, marginTop: 3}}>4.5</Text>{' '}
          </View>
          <View style={{justifyContent: 'center', flexDirection: 'row'}}>
            <Image
              source={images.frame2}
              style={{width: 16, height: 16, marginTop: 5}}
            />
            <Text style={{marginLeft: 10, marginTop: 3}}>420 Points</Text>
          </View>
          <View>
            {' '}
            <Icon name="notifications" size={30} color="black" />{' '}
          </View>
          <View>
            {' '}
            <Image source={images.user} style={styles.user} />{' '}
          </View>
        </View>

        <View>
          <Text style={{fontWeight: 400, fontSize: rMS(26), top: 15}}>
            Courses
          </Text>
        </View>
        <View style={{marginTop: 30}}>
          <FlatList
            data={courseList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, id}) => (
              <TouchableOpacity onPress={() => handlecourse(item.id)}>
                <Text style={{marginLeft: yes ? 20 : 20}}>{item.title}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        </View>
        <ScrollView style={{paddingBottom: 150}}>
          <TouchableOpacity
            style={{
              width: '100%',
              height: width > height ? rS(170) : rS(107),
              backgroundColor: 'rgba(245, 249, 252, 1)',
              borderRadius: 20,
              top: 30,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}
            onPress={handlesave} // Ensure this is set
          >
            <View
              style={{
                height: yes ? rS(120) : rS(92),
                width: yes ? vR(120) : vR(94),
                backgroundColor: 'rgba(217, 240, 246, 1)',
                marginTop: yes ? 25 : 10,
                marginLeft: yes ? -60 : 10,
                borderRadius: 12,
                left: Platform.OS === 'ios' ? -20 : -3,
              }}>
              <Image
                source={courseImages.user1}
                style={{
                  height: yes ? rS(100) : rS(70),
                  width: yes ? rS(100) : rS(70),
                  left: rMS(15),
                  top: rS(10),
                }}
              />

              <Image
                source={courseImages.star}
                style={{
                  height: rS(20),
                  width: rS(20),
                  borderRadius: rMS(10),
                  position: 'absolute',
                  left: Platform.OS === 'ios' ? rMS(100) : rMS(80),
                  top: rMS(-5),
                }}
              />

              <View
                style={{
                  height: rS(28),
                  width: Platform.OS == 'ios' ? vR(27) : vR(28),
                  borderRadius: 100,
                  position: 'absolute',
                  backgroundColor: save ? 'gray' : 'rgba(11, 87, 207, 1)',
                  marginLeft: yes
                    ? rMS(600)
                    : Platform.OS === 'ios'
                    ? rMS(295)
                    : rMS(255),

                  top: yes ? rMS(100) : rMS(70),
                }}
                onPress={handlesave} // Ensure this is set
              >
                <View style={{justifyContent: 'center', alignSelf: 'center'}}>
                  <Icon
                    name="bookmark"
                    style={{
                      color: 'white',
                      top: rMS(4),
                    }}
                    size={Platform.OS == 'ios' ? 25 : 20}
                  />
                </View>
              </View>
            </View>

            <View>
              <Text
                style={{
                  marginTop: 30,
                  fontSize: Platform.OS === 'android' ? 15 : 17,
                  fontSize: yes ? 25 : Platform.OS === 'android' ? 15 : 17,
                  fontWeight: yes ? '500' : '400',
                }}>
                Self Esteem & Confidence
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    color: 'rgba(101, 101, 101, 1)',
                    fontSize: Platform.OS === 'android' ? 14 : 16,
                    fontWeight: '300',
                  }}>
                  22 Videos
                </Text>
                <Text style={styles.smalcolor}>|</Text>
                <Text style={styles.smalcolor}>20 Points</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: '100%',
              height: width > height ? rS(170) : rS(107),
              backgroundColor: 'rgba(245, 249, 252, 1)',
              borderRadius: 20,
              marginTop: 40,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}
            onPress={handlesave} // Ensure this is set
          >
            <View
              style={{
                height: yes ? rS(120) : rS(92),
                width: yes ? vR(120) : vR(94),
                backgroundColor: 'rgba(217, 240, 246, 1)',
                marginTop: yes ? 25 : 10,
                marginLeft: yes ? -60 : 10,
                borderRadius: 12,
                left: Platform.OS === 'ios' ? -20 : -3,
              }}>
              <Image
                source={courseImages.user1}
                style={{
                  height: yes ? rS(100) : rS(70),
                  width: yes ? rS(100) : rS(70),
                  left: rMS(15),
                  top: rS(10),
                }}
              />

              <Image
                source={courseImages.star}
                style={{
                  height: rS(20),
                  width: rS(20),
                  borderRadius: rMS(10),
                  position: 'absolute',
                  left: Platform.OS === 'ios' ? rMS(100) : rMS(80),
                  top: rMS(-5),
                }}
              />

              <View
                style={{
                  height: rS(28),
                  width: Platform.OS == 'ios' ? vR(27) : vR(28),
                  borderRadius: 100,
                  position: 'absolute',
                  backgroundColor: save ? 'gray' : 'rgba(11, 87, 207, 1)',
                  marginLeft: yes
                    ? rMS(700)
                    : Platform.OS === 'ios'
                    ? rMS(295)
                    : rMS(255),

                  top: yes ? rMS(100) : rMS(70),
                }}
                onPress={handlesave} // Ensure this is set
              >
                <View style={{justifyContent: 'center', alignSelf: 'center'}}>
                  <Icon
                    name="bookmark"
                    style={{
                      color: 'white',
                      top: rMS(4),
                    }}
                    size={Platform.OS == 'ios' ? 25 : 20}
                  />
                </View>
              </View>
            </View>

            <View>
              <Text
                style={{
                  marginTop: 30,
                  fontSize: Platform.OS === 'android' ? 15 : 17,
                  fontSize: yes ? 25 : Platform.OS === 'android' ? 15 : 17,
                  fontWeight: yes ? '500' : '400',
                }}>
                Self Esteem & Confidence
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    color: 'rgba(101, 101, 101, 1)',
                    fontSize: Platform.OS === 'android' ? 14 : 16,
                    fontWeight: '300',
                  }}>
                  22 Videos
                </Text>
                <Text style={styles.smalcolor}>|</Text>
                <Text style={styles.smalcolor}>20 Points</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: '100%',
              height: width > height ? rS(170) : rS(107),
              backgroundColor: 'rgba(245, 249, 252, 1)',
              borderRadius: 20,
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}
            onPress={handlesave} // Ensure this is set
          >
            <View
              style={{
                height: yes ? rS(120) : rS(92),
                width: yes ? vR(120) : vR(94),
                backgroundColor: 'rgba(217, 240, 246, 1)',
                marginTop: yes ? 25 : 10,
                marginLeft: yes ? -60 : 10,
                borderRadius: 12,
                left: Platform.OS === 'ios' ? -20 : -3,
              }}>
              <Image
                source={courseImages.user1}
                style={{
                  height: yes ? rS(100) : rS(70),
                  width: yes ? rS(100) : rS(70),
                  left: rMS(15),
                  top: rS(10),
                }}
              />

              <Image
                source={courseImages.star}
                style={{
                  height: rS(20),
                  width: rS(20),
                  borderRadius: rMS(10),
                  position: 'absolute',
                  left: Platform.OS === 'ios' ? rMS(100) : rMS(80),
                  top: rMS(-5),
                }}
              />

              <View
                style={{
                  height: rS(28),
                  width: Platform.OS == 'ios' ? vR(27) : vR(28),
                  borderRadius: 100,
                  position: 'absolute',
                  backgroundColor: save ? 'gray' : 'rgba(11, 87, 207, 1)',
                  marginLeft: yes
                    ? rMS(700)
                    : Platform.OS === 'ios'
                    ? rMS(295)
                    : rMS(255),

                  top: yes ? rMS(100) : rMS(70),
                }}
                onPress={handlesave} // Ensure this is set
              >
                <View style={{justifyContent: 'center', alignSelf: 'center'}}>
                  <Icon
                    name="bookmark"
                    style={{
                      color: 'white',
                      top: rMS(4),
                    }}
                    size={Platform.OS == 'ios' ? 25 : 20}
                  />
                </View>
              </View>
            </View>

            <View>
              <Text
                style={{
                  marginTop: 30,
                  fontSize: Platform.OS === 'android' ? 15 : 17,
                  fontSize: yes ? 25 : Platform.OS === 'android' ? 15 : 17,
                  fontWeight: yes ? '500' : '400',
                }}>
                Self Esteem & Confidence
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    color: 'rgba(101, 101, 101, 1)',
                    fontSize: Platform.OS === 'android' ? 14 : 16,
                    fontWeight: '300',
                  }}>
                  22 Videos
                </Text>
                <Text style={styles.smalcolor}>|</Text>
                <Text style={styles.smalcolor}>20 Points</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: '100%',
              height: width > height ? rS(170) : rS(107),
              backgroundColor: 'rgba(245, 249, 252, 1)',
              borderRadius: 20,
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}
            onPress={handlesave} // Ensure this is set
          >
            <View
              style={{
                height: yes ? rS(120) : rS(92),
                width: yes ? vR(120) : vR(94),
                backgroundColor: 'rgba(217, 240, 246, 1)',
                marginTop: yes ? 25 : 10,
                marginLeft: yes ? -60 : 10,
                borderRadius: 12,
                left: Platform.OS === 'ios' ? -20 : -3,
              }}>
              <Image
                source={courseImages.user1}
                style={{
                  height: yes ? rS(100) : rS(70),
                  width: yes ? rS(100) : rS(70),
                  left: rMS(15),
                  top: rS(10),
                }}
              />

              <Image
                source={courseImages.star}
                style={{
                  height: rS(20),
                  width: rS(20),
                  borderRadius: rMS(10),
                  position: 'absolute',
                  left: Platform.OS === 'ios' ? rMS(100) : rMS(80),
                  top: rMS(-5),
                }}
              />

              <View
                style={{
                  height: rS(28),
                  width: Platform.OS == 'ios' ? vR(27) : vR(28),
                  borderRadius: 100,
                  position: 'absolute',
                  backgroundColor: save ? 'gray' : 'rgba(11, 87, 207, 1)',
                  marginLeft: yes
                    ? rMS(700)
                    : Platform.OS === 'ios'
                    ? rMS(295)
                    : rMS(255),

                  top: yes ? rMS(100) : rMS(70),
                }}
                onPress={handlesave} // Ensure this is set
              >
                <View style={{justifyContent: 'center', alignSelf: 'center'}}>
                  <Icon
                    name="bookmark"
                    style={{
                      color: 'white',
                      top: rMS(4),
                    }}
                    size={Platform.OS == 'ios' ? 25 : 20}
                  />
                </View>
              </View>
            </View>

            <View>
              <Text
                style={{
                  marginTop: 30,
                  fontSize: Platform.OS === 'android' ? 15 : 17,
                  fontSize: yes ? 25 : Platform.OS === 'android' ? 15 : 17,
                  fontWeight: yes ? '500' : '400',
                }}>
                Self Esteem & Confidence
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    color: 'rgba(101, 101, 101, 1)',
                    fontSize: Platform.OS === 'android' ? 14 : 16,
                    fontWeight: '300',
                  }}>
                  22 Videos
                </Text>
                <Text style={styles.smalcolor}>|</Text>
                <Text style={styles.smalcolor}>20 Points</Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </ScrollView>
      <Search
        onPress={() => navigation.navigate('Searchscreen')}
        navigation={navigation}
        width={width}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: rS(25),
    height: vR(25),
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    // marginTop:rMS()
  },
  marginperoperty: {},
  smalcolor: {
    color: 'rgba(101, 101, 101, 1)',
    marginLeft: 10,
    fontSize: Platform.OS === 'android' ? 14 : 16,
    fontWeight: 300,
  },
});

export default Courses;
