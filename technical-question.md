
*How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

=> I have spend almost 6 hours for this task. i couldnot complete it properly. If i have enough time i would add more test case, divided every small part in seperate component, make the design more lucrative, instead of css i would use scss and optimize the code ovbiously.

What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
 
 => From ES6  the arrow function, spread operation. from redux redux thunk help a lot to minimize the code.
 
 export default function restaurantReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_RESTAURANTS_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_RESTAURANTS_SUCCESS:
        return {
          ...state,
          loading: false,
          items: action.payload.restaurants
        };
  
      case FETCH_RESTAURANTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          items: []
        };
  
      default:
        return state;
    }
  }
 
What were the more challenging parts of this assignment for you?

=> doing all the project lifecycle withing a short time was challenging other than everything was ok.

How would you track down a performance issue in production? Have you ever had to do this?

=> I check if every subsription is unsubscribe after made a call. also try to use the cookie or session to stop sending frequent request which help a lot to reduce permormance issue.

How would you improve the API that you just used?

=> default parameter should be provided in the server side. The api only provide the get method doesnot provide other method like post, put, delete. Doc should have some versioning system.

Please describe yourself using JSON.
=>  let mySelf = {name: "Irin Nahar", age: 28, city: "Toronto", Proffession: "Front end developer",  Passion: "I am passionate about latest technology and love to explore to be up to date" };
