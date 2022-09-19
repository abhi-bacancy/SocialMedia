import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white'
    },
    viewDetail:{ flex: 1, marginTop: 10 },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
  },
  modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
              width: 0,
              height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
  },
  button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
  },
  buttonClose: {
        backgroundColor: "#2196F3",
  },
  textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
  },
  modalText: {
        marginBottom: 15,
        textAlign: "center"
  },
  txtPOst:{ marginVertical: 20, marginHorizontal: 20 },
  userName: { height: 150, width: 400, alignSelf: 'center' },
  viewLike:{ flexDirection: 'row', marginHorizontal: 10 },
  likeImg:{ height: 35, width: 35, top: 5, left: 5 },
  txtLike:{ left: 5, top: 15 },
  imgComment:{ height: 45, width: 45 },
  viewReply:{ flexDirection: 'row', flex: 1, right: 20, alignItems: 'center', justifyContent: 'flex-end' },
  view:{ alignContent: 'flex-end', height: 20, width: 20 },
  txtReply:{ alignSelf: 'center', right: 10 },
  txtCOmmet:{ left: 20 },
  likeImg1:{ height: 15, width: 15, top: 5, left: 30 },
  pressView:{ alignItems: 'flex-end', right: 20, bottom: 20 },
  imgDots:{ alignItems: 'flex-end', height: 20, width: 20 },

})