The `App` component is the top-level component that serves as the entry point of the application. It imports the necessary components: `data` from the JSON file, `Jobs`, and `Header`.

Inside the `App` component, there is a state variable called `filterKeywords` which is managed using the `useState` hook. It stores the selected keywords for filtering the job listings.

The `addFilterKeywords` function is defined, which is passed as a prop to the `Jobs` component. This function takes a keyword as input and adds it to the `filterKeywords` state if it is not already included.

The `deleteKeyword` function is also defined, which removes a keyword from the `filterKeywords` state. It filters out the selected keyword from the current state and updates the state accordingly.

The `clearAll` function is responsible for clearing all the selected keywords. It sets the `filterKeywords` state to an empty array, effectively removing all the applied filters.

In the rendering part, the `Header` component is conditionally displayed only if there are selected keywords. It receives the `filterKeywords` state, the `deleteKeyword` function, and the `clearAll` function as props.

The `Jobs` component is also rendered and receives the `filterKeywords`, `data`, and `addFilterKeywords` function as props.

Inside the `Jobs` component, there is a state variable called `filteredData` which stores the filtered job listings based on the selected keywords. It is managed using the `useState` hook.

The `modifiedData` function is defined, which is responsible for filtering the job listings based on the selected keywords. If there are selected keywords, it filters the `data` array using the `filter` function and the `every` method. The `every` method checks if every keyword matches the job role, level, languages, or tools of a job listing. The filtered data is then stored in the `filteredData` state.

The `useEffect` hook is used to call the `modifiedData` function whenever the `filterKeywords` state changes. This ensures that the job listings are filtered and updated whenever the selected keywords change.

In the rendering part of the `Jobs` component, the `filteredData` array is mapped over to render individual `Job` components. Each `Job` component receives a job object from the `filteredData` array as a prop. It also receives the `addFilterKeywords` function to handle keyword selection.

The `Job` component represents a single job listing. It receives various job-related data as props, such as the company name, contract type, featured status, etc.

Inside the `Job` component, an array called `keywords` is created, which includes the job role, level, languages, and tools. This array is used to generate buttons representing each keyword.

The `useState` and `useEffect` hooks are used to handle the dynamic importing of the job logo as an SVG. The `importSvgs` function is defined, which imports the SVG logo based on the provided logo URL and sets it as the `icon` state.

The component renders the job information, including the company name, job position, and other details. It also displays the job logo using the dynamically imported SVG icon.

The `keywords` array is mapped over to generate buttons for each keyword. Clicking on a keyword button triggers the `addFilterKeywords` function (passed as a prop) and adds the corresponding keyword to the `filterKeywords` state.

In summary, the `App` component manages the selected keywords and renders the `Header` and `Jobs` components. The `Header` component displays the selected keywords and provides options to

 remove individual keywords or clear all selected keywords. The `Jobs` component filters and renders the job listings based on the selected keywords. The `Job` component represents an individual job listing and allows users to filter jobs by clicking on keywords. Together, these components provide a job listing application with filtering functionality.
