# calmnest - Full App Development Guide

This document outlines a step-by-step guide to developing **calmnest**, a wellness-focused mobile app aimed at helping users sleep better, relax, and feel emotionally supported. It includes all phases from setup to deployment.

---

## 🗓️ Project Schedule Summary

- **Week 1–2**: Project setup, UI, navigation
- **Week 3–4**: Sleep sounds & journaling
- **Week 5**: Breathing, scan, comfort notes
- **Week 6**: Notifications, personalization
- **Week 7**: Gamification, mood tracker
- **Week 8**: AI storytelling, polish
- **Week 9**: Backend integration, deployment

---

## 📆 Weekly Development Plan

### Week 1–2: Project Setup & UI Foundation

- Install Expo CLI and create the app using `npx create-expo-app calmnest`
- Install NativeWind and React Navigation packages
- Setup folder structure and Tailwind CSS
- Create navigation flow between screens

### Week 3–4: Core Features (Sleep Sounds & Journal)

- Integrate Expo Audio API for sound playback
- Create mix & match sound UI
- Build daily journal UI with prompts
- Connect sentiment analysis via OpenAI API

### Week 5: Breathing, Body Scan & Comfort Notes

- Add breathing exercise visuals
- Develop body scan audio with timer
- Create developer comfort notes with scheduling

### Week 6: Notifications & Personalization

- Implement Expo Notifications for bedtime reminders
- Add customizable themes using AsyncStorage

### Week 7: Gamification & Mood Tracking

- Track completed sessions and reward points
- Build mood tracker and charting with `react-native-chart-kit`

### Week 8: AI Stories & Final Touches

- Use OpenAI API to generate stories
- Add Text-to-Speech using `expo-speech`
- Polish UI and animations

### Week 9: Authentication, Backend & Deployment

- Integrate Firebase Auth, Firestore, and Cloud Functions
- Build and test for Android/iOS with `npx expo build`
- Publish to app stores

---

## 🛠️ Tools & Dependencies Overview

- **Frontend**: React Native, Expo, NativeWind
- **Backend**: Firebase / Supabase
- **AI/NLP**: OpenAI / HuggingFace API, Expo Speech
- **Audio**: Expo Audio API / `react-native-sound`
- **Storage**: Firestore, AsyncStorage, Secure Store
- **State Mgmt**: Context API, Zustand / Redux
- **Charts**: `react-native-chart-kit`
- **Notifications**: Expo Notifications

---

## 🔐 Suggested Firebase Firestore Structure

```
users/
  {userId}/
    journal/
      {entryId}
    comfortNotes/
      {noteId}
    sleepMixes/
      {mixId}
    moods/
      {date}
    goals/
      {goalId}
```
