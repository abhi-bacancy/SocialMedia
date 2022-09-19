import React, { useState, useEffect } from "react";
import { FlatList, Image, Pressable, Text, View, StyleSheet, Modal, Alert } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { styled } from "./home-style";
import { TextInput } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import { deleteComment, myComment, myLike, requestUsers } from "../../redux/actions";
import ViewMoreText from 'react-native-view-more-text';

export const Home = ({ navigation, route }: any) => {

      const [comment, setComment] = useState(null);
      const [value, setValue] = useState(null);
      const [editValue, setEditValue] = useState(null);
      const [modal, setModal] = useState(false);
      const { usersData, isLoading } = useSelector((state) => state);

      const dispatch = useDispatch();

      useEffect(() => {
            dispatch(requestUsers());
      }, []);

      const onPost = (id) => {
            if (value !== null) {
                  setComment(null),
                        setValue(null),
                        dispatch(myComment(value, id))
            }
      }

      const onChangeText = (text) => {
            setValue(text)
      }

      const renderViewMore = (onPress) => {
            return <Text onPress={onPress}>View more</Text>
      }

      const renderViewLess = (onPress) => {
            return <Text onPress={onPress}>View less</Text>
      }

      return <SafeAreaView style={[styled.container]}>
            <FlatList
                  data={usersData}
                  renderItem={({ item }: any) => (
                        <View style={styled.viewHome}>
                              <Image source={require('../../img/profile.jpeg')} style={styled.img} resizeMode={'contain'} />
                              <View style={{ flexDirection: 'column' }}>
                                    <Text style={styled.txtName}> {item.name}</Text>
                                    <Text style={styled.time}> {item.timeStamp}</Text>
                              </View>
                              <Text style={styled.post}>{item.post}</Text>
                              <View style={styled.divider} />
                              <View style={styled.viewDetail}>
                                    {item.likes == 1 || item.likes > 1 ?
                                          <Pressable onPress={() => dispatch(myLike(item.id))} style={styled.press}>
                                                <Image source={require('../../img/like.jpeg')} style={styled.imgLike} resizeMode={'contain'} />
                                                <Text style={styled.txtLike}>{item.likes}</Text>
                                          </Pressable>
                                          :
                                          <Pressable onPress={() => dispatch(myLike(item.id))}>
                                                <Image source={require('../../img/dislike.jpeg')} style={styled.imgCommon} />
                                          </Pressable>
                                    }
                                    <Pressable onPress={() => setComment(item.id)} style={styled.pressOne}>
                                          <Image source={require('../../img/comment.png')} style={styled.imgCommon} />
                                    </Pressable>
                                    <Text style={styled.txtLength}>{item.comment.length}</Text>
                                    <View style={styled.replyView}>
                                          <Pressable onPress={() => navigation.navigate('DetailScreen', { item: item })}>
                                                <Image source={require('../../img/reply.png')} style={styled.reply} />
                                          </Pressable>
                                    </View>
                                    <Text style={styled.txtReply}>Reply</Text>
                              </View>

                              <View style={styled.viewComment}>
                                    {comment === item.id ?

                                          <TextInput
                                                style={styles.input}
                                                editable={true}
                                                onChangeText={(text) => onChangeText(text)}
                                                value={value != null ? value : editValue}
                                                placeholder="Enter Comment's"
                                                keyboardType="default"
                                                returnKeyType="done"
                                          /> : null}
                                    {comment === item.id ? <Pressable onPress={() => onPost(item.id)} style={styled.postPress}>
                                          <Text style={styled.txtPost}>Post</Text>
                                    </Pressable> : null}
                              </View>

                              {item.comment.map(data => {
                                    return <View style={styled.viewMore}>
                                          <ViewMoreText
                                                numberOfLines={3}
                                                renderViewMore={renderViewMore}
                                                renderViewLess={renderViewLess}
                                                textStyle={styled.txtCmt}>
                                                <Text style={styled.data}>
                                                      {data}
                                                </Text>
                                          </ViewMoreText>
                                          <View style={styled.viewDot}>

                                                <Pressable onPress={() => setModal(!modal)}>
                                                      <Image source={require('../../img/dots.png')} style={styled.imgDot} />
                                                </Pressable>
                                          </View>

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
                                                            <Pressable onPress={() => null}>
                                                                  <Text style={styles.modalText}>Edit</Text>
                                                            </Pressable>
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
                              })}
                        </View>
                  )}
            />
      </SafeAreaView>
}
const styles = StyleSheet.create({
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