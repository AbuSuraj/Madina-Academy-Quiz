import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Blog = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <h1 className="text-3xl text-center font-bold font-serif my-5 ">
        Some important interview Qustions
      </h1>
      <div
        data-aos="fade-right"
        className="ml-20 mr-4 border border-2 rounded-3xl p-4  shadow-2xl my-8 "
      >
        <h1 className="text-2xl font-bold">
          Q.1. What are the purposes of the React Router
        </h1>
        <div className="flex my-2">
          <p className="font-bold mx-2">Answer: </p>
          <p className="font-medium text-lg">
             
            A common library for routing in React is called React Router. It
            permits switching between views of different React Application
            components, permits changing the browser URL, and keeps the UI in
            sync with the URL.The biggest reason for having routing is because
            if the user hits the Back button of the browser (Forward button as
            well, for that matter), he will not be navigating within the app.
            The user might expect to navigate within the app using the history
            of the different "pages" he loaded previously. Instead, he will be
            thrown out of the web app. Hitting the Refresh button would also
            throw him to the root of the app.
          </p>
        </div>
      </div>
      <div
        data-aos="fade-left"
        className="ml-20 mr-4 my-8 border border-2 rounded-3xl p-4   shadow-2xl"
      >
        <h1 className="text-2xl font-bold">Q.2. How does context api works</h1>
        <div className="flex my-2">
          <p className="font-bold mx-2">Answer: </p>
          <p className="font-medium text-lg">
             
            The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent, and so on. <br />
            React.createContext() is all you need. It returns a consumer and a
            provider. Provider is a component that as it's names suggests
            provides the state to its children. It will hold the "store" and be
            the parent of all the components that might need that store.
            Consumer as it so happens is a component that consumes and uses the
            state
          </p>
        </div>
      </div>
      <div
        data-aos="fade-up-right"
        className="ml-20 my-8 mr-4 border border-2 rounded-3xl p-4   shadow-2xl"
      >
        <h1 className="text-2xl font-bold">Q.3. What is React useRef Hook</h1>
        <div className="flex my-2">
          <p className="font-bold text-lg mx-2">Answer: </p>
          <p className="font-medium text-lg">
          The useRef Hook is a function that returns a mutable ref object whose .current property is initialized with the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
            The useRef Hook lets us create mutable variables inside functional
            components. There are three main key points that you should keep in
            mind when using the useRef Hook: <br />
            <ul className="ml-16 list-disc ">
              <li>A ref created with useRef will be created only when the component has been mounted and preserved for the full lifecycle.</li>
              <li>Refs can be used for accessing DOM nodes or React elements, and for storing mutable variables (like with instance variables in class components).</li>
              <li>Updating a ref is a side effect so it should be done only inside a useEffect (or useLayoutEffect) or inside an event handler.</li>
            </ul>
             
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
