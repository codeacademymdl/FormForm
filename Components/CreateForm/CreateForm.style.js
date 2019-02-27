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
  footer: {

    flexDirection: 'column',
    backgroundColor: '#4154af',
    height: 50,
    alignItems: 'center',
    width: '100%',
    marginTop: '95%',
    // justifyContent: 'center',


  },
  footerContent: {
    fontSize: 20,
    padding: 20,
    // marginBottom: 20,

    color: 'white',


  },
});
