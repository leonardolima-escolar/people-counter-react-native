import { StyleSheet, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5260c5',
    paddingTop: StatusBar.currentHeight,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 12,
    paddingHorizontal: 12,
  },

  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },

  counterView: {
    backgroundColor: '#fff',
    width: '60%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginTop: 32,
  },

  count: {
    fontSize: 32,
    fontWeight: 'bold',
  }
});
