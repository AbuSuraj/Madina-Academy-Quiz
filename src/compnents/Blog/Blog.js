import React from "react";

const Blog = () => {
  return (
    <div>
      <h1 className="text-3xl text-center font-bold font-serif my-5 ">
        Some important interview Qustions
      </h1>
      <div className="ml-20 mr-4 border border-2 rounded-3xl p-4 border-black shadow-2xl">
        <h1 className="text-2xl font-bold">
          Q.1. What are the purposes of the React Router
        </h1>
        <div className="flex">
          <p className="font-bold mx-2">Answer: </p>
          <p>
            {" "}
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
      <div className="ml-20 mr-4 my-3 border border-2 rounded-3xl p-4 border-black shadow-2xl">
        <h1 className="text-2xl font-bold">Q.2. How does context api works</h1>
        <div className="flex">
          <p className="font-bold mx-2">Answer: </p>
          <p>
            {" "}
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
      <div className="ml-20 mr-4 border border-2 rounded-3xl p-4 border-black shadow-2xl">
        <h1 className="text-2xl font-bold">Q.3. What is React useRef Hook</h1>
        <div className="flex">
          <p className="font-bold mx-2">Answer: </p>
          <p>
            {" "}
            The useRef Hook is a function that returns a mutable ref object
            whose .current property is initialized with the passed argument
            (initialValue). The returned object will persist for the full
            lifetime of the component. const refContainer =
            useRef(initialValue); There are two main uses of useRef that are
            explained in the following sections: Accessing the DOM nodes or
            React elements and keeping a mutable variable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
