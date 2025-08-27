1. getElementById vs. getElementsByClassName vs. querySelector/querySelectorAll
   These methods are used to select HTML elements on a page, but they differ in how they work and what they return.
   • getElementById('id-name'): This is the most direct and fastest method. It finds a single element by its unique id attribute. Since an id must be unique on a page, it returns only one element or null if no element is found.
   • getElementsByClassName('class-name'): This method finds all elements that have a specific class name. It returns a live HTMLCollection of elements. This is a collection, similar to an array, that automatically updates if you add or remove elements with that class from the DOM.
   • querySelector('selector'): This is a very flexible and modern method. It finds the first element that matches a CSS selector. You can use any valid CSS selector, such as h1, .my-class, or #my-id. It returns a single element or null.
   • querySelectorAll('selector'): This method is similar to querySelector but returns all elements that match the provided CSS selector. It returns a static NodeList, which is like an array but does not automatically update when the DOM changes. It's often more convenient to work with than an HTMLCollection because you can use array methods like forEach().

---

2. Creating and Inserting a New Element
   To add a new element to your page, you follow these three steps:
   • Create the element: Use the document.createElement() method to create a new element node in memory. For example, const newDiv = document.createElement('div');.
   • Modify the element (optional): You can add content, classes, or attributes to the new element. For example, newDiv.textContent = 'Hello World'; or newDiv.classList.add('new-item');.
   • Insert the element: Use a method like appendChild() or prepend() to insert the new element into the DOM as a child of an existing parent element. For example, parentElement.appendChild(newDiv); would add the new div to the end of its parent's children.

---

3. Event Bubbling
   Event Bubbling is the default way events are handled in the DOM. When an event occurs on an element (like a click), the event doesn't just happen there. It also "bubbles up" to its parent element, then to the parent's parent, and so on, all the way up to the <body>, <html>, and document objects.
   Imagine a click on a button inside a div. The click event will first be handled by the button, then by the div, and finally by any other parent elements in the hierarchy.

---

4. Event Delegation
   Event Delegation is a design pattern that leverages Event Bubbling. Instead of attaching an event listener to every single child element, you attach one single event listener to a common parent element. When an event bubbles up from a child, the parent's listener catches it.
   It's useful for two main reasons:
   • Performance: It reduces the number of event listeners on the page, which saves memory and improves performance, especially on a page with many similar elements.
   • Dynamic Content: It works automatically for new elements added to the DOM after the page has loaded. Since the listener is on the parent, any new children will also "bubble" their events up to it, without needing new listeners.

---

5. preventDefault() vs. stopPropagation()
   These are two different methods used to control how events behave.
   • event.preventDefault(): This method stops the default behavior of an event. For example, clicking on a link usually navigates to a new page. Calling preventDefault() on the click event will stop that navigation. Similarly, it can stop a form from submitting or a checkbox from being checked.
   • event.stopPropagation(): This method stops Event Bubbling. When called, it prevents the event from "bubbling up" to any parent elements. The event will still happen on the element it was triggered on, but it will not be seen by any of its parent listeners.
