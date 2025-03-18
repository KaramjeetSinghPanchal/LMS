import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

export const rS = (size) => {
  return scale(size);
};

export const vR = (size) =>{
    return verticalScale(size);
};
 
export const rMS = (size) =>{
    return moderateScale(size);
}