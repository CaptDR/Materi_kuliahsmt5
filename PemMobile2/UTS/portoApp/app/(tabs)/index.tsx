import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  StyleSheet,
} from "react-native";
import { Link } from "expo-router";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";


interface Skill {
  id: string;
  name: string;
  icon: React.ComponentProps<typeof FontAwesome5>['name'];
}


const skills: Skill[] = [
  { id: "1", name: "React Native", icon: "react" },
  { id: "2", name: "JavaScript", icon: "js-square" },
  { id: "3", name: "Python", icon: "python" },
  { id: "4", name: "Node.js", icon: "node-js" },
  { id: "5", name: "Firebase", icon: "fire" },
  { id: "6", name: "TypeScript", icon: "code" },
];

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
  <View style={styles.skillCard}>
    <FontAwesome5 name={skill.icon} size={24} color="#00D9FF" />
    <Text style={styles.skillName}>{skill.name}</Text>
  </View>
);

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
    >
      <View style={styles.headerSection}>
        <View style={styles.profileImageWrapper}>
          <View style={styles.glowBorder} />
          <Image
            source={require("../../assets/images/dimas.jpg")}
            style={styles.profileImage}
          />
        </View>
        <Text style={styles.greeting}>Hi, I'm Dimas Dwi Rianto</Text>
        <Text style={styles.subtitle}>Informatics Engineering Student</Text>
      </View>
      <View style={styles.bioSection}>
        <Text style={styles.bioText}>
          Passionate about building innovative mobile applications and exploring
          cutting-edge technologies. I love creating seamless user experiences
          with clean, efficient code.
        </Text>
      </View>
      <View style={styles.skillsSection}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <FlatList
          data={skills}
          renderItem={({ item }) => <SkillCard skill={item} />}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.skillsList}
        />
      </View>
      <Link href="/portfolio" asChild>
        <TouchableOpacity style={styles.projectsButton}>
          <Text style={styles.projectsButtonText}>View My Projects</Text>
          <Ionicons name="arrow-forward" size={20} color="#0A0E27" />
        </TouchableOpacity>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0E27",
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 90,
  },
  headerSection: {
    alignItems: "center",
    marginBottom: 40,
    marginTop: 20,
  },
  profileImageWrapper: {
    position: "relative",
    marginBottom: 24,
  },
  glowBorder: {
    position: "absolute",
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "#00D9FF",
    opacity: 0.2,
    top: -8,
    left: -8,
  },
  profileImage: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 3,
    borderColor: "#00D9FF",
  },
  greeting: {
    fontSize: 28,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#A0AEC0",
    fontWeight: "500",
  },
  bioSection: {
    marginBottom: 40,
    backgroundColor: "rgba(0, 217, 255, 0.05)",
    borderRadius: 12,
    padding: 16,
    borderLeftWidth: 3,
    borderLeftColor: "#00D9FF",
  },
  bioText: {
    fontSize: 14,
    color: "#CBD5E0",
    lineHeight: 22,
    fontWeight: "400",
  },
  skillsSection: {
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 16,
  },
  skillsList: {
    paddingRight: 20,
  },
  skillCard: {
    backgroundColor: "rgba(0, 217, 255, 0.08)",
    borderRadius: 12,
    padding: 16,
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 100,
    borderWidth: 1,
    borderColor: "rgba(0, 217, 255, 0.2)",
  },
  skillName: {
    fontSize: 12,
    color: "#E2E8F0",
    marginTop: 8,
    fontWeight: "600",
    textAlign: "center",
  },
  projectsButton: {
    backgroundColor: "#00D9FF",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#00D9FF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  projectsButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0A0E27",
    marginRight: 8,
  },
});