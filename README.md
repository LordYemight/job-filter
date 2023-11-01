# Job Listing Application in React

This job listing application in React employs various components to manage and display job listings with customizable filtering options.

## How It Works

- **App Component:** The top-level component manages the state of selected keywords for filtering job listings. It imports and renders the `Jobs` and `Header` components, controlling their interactions and states.

- **Header Component:** Renders selected keywords, providing the option to remove individual keywords or clear all selected keywords.

- **Jobs Component:** Filters and displays job listings based on the selected keywords, showcasing the `Job` component for individual job listing details.

- **Job Component:** Represents an individual job listing, displaying company details, job position, and other relevant information. Users can filter jobs by clicking on specific keywords.

- **Filter Functionality:** Users can add keywords to the filtering list, which dynamically filters job listings based on the selected keywords.

- **Dynamic SVG Import:** The application utilizes the `useState` and `useEffect` hooks to handle the dynamic import of job logos as SVGs, enhancing the visual representation of job listings.

- **Responsiveness:** The design is responsive, ensuring seamless usage across different screen sizes and devices.

## Getting Started

To utilize this application:

1. Clone this repository to your local machine.

2. Install the required dependencies by running `npm install` in your terminal.

3. Start the development server by running `npm start` in your terminal.

---

**Note**: Ensure that the `data.json` file is appropriately formatted to ensure accurate and seamless data representation within the application.
