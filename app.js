// ==================================
// 1) CONTENT (FLASH + FOLLOW-UP MCQ)
// ==================================

const flashcards = [
    {
        tag: "GAZETTEER",
        q: "What is the purpose of the Gazetteer app?",
        a: "A country explorer that shows live data (weather, news, exchange rates, facts) on an interactive map.",
        followUpMcq: {
        q: "Which combination best describes Gazetteer’s structure?",
        options: [
            "Frontend fetches APIs directly with keys stored in JS",
            "Frontend + PHP proxy for APIs + map UI via Leaflet",
            "Only a database app with CRUD operations",
            "A purely static site with no external data"
        ],
        correctIndex: 1,
        explain: "Gazetteer uses a JS frontend, a PHP proxy for API calls (to protect keys), and Leaflet for the interactive map."
        }
    },
    {
        tag: "GAZETTEER",
        q: "Why did you use a PHP proxy in Gazetteer?",
        a: "To hide API keys and handle API calls server-side so secrets aren't exposed in the browser.",
        followUpMcq: {
        q: "What is the main risk if API keys are exposed client-side?",
        options: [
            "The UI might load slower",
            "Users could reuse your key, causing misuse or unexpected costs",
            "Bootstrap styles may break",
            "Leaflet markers won’t show"
        ],
        correctIndex: 1,
        explain: "Exposed keys can be stolen and abused (rate limits, data misuse, unexpected charges)."
        }
    },
    {
        tag: "GAZETTEER",
        q: "What does Leaflet.js do in your app?",
        a: "It renders an interactive map and supports markers/overlays and map interactions.",
        followUpMcq: {
        q: "Why is a map library like Leaflet useful here?",
        options: [
            "It replaces the need for JavaScript",
            "It provides an interactive visual way to explore location-based data",
            "It stores API keys securely",
            "It automatically validates user input"
        ],
        correctIndex: 1,
        explain: "Leaflet improves UX by letting users explore country/location data visually."
        }
    },

    {
        tag: "DIRECTORY",
        q: "What type of app is Company Directory?",
        a: "A CRUD web app for managing employees, departments, and locations.",
        followUpMcq: {
        q: "Which action is NOT part of CRUD?",
        options: ["Create", "Read", "Update", "Render"],
        correctIndex: 3,
        explain: "CRUD is Create, Read, Update, Delete."
        }
    },
    {
        tag: "DIRECTORY",
        q: "Why use MySQL in Company Directory?",
        a: "To store relational, structured data (employees, departments, locations) and query it reliably.",
        followUpMcq: {
        q: "Why is a relational database a good fit for Company Directory?",
        options: [
            "Because it makes HTML faster",
            "Because employees, departments, and locations have relationships",
            "Because it replaces the need for PHP",
            "Because it prevents all security issues automatically"
        ],
        correctIndex: 1,
        explain: "The data is naturally related (employee belongs to a department, department to location)."
        }
    },
    {
        tag: "DIRECTORY",
        q: "Why use AJAX in Company Directory?",
        a: "To update data (add/edit/delete/search) without refreshing the whole page.",
        followUpMcq: {
        q: "What is the user experience benefit of AJAX?",
        options: [
            "It hides API keys",
            "It allows partial page updates for a smoother experience",
            "It encrypts all traffic automatically",
            "It writes SQL queries for you"
        ],
        correctIndex: 1,
        explain: "AJAX updates parts of the page without full reloads, making the UI feel faster."
        }
    },

    {
        tag: "SECURITY",
        q: "What is SQL injection (in simple terms)?",
        a: "A malicious input that tries to alter database queries to access or change data.",
        followUpMcq: {
        q: "Which practice best helps prevent SQL injection?",
        options: [
            "Putting API keys in the browser",
            "Using parameterised queries / prepared statements",
            "Using bigger fonts in the UI",
            "Storing passwords in plain text"
        ],
        correctIndex: 1,
        explain: "Prepared statements separate code from data so injected input can’t change the query structure."
        }
    },
    {
        tag: "SECURITY",
        q: "What is input validation and why does it matter?",
        a: "Checking user input is safe/expected before processing; it prevents errors and common attacks.",
        followUpMcq: {
        q: "Where should validation happen?",
        options: [
            "Only on the frontend",
            "Only on the backend",
            "On both frontend and backend",
            "Validation isn’t needed if you use Bootstrap"
        ],
        correctIndex: 2,
        explain: "Frontend improves UX, but backend validation is essential because users can bypass the frontend."
        }
    },

    {
        tag: "GENERAL",
        q: "What’s the basic logic flow of most web apps?",
        a: "Input → Process → Output (user does something, app processes data, UI updates).",
        followUpMcq: {
        q: "Which is the best example of Input → Process → Output?",
        options: [
            "User clicks button → JS fetches API → UI updates with results",
            "User reads page → nothing happens → page stays the same",
            "Server logs an error → developer ignores it → ships anyway",
            "CSS loads → database deletes records → user logs out"
        ],
        correctIndex: 0,
        explain: "User action triggers processing, then the UI updates based on results."
        }
    },

    // =========================
    // EXTRA: GAZETTEER
    // =========================
    {
        tag: "GAZETTEER",
        q: "What happens (high-level) when a user selects a country in Gazetteer?",
        a: "The app captures the selection, requests data from APIs (via a proxy), then updates the UI panels and map with the returned results.",
        followUpMcq: {
        q: "Which is the correct order of a typical data-driven UI flow?",
        options: [
            "Update UI → Fetch API → User clicks",
            "User clicks → Fetch API → Update UI",
            "Fetch API → User clicks → Update UI",
            "User clicks → Update UI → Fetch API"
        ],
        correctIndex: 1,
        explain: "Most apps follow Input (click) → Process (fetch) → Output (update UI)."
        }
    },
    {
        tag: "GAZETTEER",
        q: "Why is it useful to have loading states (spinners/messages) when calling APIs?",
        a: "Because API calls take time; a loading state improves UX and prevents the app feeling broken or unresponsive.",
        followUpMcq: {
        q: "Which is a UX risk if you don’t show any loading feedback?",
        options: [
            "Users may click repeatedly and trigger duplicate requests",
            "Your CSS will stop working",
            "Your database will automatically delete records",
            "Leaflet will disable zoom"
        ],
        correctIndex: 0,
        explain: "Without feedback, users often spam-click which can cause multiple calls and confusing UI updates."
        }
    },
    {
        tag: "GAZETTEER",
        q: "What’s an example of an 'edge case' for Gazetteer?",
        a: "Missing API data, an invalid country code, a slow network, or an API returning an error response.",
        followUpMcq: {
        q: "Which is the best way to handle an API error in the UI?",
        options: [
            "Show nothing and hope the user refreshes",
            "Show a clear message like 'Data unavailable' and keep the UI stable",
            "Delete the page content",
            "Disable the browser back button"
        ],
        correctIndex: 1,
        explain: "Good apps fail gracefully: explain the issue and keep the interface usable."
        }
    },

    // =========================
    // EXTRA: COMPANY DIRECTORY
    // =========================
    {
        tag: "DIRECTORY",
        q: "What is the benefit of separating employees, departments, and locations into different tables?",
        a: "It reduces duplication and makes the data more consistent (normalisation), because related data can be referenced rather than repeated.",
        followUpMcq: {
        q: "Which is a common problem if you store everything in one big table?",
        options: [
            "Repeated data (duplication) and inconsistent updates",
            "It becomes impossible to write HTML",
            "It automatically prevents SQL injection",
            "It removes the need for backend code"
        ],
        correctIndex: 0,
        explain: "Relational design helps avoid repeating department/location info for every employee."
        }
    },
    {
        tag: "DIRECTORY",
        q: "What’s the difference between frontend validation and backend validation?",
        a: "Frontend validation improves user experience, but backend validation is essential because users can bypass the frontend.",
        followUpMcq: {
        q: "Why must backend validation always exist?",
        options: [
            "Because CSS only works with backend validation",
            "Because users can edit requests or disable JavaScript",
            "Because MySQL won’t accept valid data otherwise",
            "Because Bootstrap requires it"
        ],
        correctIndex: 1,
        explain: "Never trust the client—requests can be manipulated, so the server must validate."
        }
    },
    {
        tag: "DIRECTORY",
        q: "Why is CRUD considered a core junior developer skill?",
        a: "Because most business apps revolve around managing data: creating, reading, updating and deleting records safely and reliably.",
        followUpMcq: {
        q: "Which feature is an example of 'Read' in CRUD?",
        options: [
            "Adding a new employee",
            "Displaying a list of employees",
            "Editing a department name",
            "Deleting a location"
        ],
        correctIndex: 1,
        explain: "Read is retrieving and showing existing data."
        }
    },

    // =========================
    // EXTRA: SECURITY
    // =========================
    {
        tag: "SECURITY",
        q: "Why should you avoid storing secrets (API keys, passwords) in frontend JavaScript?",
        a: "Because anyone can view the source code or network requests and extract the secret.",
        followUpMcq: {
        q: "Where should secrets be stored instead?",
        options: [
            "In client-side JS variables",
            "In HTML data attributes",
            "On the server (environment variables/config) and accessed via backend endpoints",
            "In the browser console"
        ],
        correctIndex: 2,
        explain: "Secrets should live server-side. The frontend calls your server, not the secret directly."
        }
    },
    {
        tag: "SECURITY",
        q: "What does 'least privilege' mean (security principle)?",
        a: "Give users/systems only the access they need to do their job—nothing extra.",
        followUpMcq: {
        q: "Which is a good example of least privilege?",
        options: [
            "All users have admin access so it’s easier",
            "A support user can view records but can’t delete them",
            "Everyone can export the entire database",
            "Storing all passwords in plain text"
        ],
        correctIndex: 1,
        explain: "Access should match role/responsibility to reduce damage from mistakes or attacks."
        }
    },

    // =========================
    // EXTRA: GENERAL LOGIC / WORKFLOW
    // =========================
    {
        tag: "GENERAL",
        q: "What’s the difference between a bug and an error?",
        a: "A bug is incorrect behaviour in the program; an error is often the message/symptom you see when something fails.",
        followUpMcq: {
        q: "Which is usually the first step when debugging?",
        options: [
            "Rewrite the whole project",
            "Reproduce the problem consistently",
            "Change random lines until it works",
            "Ignore it and ship"
        ],
        correctIndex: 1,
        explain: "Reproducing helps you pinpoint where/when it breaks and verify the fix."
        }
    },
    {
        tag: "GENERAL",
        q: "What’s the purpose of a daily stand-up in agile teams?",
        a: "To share progress, planned work, and blockers so the team stays aligned and issues are surfaced early.",
        followUpMcq: {
        q: "Which is the best stand-up update format?",
        options: [
            "A long technical deep-dive on everything you did",
            "What I did yesterday, what I’m doing today, what’s blocking me",
            "Only what you did last month",
            "Only what your manager wants to hear"
        ],
        correctIndex: 1,
        explain: "Stand-ups are short and focused: progress + plan + blockers."
        }
    },

    // =========================
    // EXTRA: FULL-STACK (JUNIOR FUNDAMENTALS)
    // =========================
    {
        tag: "GENERAL",
        q: "What’s the difference between frontend and backend?",
        a: "Frontend is what the user sees and interacts with in the browser; backend runs on the server and handles business logic, data access, and security.",
        followUpMcq: {
        q: "Which is a backend responsibility?",
        options: [
            "Rendering CSS animations",
            "Validating input and writing to a database",
            "Setting font sizes in Bootstrap",
            "Positioning an image in the hero section"
        ],
        correctIndex: 1,
        explain: "Backend handles server logic and data operations (validation, DB writes, authentication)."
        }
    },
    {
        tag: "GENERAL",
        q: "What is a user story (in simple terms)?",
        a: "A short description of a feature from a user’s perspective (who wants what and why).",
        followUpMcq: {
        q: "Which is a typical user story format?",
        options: [
            "As a user, I want X so that Y",
            "When the database runs, I query the UI",
            "If CSS is broken, the API must restart",
            "A server is a file with HTML inside"
        ],
        correctIndex: 0,
        explain: "User stories are written from the user’s perspective and focus on value."
        }
    },
    {
        tag: "GENERAL",
        q: "What are acceptance criteria and why do they matter?",
        a: "Acceptance criteria define what 'done' looks like for a user story, so everyone agrees how to test and confirm the feature works.",
        followUpMcq: {
        q: "Which best describes acceptance criteria?",
        options: [
            "A list of personal opinions about UI",
            "A checklist of conditions that must be true for the story to be complete",
            "A bug list from last year",
            "A password policy only"
        ],
        correctIndex: 1,
        explain: "They are testable conditions that confirm the requirement is met."
        }
    },
    {
        tag: "SECURITY",
        q: "What does CIA mean in security (Confidentiality, Integrity, Availability)?",
        a: "Confidentiality: only authorised users can access data. Integrity: data remains accurate and unaltered. Availability: systems/data are accessible when needed.",
        followUpMcq: {
        q: "Which is an example of Integrity?",
        options: [
            "Encrypting traffic so others can’t read it",
            "Preventing unauthorised changes to records",
            "Making the site load faster on mobile",
            "Adding more colours to the UI"
        ],
        correctIndex: 1,
        explain: "Integrity is about preventing unauthorised modification and keeping data accurate."
        }
    },
    {
        tag: "SECURITY",
        q: "What’s a practical way to reduce XSS risk (cross-site scripting) as a junior dev?",
        a: "Treat user input as untrusted: validate/sanitise input and safely output content (don’t inject raw HTML).",
        followUpMcq: {
        q: "Which action increases XSS risk?",
        options: [
            "Escaping output before rendering it",
            "Directly inserting user input into innerHTML",
            "Validating and sanitising input",
            "Using textContent to display user text"
        ],
        correctIndex: 1,
        explain: "Putting untrusted input into innerHTML can execute scripts if not sanitised."
        }
    },
    {
        tag: "GENERAL",
        q: "What’s the difference between authentication and authorisation?",
        a: "Authentication confirms who you are (login). Authorisation controls what you can access/do (permissions).",
        followUpMcq: {
        q: "Which is authorisation?",
        options: [
            "Logging in with a password",
            "Using a username field",
            "A role that allows viewing but not deleting records",
            "Resetting your password"
        ],
        correctIndex: 2,
        explain: "Authorisation is about permissions/roles after identity is verified."
        }
    },
    {
        tag: "GENERAL",
        q: "What does HTTP status code 404 mean?",
        a: "The requested resource wasn’t found (wrong URL or missing endpoint/page).",
        followUpMcq: {
        q: "Which status code usually means 'server error'?",
        options: ["200", "301", "404", "500"],
        correctIndex: 3,
        explain: "500 indicates a server-side error."
        }
    },
    {
        tag: "GENERAL",
        q: "What’s the difference between GET and POST requests?",
        a: "GET requests retrieve data; POST requests send data to create/process something (often changing server state).",
        followUpMcq: {
        q: "Which request is most appropriate for creating a new employee record?",
        options: ["GET", "POST", "DELETE", "CACHE"],
        correctIndex: 1,
        explain: "POST is commonly used to create new resources."
        }
    },
    {
        tag: "GENERAL",
        q: "What’s a good debugging approach when something 'does nothing' after you click a button?",
        a: "Check the console for errors, confirm the click handler is attached, verify the function runs, and inspect network requests if it makes an API call.",
        followUpMcq: {
        q: "What’s the fastest first check in the browser when a click does nothing?",
        options: [
            "Reinstall Windows",
            "Check the Console for errors",
            "Delete your CSS file",
            "Rename every function"
        ],
        correctIndex: 1,
        explain: "Console errors often point directly to the failing line."
        }
    },
    {
        tag: "GENERAL",
        q: "In a stand-up, what should you mention if you're blocked?",
        a: "Say what’s blocking you, what you tried, and what help you need, so the team can unblock you quickly.",
        followUpMcq: {
        q: "Which is a strong 'blocker' update?",
        options: [
            "I’m blocked by an API error; I checked the response and logs, I need help with the auth token",
            "Everything is fine but I didn’t do anything",
            "I’ll just keep trying random fixes",
            "I won’t mention it"
        ],
        correctIndex: 0,
        explain: "Clear blocker + what you tried + what help you need = great stand-up communication."
        }
    },
    {
        tag: "GENERAL",
        q: "What’s a good way to handle an IT service desk software issue ticket as a junior dev?",
        a: "Reproduce the issue, gather details (steps, user role, screenshots), check logs/errors, attempt a safe fix, then document what you found and escalate if needed.",
        followUpMcq: {
        q: "Which detail is most helpful to record for a bug ticket?",
        options: [
            "User’s favourite colour",
            "Exact steps to reproduce the issue",
            "The number of browser tabs open",
            "The laptop wallpaper"
        ],
        correctIndex: 1,
        explain: "Reproduction steps make the issue testable and fixable."
        }
    },
    // =========================
    // RECRUITMENT PACK: GENERAL / NETWORK / PERFORMANCE / TESTING
    // =========================
    {
        tag: "GENERAL",
        q: "Describe what happens from typing a URL into the browser to the page finishing loading.",
        a: "High-level: DNS lookup → connect (TCP/TLS) → HTTP request → server response → browser parses HTML → loads CSS/JS/images → builds DOM/CSSOM → render (layout/paint/composite) → runs JS and updates UI.",
        followUpMcq: {
        q: "Which order is closest to the real rendering pipeline?",
        options: [
            "Paint → Layout → Parse HTML",
            "Parse HTML → Layout → Paint/Composite",
            "Composite → DNS → Paint",
            "Parse CSS → Send email → Layout"
        ],
        correctIndex: 1,
        explain: "Browser builds DOM/CSSOM first, then layout, then paint/composite to show pixels."
        }
    },
    {
        tag: "GENERAL",
        q: "What is a CDN and what is the benefit of using one?",
        a: "A Content Delivery Network serves assets from locations closer to the user, improving load time, reliability, and often caching.",
        followUpMcq: {
        q: "Which is a typical CDN benefit?",
        options: [
            "It automatically fixes JavaScript bugs",
            "Reduced latency by serving assets from nearby servers",
            "It replaces the need for a backend",
            "It prevents all security vulnerabilities"
        ],
        correctIndex: 1,
        explain: "CDNs reduce round-trip time and can offload traffic from your origin server."
        }
    },
    {
        tag: "GENERAL",
        q: "What tools would you use to find a performance bug in your code?",
        a: "Browser DevTools: Performance panel (profiling), Lighthouse, Network tab, Coverage, and console timing; plus real-user monitoring in production if available.",
        followUpMcq: {
        q: "Which DevTools tab is best for measuring long tasks and JS runtime bottlenecks?",
        options: ["Elements", "Performance", "Application", "Sources"],
        correctIndex: 1,
        explain: "Performance profiling helps spot long tasks, layout thrash, expensive JS, and rendering issues."
        }
    },
    {
        tag: "GENERAL",
        q: "Explain layout, painting, and compositing in simple terms.",
        a: "Layout: calculate sizes/positions. Paint: draw pixels (colors, text, shadows). Composite: combine painted layers on screen (often GPU accelerated).",
        followUpMcq: {
        q: "Which change is most likely to trigger layout work?",
        options: [
            "Changing background-color",
            "Changing width/height",
            "Changing opacity",
            "Changing transform: translate()"
        ],
        correctIndex: 1,
        explain: "Geometry changes (width/height/position) often cause layout; transforms/opacity are usually cheaper."
        }
    },
    {
        tag: "GENERAL",
        q: "What is the difference between unit tests and integration/functional tests?",
        a: "Unit tests check small pieces (a function/module) in isolation. Integration/functional tests check how parts work together (or end-to-end user flows).",
        followUpMcq: {
        q: "Which is the best example of an integration test?",
        options: [
            "Testing a single helper function returns expected output",
            "Testing login flow works with database and API together",
            "Renaming a CSS class",
            "Changing a font"
        ],
        correctIndex: 1,
        explain: "Integration tests validate interaction between components/services."
        }
    },
    {
        tag: "GENERAL",
        q: "What is the purpose of a code style linting tool?",
        a: "To enforce consistent code style and catch common mistakes early (before runtime), improving maintainability and reducing bugs.",
        followUpMcq: {
        q: "Which is a realistic benefit of linting?",
        options: [
            "Guarantees zero bugs forever",
            "Highlights issues like unused variables and inconsistent formatting",
            "Replaces unit tests completely",
            "Makes images load in 4K"
        ],
        correctIndex: 1,
        explain: "Linters catch common errors and enforce consistency."
        }
    },
    {
        tag: "GENERAL",
        q: "What is CORS and what issue does it address?",
        a: "CORS is a browser security mechanism that restricts cross-origin requests; servers can allow safe cross-origin access via headers.",
        followUpMcq: {
        q: "Why might your API call fail in the browser but work in Postman?",
        options: [
            "Postman uses CSS differently",
            "Browsers enforce CORS; Postman typically doesn’t",
            "Postman blocks all requests by default",
            "Because JavaScript cannot call APIs"
        ],
        correctIndex: 1,
        explain: "CORS is enforced by browsers to protect users; tools like Postman aren’t constrained the same way."
        }
    },
    {
        tag: "GENERAL",
        q: "What’s the difference between localStorage, sessionStorage, and cookies?",
        a: "localStorage persists until cleared; sessionStorage lasts for the tab session; cookies are sent with HTTP requests (often used for sessions) and have expiry/security flags.",
        followUpMcq: {
        q: "Which storage is automatically sent to the server with requests?",
        options: ["localStorage", "sessionStorage", "cookies", "all of them"],
        correctIndex: 2,
        explain: "Cookies are included with requests (depending on domain/path/SameSite/etc.)."
        }
    }
];

    const standaloneMcqs = [
    // Optional: if you choose MCQ-only mode, these appear too
    {
        tag: "GENERAL",
        q: "What’s usually the first place to look when JS behaves unexpectedly?",
        options: ["Email inbox", "Browser console", "Photos folder", "Task Manager"],
        correctIndex: 1,
        explain: "The browser console shows errors/warnings and is the quickest first check."
    },
    {
        tag: "GAZETTEER",
        q: "Why is a backend proxy useful when calling third-party APIs?",
        options: [
            "It makes HTML render faster",
            "It hides API keys and centralises API calling logic",
            "It replaces the need for JavaScript",
            "It automatically creates a database"
        ],
        correctIndex: 1,
        explain: "A proxy keeps secrets server-side and lets you manage requests safely."
    },
    {
        tag: "DIRECTORY",
        q: "What does AJAX allow you to do in a CRUD app?",
        options: [
            "Update part of a page without a full reload",
            "Store passwords securely by default",
            "Prevent all hacking attempts",
            "Replace the database"
        ],
        correctIndex: 0,
        explain: "AJAX calls the server in the background and updates the UI smoothly."
    },
    {
        tag: "SECURITY",
        q: "Which is the strongest reason to validate input on the backend?",
        options: [
            "It makes buttons look nicer",
            "Users can bypass frontend rules",
            "It makes Leaflet maps load",
            "It increases monitor resolution"
        ],
        correctIndex: 1,
        explain: "Client-side rules can be bypassed; server-side validation is essential."
    },
    {
        tag: "GENERAL",
        q: "If an API request fails, which tool tab helps you inspect the request/response?",
        options: ["Elements", "Network", "Sources", "Performance"],
        correctIndex: 1,
        explain: "Network shows requests, status codes, payloads, and responses."
    },
       {
        tag: "GENERAL",
        q: "Which statement best describes a REST API?",
        options: [
            "A database table for storing images",
            "A set of HTTP endpoints for exchanging data between systems",
            "A CSS framework for buttons",
            "A browser plugin"
        ],
        correctIndex: 1,
        explain: "REST APIs expose endpoints (URLs) that use HTTP methods to send/receive data."
    },
    {
        tag: "GENERAL",
        q: "Which of these is a common reason to use environment variables on the server?",
        options: [
            "To store API keys and secrets securely",
            "To style the UI without CSS",
            "To avoid using JavaScript",
            "To automatically prevent all bugs"
        ],
        correctIndex: 0,
        explain: "Environment variables keep secrets out of client-side code and source control."
    },
    {
        tag: "SECURITY",
        q: "Which practice most helps reduce the risk of insecure direct object access (IDOR)?",
        options: [
            "Only validating inputs on the frontend",
            "Checking permissions on the server for every request",
            "Putting IDs in the URL with no checks",
            "Using larger buttons"
        ],
        correctIndex: 1,
        explain: "Server-side authorisation checks prevent users accessing data they shouldn’t."
    },
    {
        tag: "GENERAL",
        q: "What is the purpose of version control (e.g., Git)?",
        options: [
            "To make CSS load faster",
            "To track changes, collaborate, and revert if needed",
            "To host databases inside HTML",
            "To replace the need for testing"
        ],
        correctIndex: 1,
        explain: "Version control tracks code history and supports safe collaboration."
    },
    {
        tag: "GENERAL",
        q: "If a feature passes locally but fails in production, what is a likely first thing to check?",
        options: [
            "Differences in environment/config (API keys, URLs, CORS, database)",
            "The user’s keyboard layout",
            "Whether the monitor is 4K",
            "If the browser has bookmarks"
        ],
        correctIndex: 0,
        explain: "Environment differences (config, paths, keys) are a common cause of 'works on my machine'."
    },
    {
        tag: "GENERAL",
        q: "Which HTTP status code usually means 'unauthorised' (not logged in / invalid credentials)?",
        options: ["200", "401", "404", "500"],
        correctIndex: 1,
        explain: "401 indicates the request lacks valid authentication credentials."
    },
    // =========================
    // RECRUITMENT PACK: CODING (JS OUTPUT / CONCEPT CHECKS)
    // =========================
    {
        tag: "GENERAL",
        q: "What is the value of foo?  var foo = 10 + '20';",
        options: ["30", "'1020'", "NaN", "1020"],
        correctIndex: 1,
        explain: "Number + string triggers string coercion, so the result is the string '1020'."
    },
    {
        tag: "GENERAL",
        q: "What will this output? console.log(0.1 + 0.2 == 0.3);",
        options: ["true", "false", "undefined", "throws error"],
        correctIndex: 1,
        explain: "Floating-point precision means 0.1 + 0.2 is not exactly 0.3, so it’s false."
    },
    {
        tag: "GENERAL",
        q: "What does this return? \"i'm a lasagna hog\".split(\"\").reverse().join(\"\");",
        options: [
            "i'm a lasagna hog",
            "goh angasal a m'i",
            "hog lasagna i'm a",
            "throws error"
        ],
        correctIndex: 1,
        explain: "Split into chars → reverse array → join back into a reversed string."
    },
    {
        tag: "GENERAL",
        q: "What does this print? console.log('one'); setTimeout(()=>console.log('two'),0); Promise.resolve().then(()=>console.log('three')); console.log('four');",
        options: [
            "one, two, three, four",
            "one, three, two, four",
            "one, four, three, two",
            "one, four, two, three"
        ],
        correctIndex: 2,
        explain: "Synchronous logs first (one, four), then microtasks (three), then macrotasks (two)."
    },
    {
        tag: "GENERAL",
        q: "What will this log? (function(){ var a = b = 3; })(); console.log(typeof a !== 'undefined', typeof b !== 'undefined');",
        options: [
            "true true",
            "false false",
            "false true",
            "true false"
        ],
        correctIndex: 2,
        explain: "a is function-scoped; b becomes global (no var/let/const), so a is undefined outside, b is defined."
    },
    {
        tag: "GENERAL",
        q: "Will foo1 and foo2 return the same thing? (return on new line before object literal)",
        options: [
            "Yes, both return the object",
            "No, foo2 returns undefined due to automatic semicolon insertion",
            "No, foo1 throws an error",
            "Yes, both return undefined"
        ],
        correctIndex: 1,
        explain: "A newline after return can trigger automatic semicolon insertion, so foo2 returns undefined."
    },

    // =========================
    // RECRUITMENT PACK: HTML / CSS / NETWORK / TESTING QUICK MCQs
    // =========================
    {
        tag: "GENERAL",
        q: "What’s the main purpose of the HTML doctype?",
        options: [
            "To load JavaScript faster",
            "To tell the browser to use standards mode",
            "To add metadata for SEO only",
            "To enable CSS Grid"
        ],
        correctIndex: 1,
        explain: "Doctype helps the browser render using standards mode (avoids quirks mode)."
    },
    {
        tag: "GENERAL",
        q: "What’s the difference between <script async> and <script defer>?",
        options: [
            "They are identical",
            "async runs after HTML parse; defer blocks parsing",
            "async can execute as soon as it loads; defer executes after HTML parsing (in order)",
            "defer executes immediately; async waits for DOMContentLoaded"
        ],
        correctIndex: 2,
        explain: "async loads/executed ASAP (order not guaranteed); defer executes after parse, in order."
    },
    {
        tag: "GENERAL",
        q: "What does '* { box-sizing: border-box; }' do?",
        options: [
            "Adds borders to all elements",
            "Makes width/height include padding and border",
            "Disables margin collapsing",
            "Forces flexbox layout"
        ],
        correctIndex: 1,
        explain: "Border-box makes sizing more predictable by including padding/border within declared width/height."
    },
    {
        tag: "GENERAL",
        q: "What is selector specificity (in CSS) used for?",
        options: [
            "To compress CSS",
            "To decide which rule wins when multiple rules match",
            "To make animations smoother",
            "To prevent CORS errors"
        ],
        correctIndex: 1,
        explain: "Specificity determines which CSS rule applies when there are conflicts."
    },
    {
        tag: "GENERAL",
        q: "What’s the difference between unit tests and integration tests?",
        options: [
            "Unit tests are manual; integration tests are automatic",
            "Unit tests check small isolated parts; integration tests check components working together",
            "Integration tests are always faster",
            "They are the same thing"
        ],
        correctIndex: 1,
        explain: "Unit = small/isolated; integration = interaction between components/services."
    },
];

// =======================
// 2) DOM HELPERS
// =======================
const $ = (id) => document.getElementById(id);

function shuffle(arr) {
    for(let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// =======================
// 3) STATE
// =======================
let mode = "FLASH_THEN_MCQ";
let tag = "ALL";

let queue = [];     // items to study (flashcards or mcqs)
let queueIndex = -1;

let scoreRight = 0;
let scoreWrong = 0;

//For flashcard step
let flashRevealed = false;
let pendingFollowUp = null;  // if a flashcard has follow-up MCQ

// =======================
// 4) BUILD QUEUE
// =======================
function getFilteredFlashcards() {
    return tag === "ALL" ? flashcards : flashcards.filter(c => c.tag === tag);
}
function getFilteredMcqs() {
    const all = [...standaloneMcqs];
    return tag === "ALL" ? all : all.filter(m =>  m.tag === tag);
}

function buildQueue() {
    const filteredFlash = getFilteredFlashcards();
    const filteredMcq = getFilteredMcqs();

    if(mode === "FLASH_ONLY") {
        queue = shuffle(filteredFlash.map(c => ({ type: "FLASH", data: c})));
    } else if (mode === "MCQ_ONLY") {
        //MCQonly: use standalone MCQs + follow-ups from flashcards
        const followUps = filteredFlash
            .filter(c => c.followUpMcq)
            .map(c => ({ type: "MCQ", data: c.followUpMcq, from: c.tag }));
        const standalones = filteredMcq.map(m => ({ type: "MCQ", data: m, from: m.tag }));
        queue = shuffle([...followUps, ...standalones]);
    } else {
        //Flash -> Follow-up MCQ mode:
        queue = shuffle(filteredFlash.map(c => ({ type: "FLASH", data: c})));
    }

    queueIndex = -1;
    pendingFollowUp = null; 

    $("itemTotal").textContent = queue.length.toString();
    $("itemIndex").textContent = "0";

    renderEmptyState();
}

function renderEmptyState() {
    $("flashPanel").classList.remove("hidden");
    $("mcqPanel").classList.add("hidden");

    $("flashQuestion").textContent = queue.length ? "Press Next to start" : "No items for this filter/mode.";
    $("flashAnswer").textContent = "";
    $("flashAnswer").classList.add("hidden");
    $("revealBtn").disabled = true;
    $("rightBtn").disabled = true;
    $("wrongBtn").disabled = true;

    $("mcqQuestion").textContent = "";
    $("mcqOptions").innerHTML = "";
    $("mcqFeedback").classList.add("hidden");
    $("mcqNextBtn").disabled = true;
}

// =======================
// 5) RENDER FLASH
// =======================

//Puts a flashcard on screen
//EFFECT: user sees the question; answer hidden until 'Reveal' is clicked
function renderFlash(card) {
    flashRevealed = false;
    pendingFollowUp = card.followUpMcq || null; //store follow-up so we can show it after marking
    
    $("flashPanel").classList.remove("hidden");
    $("mcqPanel").classList.add("hidden");

    $("flashQuestion").textContent = card.q;
    $("flashAnswer").textContent = card.a;
    $("flashAnswer").classList.add("hidden");

    // Reveal is allowed; marking is locked until answer is revealed (avoids guessing spam)
    $("revealBtn").disabled = false;
    $("rightBtn").disabled = true;
    $("wrongBtn").disabled = true;
}

// Shows the answer and enables Right/Wrong.
// EFFECT: user can now self-mark their recall.
function revealFlash() {
    flashRevealed = true;
    $("flashAnswer").classList.remove("hidden");
    $("rightBtn").disabled = false;
    $("wrongBtn").disabled = false;
}

// Records right/wrong for flashcards.
// WHY: scoring encourages feedback + helps you notice weak areas.
// EFFECT: updates score on screen; may trigger the follow-up MCQ.
function markFlash(isRight) {
    if (!flashRevealed) return; // guard: must reveal first

    if (isRight) scoreRight++;
    else scoreWrong++;

    $("scoreRight").textContent = scoreRight.toString();
    $("scoreWrong").textContent = scoreWrong.toString();

    // In Flash->MCQ mode, immediately deep-dive with an MCQ if this card has one
    if (mode === "FLASH_THEN_MCQ" && pendingFollowUp) {
        renderMcq(pendingFollowUp);
        pendingFollowUp = null;
        return; // stop here so user answers MCQ before moving on
    }

    nextItem(); // otherwise just go to next item
}

// =======================
// 6) RENDER MCQ
// =======================

//Shows the MCQ panel and builds 4 option buttons
//EFFECT: user sees the multiple-choice buttons they can click
function renderMcq(mcq) {
    $("flashPanel").classList.add("hidden");
    $("mcqPanel").classList.remove("hidden");

    $("mcqQuestion").textContent = mcq.q;
    $("mcqOptions").innerHTML = "";
    $("mcqFeedback").classList.add("hidden");
    $("mcqNextBtn").disabled = true;

    // Create one button per option and attach a click handler (this is "event-driven UI")
    const options = mcq.options.map((opt, idx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "optionBtn";
        btn.textContent = opt;

        //Clicking an option grades it and shows feedback
        btn.addEventListener("click", () => gradeMcq(idx, mcq));
        return btn;
    });

    options.forEach(btn => $("mcqOptions").appendChild(btn));
}

// Grades the MCQ selection, updates score, shows explanation.
// EFFECT: disables options (so you can’t change answer), shows feedback text, enables Continue.
function gradeMcq(chosenIndex, mcq) {
    const btns = Array.from(document.querySelectorAll(".optionBtn"));
    btns.forEach(b => b.disabled = true);

    const correct = chosenIndex === mcq.correctIndex;
    if (correct) scoreRight++;
    else scoreWrong++;

    $("scoreRight").textContent = scoreRight.toString();
    $("scoreWrong").textContent = scoreWrong.toString();

    const feedback = correct
        ? `✅ Correct. ${mcq.explain || ""}`
        : `❌ Not quite. ${mcq.explain || ""}`;

    $("mcqFeedback").textContent = feedback.trim();
    $("mcqFeedback").classList.remove("hidden");
    $("mcqNextBtn").disabled = false;
}

// After an MCQ, move on.
// In Flash->MCQ mode, this naturally returns you to the flashcard flow (nextItem()).
function continueAfterMcq() {
  nextItem();
}

// =======================
// 7) NAVIGATION
// =======================
// Moves through the queue and renders the next item.
// EFFECT: changes what the user sees (next flashcard or next MCQ).
function nextItem() {
    if (!queue.length) return;

    queueIndex++;
    if (queueIndex >= queue.length) queueIndex = 0; // loops back to start

    $("itemIndex").textContent = (queueIndex + 1).toString();

    const item = queue[queueIndex];

    // In Flash->MCQ mode, queue items are always FLASH; follow-ups are triggered separately
    if (mode === "FLASH_THEN_MCQ") {
        renderFlash(item.data);
        return;
    }

    // Other modes can contain mixed item types
    if (item.type === "FLASH") renderFlash(item.data);
    else renderMcq(item.data);
}

// =======================
// 8) CONTROLS
// =======================
// Resets scores shown in the stats footer.
// EFFECT: user sees score return to 0/0.
function resetScore() {
    scoreRight = 0;
    scoreWrong = 0;
    $("scoreRight").textContent = "0";
    $("scoreWrong").textContent = "0";
    }

// Dropdown filter: rebuild queue so only that topic appears
$("tagFilter").addEventListener("change", (e) => {
    tag = e.target.value;
    buildQueue();
});

// Mode dropdown: rebuild queue so the UI behaves differently (flash only / mcq only / both)
$("modeSelect").addEventListener("change", (e) => {
    mode = e.target.value;
    buildQueue();
});

// Shuffle button: randomises the current queue order.
// EFFECT: changes the order of questions the user sees next.
$("shuffleBtn").addEventListener("click", () => {
    queue = shuffle(queue);
    queueIndex = -1;
    pendingFollowUp = null;
    $("itemIndex").textContent = "0";
    renderEmptyState();
});

$("resetBtn").addEventListener("click", resetScore);
$("nextBtn").addEventListener("click", nextItem);

// Flashcard buttons
$("revealBtn").addEventListener("click", revealFlash);
$("rightBtn").addEventListener("click", () => markFlash(true));
$("wrongBtn").addEventListener("click", () => markFlash(false));

// MCQ continue button
$("mcqNextBtn").addEventListener("click", continueAfterMcq);

// init: set UI to a clean starting state and build the first queue
resetScore();
buildQueue();