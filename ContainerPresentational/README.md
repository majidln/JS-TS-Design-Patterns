# Container/Presentational Pattern
In React, one way to enforce separation of concerns is by using the Container/Presentational pattern. With this pattern, we can separate the view from the application logic

+ **Presentational Components:** Components that care about how data is  shown to the user.
+ **Container Components:** Components that care about what data is shown  to the user.

### Example 
For fetch a list of 6 dogs images:
+ **Presentational Components:** The rendering the list of dog  images.
+ **Container Components:** The fetching the dog images.

## Replace Container with Hook
In many cases, the Container/Presentational pattern can be replaced with  React Hooks. The introduction of Hooks made it easy for developers to add statefulness without needing a container component to provide that state.