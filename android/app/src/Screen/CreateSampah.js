import React, { useState } from 'react';
import { SafeAreaView, View, ScrollView, TextInput, Button, StyleSheet, Text, color, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faTrash, faLocation, faPlusSquare } from "@fortawesome/free-solid-svg-icons";

const CreateSampah = () => {
  const [first_name, setFirstName] = useState('');
  const [jenis_sampah, setSampah] = useState('');
  const [alamat, setAlamat] = useState('');
  const [keterangan, setKeterangan] = useState('');
  const [tingkatan, setTingkatan] = useState('');
  const [foto, setFoto] = useState(null);

  const pickImage = () => {
    const options = {
      mediaType: 'photo',
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.assets && response.assets.length > 0) {
        const source = response.assets[0];
        setFoto(source);
      }
    });
  };

  const submit = () => {
    const data = {
      first_name: first_name,
      jenis_sampah: jenis_sampah,
      alamat: alamat,
      keterangan: keterangan,
      tingkatan: tingkatan,
    };

    if (foto) {
      data.foto = foto.uri;
    }

    fetch('http://10.0.2.2:3000/sampah', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      alert('Data tersimpan');
      setFirstName('');
      setSampah('');
      setAlamat('');
      setKeterangan('');
      setTingkatan('');
      setFoto(null);
    })
    .catch((error) => {
      console.error(error);
      alert('Error menyimpan data');
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground 
        source={require('C:/Users/user/AwesomeProject/android/app/src/main/assets/background-lapor.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <ScrollView style={styles.formContainer}>
          <View style={styles.card}>
            <Text style={styles.title}>Tambah Data Sampah</Text>

            {/* Input Form Section */}
            <View style={styles.inputCard}>
               <FontAwesomeIcon icon={faUser} color={color} size={22} />
              <TextInput
                style={styles.input}
                placeholder="Nama Pelapor"
                placeholderTextColor="#aaa"
                value={first_name}
                onChangeText={(value) => setFirstName(value)}
              />
            </View>

            <View style={styles.inputCard}>
            <FontAwesomeIcon icon={faTrash} color={color} size={22} />
              <TextInput
                style={styles.input}
                placeholder="Jenis Sampah"
                placeholderTextColor="#aaa"
                value={jenis_sampah}
                onChangeText={(value) => setSampah(value)}
              />
            </View>

            <View style={styles.inputCard}>
            <FontAwesomeIcon icon={faLocation} color={color} size={22} />
              <TextInput
                style={styles.input}
                placeholder="Alamat"
                placeholderTextColor="#aaa"
                value={alamat}
                onChangeText={(value) => setAlamat(value)}
              />
            </View>

            <View style={styles.inputCard}>
            <FontAwesomeIcon icon={faPlusSquare} color={color} size={22} />
              <TextInput
                style={styles.input}
                placeholder="Keterangan"
                placeholderTextColor="#aaa"
                value={keterangan}
                onChangeText={(value) => setKeterangan(value)}
              />
            </View>

            {/* Button for Image Picker */}
            <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
              <Text style={styles.imageButtonText}>Pilih Foto dari Galeri</Text>
            </TouchableOpacity>

            {/* Display Selected Image */}
            {foto && (
              <View style={styles.imageContainer}>
                <Image source={{ uri: foto.uri }} style={styles.image} />
              </View>
            )}

            {/* Save Button */}
            <View style={styles.buttonContainer}>
              <Button title="Simpan" onPress={submit} color="#005f99" />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f2ff',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 100
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#005f99',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#005f99',
    borderRadius: 10,
    padding: 8,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  icon: {
    marginRight: 10,
  },
  imageButton: {
    backgroundColor: '#005f99',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
  },
  imageButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  buttonContainer: {
    marginTop: 20,
    borderRadius: 5,
  },
});

export default CreateSampah;
