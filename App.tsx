import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  Button, 
  FlatList, 
  TouchableOpacity, 
  Modal, 
  TextInput,
  StyleSheet ,
  ScrollView
} from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [confirmedName, setConfirmedName] = useState('');

  const confirmUsername = () => {
  setConfirmedName(username); // Set the confirmed name
 };

  // Example list of PS4 controller parts
  const controllerParts = [
    { key: 'Analog Stick' },
    { key: 'D-Pad' },
    { key: 'Triggers (L2/R2)' },
    { key: 'Bumpers (L1/R1)' },
    { key: 'Face Buttons (X, O, Square, Triangle)' },
  ];




  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
        <Text style={styles.header}> PS4 Controller Parts Demo</Text>
        <Text style={styles.subText}>
          This app provides some information on ps4 controllers.
        </Text>

        {/* IMAGE DISPLAYED */}
        <Image 
          source={require('./assets/ps4_controller.jpg')}
          style={[styles.image, { backgroundColor: "#066a5eff" }]}
        />
        <Text style={styles.caption}>Image component displaying a PS4 controller.</Text>

        {/* FLATLIST */}
        <Text style={styles.listTitle}>Controller Parts</Text>
        <FlatList 
          data={controllerParts}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text style={styles.listText}>{item.key}</Text>
            </View>
          )}
        />
        <Text style={styles.caption}> FlatList displaying controller parts.</Text>

        {/* TOUCHABLEOPACITY */}
        <TouchableOpacity 
          style={styles.touchButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.touchButtonText}>SHOW HOW TO PUT CONNECT CONTROLLER</Text>
        </TouchableOpacity>
        <Text style={styles.caption}> TouchableOpacity that opens a Modal.</Text>

        {/* MODAL */}
        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalBox}>
              <Text style={styles.modalText}>Press Ps button on controller to connect to Ps console via bluetooth.</Text>
              <Button title="Close" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>

        {/* TEXTINPUT + BUTTON */}
        <Text style={styles.listTitle}>Enter your PS Name</Text>
        <TextInput 
          style={styles.input}
          placeholder="Type your gaming name..."
          value={username}
          onChangeText={setUsername}
        />
        <Button title="Confirm Username"  onPress={confirmUsername} />
        <Text style={styles.caption}>Button confirms and displays your gaming name.</Text>
       {confirmedName !== '' && (
       <Text style={styles.confirmedText}>Your gaming name is: {confirmedName}</Text>
        )}
      </View> 
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000ff',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 60,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  subText: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 15,
    color: 'white',
  },
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  caption: {
    fontSize: 12,
    marginBottom: 15,
    textAlign: 'center',
    color: 'white',
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 8,
    color: 'white',
  },
  listItem: {
    padding: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 8,
    width: 250,
    alignItems: 'center',
    elevation: 2,
  },
  listText: {
    fontSize: 14,
  },
  touchButton: {
    backgroundColor: "#066a5eff",
    padding: 12,
    borderRadius: 8,
    marginTop: 15,
    marginBottom: 10,
  },
  touchButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.99)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    width: 280,
    alignItems: 'center',
  },

  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    width: 250,
    padding: 10,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  confirmedText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#21ebd3ff",
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },

});
