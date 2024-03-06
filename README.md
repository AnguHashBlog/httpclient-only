# Using the HttpClient directly
### without ApolloAngular 

## NOT APPLICABLE FOR THE PROJECT

### This app version is just to show an alternative way of connecting to Hashnode's API using the `HttpClinet` directly without using `Apollo Angular`.

This implementation was suggested in a Hashnode Post. Interestingly enough this post was published just a couple of days after I announced my open-source project devoted to connecting Angular to headless Hashnode Blogs, which Hashnode kindly shared on their Twitter account. 

There was no mention of connecting Angular to Hashnode coming from Hashnode before that, and not a lot of interest in Angular as a whole.

Anyways, they do what they do and I do what I do. 
## And what I want to do is as always - focus on what is practical and disengage from the rest. 

I tested out their guide and the focus is on using the `HttpClient` directly.

## Notable Drawbacks of this method 
compared to the way I have set up the AnguHashBlog apps, all the things that the guide doesn't mention
- ### Changes take longer to show up, I just published a new blog post and it took a while for the post to appear, it did happen eventually but it wasn't the best user experience.
- ### When using the HttpClient without Apollo Angular we are sending HTTP requests of type `POST`, and each request needs its own `interface`, in addition to the interfaces we define for the objects we are getting as a response. 
- ### The queries are placed inside the component which may work with a two-component app but with larger apps, it will lead to a lot of repetitive code since each query can only be used only in the component where it's placed.

Few more things that are not clarified in that guide:

- The `httpClient` should be defined as a root dependency using the latest syntax.
```
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
  ]
};
```

- In Angular we use `interfaces` that can be generated using the Angular CLI:
```
ng g i
```

all `interfaces` are usually consolidated and kept in the `models` folder, they are not called `types`. Can you guess in which other JS Framework they are called types? 😉
- Using a `service` is a better approach than making the http calls directly in the component.

## Styling & Theming 

I have not implemented a lot of styling to this app since I do not like this method. Some may find it simpler and it is since it only covers a case of a tiny app.

## Within a small app or a code snippet - everything works fine and there are no concerns.

Since the rest of the apps here include a much more complete structure and a ton of added features, this approach is not applicable. 

Still, I am including it in case someone is curious and wants to explore it but it is only for that - exploration.




