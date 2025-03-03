Section 04 -- In the past i have added layout preferences directly into the main app layout, but this is quite messy and not best practise. Instead create a (root) folder in the root directory and then add a layout.tsx and page.tsx files there. Inside that sub-layout file i can add my header and footer components. This will give me more flexibility if i want to add more layouts in future.

Section 04 -- Constants. This is another "best practise" scenario. Create a file stored in a new folder which in turn is located in the utils folder provided by Next.Js. In here we can store all our system variables, via the process.env object.

Section 12 -- Themes. I thought it was super complex to integegrate light/dark mode in apps but its actually quite simple using the next-themes package. All the code i require can be recapped in the mode-toggle.tsx component.

Section 12 -- Themes. Another thing i learnt in this module is the hydration error that occcurs when the server and client have rendered different versions of the branch. By using useState and useEffect, aswell as the "suppressHydrationWarning" in the app layout.tsx file i can create a fix for that. Again, check this file when i need a recap.

Section 13 -- Loading & Not found pages. The main one from this lesson is how easy it is to add a loading element and not found pages. By just including them in the app root location, nextjs will automatically use them when required.

Section 13 -- Normally when programatically navigating to a different route, i would use <Link /> but i can also use an onClick attribute. Using an arrow function which call window.location.href = "/".

Section 13 -- setting priority=true attribute on images will tell nextjs to give that image priority when loading. For example on logos, hero image or images above the fold will be preloaded meaning it will load earlier in the page lifecycle. Avoid using it for every image though as that can slow down the application.

Section 13 -- Its a good idea to set up a globals.css file before hand with all the colours set and chosen for light and dark modes. These custom classes can be used in conjusction with tailwind like for example text-destructive. Gives the same output as text-red-500. Which is fine, but i could potentially end up with different shades of a colour throughout my app like i have on adventureReadys oranges. This would not happen if i define colours in one place.

Section 14 -- Big takeaway here is the sheet menu from shadcn. All that complex code i used in adventureReady to get the sliding mobile menu to work via framer motion is a bit of a waste of time. I will instead just implement the sheet menu, its much simpler.

Section 14 -- The asChild attribute given to a shadcn button is used when i want to apply button like properties to a non button element, like <a /> or in this case, <Link />.

Section 19 -- I have decided to stick with supabase as i want to improve my knowledge of it. Initialising this feature again for my new project goes as follows...

npm install @supabase/supabase-js -- This installs the core supabase dependancies.
npm install @supabase/ssr -- This installs the server side rendering functionality.

---

Then i create a utils/supabase.server.ts file/route. Check out that file for the boilerplate code provided by supabase. Or check docs.
Then i create a lib/actions/product.actions.ts file/route. In there i write the functions i need to interact with supabase tables. Check out the file for code examples
I can then import whatever function i need from that file, into the component that needs it.

Section 22 -- I only wanted the last 4 entries into the db to show in the "latest products" category, so this is where i learnt about the different methods i can use in supabase like .order and .limit.

Section 23 -- This is where things got confusing. Very useful stuff because im now using zod for type inference and validation. I am going to need multiple more exposure to this as it is new to me. Check out the lib/validators file, and the lib/types/index.ts file for a recap.

Section 26 -- Remember to use cn when i want to dynamically apply classnames, super useful. This is also a very useful section to apply to AdventureReady. The images component that has been built is a great solution for me to use in future. Refer back to product-images.tsx for reference.
