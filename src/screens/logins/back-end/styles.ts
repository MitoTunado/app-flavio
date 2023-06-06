import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  background:{
    alignItems: 'center',
    height: '100%',
  }, 
  container: {
    marginTop: 70,
    width: '90%',
    //backgroundColor: '#FA3F30',
    height: '100%',
  },
  title: {
    marginBottom: 50,
  },
  titleText:{
    color: '#94477F', 
    fontSize: 26,
    fontFamily: 'inter',
    fontWeight: 'bold',  
  },
  titleText2:{
    color: '#4C4E52',
    fontSize: 26,
    fontFamily: 'inter',
    fontWeight: 'bold',  
  },
  titleDescription: {
    color: '#9BA0AA',
    fontSize: 12,
    fontFamily: 'inter',
    marginBotton: 100,
    paddingBottom: 40,
  },
  welcomeBack: {
    padding: 12,
    paddingEnd: 15,
    alignItems: "center"
   },

  welcome: { 
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  description: { 
    fontSize: 16,
    color: '#777',
    fontWeight: 'bold',
  },
  btnSubmitAluno:{
    backgroundColor: '#B4A761',
    width: '100%',
    height: 81,
    alignItems: 'center', 
    justifyContent: 'center',
    borderRadius: 5.35,
  },
  submitTextAluno:{
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'inter',
    fontWeight: 'bold', 
  },
  btnSubmitCantina:{
    backgroundColor: '#B4A761',
    width: '100%',
    height: 81,
    alignItems: 'center', 
    justifyContent: 'center',
    borderRadius: 5.35,
  },
  submitTextCantina:{
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'inter',
    fontWeight: 'bold', 
  },
  btnSubmitAdmin:{
    backgroundColor: '#B4A761',
    width: '100%',
    height: 81,
    justifyContent: 'center',
    alignItems: 'center', 
    borderRadius: 5.35,
  },
  submitTextAdmin:{
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'inter',
    fontWeight: 'bold', 
  },
  box:{
    padding: 12,
    paddingEnd: 15,
    justifyContent: "space-between",
    marginTop: 40,
    flex: 0.60,
  },
})