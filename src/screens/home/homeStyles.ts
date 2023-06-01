import { StyleSheet } from "react-native"

export const homeStyles = StyleSheet.create({
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
    marginBottom: 200,
  },
  titleText:{
    color: '#61B482', 
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
    fontSize: 11,
    fontFamily: 'inter',
    marginBotton: 100,
  },
  btnSubmitAluno:{
    backgroundColor: '#61B482',
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
    backgroundColor: '#94477F',
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
    flex: 0.60,
    justifyContent: "space-between",
    marginTop: 150,
  },

})