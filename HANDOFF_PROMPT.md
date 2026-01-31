# Mohamed Fat-hy — Portfolio Final Handoff

This document defines all missing sections and content required to complete the portfolio properly.

IMPORTANT:

- Do NOT redesign UI
- Do NOT change layout style
- Only extend content and routing
- Follow existing component patterns

====================================================

1. # PROJECT DETAILS PAGES (CRITICAL)

Currently, project cards are clickable but return 404.
This must be fixed by implementing dynamic project pages.

Route:
/projects/[slug]

Each project must have its own detail page generated from JSON.

---

## PROJECT PAGE STRUCTURE

Each project page must include the following sections:

1. Project Header
   - Project name
   - Market / country
   - Platforms
   - Store links

2. Overview
   - Short explanation of what the product is

3. My Role
   - Software Engineer (Flutter)

4. Responsibilities
   - Bullet list of responsibilities

5. Technical Challenges
   - Structured problem → solution → result blocks

6. Tech Stack
   - Display as list or tags

---

## PROJECT CONTENT

### 3arabawy App

Slug: 3arabawy-car-marketplace

Overview:
A large-scale automotive marketplace that enables users to buy, sell, and rent cars, trade parts, list services, and sell motorcycles.

My Role:
Software Engineer (Flutter)

Responsibilities:

- Designed scalable mobile architecture using Clean Architecture
- Implemented complex listing and search flows
- Integrated real-time chat using Socket.IO
- Built media upload and image handling pipelines
- Optimized performance for low-end devices
- Refactored state management into modular architecture
- Collaborated with backend team on API contracts

Technical Challenges:

1. UI freezing during image selection  
   Problem:
   Image compression was running on the main thread.  
   Solution:
   Moved compression logic to background isolates.  
   Result:
   UI remained responsive during image processing.

2. Slow pagination on low-end devices  
   Problem:
   Heavy blur effects behind images caused frame drops.  
   Solution:
   Removed blur from list views and moved rich rendering to preview screens.  
   Result:
   Significant performance improvement.

3. Media-heavy performance optimization  
   Solution:
   Reduced rebuilds, optimized loading, and managed memory carefully.  
   Result:
   Smooth performance across device ranges.

4. Growing state complexity  
   Solution:
   Applied modular separation and event-based communication.  
   Result:
   Easier maintenance and scalability.

5. Arabic search inaccuracies  
   Problem:
   Multiple Unicode representations caused incorrect search results.  
   Solution:
   Applied Arabic normalization and removed diacritics.  
   Result:
   Highly accurate Arabic search behavior.

Tech Stack:
Flutter, Dart, REST APIs, Socket.IO, Firebase, Clean Architecture

Links:

- iOS
- Android
- Huawei

---

### MDone App

Slug: mdone-medical-booking

Overview:
Medical application connecting patients with doctors for appointment booking and communication.

Responsibilities:

- Appointment booking system
- Real-time chat integration
- Voice calling using Agora RTC
- Push notification integration
- UI optimization for medical workflows

Tech Stack:
Flutter, Firebase, Agora RTC/RTM, REST APIs

---

Other projects (Toltura, Biznavi, Party Player, Installment) must follow the same structure with lighter details.

# ==================================================== 2. TECHNICAL HIGHLIGHTS SECTION

Add a section on the homepage titled:

"Technical Highlights"

Purpose:
Show real engineering problem-solving, not marketing.

---

## CASE 1 — Flutter Plugin

Title:
Device Orientation Detection Plugin

Context:
Party Player App

Problem:
The app UI was locked in portrait mode, but video playback required automatic full-screen landscape switching based on real device orientation.

Solution:
Developed a native Flutter plugin using motion and accelerometer sensors to detect real-time orientation changes even when rotation was locked.

Result:
Accurate and seamless orientation transitions without modifying system rotation settings.

Link:
https://pub.dev/packages/device_orientation_detector

---

# ==================================================== 3. COMPANIES SECTION

Add a section titled:

"Companies I’ve Worked With"

Display as simple list or grid.

Content:

- 3arabawy — Software Engineer
- Napps — Software Engineer (Mobile & Backend)
- Yapoey — Software Engineer (Flutter)
- Extenddev — Software Engineer (Flutter / React Native)
- MDone — Contract Software Engineer
- Altakamul — Contract Software Engineer

No paragraphs needed.

# ==================================================== 4. SKILLS SECTION — EXPANDED

Replace current minimal skills list with the following structured categories.

---

Programming Languages:

- Dart
- Java
- C#
- Kotlin
- Swift

Mobile Development:

- Flutter
- Android (Java / Kotlin)
- iOS (Swift)
- Platform Channels
- Native Plugin Development

State Management:

- BLoC
- Cubit
- Provider
- Event-based architecture
- Modular state separation

Architecture:

- Clean Architecture
- Feature-based architecture
- Separation of Concerns
- Scalable system design

Backend & APIs:

- REST APIs
- Firebase Firestore
- Firebase Cloud Functions
- Firebase Messaging
- Socket.IO
- App Store Server Notifications
- Receipt validation

Real-Time Systems:

- Real-time chat
- Push notifications
- Live updates

Performance Optimization:

- Isolates
- Background processing
- Memory optimization
- Flutter DevTools profiling
- UI performance tuning

Media Handling:

- Image compression
- Video playback
- Background audio
- Orientation handling

Tools & Workflow:

- Git
- CI/CD
- Debugging
- Code review
- Performance profiling

====================================================
FINAL NOTES
====================================================

- Do NOT redesign UI
- Do NOT reduce content
- This portfolio must show depth, ownership, and engineering maturity
- Home page gives overview
- Project pages provide proof

Final goal:
When someone reviews this portfolio, they must clearly understand that Mohamed Fat-hy is a Software Engineer with real production experience, strong problem-solving skills, and deep Flutter and backend integration knowledge.
