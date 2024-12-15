import { View, Text, StyleSheet, TouchableOpacity, FlatList, Button, Alert, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Listdata = () => {
    const jsonUrl = 'http://10.0.2.2:3000/sampah';
    const [isLoading, setLoading] = useState(true);
    const [dataUser, setDataUser] = useState({});
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetch(jsonUrl)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setDataUser(json)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    function refreshPage() {
        fetch(jsonUrl)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setDataUser(json)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }

    function deleteData(id) {
        fetch(jsonUrl + '/' + id, {
          method: 'DELETE',
        })
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
            alert('Data terhapus');
            refreshPage();
          })
       }

    return (
        <SafeAreaView style={styles.container}>
            {isLoading ? (
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <Text style={styles.cardtitle}>Loading...</Text>
                </View>
            ) : (
                <View>
                    <FlatList
                        style={{ marginBottom: 0 }}
                        data={dataUser}
                        onRefresh={() => { refreshPage() }}
                        refreshing={refresh}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <View>
                                <TouchableOpacity>
                                <View style={styles.card}>
                                    <Image
                                        source={{ uri: item.foto }}
                                        style={styles.image} // Styling untuk gambar
                                    />
                                    <View style={styles.content}>
                                        <View style={styles.deskripsi}>
                                            <Text style={styles.cardtitle}>Jenis sampah: {item.jenis_sampah}</Text>
                                            <Text style={styles.cardText}>{item.alamat}</Text>
                                            <Text style={styles.cardText}>{item.keterangan}</Text>
                                        </View>
                                    </View>
                         
                                </View>
                                </TouchableOpacity>

                                <View style={styles.form}>
                                    <Button title="Hapus"
                                        onPress={() => Alert.alert('Hapus data', 'Yakin akan menghapus data ini?', [
                                            { text: 'Tidak', onPress: () => console.log('button tidak') },
                                            { text: 'Ya', onPress: () => deleteData(item.id) },
                                        ])}
                                        color={'#d9534f'} // Warna merah yang lebih lembut
                                    />
                                </View>
                            </View>
                        )}
                    />
                </View>
            )}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0f7fa', // Warna biru lembut
      },
    title: {
        paddingVertical: 12,
        backgroundColor: '#004d40', // Hijau tua
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    cardtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#004d40', // Warna hijau tua
    },
    card: {
        flexDirection: 'row',
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#ffffff', // Putih
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 1.41,
        elevation: 2,
        marginHorizontal: 20,
        marginVertical: 10,
        alignItems: 'center',
    },
    form: {
        paddingHorizontal: 20,
        paddingTop: 5,
        paddingBottom: 20,
    },
    deskripsi: {
        marginTop: 10,
    },
    cardText: {
        fontSize: 14,
        color: '#555',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 15,
        borderWidth: 1,
        borderColor: '#004d40', // Border hijau
    },
    content: {
        flex: 1,
    },
    icon: {
        color: '#004d40', // Ikon hijau
        fontSize: 20,
    }
});

export default Listdata;
