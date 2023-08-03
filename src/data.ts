import Redux from './common/assets/images/icons/redux.svg'
import HTML5 from './common/assets/images/icons/html5.svg'
import CSS from './common/assets/images/icons/css3.svg'
import React from './common/assets/images/icons/react.svg'
import Git from './common/assets/images/icons/git.svg'
import Storybook from './common/assets/images/icons/storybook.svg'
import Mui from './common/assets/images/icons/mui.svg'
import TS from './common/assets/images/icons/ts.svg'
import JS from './common/assets/images/icons/js.svg'

import StyledComponents from './common/assets/images/icons/redux.svg'
import Axios from './common/assets/images/icons/redux.svg'
import Formik from './common/assets/images/icons/redux.svg'

import TodoImage from "./common/assets/images/photos/todolist.jpg";
import SocialImage from "./common/assets/images/photos/socialnetwork.jpg";
import CounterImage from "./common/assets/images/photos/counter.jpg";
import multipagesiteImage from "./common/assets/images/photos/multipagesite.jpg";


export const skillsData = [
    {title: 'JavaScript | ES6', description: 'Experience in developing modern web applications using JavaScript and its latest version ES6.', src: JS, alt: 'JS logo'},
    {title: 'TypeScript', description: 'Ability to create clean and structured code, maintaining strong typing of variables, interfaces, classes, and functions.', src: TS, alt: 'TS logo'},
    {title: 'HTML5', description: 'Experience developing web pages and interfaces using HTML5, the latest version of the HTML markup language.', src: HTML5, alt: 'HTML5 logo'},
    {title: 'CSS | SCSS', description: 'Experience in styling web pages using CSS and SCSS (Sass).', src: CSS, alt: 'CSS logo'},
    {title: 'Styled components', description: 'Experience in using the Styled Components library to style web applications in React.', src: StyledComponents, alt: 'Styled components logo'},
    {title: 'React', description: 'Experience in developing web applications using the React library.', src: React, alt: 'React logo'},
    {title: 'Redux | Redux Toolkit', description: 'Proficient in state management libraries such as Redux to build scalable applications.', src: Redux, alt: 'Redux logo'},
    {title: 'Axios', description: 'Experience using the Axios library to make HTTP requests from React applications. Ability to send requests to the server using various methods.', src: Axios, alt: 'Axios logo'},
    {title: 'Formik', description: 'Experience in using the Formik library to manage forms in React applications.', src: Formik, alt: 'Formik logo'},
    {title: 'Git', description: 'Experience with the GitHub platform for managing and collaborating on software projects.', src: Git, alt: 'Git logo'},
    {title: 'Storybook', description: 'Experience with the Storybook tablet for developing, testing, and documenting components in React.', src: Storybook, alt: 'Storybook logo'},
    {title: 'Material-UI', description: 'Experience with the Material-UI library for creating stylish user interfaces in React apps.', src: Mui, alt: 'Material-UI logo'},
]

const todoListImg = {
    backgroundImage: `url(${TodoImage})`,
};
const socialNetworkImg = {
    backgroundImage: `url(${SocialImage})`,
};
const counterImg = {
    backgroundImage: `url(${CounterImage})`,
};
const multipagesiteImg = {
    backgroundImage: `url(${multipagesiteImage})`,
};

export const works = [
    {
        workTitle: "TodoList",
        workDescription: "A large project that used libraries such as: Material UI, Redux Toolkit, For mik, Storybook, Axios, etc., this project implemented an sending of HTTP request to the server using AJAX technology.",
        style: todoListImg,
        href: "https://github.com/ek-mlg/Todolist"
    },
    {
        workTitle: "Social network",
        workDescription: "The social network is my first major project in which class and functional components were studied, routing through the React router DOM library is implemented here, and work with the server is also implemented here.",
        style: socialNetworkImg,
        href: "https://github.com/ek-mlg/Samurai-way"
    },
    {
        workTitle: "Counter",
        workDescription: "My first project on React, here used controlled components to create an intuitive user interface, also the property of storing data in localStorage, conditional rendering.",
        style: counterImg,
        href: "https://github.com/ek-mlg/counter"
    },
    {
        workTitle: "Multi-page site (Freelance)",
        workDescription: "This project implemented the definition of page metadata using React Helmet, SEO optimization of a SPA application, layout according to Figma layouts, using modular CSS and SCSS (SASS) preprocessors.",
        style: multipagesiteImg,
        href: "https://github.com/ek-mlg/dachye-domiki-fl"
    },
]

export const options = {
    reverse:        false,
    max:            20,
    perspective:    1000,
    scale:          1,
    speed:          1000,
    transition:     true,
    axis:           null,
    reset:          true,
    easing:         "cubic-bezier(.03,.98,.52,.99)",
}