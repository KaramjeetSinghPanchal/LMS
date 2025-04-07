import React, { useState, useEffect } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  Alert,
  useWindowDimensions,
  ActivityIndicator,
} from 'react-native';
import { rS, vR, rMS } from '../Components/Responsive';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { getCourses, updateCourseSavedStatus } from '../apiclient/api';

const Allcourses = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  const yes = width > height;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [savingId, setSavingId] = useState(null); // Track which course is being saved

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const params = {
        search: '',
        language_id: '',
        category_id: '',
      };

      const response = await getCourses(params);
      const coursesWithSavedStatus = response.data.results.map(course => ({
        ...course,
        saved: course.is_saved || false // Use API's saved status if available
      }));
      setData(coursesWithSavedStatus);
    } catch (err) {
      console.error('Fetch error:', err);
      setError(err.message || 'Failed to fetch courses');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleSave = async (item) => {
    try {
      setSavingId(item.id);
      
      // Optimistically update UI
      setData(prevData => 
        prevData.map(course => 
          course.id === item.id 
            ? { ...course, saved: !course.saved } 
            : course
        )
      );
      
      // Call API - will only make request when saving
      await updateCourseSavedStatus(item.id, !item.saved);
      
    } catch (err) {
      // Revert UI if API call fails
      setData(prevData => 
        prevData.map(course => 
          course.id === item.id 
            ? { ...course, saved: item.saved } 
            : course
        )
      );
      Alert.alert('Error', 'Failed to update saved status');
      console.error('Save error:', err);
    } finally {
      setSavingId(null);
    }
  };

  const courseImages = {
    user1: require('../assets/Images/Courseuser1.png'),
    star: require('../assets/Images/star.png'),
  };

  if (loading && data.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text>
        <TouchableOpacity onPress={fetchCourses}>
          <Text style={{ color: 'blue' }}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={{
            width: '100%',
            height: width > height ? rS(170) : rS(107),
            backgroundColor: 'rgba(245, 249, 252, 1)',
            borderRadius: 20,
            marginTop: 30,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
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
            }}
          >
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

            <TouchableOpacity
              style={{
                height: rS(28),
                width: Platform.OS == 'ios' ? vR(27) : vR(28),
                borderRadius: 100,
                position: 'absolute',
                backgroundColor: item.saved ?  'rgba(11, 87, 207, 1)':'gray' ,
                marginLeft: yes
                  ? rMS(600)
                  : Platform.OS === 'ios'
                  ? rMS(295)
                  : rMS(255),
                top: yes ? rMS(100) : rMS(70),
              }}
              onPress={() => handleSave(item)}
              disabled={savingId === item.id}
            >
              <View style={{ justifyContent: 'center', alignSelf: 'center' }}>
                
                  <Icon
                    name={item.saved ? "bookmark" : "bookmark-outline"}
                    style={{
                      color: 'white',
                      top: rMS(4),
                    }}
                    size={Platform.OS == 'ios' ? 25 : 20}
                  />
             
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <Text
              style={{
                marginTop: 30,
                fontSize: yes ? 25 : Platform.OS === 'android' ? 15 : 17,
                fontWeight: yes ? '500' : '400',
              }}
            >
              {item?.translation?.title}
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text
                style={{
                  color: 'rgba(101, 101, 101, 1)',
                  fontSize: Platform.OS === 'android' ? 14 : 16,
                  fontWeight: '300',
                  marginTop: 10,
                }}
              >
                22 Videos
              </Text>
              <Text style={{ marginHorizontal: 10 }}>|</Text>
              <Text
                style={{
                  color: 'rgba(101, 101, 101, 1)',
                  fontSize: Platform.OS === 'android' ? 14 : 16,
                  fontWeight: '300',
                  marginTop: 10,
                }}
              >
                20 Points
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
      ListEmptyComponent={<Text>No courses available</Text>}
      contentContainerStyle={{ paddingBottom: 20 }}
    />
  );
};

export default Allcourses;

const styles = StyleSheet.create({});