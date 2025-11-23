import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PortfolioScreen() {
  const openGithub = () => {
    Linking.openURL('https://github.com/yourusername');
  };

  const openLinkedIn = () => {
    Linking.openURL('https://linkedin.com/in/yourprofile');
  };

  const openSourceCode = () => {
    Linking.openURL('https://github.com/yourusername/react-native-crud-app');
  };

  const openEmail = () => {
    Linking.openURL('mailto:your.email@example.com');
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero Section */}
      <View style={styles.hero}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={60} color="#2563eb" />
          </View>
        </View>
        <Text style={styles.heroTitle}>John Doe</Text>
        <Text style={styles.heroSubtitle}>React Native Developer</Text>
        <Text style={styles.heroDescription}>
          Crafting beautiful and functional mobile experiences
        </Text>
        
        <View style={styles.socialLinks}>
          <TouchableOpacity style={styles.socialButton} onPress={openGithub}>
            <Ionicons name="logo-github" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton} onPress={openLinkedIn}>
            <Ionicons name="logo-linkedin" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton} onPress={openEmail}>
            <Ionicons name="mail" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* About Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="person-circle" size={24} color="#2563eb" />
          <Text style={styles.sectionTitle}>About Me</Text>
        </View>
        <Text style={styles.paragraph}>
          Passionate React Native developer with 3+ years of experience building cross-platform 
          mobile applications. Specialized in creating efficient, user-friendly apps with modern 
          technologies and best practices.
        </Text>
      </View>

      {/* Skills Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="code-slash" size={24} color="#2563eb" />
          <Text style={styles.sectionTitle}>Technical Skills</Text>
        </View>
        <View style={styles.skillsGrid}>
          <View style={styles.skillCategory}>
            <Text style={styles.skillCategoryTitle}>Frontend</Text>
            <View style={styles.skillsContainer}>
              <View style={styles.skillItem}>
                <Ionicons name="logo-react" size={16} color="#2563eb" />
                <Text style={styles.skillText}>React Native</Text>
              </View>
              <View style={styles.skillItem}>
                <Ionicons name="logo-javascript" size={16} color="#2563eb" />
                <Text style={styles.skillText}>TypeScript</Text>
              </View>
              <View style={styles.skillItem}>
                <Ionicons name="logo-redux" size={16} color="#2563eb" />
                <Text style={styles.skillText}>Redux</Text>
              </View>
            </View>
          </View>

          <View style={styles.skillCategory}>
            <Text style={styles.skillCategoryTitle}>Backend</Text>
            <View style={styles.skillsContainer}>
              <View style={styles.skillItem}>
                <Ionicons name="logo-nodejs" size={16} color="#2563eb" />
                <Text style={styles.skillText}>Node.js</Text>
              </View>
              <View style={styles.skillItem}>
                <Ionicons name="server" size={16} color="#2563eb" />
                <Text style={styles.skillText}>Firebase</Text>
              </View>
              <View style={styles.skillItem}>
                <Ionicons name="database" size={16} color="#2563eb" />
                <Text style={styles.skillText}>MongoDB</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Featured Project Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="rocket" size={24} color="#2563eb" />
          <Text style={styles.sectionTitle}>Featured Project</Text>
        </View>
        
        <View style={styles.featuredProject}>
          <View style={styles.projectHeader}>
            <View style={styles.projectIcon}>
              <Ionicons name="document-text" size={32} color="#2563eb" />
            </View>
            <View style={styles.projectTitleContainer}>
              <Text style={styles.projectTitle}>Notes CRUD App</Text>
              <Text style={styles.projectSubtitle}>Full-stack Mobile Application</Text>
            </View>
          </View>

          <Text style={styles.projectDescription}>
            A comprehensive notes application featuring user authentication, real-time CRUD operations, 
            and secure data persistence. Built with modern React Native patterns and TypeScript for 
            type safety and better developer experience.
          </Text>

          <View style={styles.techStack}>
            <View style={styles.techBadge}>
              <Text style={styles.techText}>React Native</Text>
            </View>
            <View style={styles.techBadge}>
              <Text style={styles.techText}>TypeScript</Text>
            </View>
            <View style={styles.techBadge}>
              <Text style={styles.techText}>AsyncStorage</Text>
            </View>
            <View style={styles.techBadge}>
              <Text style={styles.techText}>Expo</Text>
            </View>
          </View>

          <View style={styles.projectFeatures}>
            <View style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={16} color="#10b981" />
              <Text style={styles.featureText}>User Authentication</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={16} color="#10b981" />
              <Text style={styles.featureText}>CRUD Operations</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={16} color="#10b981" />
              <Text style={styles.featureText}>Data Persistence</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={16} color="#10b981" />
              <Text style={styles.featureText}>Modern UI/UX</Text>
            </View>
          </View>

          <View style={styles.projectActions}>
            <Link href="/(tabs)/explore" asChild>
              <TouchableOpacity style={styles.primaryButton}>
                <Ionicons name="play-circle" size={20} color="white" />
                <Text style={styles.primaryButtonText}>Live Demo</Text>
              </TouchableOpacity>
            </Link>
            
            <TouchableOpacity style={styles.secondaryButton} onPress={openSourceCode}>
              <Ionicons name="code" size={20} color="#2563eb" />
              <Text style={styles.secondaryButtonText}>Source Code</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Contact Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="chatbubble-ellipses" size={24} color="#2563eb" />
          <Text style={styles.sectionTitle}>Get In Touch</Text>
        </View>
        
        <View style={styles.contactGrid}>
          <TouchableOpacity style={styles.contactCard} onPress={openEmail}>
            <Ionicons name="mail" size={32} color="#2563eb" />
            <Text style={styles.contactType}>Email</Text>
            <Text style={styles.contactDetail}>your.email@example.com</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.contactCard} onPress={openLinkedIn}>
            <Ionicons name="logo-linkedin" size={32} color="#2563eb" />
            <Text style={styles.contactType}>LinkedIn</Text>
            <Text style={styles.contactDetail}>/in/yourprofile</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 John Doe. Built with React Native & Expo</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  hero: {
    backgroundColor: 'white',
    padding: 40,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  avatarContainer: {
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#dbeafe',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#eff6ff',
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#2563eb',
    fontWeight: '600',
    marginBottom: 12,
  },
  heroDescription: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 24,
  },
  socialLinks: {
    flexDirection: 'row',
    gap: 16,
  },
  socialButton: {
    backgroundColor: '#2563eb',
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#2563eb',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  section: {
    backgroundColor: 'white',
    margin: 16,
    padding: 24,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 12,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 26,
    color: '#475569',
  },
  skillsGrid: {
    gap: 20,
  },
  skillCategory: {
    gap: 12,
  },
  skillCategoryTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 8,
  },
  skillsContainer: {
    gap: 10,
  },
  skillItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  skillText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#475569',
  },
  featuredProject: {
    gap: 20,
  },
  projectHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  projectIcon: {
    width: 64,
    height: 64,
    borderRadius: 16,
    backgroundColor: '#dbeafe',
    justifyContent: 'center',
    alignItems: 'center',
  },
  projectTitleContainer: {
    flex: 1,
  },
  projectTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 4,
  },
  projectSubtitle: {
    fontSize: 14,
    color: '#64748b',
  },
  projectDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: '#475569',
  },
  techStack: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  techBadge: {
    backgroundColor: '#eff6ff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#dbeafe',
  },
  techText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#2563eb',
  },
  projectFeatures: {
    gap: 12,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  featureText: {
    fontSize: 14,
    color: '#475569',
    fontWeight: '500',
  },
  projectActions: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  primaryButton: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    shadowColor: '#2563eb',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  primaryButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  secondaryButton: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderWidth: 2,
    borderColor: '#2563eb',
  },
  secondaryButtonText: {
    color: '#2563eb',
    fontWeight: 'bold',
    fontSize: 16,
  },
  contactGrid: {
    flexDirection: 'row',
    gap: 16,
  },
  contactCard: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  contactType: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
  },
  contactDetail: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
  },
  footer: {
    padding: 30,
    alignItems: 'center',
    backgroundColor: '#1e293b',
    marginTop: 20,
  },
  footerText: {
    color: '#94a3b8',
    fontSize: 14,
    textAlign: 'center',
  },
});