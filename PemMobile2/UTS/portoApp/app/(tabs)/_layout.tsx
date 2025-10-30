import React from "react";
import { StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

interface TabBarIconProps {
  name: string;
  color: string;
  size: number;
  type: "ionicons" | "fontawesome5";
}

const TabBarIcon: React.FC<TabBarIconProps> = ({ name, color, size, type }) => {
  if (type === "fontawesome5") {
    return <FontAwesome5 name={name as any} size={size} color={color} />;
  }
  return <Ionicons name={name as any} size={size} color={color} />;
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: "#00D9FF",
        tabBarInactiveTintColor: "#718096",
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarItemStyle: styles.tabBarItem,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon name="home" color={color} size={size} type="ionicons" />
          ),
        }}
      />
      <Tabs.Screen
        name="portfolio"
        options={{
          title: "Portfolio",
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon
              name="briefcase"
              color={color}
              size={size}
              type="fontawesome5"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: "Contact",
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon
              name="envelope"
              color={color}
              size={size}
              type="fontawesome5"
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "rgba(10, 14, 39, 0.95)",
    borderTopColor: "rgba(0, 217, 255, 0.1)",
    borderTopWidth: 1,
    height: 70,
    paddingBottom: 5,
    paddingTop: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: "600",
    marginTop: 0,
  },
  tabBarItem: {

  },
});