# tech_blog_MVC

1. create file folder structure that follows MVC
2. import packages
    -create gitignore file
        -create .env file
3. create a front end stuctures using handlebars
    -create a homepage that has navigation links for the homepage, dashboard, and option to log in (potentially each their own page in handlebars?

    homepage
    --past blog post are displayed 
    --displays the post title and date created
    --when you click on the post
        --you see post title, contents, post creator's username, date created, and option to leave a comment
        --when saved the post is updated with comment and comment creator's username, date created
    dashboard
    -- pulls up blog post i have created 
    --option to create new blog post
        --button for new post
            --has title and content and save button
            --title and contents save
            --taken back to dashboard page with updated new blog post
            --when clicking on new blog post option to update or delete show up
    login
    --option to sign up or login
        --just need username and passord
        --can't sign up twice
        --takes you to a screen with a button for new post, 
    logout option
    --signed out of the site
    --automatically signs you out after an idle period
