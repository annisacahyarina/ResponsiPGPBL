import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, TextInput, Button, StyleSheet, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';


const EditDataSampah = () => {
    const jsonUrl = 'http://10.0.2.2:3000/sampah';
    const [first_name, setFirstName] = useState('');
    const [jenis_sampah, setSampah] = useState('');
    const [alamat, setAlamat] = useState('');
    const [keterangan, setKeterangan] = useState('');
    const [foto, setFoto] = useState('');
    const [selectedUser, setSelectedUser] = useState('');
    const [isLoading, setLoading] = useState(true);
    const [dataUser, setDataUser] = useState({});
    const [refresh, setRefresh] = useState(true);

    const selectItem = (item) => {
        setSelectedUser(item);
        setFirstName(item.first_name);
        setSampah(item.jenis_sampah);
        setAlamat(item.alamat);
        setKeterangan(item.keterangan);
    }

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

    const submit = () => {
        const data = {
            first_name: first_name,
            jenis_sampah: jenis_sampah,
            alamat: alamat
        };


        fetch(`http://10.0.2.2:3000/sampah/${selectedUser.id}`, {
            method: 'PATCH',
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
                setAlamat('');
                setSampah('');
                setKeterangan('');
                refreshPage();
                FlatList.refresh();
            })

    }
    return (
        <SafeAreaView>
            <View>
                {isLoading ? (
                    <View style={{ alignItems: 'center', marginTop: 20 }}>
                        <Text style={styles.cardtitle}>Loading...</Text>
                    </View>
                ) : (
                    <View>
                        <ScrollView>
                            <View>
                                <Text style={styles.title}>Edit Data Sampah</Text>
                                <View style={styles.form}>
                                    <TextInput style={styles.input} placeholder="Nama Depan" value={first_name} onChangeText={(value) => setFirstName(value)} />
                                    <TextInput style={styles.input} placeholder="Jenis Sampah" value={jenis_sampah} onChangeText={(value) => setSampah(value)} />
                                    <TextInput style={styles.input} placeholder="Alamat" value={alamat} onChangeText={(value) => setAlamat(value)} />
                                    <TextInput style={styles.input} placeholder="keterangan" value={keterangan} onChangeText={(value) => setKeterangan(value)} />
                                    <Button title="Simpan" style={styles.button} onPress={submit} />
                                </View>
                            </View>

                            <FlatList
                                style={{ marginBottom: 10 }}
                                data={dataUser}
                                onRefresh={() => { refreshPage() }}
                                refreshing={refresh}
                                keyExtractor={({ id }, index) => id}
                                renderItem={({ item }) => (
                                    <View>
                                        <TouchableOpacity onPress={() => selectItem(item)}>
                                            <View style={styles.card}>
                                                <View style={styles.image}>
                                                    <Image
                                                        source={{ uri: item.foto }}
                                                        style={{ width: 70, height: 70, borderRadius: 10, marginRight: 10 }} // ukuran dan styling gambar
                                                    />
                                                </View>
                                                <View>
                                                    <Text style={styles.cardtitle}>{item.first_name}</Text>
                                                    <Text>{item.jenis_sampah}</Text>
                                                    <Text>{item.alamat}</Text>
                                                    <Text>{item.keterangan}</Text>
                                                </View>
                                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                                                    <FontAwesomeIcon icon={faPenToSquare} size={20} />
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                )}
                            />
                        </ScrollView>
                    </View>
                )}
            </View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    title: {
        paddingVertical: 12,
        backgroundColor: '#333',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    avatar: {
        borderRadius: 100,
        width: 80,
    },
    cardtitle: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    card: {
        flexDirection: 'row',
        padding: 30,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        marginHorizontal: 20,
        marginVertical: 7
    },
    form: {
        paddingHorizontal: 20,
        paddingTop: 5,
        paddingBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        borderRadius: 8,
        padding: 8,
        width: '100%',
        marginVertical: 5,
    },
    image: {
        width: '20%',
        height: 20,
        resizeMode: 'cover',
        marginBottom: 10,
    }
})






export default EditDataSampah
