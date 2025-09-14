import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { styles } from "../styles/_join";
import { GOOGLELOGO, FACEBOOKLOGO, HEROLOGOGREEN } from "../constants";

import { useRouter } from "expo-router";

export default function JoinScreen() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Top Section with Logo */}
      <View style={styles.iconsection}>
        <Image source={HEROLOGOGREEN} style={{ width: 40, height: 40 }} />
        <Text style={{ fontSize: 18, fontWeight: "600" }}>Join Now</Text>
      </View>

      {/* Title */}
      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Create Account</Text>
        <Text style={styles.subText}>Please fill in the details below</Text>
      </View>

      {/* Form Section */}
      <View style={styles.formGroup}>
        {/* Full Name */}
        <View>
          <Text style={styles.formLabel}>Full Name</Text>
          <TextInput
            placeholder="Enter your full name"
            style={styles.formControl}
          />
        </View>

        {/* Email */}
        <View>
          <Text style={styles.formLabel}>Email Address</Text>
          <TextInput
            placeholder="Enter your email"
            style={styles.formControl}
            keyboardType="email-address"
          />
        </View>

        {/* Password */}
        <View>
          <Text style={styles.formLabel}>Password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput
              placeholder="Enter your password"
              secureTextEntry={!showPassword}
              style={styles.passwordControl}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Text>{showPassword ? "🙈" : "👁️"}</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Confirm Password */}
        <View>
          <Text style={styles.formLabel}>Confirm Password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput
              placeholder="Re-enter your password"
              secureTextEntry={!showPassword}
              style={styles.passwordControl}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Text>{showPassword ? "🙈" : "👁️"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Primary Button */}
      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.dividerGroup}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.divider} />
      </View>

      {/* Social Buttons */}
      <View style={styles.secondaryButtonGroup}>
        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={GOOGLELOGO} style={{ width: 20, height: 20 }} />
          <Text style={styles.secondaryButtonText}>Sign Up with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={FACEBOOKLOGO} style={{ width: 20, height: 20 }} />
          <Text style={styles.secondaryButtonText}>Sign Up with Facebook</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => router.push("/signin")}>
          <Text style={styles.signupSubTitleText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
