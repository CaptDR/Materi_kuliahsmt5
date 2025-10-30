import React from "react"
import { View, Text, ScrollView, StyleSheet, FlatList } from "react-native"

interface Project {
  id: string
  title: string
  description: string
  tags: string[]
}

const projects: Project[] = [
  {
    id: "1",
    title: "Mobile Chat App",
    description: "Real-time messaging app built with React Native and Firebase",
    tags: ["React Native", "Firebase", "TypeScript"],
  },
  {
    id: "2",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration",
    tags: ["Node.js", "React", "Stripe"],
  },
  {
    id: "3",
    title: "AI Task Manager",
    description: "Smart task management app with AI-powered suggestions",
    tags: ["Python", "React Native", "Machine Learning"],
  },
]

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <View style={styles.projectCard}>
    <Text style={styles.projectTitle}>{project.title}</Text>
    <Text style={styles.projectDescription}>{project.description}</Text>
    <View style={styles.tagsContainer}>
      {project.tags.map((tag, index) => (
        <View key={index} style={styles.tag}>
          <Text style={styles.tagText}>{tag}</Text>
        </View>
      ))}
    </View>
  </View>
)

export default function PortfolioScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>My Projects</Text>
        <Text style={styles.subtitle}>Showcasing my best work and technical expertise</Text>
      </View>

      <FlatList
        data={projects}
        renderItem={({ item }) => <ProjectCard project={item} />}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        contentContainerStyle={styles.projectsList}
      />

      <View style={{ height: 40 }} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0E27",
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#A0AEC0",
    fontWeight: "400",
  },
  projectsList: {
    paddingHorizontal: 20,
  },
  projectCard: {
    backgroundColor: "rgba(0, 217, 255, 0.08)",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "rgba(0, 217, 255, 0.2)",
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  projectDescription: {
    fontSize: 14,
    color: "#CBD5E0",
    lineHeight: 20,
    marginBottom: 12,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  tag: {
    backgroundColor: "rgba(0, 217, 255, 0.15)",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: "#00D9FF",
  },
  tagText: {
    fontSize: 12,
    color: "#00D9FF",
    fontWeight: "600",
  },
})
