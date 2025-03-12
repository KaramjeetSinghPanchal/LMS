import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../Components/Header';
import {useRoute} from '@react-navigation/native';
import {ProgressBar, Button} from 'react-native-paper';
import {quizData} from '../Components/Questions';

const Quiz = ({navigation}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null); // Track selected option
  const [isOptionSelected, setIsOptionSelected] = useState(false); // Disable buttons after selection

  const route = useRoute();

  const handleAnswer = selectedAnswer => {
    setSelectedOption(selectedAnswer); // Update selected option
    setIsOptionSelected(true); // Disable buttons

    const correctAnswer = quizData[currentQuestion].correctAnswer;
    if (selectedAnswer === correctAnswer) {
      setScore(score + 1); // Increment score if correct
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < quizData.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedOption(null); // Reset selected option
        setIsOptionSelected(false); // Enable buttons for the next question
      } else {
        setShowScore(true); // Show score at the end
      }
    }, 1000); // 1-second delay
  };

  const nextquestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null);
      setIsOptionSelected(false);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null); // Reset selected option
    setIsOptionSelected(false); // Enable buttons
  };

  const getOptionStyle = option => {
    if (selectedOption === option) {
      return {
        backgroundColor: '#E3F1FC', // Change color for selected option
        borderColor: '#0B57CF', // Add border color for selected option
      };
    }
    return {
      backgroundColor: '#D6D6D6', // Default color for unselected options
      borderColor: '#D6D6D6', // Default border color
    };
  };

  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <Header
          name={'Quiz'}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <ScrollView>
          <View style={{padding: 15}}>
            <Text style={{fontSize: 20, fontWeight: '400', marginLeft: 15}}>
              POSH - Quiz
            </Text>

            <View
              style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '500',
                  marginTop: 18,
                  marginLeft: 15,
                }}>
                Quiz Process
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '500',
                  marginTop: 18,
                  marginRight: 15,
                }}>
                {Math.round((currentQuestion / quizData.length) * 100)} %
              </Text>
            </View>

            <View style={{margin: 15, marginTop: 10}}>
              <ProgressBar
                progress={(currentQuestion + 1) / quizData.length} // Corrected progress calculation
                style={{borderRadius: 10, height: 10}}
                color={'#0B57CF'}
              />
            </View>

            <View>
              <Text style={{fontSize: 14, fontWeight: 400, color: '#555555'}}>
                {currentQuestion + 1} out of {quizData.length} questions
              </Text>
            </View>

            <View style={styles.container}>
            
                <View>
                  <Text style={styles.questionText}>
                    {quizData[currentQuestion].question}
                  </Text>
                  {quizData[currentQuestion].options.map((option, index) => (
                    <Button
                      key={index}
                      mode="contained"
                      style={[
                        styles.optionButton,
                        getOptionStyle(option), // Apply dynamic styles
                      ]}
                      onPress={() => handleAnswer(option)}
                      disabled={isOptionSelected} // Disable buttons after selection
                    >
                      <Text style={{color: '#1D1D1D'}}>{option}</Text>
                    </Button>
                  ))}
                </View>
      
            </View>
          </View>
        </ScrollView>

        {/* <TouchableOpacity
          style={[
            styles.button,
            {backgroundColor: isOptionSelected ? '#D6D6D6' : '#0B57CF'},
          ]}
          onPress={nextquestion}
          disabled={!isOptionSelected}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity> */}

        {console.warn('checking', currentQuestion + 1, quizData.length)}

        {currentQuestion + 1 === quizData.length ? (
          <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Quizresult',{score:score,quizData:quizData.length
          })}>
            <Text style={styles.buttonText}>Finish</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={nextquestion}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        )}
      </SafeAreaView>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  questionText: {
    fontSize: 20,
    fontWeight: 400,
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  optionButton: {
    marginVertical: 5,
    height: 42,
    borderRadius: 10,
    borderWidth: 3,
    justifyContent: 'center',
  },
  button: {
    width: '90%',
    backgroundColor: 'rgba(11, 87, 207, 1)',
    height: 45,
    borderRadius: 10,
    bottom: 70,
    left: 25,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    marginRight: 50,
  },
  buttonText: {
    color: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  containerr: {
    bottom: 0,
  },
});
