# Zytronic - Hotel Website

This is a modern and responsive website for Zytronic, a fictional hotel. The project is built with Next.js and showcases the hotel's rooms, services, and special offers.

## ✨ Features

- **Modern UI/UX:** Clean, and engaging user interface.
- **Responsive Design:** Fully responsive and works on all devices.
- **Rooms Showcase:** Carousel to display different hotel rooms.
- **Services Section:** Highlights the services offered by the hotel.
- **Special Offers:** Displays current promotions and offers.
- **Blog Section:** A dedicated section for blog posts.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/) & [Lucide React](https://lucide.dev/) for icons.
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Package Manager:** [pnpm](https://pnpm.io/)

## 🏁 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/) (v20 or later)
- [pnpm](https://pnpm.io/installation)

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/your-username/zytronic.git
    cd zytronic
    ```

2.  **Install dependencies**

    ```bash
    pnpm install
    ```

3.  **Run the development server**

    ```bash
    pnpm dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📜 Available Scripts

In the project directory, you can run:

- `pnpm dev`: Runs the app in the development mode.
- `pnpm build`: Builds the app for production.
- `pnpm start`: Starts a production server.
- `pnpm lint`: Runs the linter to check for code quality.

## 📂 Project Structure

```
.
├── app/                # Main application folder
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Main page
├── components/         # Reusable components
│   ├── home/           # Components for the home page
│   ├── layout/         # Layout components (Header, Footer)
│   └── ui/             # UI components (Button, Carousel)
├── lib/                # Utility functions
├── public/             # Static assets (images, videos)
└── ...
```