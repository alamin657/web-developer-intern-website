import React from 'react';

const Blog = () => {
    return (
        <div className='mt-8 ml-8 mr-8 grid grid-cols-2 gap-2 '>
            <div className='border border-inherit p-2 mt-3'>
                <h1 className='text-2xl'>1.When should you use context API?</h1>
                <p>Ans:Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.</p>
            </div>
            <div className='border border-inherit p-2 mt-3'>
                <h1 className='text-2xl'>2.What is a custom hook?</h1>
                <p>Ans:A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks. Let's take a look at some major differences between a custom React JS hook and React JS components</p>
            </div>
            <div className='border border-inherit p-2 mt-3'>
                <h1 className='text-2xl'>3.What is useRef?</h1>
                <p>Ans: useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current .</p>
            </div>
            <div className='border border-inherit p-2 mt-3'>
                <h1 className='text-2xl'>What is useMemo?</h1>
                <p>Ans:useMemo is a React Hook that lets you cache the result of a calculation between re-renders. const cachedValue = useMemo(calculateValue, dependencies) Reference. useMemo(calculateValue, dependencies)</p>
            </div>
        </div>
    );
};

export default Blog;