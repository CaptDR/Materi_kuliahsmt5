import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";

interface ContactMethod {
  id: string;
  icon: React.ComponentProps<typeof FontAwesome5>['name'];
  label: string;
  value: string;
  url?: string;
}

const contactMethods: ContactMethod[] = [
  {
    id: "1",
    icon: "envelope",
    label: "Email",
    value: "drdimas010@gmail.com",
    url: "mailto:drdimas010@example.com",
  },
  {
    id: "2",
    icon: "phone",
    label: "Phone",
    value: "+62 823 1890 4702",
    url: "tel:+6282318904702",
  },
  {
    id: "3",
    icon: "map-marker-alt",
    label: "Location",
    value: "Cirebon, Indonesia",
  },
];

const socialLinks: Array<{ icon: React.ComponentProps<typeof FontAwesome5>['name']; url: string; label: string }> = [
  { icon: "github", url: "https://github.com/CaptDR", label: "GitHub" },
  { icon: "linkedin", url: "https://linkedin.com/in/dimasdr", label: "LinkedIn" },
  { icon: "instagram", url: "https://instagram.com/deltaromeo0", label: "Instagram" },
];

const ContactMethodCard: React.FC<{ method: ContactMethod }> = ({ method }) => (
  <TouchableOpacity
    style={styles.contactCard}
    onPress={() => method.url && Linking.openURL(method.url)}
    disabled={!method.url}
  >
    <View style={styles.iconContainer}>
      <FontAwesome5 name={method.icon} size={24} color="#00D9FF" />
    </View>
    <View style={styles.contactInfo}>
      <Text style={styles.contactLabel}>{method.label}</Text>
      <Text style={styles.contactValue}>{method.value}</Text>
    </View>
  </TouchableOpacity>
);

export default function ContactScreen() {
  const router = useRouter();

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Contact Me</Text>
        <Text style={styles.subtitle}>
          Let's connect and discuss opportunities
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Direct Contact</Text>
        {contactMethods.map((method) => (
          <ContactMethodCard key={method.id} method={method} />
        ))}
      </View>

      <TouchableOpacity
        style={styles.messageButton}
        onPress={() => router.push("/modal")}
      >
        <Text style={styles.messageButtonText}>Send Me a Message</Text>
      </TouchableOpacity>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Follow Me</Text>
        <View style={styles.socialGrid}>
          {socialLinks.map((link, index) => (
            <TouchableOpacity
              key={index}
              style={styles.socialCard}
              onPress={() => Linking.openURL(link.url)}
            >
              <FontAwesome5 name={link.icon} size={28} color="#00D9FF" />
              <Text style={styles.socialLabel}>{link.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0E27",
  },
  scrollContent: {
    paddingBottom: 90,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 40,
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
  section: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 16,
  },
  contactCard: {
    flexDirection: "row",
    backgroundColor: "rgba(0, 217, 255, 0.08)",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "rgba(0, 217, 255, 0.2)",
    alignItems: "center",
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "rgba(0, 217, 255, 0.15)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  contactInfo: {
    flex: 1,
  },
  contactLabel: {
    fontSize: 12,
    color: "#A0AEC0",
    fontWeight: "600",
    marginBottom: 4,
  },
  contactValue: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  messageButton: {
    marginHorizontal: 20,
    backgroundColor: "#00D9FF",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 32,
    shadowColor: "#00D9FF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  messageButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0A0E27",
  },
  socialGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  socialCard: {
    flexGrow: 1,
    flexBasis: '45%',
    backgroundColor: "rgba(0, 217, 255, 0.08)",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(0, 217, 255, 0.2)",
  },
  socialLabel: {
    fontSize: 12,
    color: "#E2E8F0",
    fontWeight: "600",
    marginTop: 8,
  },
});