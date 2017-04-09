$(function() {
   //GET REQUEST TO GET POSTS FROM DB
    $.ajax({ // get request that takes an object (that has url prop '/posts'')
        
        url: '/posts' //route to /posts
       }).done(function(response) { 
        
        //returns a promise that has .done method on it - then that takes an anonymous callback function 
        // could take a while to come back with a response
        
        // asynchronous function so it starts running but while it waits for a response, it keeps on going past this function
        
          // assign a variable to refer to the id for the template in home.html
        var template = $('#post-template').html(); 
          
        //for each of the posts...
        response.forEach(function(post) { 
            
            console.log('>>>post', post); // print what post
            
            // newPost is a DOM node so we can pass in a copy of the template
            var newPost=$(template).clone(); 
        
            // tell browser to find the title at array index 1
            $(newPost).find('.title').html(post[1]); 
            $(newPost).find('.author').html(post[0]); 
            $(newPost).find('.body').html(post[2]); 
            $(newPost).find('.likes').html(post[3]); 

            //INCREMENT LIKE BUTTON
            $(newPost).find('.like-button').on('click', function() {
                //increment likes by 1 when button is clicked
                $.ajax({
                    url: 'like/' + post[4],
                }).done(function() {
                    $(newPost).find('.likes').html(post[3]) // increment like by 1
                });
            }); 
            
            $(newPost).find('.like-button').on('click', function() {
                //increment likes by 1 when button is clicked
                $.ajax({
                    url: 'like/' + post[4],
                }).done(function() {
                    $(newPost).find('.likes').html(post[3]) // increment like by 1
                });
            }); 
            
            $('#post-list').append(newPost); // append the new post to the post list
        });
    });
 });
