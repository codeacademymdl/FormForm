import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    width: '70%',
    height: 200,
    marginTop: 10,
    marginBottom: 10,
  },
  content: {
    color: 'black',
    fontSize: 30,
    marginLeft: 10,
  },
  bottomView: {
    marginTop: '30%',
    borderTopWidth: 2,
    borderTopColor: 'black',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: 10,

  },
  bottomText: {
    fontSize: 15,
  },
});
