import React from "react";
import { View, StyleSheet, Text, Modal } from "react-native";
import CustomButton from "./CustomButton";
import { COLORS } from "../../assets";
import Sun from "./Sun";

const ModalTodo = ({ modalVisible, toDo, setModalVisible }) => {
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => 
          setModalVisible()
        }
      >
        <View style={styles.overlay}>
          <View style={styles.modalView}>
            {toDo === '' ? '' : 
            (
                <>
                <View style={styles.taskName}>
                  <Sun />
                  <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
                    {toDo.name}
                  </Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, padding: 10}}>
                    <Text style={{ color: "white", fontWeight: "bold", fontSize:10}}>ID:</Text>
                    <Text style={{fontSize:10, color: 'white'}}>{toDo.id}</Text>
                </View>
                <View style={styles.dosView}>
                  <View style={styles.lineaView}>
                    <Text style={{ color: "white", fontWeight: "bold" }}>Created at:</Text>
                    <Text style={styles.whiteText}>{toDo.created}</Text>
                  </View>
                  <View style={styles.lineaView}>
                    <Text style={{ color: "white", fontWeight: "bold" }}>Modified at:</Text>
                    <Text style={styles.whiteText}>
                      {toDo.modified === "" ? "Not modified" : toDo.modified}
                    </Text>
                  </View>
                  <View style={styles.lineaView}>
                    <Text style={{ color: "white", fontWeight: "bold" }}>Status:</Text>
                    <Text style={styles.whiteText}>
                      {toDo.isCompleted ? "IS COMPLETED" : "NOT COMPLETED"}
                    </Text>
                  </View>
                  <View style={{ width: "100%", alignItems: "center" }}>
                    <CustomButton text={"eyeo"} light width={40} onPress={() => setModalVisible()} />
                  </View>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: COLORS.backgroundColor,
    borderColor: COLORS.borderColor,
    borderWidth: 1,
    borderRadius: 20,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    justifyContent: "flex-start",
  },
  dosView: {
    padding: 35,
    paddingTop: 10,
    gap: 10,
  },
  whiteText: {
    color: "white",
  },
  lineaView: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: COLORS.backgroundColor,
    borderWidth: 2,
    borderColor: COLORS.borderColor,
    borderRadius: 5,
    padding: 5,
  },
  taskName: {
    borderColor: COLORS.borderColor,
    backgroundColor: COLORS.borderColor,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    gap: 10,
  },
});

export default ModalTodo;