# Ascend React Native

A React Native implementation of the Ascend learning project.

This project is used to learn, experiment with, and master React Native using modern development practices, Clean Architecture, Zustand, and real-world feature implementations.

## Goals

* Learn React Native fundamentals
* Build production-ready features
* Understand Clean Architecture
* Master Zustand state management
* Work with REST APIs
* Improve debugging and development workflows
* Compare React Native and Flutter implementations

## Tech Stack

* React Native
* Expo
* TypeScript
* Zustand
* Axios
* Clean Architecture
* Repository Pattern

## Project Structure

```text
src/
├── core/
│   ├── components/
│   ├── network/
│   ├── theme/
│   └── types/
│
└── features/
    └── posts/
        ├── data/
        ├── domain/
        └── presentation/
```

## Features

### Posts

Fetches and displays posts from JSONPlaceholder.

Topics covered:

* HTTP Requests
* Axios
* JSON Parsing
* Zustand State Management
* Repository Pattern
* Clean Architecture
* Error Handling
* Loading States
* Pull to Refresh

## Architecture

This project follows Clean Architecture principles.

```text
Presentation
      ↓
Store (Zustand)
      ↓
Use Case
      ↓
Repository
      ↓
Data Source
      ↓
API
```

### Feature Flow

```text
PostsScreen
      ↓
PostsStore
      ↓
GetPostsUseCase
      ↓
PostsRepository
      ↓
PostsRepositoryImpl
      ↓
PostsRemoteDataSource
      ↓
Axios Client
      ↓
JSONPlaceholder API
```

## API

JSONPlaceholder

https://jsonplaceholder.typicode.com

Current endpoint:

```text
/posts
```

## Learning Objectives

* Build maintainable React Native applications
* Understand feature-first architecture
* Apply separation of concerns
* Learn scalable project organization
* Compare React Native and Flutter development patterns
* Develop framework-agnostic mobile engineering skills

## Status

### Completed

* Expo project setup
* TypeScript configuration
* Clean Architecture structure
* Axios configuration
* Zustand integration
* Shared components
* Dynamic App Header
* Posts feature

### Planned

* Post Details
* Comments
* Navigation
* Search
* Pagination
* Caching
* Offline Support
* Testing
* Authentication
* Push Notifications

## Comparison Project

This application is intentionally built alongside the Flutter implementation to compare:

* Architecture
* State Management
* Networking
* Navigation
* Performance
* Developer Experience

The goal is to become a framework-agnostic mobile engineer rather than specializing in a single mobile framework.

## License

MIT License
