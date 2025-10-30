import type React from "react"; // <--- Perbaikan di sini
import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  Platform, // Import Platform
  Linking
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

interface FormData {
  name: string;
  email: string;
  message: string;
}

// Pastikan icon names valid untuk FontAwesome5
const SocialLink: React.FC<{ icon: string; url: string; label: string }> = ({
  icon,
  url,
  label,
}) => (
  // Tambahkan onPress untuk membuka URL
  <TouchableOpacity style={styles.socialIcon} onPress={() => Linking.openURL(url)}>
    <FontAwesome5 name={icon as any} size={20} color="#00D9FF" />
  </TouchableOpacity>
);

export default function ContactModal() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    // Validasi email sederhana
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    if (!emailRegex.test(formData.email.trim())) {
       Alert.alert("Error", "Please enter a valid email address");
       return;
    }


    setLoading(true);
    Keyboard.dismiss(); // Tutup keyboard saat submit
    try {
      // Simulate sending message
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Tambah delay simulasi
      Alert.alert("Success", "Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      if (router.canGoBack()) { // Cek apakah bisa kembali
         router.back();
      }
    } catch (error) {
      Alert.alert("Error", "Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    // Gunakan KeyboardAvoidingView untuk handle keyboard
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        {/* Header with Close Button */}
        <View style={styles.header}>
          <Text style={styles.title}>Get in Touch</Text>
          <TouchableOpacity onPress={() => router.back()} style={styles.closeButton} disabled={loading}>
            <Ionicons name="close" size={28} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <ScrollView
          style={styles.content}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled" // Agar bisa dismiss keyboard saat tap di luar input
        >
          {/* Name Input */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Your Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              placeholderTextColor="#718096"
              value={formData.name}
              onChangeText={(value) => handleInputChange("name", value)}
              returnKeyType="next" // Bantu navigasi keyboard
              editable={!loading} // Disable saat loading
            />
          </View>

          {/* Email Input */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Your Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#718096"
              keyboardType="email-address"
              autoCapitalize="none" // Nonaktifkan auto capitalize untuk email
              value={formData.email}
              onChangeText={(value) => handleInputChange("email", value)}
              returnKeyType="next"
              editable={!loading}
            />
          </View>

          {/* Message Input */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Message</Text>
            <TextInput
              style={[styles.input, styles.messageInput]}
              placeholder="Write your message here..."
              placeholderTextColor="#718096"
              multiline
              numberOfLines={6}
              textAlignVertical="top" // Penting untuk multiline di Android
              value={formData.message}
              onChangeText={(value) => handleInputChange("message", value)}
              returnKeyType="done" // Tombol 'Done' atau 'Send' di keyboard
              blurOnSubmit={true} // Menutup keyboard saat tekan return/done
              editable={!loading}
            />
          </View>

          {/* Submit Button */}
          <TouchableOpacity
            style={[styles.submitButton, loading && styles.submitButtonDisabled]}
            onPress={handleSubmit}
            disabled={loading}
          >
            <Text style={styles.submitButtonText}>
              {loading ? "Sending..." : "Send Message"}
            </Text>
          </TouchableOpacity>

          {/* Social Links */}
          <View style={styles.socialSection}>
            <Text style={styles.socialLabel}>Connect with me</Text>
            <View style={styles.socialLinks}>
              {/* Pastikan URL benar */}
              <SocialLink icon="github" url="https://github.com/username" label="GitHub" />
              <SocialLink icon="linkedin" url="https://linkedin.com/in/username" label="LinkedIn" />
              <SocialLink icon="instagram" url="https://instagram.com/username" label="Instagram" />
            </View>
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}

// Styles sama seperti sebelumnya... (Salin dari kode asli Anda)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0E27",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 50 : 20, // Lebih aman untuk iOS
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 217, 255, 0.1)",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  closeButton: {
    padding: 8,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 40,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#E2E8F0",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "rgba(0, 217, 255, 0.08)",
    borderWidth: 1,
    borderColor: "rgba(0, 217, 255, 0.2)",
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: "500",
  },
  messageInput: {
    minHeight: 120,
    paddingTop: 12, // Pastikan padding top sesuai untuk multiline
  },
  submitButton: {
    backgroundColor: "#00D9FF",
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 8,
    marginBottom: 32,
    shadowColor: "#00D9FF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  submitButtonDisabled: {
    opacity: 0.6,
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0A0E27",
  },
  socialSection: {
    alignItems: "center",
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopColor: "rgba(0, 217, 255, 0.1)",
  },
  socialLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#A0AEC0",
    marginBottom: 16,
  },
  socialLinks: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 24,
  },
  socialIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "rgba(0, 217, 255, 0.1)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(0, 217, 255, 0.2)",
  },
});