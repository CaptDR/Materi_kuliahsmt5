import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
  SafeAreaView,
  StatusBar,
} from 'react-native';

// --- (PENTING) DEFINISI TIPE DATA (TYPESCRIPT) ---

// 1. Tipe data untuk SATU item proyek
interface IProject {
  id: number;
  title: string;
  description: string;
  image: any;
}

// 2. Tipe data untuk objek kontak
interface IContacts {
  github: string;
  whatsapp: string;
  email: string;
}

// 3. Tipe data utama untuk seluruh data profil (SUDAH DIUBAH)
interface IProfileData {
  name: string;
  major: string;
  university: string;
  role: string;
  bio: string;
  profileImage: any;
  skills: string[];
  projects: IProject[];
  contacts: IContacts;
}

// --- (INI YANG KAMU EDIT) PUSAT DATA PROFIL ---
// (SUDAH DIUBAH SESUAI PERMINTAAN KAMU)
const PROFILE_DATA: IProfileData = {
  name: 'Dimas Dwi Rianto',
  major: 'Teknik Informatika',
  university: 'INSTITUT TEKNOLOGI DAN KESEHATAN MAHARDIKA',
  role: 'Mobile Developer',
  bio: 'Saya adalah mahasiswa semester 5 yang bersemangat dalam pengembangan aplikasi mobile menggunakan React Native dan Expo.',
  profileImage: require('../../assets/images/dimas.jpg'),
  skills: [
    'React Native',
    'JavaScript',
    'TypeScript',
    'Expo',
    'Git',
    'VS Code',
    'UI/UX Design',
  ],
  projects: [
    {
      id: 1,
      title: 'DELTAROMEO OUTDOOR MOBILE APP',
      description: 'Mobile App untuk pemesanan paket guide, pembelian perlengkapan outdoor dan penyewaan alat outdoor.',
      image: require('../../assets/images/DR.png'),
    },
  ],
  contacts: {
    github: 'https://github.com/CaptDR',
    whatsapp: 'https://wa.me/6282318904702',
    email: 'drdimas010@gmail.com',
  },
};

// --- KOMPONEN UTAMA APLIKASI ---
export default function PortfolioPage() {
  
  // Fungsi untuk membuka link eksternal (GitHub, LinkedIn, Email)
  const openLink = (url: string): void => {
    Linking.openURL(url).catch((err: any) =>
      console.error('Gagal membuka URL:', err)
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      
      <ScrollView style={styles.container}>
        
        {/* === BAGIAN HEADER (PROFIL)*/}
        <View style={styles.header}>
          <Image
            source={PROFILE_DATA.profileImage}
            style={styles.profileImage}
          />
          <Text style={styles.name}>{PROFILE_DATA.name}</Text>
          <Text style={styles.major}>{PROFILE_DATA.major}</Text>
          <Text style={styles.university}>{PROFILE_DATA.university}</Text>
          <Text style={styles.role}>{PROFILE_DATA.role}</Text>
          <Text style={styles.bio}>{PROFILE_DATA.bio}</Text>
        </View>

        {/* === BAGIAN KETERAMPILAN (SKILLS) === */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skillsContainer}>
            {PROFILE_DATA.skills.map((skill, index) => (
              <View key={index} style={styles.skillPill}>
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* === BAGIAN PROYEK (PROJECTS) === */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Project</Text>
          {PROFILE_DATA.projects.map((project) => (
            <View key={project.id} style={styles.projectCard}>
              <Image source={project.image} style={styles.projectImage} />
              <Text style={styles.projectTitle}>{project.title}</Text>
              <Text style={styles.projectDescription}>{project.description}</Text>
            </View>
          ))}
        </View>

        {/* === BAGIAN KONTAK === */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contacts</Text>
          
          <TouchableOpacity
            style={[styles.contactButton, { backgroundColor: '#333' }]}
            onPress={() => openLink(PROFILE_DATA.contacts.github)}>
            <Text style={styles.contactButtonText}>GitHub</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.contactButton, { backgroundColor: '#075e54' }]}
            onPress={() => openLink(PROFILE_DATA.contacts.whatsapp)}>
            <Text style={styles.contactButtonText}>WhatsApp</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.contactButton, { backgroundColor: '#EA4335' }]}
            onPress={() => openLink(`mailto:${PROFILE_DATA.contacts.email}`)}>
            <Text style={styles.contactButtonText}>Email</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// --- STYLESHEET (SUDAH DIUBAH) ---
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  // Header Styles
  header: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 3,
    borderColor: '#007AFF',
    marginBottom: 15,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center', // Rata tengah
  },
  // Style 'title' dihapus dan diganti dengan 3 style di bawah
  major: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginTop: 8,
  },
  university: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginTop: 4,
    paddingHorizontal: 10,
  },
  role: {
    fontSize: 18,
    color: '#007AFF', // Warna biru agar menonjol
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 4,
  },
  bio: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    marginTop: 15,
    paddingHorizontal: 10,
  },
  // Section General
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#f0f0f0',
    paddingBottom: 5,
  },
  // Skills Styles
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillPill: {
    backgroundColor: '#007AFF',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    margin: 5,
  },
  skillText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  // Project Styles
  projectCard: {
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  projectImage: {
    width: '100%',
    height: 180,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  projectDescription: {
    fontSize: 14,
    color: '#666',
    paddingHorizontal: 15,
    paddingBottom: 15,
    paddingTop: 5,
  },
  // Contact Styles
  contactButton: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  contactButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});