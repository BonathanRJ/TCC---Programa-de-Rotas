// Styles
const styles = {
    container: {
      flex: 1,
    },
    container_register:{
      flexDirection: 'row',
      alignItems: 'center',
    },
    backButton: {
      padding: 10,
      justifyContent: 'center',
    },
    register_icon:{
      width: 150,
      height: 150,
      alignSelf: 'flex-start',
      margin: 30,
    },
    join_text:{
      fontSize: 24,
      fontWeight: 'bold',
      alignSelf: 'center',
      margin: 5,
    },
    container_input:{
      alignItems: 'center',
    },
    inputContainer: {
      width: '80%',
      height: 55,
      marginBottom: 10,
      paddingLeft: 10,
      borderRadius: 15,
      backgroundColor: '#9cdde6',
      margin: 8,
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center'
    },
    inputIcon: {
      width: 24,
      height: 24,
      marginRight: 10,
    },
    input: {
      flex: 1,
    },
    button: {
      backgroundColor: '#0c97ed', 
      borderRadius: 30,
      padding: 13,
      width: '60%',
      alignItems: 'center',
      margin: 15,
      alignSelf: 'center'
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
  
    },
    error_container:{
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
      
    },
    error_transparent:{
      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    error_msg:{
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 20,
      alignItems: 'center',
      elevation: 10,
      
    },
    error_title:{
      color: '#0c97ed', 
      fontSize: 22,
      fontWeight: 'bold',
    },
    error_sub_title:{
      color: 'gray', 
      fontSize: 16,
      marginTop: 10 ,
    },
    error_button:{
      backgroundColor: '#0c97ed',
      paddingVertical: 15,
      paddingHorizontal: 45,
      alignItems: 'center',
      marginTop: 25,
      marginBottom: 10,
      borderRadius: 15
    },
    error_text:{
      color: 'white', 
      fontSize: 20, 
      fontWeight: 'bold',
    },
};

export default styles;