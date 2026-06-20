# Ascend Flutter

A Flutter implementation of the Ascend learning project.

This project is used to learn, experiment with, and master Flutter using modern development practices, Clean Architecture, Riverpod, and real-world feature implementations.

## Goals

* Learn Flutter fundamentals
* Build production-ready features
* Understand Clean Architecture
* Master Riverpod state management
* Work with REST APIs
* Improve testing and debugging skills
* Compare Flutter and React Native implementations

## Tech Stack

* Flutter
* Dart
* Riverpod
* Dio
* Clean Architecture
* Repository Pattern

## Project Structure

```text
lib/
├── app/
│
├── core/
│   └── network/
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
* JSON Parsing
* State Management
* Repository Pattern
* Dependency Injection
* Error Handling
* Loading States

## Architecture

This project follows Clean Architecture principles.

```text
Presentation
      ↓
Use Case
      ↓
Repository
      ↓
Data Source
      ↓
API
```

## API

JSONPlaceholder

https://jsonplaceholder.typicode.com

Current endpoint:

```text
/posts
```

## Learning Objectives

* Build maintainable Flutter applications
* Understand feature-first architecture
* Apply separation of concerns
* Learn scalable project organization
* Compare architectural approaches across frameworks

## Status

### Completed

* Project setup
* Clean Architecture structure
* Dio configuration
* Riverpod integration
* Posts feature

### Planned

* Post Details
* Comments
* Navigation
* Pagination
* Caching
* Offline Support
* Testing

## License

MIT License
