import python from "../../assets/images/port-python.svg";
import fastapi from "../../assets/images/port-fastapi.svg"
import flask from "../../assets/images/port-flask.svg";
import mysql from "../../assets/images/port-mysql.svg";
import javascript from "../../assets/images/port-javascript.svg";
import htmlcss from "../../assets/images/port-htmlcss.svg";
import reactjs from "../../assets/images/port-reactjs.svg";
import mongodb from "../../assets/images/port-mongodb.svg";
import nextjs from "../../assets/images/port-nextjs.svg";
import nodejs from "../../assets/images/port-nodejs.svg";
import expressjs from "../../assets/images/port-expressjs.svg";
import api_icon from "../../assets/images/port-api.png";
import lib_icon from "../../assets/images/port-lib.png";
import reportlab from "../../assets/images/port-reportlab.png";
import git_hub from "../../assets/images/port-github.svg";
import golive from "../../assets/images/golive.svg";
import progress from "../../assets/images/golive.svg";

function selectProject(which_project) {
  switch (which_project) {
    case "Investopia":
      const efinance_content = {
        project: "Investopia",
        overview:
          "Practice stock trading and improve portfolio management by tracking your asset values in real time.",
        features: [
          "Facilitates user registration and prompts login authentication",
          "Simulates buying and selling of US stocks based IEX via API",
          "Shows profit and loss for every trade",
          "Aggregates transactions to determine stockholder's value and displays all transaction history",
        ],
        tech: [
          {
            icon_source: htmlcss,
            lang: "HTML CSS",
            details:
              "1) Tailwind CSS is used to build the looks and feels of the web app. <x> 2) Integrated Jinja from Flask in HTML to control how page can be rendered based on user workflow logic (i.e. how to display portfolio if the user is new user, when should the quote page display the buy UI, etc.) <x> 3) Javascript is also used to enable dynamic and control post methods",
          },
          {
            icon_source: python,
            lang: "Python",
            details:
              "Python is reliably used to build the app's key features and enables reliable and fast CRUD operations thru Flask and SQLAlchemy. <x> 1) Live US stock data are used in trade executions, tracking portfolio performance and leaderboard display. These are requested from IEX Cloud using requests library <x> 2) Flask is used for routing the web pages and dynamically display them per user workflow logic, while SQLAlchemy for CRUD interaction with SQLite database",
          },
          {
            icon_source: flask,
            lang: "Flask",
            details:
              "Flask is a lightweight web framework which is proven to be flexible for building web application. The key features are built: <x> 1) Routing of webpages dynamically and conditionally display sections of web page according to user workflow logic (i.e. defining user session, display the leaderboard if the user's portfolio has moved, show appropriate dashboard based on user's transactions, among others);  <x> 2) User registration and login authentication <x> 3) Trade execution - validates trade transactions as to whether the user has enough funds to buy or enough shares to sell. These are based on live US stock data got from API request. <x> 4) Portfolio Management - allows users to track their stock holdings and display the net profit/ loss <x> 5) Leaderboard - allows users to see how they're performing well compared to all other users",
          },
          {
            icon_source: mysql,
            lang: "SQLite3",
            details:
              "SQLite3 is a lightweight and self-contained database system, as it does not require separate installation or administration. Using SQLAlchemy, SQLite3 is used to facilitate CRUD operations on pertinent data such as stock prices, trading volumes, and user portfolios, leaderboard, and store and retrieve transaction data, such as buy and sell orders.",
          },
        ],
        code_repo: "hateryx/efinance",
        code_repo_link: "https://github.com/hateryx/efinance",
        status_icon: golive,
        status_key: "Deployed:",
        deployed_key: "PythonAnywhere",
        deployed_site: "https://hateryx.pythonanywhere.com",
      };
      return efinance_content;
    case "Hangman Game":
      const hangman_content = {
        project: "Hangman Game",
        overview:
          "A classic word guessing game where the player tries to guess the letters of a secret word before the hangman is fully drawn. The player is given a question as hint for the answer, which are randomly generated therefrom using API Ninjas.",
        features: [
          "Randomly generated secret word and hint to the answer",
          "Interactive hangman figure",
          "Letter buttons for guessing",
          "With scoring system and prompts message when player lose",
          "High scores are stored and congratulates the user if it is beaten",
        ],
        tech: [
          {
            icon_source: htmlcss,
            lang: "HTML CSS",
            details:
              "HTML and CSS provides the basic structure and design for the game space, which displays the letters of the words guessed. the Hangman graphic and the keyboard space.",
          },
          {
            icon_source: javascript,
            lang: "Javascript",
            details:
              "The code does heavy lifting in DOM manipulation and game logic, namely: building the game stage after clicking the start button, building the letter buttons for the player and the underlines for the answer, updating the hangman figure when the letter picked is incorrect, updating the underlines to display the letter when the guess is correct, updating the score and building the next round when the word is complete, prompting lose message and storing the high score to the local database. The flow of the game is somehow recursive.",
          },
          {
            icon_source: api_icon,
            lang: "API Ninjas",
            details:
              "Fetches the randomly question and answer from API Ninjas. Question and answer is first called upon loading of the DOM content. The API call is designed to have async function, where data has to be awaited before the start button becomes available.  API calls are made again on the first and succeeding rounds. ",
          },
        ],
        code_repo: "hateryx/hangman",
        code_repo_link: "https://github.com/hateryx/hangman",
        status_icon: golive,
        status_key: "Deployed:",
        deployed_key: "GitHub Pages",
        deployed_site: "https://hateryx.github.io/hangman",
      };
      return hangman_content;
    case "Job Hunter":
      const job_hunter_content = {
        project: "Job Hunter",
        overview:
          "Keep track of all your job applications in one place. The app allows you to easily see the status of each application, set reminders for follow-up tasks and see thru a dashboard. This app is still work-in-progress.",
        features: [
          "Facilitates user registration, requires user authentication upon login and caches user session in local storage",
          "Enable the user to add/update his/her job profile, and add, edit and delete tracked job applications",
          "Pertinent data (i.e. login details, user profile, jobs applications) are saved in MongoDB.",
          "Data related to job applications can be visualized into charts.",
        ],
        tech: [
          {
            icon_source: reactjs,
            lang: "React JS",
            details:
              "React JS is used for the front-end UI. Features built so far are: <x> 1) Utilized createContext and useContext as global context, and used useReducer hook to setup a global state; <x> 2) Built nested pages, layout and protected route using React Router 6 <x> ",
          },
          {
            icon_source: expressjs,
            lang: "Express JS",
            details:
              "Express JS is used to handle HTTP requests, route URLs, handle server-side logic and connect to MongoDB and perform database operations. <x> 1) Utilized express-async-errors for error handling; <x> 2) Built routers with the controllers as integrated way to do CRUD functionlity with MongoDB.",
          },
          {
            icon_source: nodejs,
            lang: "NodeJS",
            details:
              "Using NodeJS as the server-side framework, it enables the use of ExpressJS, as well as other libraries to handle HTTP requests (e.g. Used Morgan as HTTP request level middleware). This is work-in-progress. I've initially built work logic for user registration, authentication and creation of job profile.",
          },
          {
            icon_source: mongodb,
            lang: "MongoDB",
            details:
              "MongoDB is used to store and retrieve data by leveraging its document-oriented data model, querying and aggregation capabilities. This is work-in-progress. I've initially built table schema for users with defined functions to be executed prior to saving data to DB (i.e. encrypting and validating password using bcrypt, creating JSON web token, etc. ) and job application details ",
          },
        ],
        code_repo: "hateryx/mern-stack-builder-course",
        code_repo_link: "https://github.com/hateryx/mern-stack-builder-course",
        status_icon: progress,
        status_key: "Build In Progress:",
        deployed_key: "TBA",
        deployed_site: "#",
      };
      return job_hunter_content;
    case "News PyScraper":
      const newspy_content = {
        project: "News PyScraper",
        overview:
          "This app is a PH News Generator which delivers the latest news article from ABS CBN in a PDF straight to the reader.",
        features: [
          "Scrapes latest random news article based on the selected category",
          "Transforms the news article to a PDF in a standard format",
          "PDF is quickly generated to a file path, ready for access and printing",
        ],
        tech: [
          {
            icon_source: python,
            lang: "Python",
            details:
              "Supporting Libraries Used: <x>1) request : Access to the website for web scraping is made possible through the use of modified header; <x> 2) re -  The regex library. While content is extracted largely by bs4, the `re.match` function allows cleaning of the content before its finalization;<x> 3) datetime - converts date from the link into a string format that is used to load and print to the title. <x> 4) titlecase - formats title for styling purposes <x>",
          },
          {
            icon_source: lib_icon,
            lang: "BeauSoup4",
            details:
              "Beautiful Soup 4 enables the app to do the web scraping functions: <x> - Extract all the links of news articles related to the selected news category; <x> - Extract the contents of a news article and store it into string for loading to PDF.",
          },
          {
            icon_source: reportlab,
            lang: "Report Lab",
            details:
              "This library gets the title and finalized content, and puts them into PDF in an orderly fashion. Other functions used to achieve the desired PDF product includes: <x> - Use of 'frame' and 'Paragraph`' to load and format the news contents therein for proper wrapping and presentation. This function also handles generation of multi-page PDF for news with voluminous contents. <x> - Use of 'imagereader' to load and properly the logo image in the PDF. <x>- Use of 'drawString' to place the title, date and disclaimer footers to appropriate location. <x> - Use of `TTfont` to load true fonts for styling contents <x> -Use of`save` generates the PDF!",
          },
        ],
        code_repo: "hateryx/newspyscraper",
        code_repo_link: "https://github.com/hateryx/newspyscraper",
        status_icon: golive,
        status_key: "Ready",
        deployed_key: "Available for usage at GitHub",
        deployed_site: "https://github.com/hateryx/newspyscraper",
      };
      return newspy_content;
    case "Next AI Psych":
      const nextaipsych_content = {
        project: "Next AI Psych",
        overview:
          "Answer AI generated questions and get your psychical assessment by the power of Open AI's Chat GPT 3.5 Turbo Model. Fast API, a Python API library, is developed and used to handle API routes between Next JS and Open AI API.",
        features: [
          "App provides 8 questions for users to answer",
          "Each answer is eventually submitted to the developed FastAPI (deployed at render.com)",
          "OpenAI for assessment.",
          "OpenAI sends assessment to the app and in turn, app displays the assessment.",
        ],
        tech: [
          {
            icon_source: reactjs,
            lang: "React JS",
            details:
              "React.js is built for the front-end to structure components and manage data flow using state management. User prompts based on user input are stored in states and then sent to FastAPI to handle prompts for the OpenAI API. Subsequently, API responses are stored in state to display data back to the user.",
          },
          {
            icon_source: nextjs,
            lang: "Next JS",
            details:
              "Next.js is used as the React framework to serve as the main structure of the app. Its support for server-side rendering facilitates easier API calls and manages data flow. It can work seamlessly with FastAPI, which can serve as an agent for the OpenAI API.",
          },
          {
            icon_source: python,
            lang: "Python",
            details:
              "Python is utilized to build an intermediary API layer that enhances the processing of prompts from the front-end and the handling of responses from the OpenAI API. This layer acts as a bridge between the two components, enabling efficient and effective data manipulation, transformation, and integration.",
          },
          {
            icon_source: fastapi,
            lang: "FastAPI",
            details:
              "FastAPI, a Python library, is developed to act as an intermediary agent to enable efficient request processing and validation, security and rate limiting. It can handle incoming prompts from the frontend, validate the data, perform any necessary pre-processing or formatting, and then forward the prompts to the OpenAI API. This ensures that the prompts meet the required criteria and are properly prepared for consumption by the AI model.",
          },
        ],
        code_repo: "hateryx/next-ai-psych",
        code_repo_link: "https://github.com/hateryx/next-ai-psych",
        status_icon: golive,
        status_key: "Deployed at:",
        deployed_key: "Vercel",
        deployed_site: "https://next-ai-psych.vercel.app/",
      };
      return nextaipsych_content;
    case "Next Angel Sue":
      const nextangelsue_content = {
        project: "Next Angel Sue",
        overview:
          "Answer AI generated questions and get your psychical assessment by the power of Open AI's Chat GPT 3.5 Turbo Model. Fast API, a Python API library, is developed and used to handle API routes between Next JS and Open AI API.",
        features: [
          "App provides 8 questions for users to answer",
          "Each answer is submitted to OpenAI for assessment.",
          "OpenAI sends assessment to the app and in turn, app displays the assessment.",
        ],
        tech: [
          {
            icon_source: reactjs,
            lang: "React JS",
            details:
              "Supporting Libraries Used: <x>1) request : Access to the website for web scraping is made possible through the use of modified header; <x> 2) re -  The regex library. While content is extracted largely by bs4, the `re.match` function allows cleaning of the content before its finalization;<x> 3) datetime - converts date from the link into a string format that is used to load and print to the title. <x> 4) titlecase - formats title for styling purposes <x>",
          },
          {
            icon_source: python,
            lang: "Python",
            details:
              "Supporting Libraries Used: <x>1) request : Access to the website for web scraping is made possible through the use of modified header; <x> 2) re -  The regex library. While content is extracted largely by bs4, the `re.match` function allows cleaning of the content before its finalization;<x> 3) datetime - converts date from the link into a string format that is used to load and print to the title. <x> 4) titlecase - formats title for styling purposes <x>",
          },
          {
            icon_source: python,
            lang: "FastAPI",
            details:
              "Supporting Libraries Used: <x>1) request : Access to the website for web scraping is made possible through the use of modified header; <x> 2) re -  The regex library. While content is extracted largely by bs4, the `re.match` function allows cleaning of the content before its finalization;<x> 3) datetime - converts date from the link into a string format that is used to load and print to the title. <x> 4) titlecase - formats title for styling purposes <x>",
          },
        ],
        code_repo: "hateryx/next-angelsue",
        code_repo_link: "https://github.com/hateryx/next-angelsue",
        status_icon: golive,
        status_key: "Deployed at:",
        deployed_key: "Vercel",
        deployed_site: "https://next-angelsue.vercel.app/",
      };
    return nextangelsue_content;
  }
}

export default selectProject;
