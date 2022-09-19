import {StyleSheet} from 'react-native';

export const styled = StyleSheet.create({
      container:{
            flex:1,
            alignItems:"center",
            justifyContent:"center"
      },
      viewHome: { flex: 1, marginHorizontal: 150, alignContent: 'flex-start', right: 100 },
      img: { height: 30, width: 30, borderRadius: 15, alignSelf: 'flex-start', right: 40, top: 25 },
      txtName: { fontWeight: 'bold', fontSize: 14, width: 200 },
      time: { fontWeight: 'bold', fontSize: 10 },
      post: { marginTop: 20, width: 300 },
      divider: { height: 0.5, width: 300, backgroundColor: 'brown', marginTop: 20 },
      viewDetail: { flexDirection: 'row', marginHorizontal: 10 },
      press: { flexDirection: 'row', justifyContent: 'center' },
      imgLike: { height: 35, width: 35, top: 5, },
      txtLike: { color: 'red', top: 12, },
      imgCommon: { height: 45, width: 45 },
      pressOne:{ height: 45, width: 45, marginHorizontal: 10 },
      txtLength: { top: 12, right: 10 },
      replyView:{ flexDirection: 'row', flex: 1, right: 20, alignItems: 'center', justifyContent: 'flex-end' },
      reply: { alignContent: 'flex-end', height: 20, width: 20 },
      txtReply:{ alignSelf: 'center', right: 10 },
      viewComment: { flexDirection: 'row' },
      postPress: { alignSelf: 'center' },
      txtPost: { textAlign: 'center', alignSelf: 'center' },
      viewMore: { flexDirection: 'row', justifyContent: 'space-between' },
      txtCmt:{ textAlign: 'center', maxWidth: 350, marginHorizontal: 10, },
      data: { textAlign: 'left' },
      viewDot:{ flexDirection: 'column', },
      imgDot:{ bottom: 10, height: 30, width: 30 },
      
})