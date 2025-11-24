# Feature-Sliced Design in React

## Introduction

Feature-Sliced Design (FSD) is a modern architectural methodology for organizing frontend applications. It provides a systematic approach to structuring code that emphasizes modularity, scalability, and maintainability.

### Core Principles

**1. Separation by Layers**
FSD organizes code into distinct layers, each with a specific purpose:
- **App** - Application initialization, providers, and global configurations
- **Processes** - Complex inter-page workflows (optional in many projects)
- **Pages** - Full-page components that compose features and widgets
- **Widgets** - Large, independent UI blocks combining multiple features
- **Features** - User interactions and business logic (e.g., authentication, article creation)
- **Entities** - Business entities and their representations (e.g., User, Article)
- **Shared** - Reusable utilities, UI components, and configurations

**2. Slices Within Layers**
Each layer (except App and Shared) is divided into slices representing specific business domains. For example:
- `entities/article` - Everything related to the Article entity
- `features/login` - Login functionality
- `widgets/header` - Header component

**3. Segments Within Slices**
Each slice is further organized into segments:
- **ui/** - React components
- **model/** - Business logic, state management, hooks
- **api/** - API interactions and data fetching
- **lib/** - Helper functions and utilities specific to the slice
- **config/** - Configuration and constants

**4. Import Rules**
FSD enforces strict import rules to prevent architectural violations:
- Lower layers cannot import from higher layers
- Slices within the same layer should be independent of each other
- Public API is exposed through index files

### Benefits

- **Predictability**: Consistent structure makes it easy to locate and understand code
- **Scalability**: New features can be added without refactoring the entire application
- **Maintainability**: Clear boundaries reduce coupling and make changes safer
- **Team Collaboration**: Standardized structure helps teams work efficiently
- **Testability**: Isolated slices are easier to test independently

### Project Structure Example

```
src/
├── app/                              # Application layer
│   ├── index.tsx                     # App entry point
│   ├── providers/                    # Global providers
│   │   ├── index.ts
│   │   ├── RouterProvider.tsx        # Routing setup
│   │   └── StoreProvider.tsx         # Redux store setup
│   ├── router/                       # Application routing
│   │   ├── AppRouter.tsx
│   │   └── index.ts
│   ├── stores/                       # Global state management
│   │   └── mainStore/
│   │       ├── index.ts
│   │       ├── mainStore.ts
│   │       └── rootReducer.ts
│   └── styles/                       # Global styles
│       └── index.css
│
├── entities/                         # Business entities layer
│   ├── article/                      # Article entity
│   │   ├── api/
│   │   │   ├── articleApi.ts         # Article API calls
│   │   │   └── index.ts
│   │   ├── model/
│   │   │   ├── articleSlice.ts       # Article state slice
│   │   │   ├── thunks.ts             # Async actions
│   │   │   ├── types.ts              # Article types
│   │   │   └── index.ts
│   │   └── ui/
│   │       ├── ArticleCard.tsx       # Article display component
│   │       └── index.ts
│   │
│   └── user/                         # User entity
│       ├── api/
│       │   ├── userApi.ts            # User API calls
│       │   └── index.ts
│       ├── lib/
│       │   ├── userLocalStorageActions.ts  # User storage utils
│       │   └── index.ts
│       └── model/
│           ├── userSlice.ts          # User state slice
│           ├── thunks.ts             # Auth async actions
│           ├── types.ts              # User types
│           └── index.ts
│
├── features/                         # Features layer (user interactions)
│   ├── article-create/               # Create article feature
│   │   ├── model/
│   │   │   ├── useCreateArticle.ts   # Create article hook
│   │   │   └── index.ts
│   │   └── ui/
│   │       ├── CreateArticleForm.tsx # Create form component
│   │       └── index.ts
│   │
│   ├── article-delete/               # Delete article feature
│   │   ├── model/
│   │   │   ├── useDeleteArticle.ts   # Delete article hook
│   │   │   └── index.ts
│   │   └── ui/
│   │       ├── DeleteArticleButton.tsx
│   │       └── index.ts
│   │
│   ├── article-edit/                 # Edit article feature
│   │   ├── model/
│   │   │   ├── useEditArticle.ts     # Edit article hook
│   │   │   └── index.ts
│   │   └── ui/
│   │       ├── EditArticleForm.tsx   # Edit form component
│   │       └── index.ts
│   │
│   └── login/                        # Login feature
│       ├── model/
│       │   ├── useLogin.ts           # Login hook
│       │   └── index.ts
│       └── ui/
│           ├── AuthForm.tsx          # Login form component
│           └── index.ts
│
├── widgets/                          # Widgets layer (composite blocks)
│   ├── articleList/                  # Article list widget
│   │   ├── model/
│   │   │   ├── useArticleList.ts     # Article list logic
│   │   │   └── index.ts
│   │   └── ui/
│   │       ├── ArticleList.tsx       # List component
│   │       └── index.ts
│   │
│   └── header/                       # Header widget
│       └── ui/
│           └── Header.tsx            # Header component
│
├── pages/                            # Pages layer
│   ├── HomePage/
│   │   └── index.tsx                 # Home page with article list
│   ├── ArticleReadPage/
│   │   └── index.tsx                 # Single article view
│   ├── ArticleEditPage/
│   │   └── index.tsx                 # Article edit page
│   └── LoginPage/
│       └── index.tsx                 # Login page
│
└── shared/                           # Shared layer (reusable code)
    ├── api/
    │   ├── baseApi.ts                # RTK Query base API
    │   └── index.ts
    ├── config/
    │   ├── routes.ts                 # Route constants
    │   └── index.ts
    ├── lib/
    │   ├── utils.ts                  # Utility functions
    │   └── index.ts
    └── ui/                           # Shared UI components
        ├── button.tsx
        ├── input.tsx
        ├── textarea.tsx
        ├── label.tsx
        ├── dialog.tsx
        ├── sonner.tsx                # Toast notifications
        └── index.ts
```

This architecture promotes a clean, scalable codebase that grows gracefully as your application evolves.

