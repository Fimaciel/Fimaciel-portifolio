# Prompt for Claude - Portfolio Implementation

Hello Claude! I need your help to implement two major features in my portfolio project:

## 1. Dark/Light Mode
- **Stack**: The project uses Tailwind CSS and Shadcn UI.
- **Provider**: I want to use `next-themes` for theme management.
- **Requirement**:
    - Add a `ThemeProvider` to wrap the application.
    - Create a `ThemeToggle` component (Sun/Moon icons) and place it in the `Navbar`.
    - Ensure colors transition smoothly using `transition-colors`.

## 2. Multi-language Support (PT-BR / EN)
- **Stack**: Use `react-i18next`.
- **Requirements**:
    - Initialize i18next with two languages: `pt` (default) and `en`.
    - Create translation files: `src/i18n/locales/pt.json` and `src/i18n/locales/en.json`.
    - **Refactor Sections**: Move all hardcoded text from the following components into these JSON files:
        - `Navbar.tsx` (Labels)
        - `HeroSection.tsx` (Typing text, bio, terminal content)
        - `AboutSection.tsx`
        - `ExperienceSection.tsx`
        - `EducationSection.tsx`
        - `ProjectsSection.tsx`
    - **Refactor Data**: The files in `src/data/` (education, experience, projects) are currently in Portuguese. Help me refactor them so they can serve both languages (either by providing a translated version or using translation keys).
    - **Language Toggle**: Add a button or dropdown in the `Navbar` to switch between 🇧🇷 and 🇺🇸.

## Project Structure Reference
- `src/components/layout/Navbar.tsx`: Main navigation.
- `src/components/sections/`: Contains all portfolio sections.
- `src/data/`: Hardcoded content in TypeScript files.
- `src/App.tsx`: Main entry point where providers should be added.

Please start by outlining your approach and then provide the code for the configuration files and the updated components.
