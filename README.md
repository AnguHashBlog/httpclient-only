# Using the HttpClient directly
### without Apollo Angular 

# NOT APPLICABLE TO THIS PROJECT

### This app version serves as an illustration of an alternative approach for connecting to Hashnode's API, employing the `HttpClient` directly without relying on `Apollo Angular`.

This methodology was proposed in a Hashnode post, intriguingly surfacing shortly after the unveiling of my open-source project dedicated to integrating Angular with headless Hashnode Blogs -  acknowledged and shared by Hashnode on their Twitter account.

Prior to this, Hashnode had shown minimal interest in Angular integration, nevertheless, each pursues its own course in the vast realm of web development.

## My Focus and Practical Considerations

I tested out their guide and the focus is on using the `HttpClient` directly.

## Notable Drawbacks of this method 
compared to the way I have set up the AnguHashBlog apps, and few things that their guide doesn't mention
- ### Changes take longer to show up, I just published a new blog post and it took a while for the post to appear, it did happen eventually but it wasn't the best user experience.
- ### Using `HttpClient` without Apollo Angular works by sending `POST` requests, each requiring its own interface. Combined with the general interfaces needed for the response objects - that's a whole lot of `interfaces`.
- ### The queries work only if they are placed inside the component which may work with a two-component app but with larger apps, it will lead to a lot of repetitive code since each query can only be used only in the component where it's placed.

### Few more things that are not clarified in their guide:

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

Minimal styling is applied to this app, as this method is not my preferred approach. It may be considered simpler but it is only applicable for small apps.

### Within a confined app or a code snippet, everything functions seamlessly without concerns. 

However, due to the comprehensive structure and additional features present in the project's apps, this approach is not applicable. I include it for those curious to explore, emphasizing its suitability solely for experimental purposes.





