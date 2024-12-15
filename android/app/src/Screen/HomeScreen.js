import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Title } from 'react-native-paper';


const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Title with highlighted style */}
      <View style={styles.header}>
        <Text style={styles.title}>TrashSnap</Text>
      </View>

      {/* Image banner */}
      <View style={styles.imageContainer}>
        <Image source={require('./image/bumi.jpg')} style={styles.bannerImage} />
      </View>

      {/* Simple caption text */}
      <Text style={styles.caption}>Tandai sampah di sekitarmu dengan mudah!</Text>

      {/* Card Section */}
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.cardTitle}>Kontribusi Nyata untuk Bumi</Title>
          <Text style={styles.cardDescription}>
            Ambil foto sampah dan laporkan, karena setiap aksi kecil berarti besar!
          </Text>
        </Card.Content>
      </Card>

      {/* Interactive Section with Images */}
      <View style={styles.interactiveContainer}>
        <TouchableOpacity style={styles.touchable}>
          <Image source={require('./image/dinas.jpeg')} style={styles.interactiveImage} />
          <Text style={styles.touchableText}>Lapor ke Dinas Kebersihan</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchable}>
          <Image source={require('./image/kebersihan.jpg')} style={styles.interactiveImage} />
          <Text style={styles.touchableText}>Hubungi Petugas Kebersihan</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchable}>
          <Image source={require('./image/komunitas.jpg')} style={styles.interactiveImage} />
          <Text style={styles.touchableText}>Pengguna Berkontribusi</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Dikembangkan oleh Annisa Cahyarina</Text>
        <Text style={styles.footerText}>22/497707/SV/21154</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    color: '#0047ab', // biru lebih gelap untuk judul
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 2,
    fontFamily: 'Roboto',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  listitem: {
    marginVertical: 20,
    marginHorizontal: 10,
    backgroundColor: '#ffffff', // background putih pada item
    borderRadius: 8,
    padding: 15,
    shadowColor: '#000', // efek bayangan
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  bannerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  caption: {
    fontSize: 18,
    color: '#0047ab', 
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'Open Sans', 
  },
  card: {
    marginVertical: 15,
    backgroundColor: '#BBDEFB',
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0D47A1',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 14,
    color: '#333333',
    textAlign: 'justify',
    marginHorizontal: 8,
    marginTop: 10,
    fontFamily: 'Open Sans',
  },
  interactiveContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  touchable: {
    alignItems: 'center',
    width: '30%',
  },
  interactiveImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
  },
  touchableText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  footer: {
    marginTop: 5,
    alignItems: 'center',
    marginBottom: 20
  },
  footerText: {
    fontSize: 12,
    color: '#1E88E5',
  },
});

export default HomeScreen;
