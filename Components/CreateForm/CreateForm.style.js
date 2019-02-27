import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',

  },
  buttonContainer: {
    margin: 20,

    flexDirection: 'row',
    justifyContent: 'flex-end',


  },
  box: {
    borderBottomWidth: 2,
    borderBottomColor: '#f5f5f6',
    // borderTopWidth:1,
    marginTop: 10,
  },
  button: {

    backgroundColor: '#4154af',
    padding: 10,
    height: 35,
    width: 100,

    alignItems: 'center',

  },
  text: {
    color: 'white',
  },
});
