import React, { useState, useEffect } from "react";
import { Text, View, Image, Pressable, Modal, Alert, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { myLike } from "../../redux/actions";

export const DetailScreen = ({ navigation, route }: any) => {
      const [comment, setComment] = useState(null);
      const [item, Setitem] = useState(null);
      const [modal, setModal] = useState(false);

      const dispatch = useDispatch();

      useEffect(() => {
            Setitem(route.params.item)
      })

      return <SafeAreaView style={[styles.container]}>
            <View style={{ flex: 1, marginTop: 10 }}>
                  <Text style={{ marginVertical: 20, marginHorizontal: 20 }}>{item?.post}</Text>
                  <Image source={require('../../img/user.jpeg')} style={{ height: 150, width: 400, alignSelf: 'center' }} resizeMode={'contain'} />
                  <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
                        {item?.likes ?
                              <Pressable onPress={() => dispatch(myLike(item.id))}>
                                    <Image source={require('../../img/like.jpeg')} style={{ height: 35, width: 35, top: 5, left: 5 }} resizeMode={'contain'} />
                              </Pressable>
                              :
                              null
                        }
                        <Text style={{ left: 5, top: 15 }}>{item?.likes}</Text>
                        <Pressable onPress={() => setComment(item.id)}>
                              <Image source={require('../../img/comment.png')} style={{ height: 45, width: 45 }} />
                        </Pressable>
                        <View style={{ flexDirection: 'row', flex: 1, right: 20, alignItems: 'center', justifyContent: 'flex-end' }}>
                              <Pressable onPress={() => navigation.navigate('DetailScreen', { item: item })}>
                                    <Image source={require('../../img/reply.png')} style={{ alignContent: 'flex-end', height: 20, width: 20 }} />
                              </Pressable>
                        </View>
                        <Text style={{ alignSelf: 'center', right: 10 }}>Reply</Text>
                  </View>
                  <Text style={{ left: 20 }}>{item?.comment}</Text>
                  <Pressable onPress={() => null}>
                        <Image source={require('../../img/like.jpeg')} style={{ height: 15, width: 15, top: 5, left: 30 }} resizeMode={'contain'} />
                  </Pressable>
                  <Pressable onPress={() => setModal(!modal)} style={{ alignItems: 'flex-end', right: 20, bottom: 20 }}>
                        <Image source={require('../../img/dots.png')} style={{ alignItems: 'flex-end', height: 20, width: 20 }} />
                  </Pressable>
                  <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modal}
                        onRequestClose={() => {
                              Alert.alert("Modal has been closed.");
                              setModal(!modal);
                        }}>
                        <View style={styles.centeredView}>
                              <View style={styles.modalView}>
                                    <Text style={styles.modalText}>Edit</Text>
                                    <Pressable onPress={() => null}>
                                          <Text style={styles.modalText}>Detele</Text>
                                    </Pressable>
                                    <Pressable
                                          style={[styles.button, styles.buttonClose]}
                                          onPress={() => setModal(!modal)}>
                                          <Text style={styles.textStyle}>Hide Modal</Text>
                                    </Pressable>
                              </View>
                        </View>
                  </Modal>
            </View>
      </SafeAreaView>
}
const styles = StyleSheet.create({
      container: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
      },
      input: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            maxWidth: 300
      },
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
      buttonOpen: {
            backgroundColor: "#F194FF",
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
      }
});