# Mohamed Fat-hy — Portfolio Final Handoff (v2)

This document replaces the previous handoff.
It includes clarified leadership roles, backend orientation, technical depth, and complete project storytelling.

IMPORTANT RULES:

- Do NOT redesign UI
- Do NOT simplify content
- Do NOT remove sections
- Only extend functionality and routing

====================================================

1. # HERO SECTION (UPDATED POSITIONING)

Primary Title:
Software Engineer

Subtitle:
Mobile & Backend-Oriented • Flutter Specialist

Description:
Software Engineer with 5+ years of experience building scalable mobile systems and backend-integrated applications. Experienced across the full product lifecycle, with growing focus on backend engineering and system design using Java and Spring Boot.

# ==================================================== 2. ABOUT SECTION (OWNERSHIP & DIRECTION)

Include the following ideas in paragraph form:

- Strong background in mobile engineering with Flutter
- Solid experience integrating backend systems and real-time services
- Comfortable working across the full development lifecycle
- Experience collaborating with backend engineers, designers, and stakeholders
- Actively transitioning toward backend-focused and full-stack roles
- Strong interest in system design and architecture
- Actively using AI tools to accelerate research, debugging, and solution design — sometimes feeling like having a personal engineering team available 24/7

Tone:
Professional, confident, human.

# ==================================================== 3. PROJECT DETAILS PAGES (REQUIRED)

Fix missing routing:
All project cards must open dynamic pages.

Route:
/projects/[slug]

Each project page must include:

- Overview
- Market
- Platforms
- My Role
- Responsibilities
- Leadership (if applicable)
- Technical Challenges
- Tech Stack
- Links

---

## PROJECT CONTENT

========================
3arabawy App
========================

Market:
Egypt

Platforms:
iOS, Android, Huawei

Role:
Software Engineer (Flutter)

Overview:
A large-scale automotive marketplace supporting car sales, rentals, services, spare parts, and motorcycles, designed to handle heavy media usage and real-time interaction.

Responsibilities:

- Designed and maintained scalable mobile architecture using Clean Architecture
- Implemented listing systems for cars, services, parts, and motorcycles
- Integrated real-time chat using Socket.IO
- Built image and media upload pipelines
- Optimized performance for low-end devices
- Refactored global state management into modular event-based structure
- Collaborated closely with backend team on API contracts and improvements

Technical Challenges:

- Pagination performance optimization by removing heavy blur rendering
- Memory and rebuild optimization for media-heavy screens
- Arabic search normalization to handle Unicode inconsistencies
- Background processing for uploads and long-running tasks

Tech Stack:
Flutter, Dart, REST APIs, Socket.IO, Firebase, Clean Architecture

========================
MDone App
========================

Market:
Iraq

Platforms:
iOS, Android

Role:
Software Engineer (Flutter)

Overview:
Medical appointment booking application connecting patients with doctors.

Responsibilities:

- Implemented appointment booking flows
- Integrated real-time chat
- Implemented voice calls using Agora RTC
- Integrated push notifications
- Optimized UI flows for medical use cases

Tech Stack:
Flutter, Firebase, Agora RTC/RTM, REST APIs

========================
TOLTURA App
========================

Market:
Kyrgyzstan

Platforms:
iOS, Android

Role:
Software Engineer (Flutter)

Overview:
Service discovery platform connecting users with specialists across multiple categories.

Responsibilities:

- Implemented specialist listing and filtering systems
- Integrated REST APIs
- Applied clean and scalable architecture
- Ensured performance and maintainability

Tech Stack:
Flutter, REST APIs

========================
Biznavi App (Yapoey)
========================

Market:
South Korea

Platforms:
iOS, Android

Role:
Software Engineer — Tech Lead

Overview:
Corporate HR management application designed for internal company workflows.

Leadership & Responsibilities:

- Acted as Tech Lead for the project
- Led Flutter development team
- Coordinated with backend developers
- Collaborated closely with UI/UX designers
- Participated in technical planning and architecture decisions
- Reviewed code and guided implementation standards
- Managed feature delivery and cross-team communication

Tech Stack:
Flutter, REST APIs, Firebase

========================
Party Player App (NApps)
========================

Market:
USA

Platforms:
iOS, Android

Role:
Software Engineer (Mobile & Backend Integration)

Overview:
Music and media application supporting audio and video playback.

Responsibilities:

- Implemented Flutter application architecture
- Integrated Firebase backend services
- Implemented cloud-based logic and real-time features
- Handled background audio and media playback
- Built custom native plugin for device orientation detection
- Worked across mobile and backend integration

Tech Stack:
Flutter, Firebase, Cloud Functions, Native Plugins

========================
Installment App
========================

Platform:
Android

Overview:
Business utility application for managing merchant installment payments.

Responsibilities:

- Implemented installment calculation logic
- Built merchant workflows
- Integrated backend APIs

Tech Stack:
Flutter, REST APIs

# ==================================================== 4. TECHNICAL HIGHLIGHTS SECTION

Add homepage section:
"Technical Highlights"

Display as horizontal carousel / swipeable cards.

Each card must include:

- Title
- Context Project (clickable → project page)
- Problem
- Solution
- Result
- Optional external link

---

Highlight 1:
Device Orientation Detection

Context:
Party Player App (clickable)

Problem:
UI locked in portrait mode while video required automatic landscape full-screen.

Solution:
Developed native Flutter plugin using accelerometer and motion sensors to detect real-time orientation.

Result:
Accurate full-screen transitions without changing system rotation settings.

Link:
https://pub.dev/packages/device_orientation_detector

---

Highlight 3:
Pagination Optimization

Context:
3arabawy App

Problem:
Severe performance drops on low-end devices.

Solution:
Removed heavy blur rendering from list views.

Result:
Significant scrolling performance improvement.

---

Highlight 4:
Arabic Search Normalization

Context:
3arabawy App

Problem:
Multiple Unicode representations caused incorrect search results.

Solution:
Normalized Arabic characters and removed diacritics.

Result:
Accurate and consistent Arabic search behavior.

# ==================================================== 5. COMPANIES SECTION (STRUCTURED)

Section title:
Companies I’ve Worked With

Each item must show:

- Company name
- Role
- Start date
- End date or Present
- Auto-calculated duration

Examples:

3arabawy  
Software Engineer  
Dec 2024 – Present

Napps
Software Engineer (Mobile & Backend)  
May 2024 – Sep 2025

Yapoey  
Software Engineer / Tech Lead  
Aug 2023 – Jul 2024

Extenddev  
Software Engineer  
Nov 2023 – Jan 2024

MDone  
Contract Software Engineer  
Jul 2022 – Jun 2023

Altakamul  
Contract Software Engineer  
Apr 2022 – Jun 2022

# ==================================================== 6. SKILLS SECTION (EXPANDED & BACKEND-FOCUSED)

Programming Languages:

- Dart
- Java
- C#
- Kotlin
- Swift

Backend Engineering (Focus Area):

- Java Core
  - Collections API
  - Streams & Parallel Streams
  - Multithreading concepts
  - Thread management
- Spring Boot fundamentals
- REST API design
- Layered architecture
- DTO mapping
- Validation & exception handling

Mobile Engineering:

- Flutter
- Android (Java / Kotlin)
- iOS (Swift)
- Platform Channels
- Native plugin development

Architecture:

- Clean Architecture
- Feature-based architecture
- Separation of concerns
- Scalable system design

State Management:

- BLoC / Cubit
- Provider
- Event-driven architecture

Backend Services:

- Firebase Firestore
- Cloud Functions
- Firebase Messaging
- Socket.IO
- App Store Server Notifications
- Receipt validation

Performance Optimization:

- Flutter isolates
- Background processing
- Memory optimization
- DevTools profiling
- UI jank elimination

Leadership & Ownership:

- Technical planning
- Feature ownership
- Cross-team collaboration
- Mentoring developers
- Product-oriented thinking

Tools & Workflow:

- Git
- CI/CD
- Code review
- Debugging
- AI-assisted development

====================================================
FINAL GOAL
====================================================

The portfolio must clearly communicate:

- Mohamed Fat-hy is a Software Engineer
- Strong mobile foundation with growing backend focus
- Real production experience across multiple countries
- Leadership and ownership mindset
- Strong problem-solving ability
- Comfortable across full development lifecycle
