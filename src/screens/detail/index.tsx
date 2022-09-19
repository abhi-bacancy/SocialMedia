import React, { useState, useEffect } from "react";
import { Text, View, Image, Pressable, Modal, Alert, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { myLike } from "../../redux/actions";
import { styles } from "./detail-style";

export const DetailScreen = ({ navigation, route }: any) => {
      const [comment, setComment] = useState(null);
      const [item, Setitem] = useState(null);
      const [modal, setModal] = useState(false);

      const dispatch = useDispatch();

      useEffect(() => {
            Setitem(route.params.item)
      })

      return <SafeAreaView style={[styles.container]}>
            <View style={styles.viewDetail}>
                  <Text style={styles.txtPOst}>{item?.post}</Text>
                  <Image source={require('../../img/user.jpeg')} style={styles.userName} resizeMode={'contain'} />
                  <View style={styles.viewLike}>
                        {item?.likes ?
                              <Pressable onPress={() => dispatch(myLike(item.id))}>
                                    <Image source={require('../../img/like.jpeg')} style={styles.likeImg} resizeMode={'contain'} />
                              </Pressable>
                              :
                              null
                        }
                        <Text style={styles.txtLike}>{item?.likes}</Text>
                        <Pressable onPress={() => setComment(item.id)}>
                              <Image source={require('../../img/comment.png')} style={styles.imgComment} />
                        </Pressable>
                        <View style={styles.viewReply}>
                              <Pressable onPress={() => navigation.navigate('DetailScreen', { item: item })}>
                                    <Image source={require('../../img/reply.png')} style={styles.view} />
                              </Pressable>
                        </View>
                        <Text style={styles.txtReply}>Reply</Text>
                  </View>
                  <Text style={styles.txtCOmmet}>{item?.comment}</Text>
                  <Pressable onPress={() => null}>
                        <Image source={require('../../img/like.jpeg')} style={styles.likeImg1} resizeMode={'contain'} />
                  </Pressable>
                  <Pressable onPress={() => setModal(!modal)} style={styles.pressView}>
                        <Image source={require('../../img/dots.png')} style={styles.imgDots} />
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