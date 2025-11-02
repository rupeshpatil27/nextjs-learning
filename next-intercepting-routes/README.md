# Next.js Intercepting Routes Example

This project provides a comprehensive, structured demonstration of **Next.js 15+ Intercepting Routes** and **Parallel Routes** within the App Router. It is designed to showcase every possible interception pattern, from same-level to root-level, and includes an advanced example combining both concepts.

## 🌟 Key Features Demonstrated

* **All Interception Matchers:** Implements and documents the `(.)`, `(..)`, `(..)(..)`, and `(...)` conventions.
* **Parallel Routes for Modals:** Uses the **`@modal`** slot for complex overlays.
* **Advanced Dynamic Interception:** The `/advanced` section demonstrates a photo gallery with dynamic interception using a Parallel Route slot.

---

## 📂 Project Structure

The project is organized into two main routing directories: `/basic` (for simple interception patterns) and `/advanced` (for the complex Parallel Route + Interception demo).

```text

app/
├── layout.js              # Root Layout 
├── page.js                # Home Page (Main navigation to /basic and /advanced)
|
├── advanced/              # Main Advanced Example Route
│   ├── layout.js          
│   ├── page.jsx           
│   ├── @modal/            # Parallel Route Slot for Modals
│   │   ├── default.jsx    # Mandatory fallback for inactive modal slot (returns null)
│   │   └── (.)photo/      # Intercepts /advanced/photo from the same level (/advanced)
│   │       └── [id]/      
│   │           └── page.jsx 
│   ├── photo/             # Dedicated full route for photo details
│   │   └── [id]/
│   │       └── page.jsx   # URL: /advanced/photo/[id] (Full page view fallback)
|
├── basic/                 # Main Basic Examples Route
│   ├── layout.js          
│   ├── page.jsx           
│   ├── (pages)/           # Route Group for organization (URL paths start from /basic)
│   │   ├── one-up/        # Demonstrates (..)target-one-up interception
│   │   │   ├── (..)target-one-up/page.jsx # Intercepts target-one-up one level up
│   │   │   └── page.jsx   
│   │   ├── root-level/    # Demonstrates (...)target-root interception
│   │   │   ├── (...)target-root/page.jsx # Intercepts target-root from the root
│   │   │   └── page.jsx   
│   │   ├── same-level/    # Demonstrates (.)target-same interception
│   │   │   ├── (.)target-same/page.jsx # Intercepts target-same on the same level
│   │   │   ├── target-same/page.jsx # Full page fallback for target-same
│   │   │   └── page.jsx   
│   │   ├── two-up/        # Demonstrates (..)(..)target-two-up interception
│   │   │   ├── level-two/ 
│   │   │   │   └── (..)(..)target-two-up/page.jsx # Intercepts two levels up
│   │   │   └── level-two/page.jsx 
│   │   │   └── page.jsx 
│   │
│   ├── target-one-up/page.jsx    # Full page fallback for one-up interception
│   └── target-two-up/page.jsx    # Full page fallback for two-up interception
|
└── target-root/page.jsx          # Full page fallback for root-level interception

```