---
title: Why not start with object-oriented Programming Language
date: "2020-11-21T22:12:03.284Z"
description: "Why start with an object-oriented programming language especially when coming from a non-computer science background? Folks, this advice is actually to my old self when I first started my journey into the programming world, and now that I see more clearly "
---

###Introduction
Why start with an object-oriented programming language especially when coming from a non-computer science background? Folks, this advice is actually to my old self when I first started my journey into the programming world, and now that I see more clearly, I think someone might benefit from this. But before I go further, let me clear this up, I am not here to argue for or against object-oriented programming, neither do I favour one form of programming over the other. So what’s my point exactly, I am here to throw a little light into why I think it will be more favourable to start with an object-oriented programming language as a beginner coming from a non-computer science background like myself.

![alt text](https://res.cloudinary.com/jinncy/image/upload/v1606821809/memes_folder/start_meme_ebos35.jpg)

###Starting the Journey

As a beginner, you are always intrigued by what the code you are writing can do and more often than not begin to think that all this could be some magical genie carrying out your wishes. Again especially when with little or no understanding of how the computer is processing those codes. The truth is, you don’t need to know how the computer processes your codes, however, there are certain things you should at least know and that is where starting with an object-oriented programming language comes to the rescue.
So what are these things you should know? Simple functions and properties you call on the variables you declare when writing your codes. Let’s explain them with the help of examples below

Example 1

```
let firstVal = 4;
let result = a/24;
console.log(result.toPrecision(2))
```

In this example, we just declare a variable “firstVal”, then assigned it to another variable ‘result” after dividing it by 24. We then call a function “toPrecision()” on the result. Yea, you heard right we called a function on a variable whose type is not an object. Does that mean somehow that the variable is an object? Not really, but that was possible because your variable was converted behind the scene to an object

Example 2

```
let date = new Date();
let year = date.getFullYear();
console.log(year + “ is an adventurous year”);
```

In the second example, we instantiate an object of “Date” using the “new” keyword, then call the “getFullYear()” function on it.

Example 3

```
let radius = 12.1
let areaOfCircle = Math.PI * radius * radius;
console.log(areaOfCircle.toPrecision(2));
```

In the third example, we get the property of the object “Math”, which is “PI”, using the value to multiply the “radius”. After which, we called the function “toPrecision()” on the output.

![point meme](https://res.cloudinary.com/jinncy/image/upload/v1606821812/memes_folder/point_meme_qtfju2.jpg)

Well, if you look closely at our examples, you see that object is at the heart of it all. Now think for a moment how effortless it will be to understand your codes if you know how these objects are written and work. Again, I am not here to dictate how to start your programming journey but to help throw a little light into your path.

![know meme](https://res.cloudinary.com/jinncy/image/upload/v1606821819/memes_folder/does_meme_npjxjv.jpg)
So how do object-oriented languages help here? First, let just remind ourselves what the idea behind object-oriented language is. An object, that is what the idea behind it is!
But you may wonder if this object differs from the one you are used to? The answer is No. it is no different; they are the same. So what are the features of the object you are used to. Let’s place one before us for analysis, say a car or aeroplane. The Car/aeroplane has both properties such as the colour, model, name, engine no and functions/methods such as flying, moving, speeding, etcetera. How is this helping? To answer that, let’s go back to our previous examples.

![start meme](https://res.cloudinary.com/jinncy/image/upload/v1606821818/memes_folder/where_start_iywn37.jpg)

###Where to start from
Let me guess, you are wondering which ones are object-oriented programming languages since you have many programming languages claiming to be both object-oriented and functional programming languages. There are many out there but I will recommend Java. Why is that? It is versatile, has a very large community, good documentation, a plethora of books and videos to help you out with the learning. It is not all a straight path though, the learning curve is steep, not straight, and it requires patience, persistence and commitment to learning.

###Conclusion
There you have it, why you should start your programming journey with an object-oriented programming language. I hope this will help someone out there and please leave a comment as it will help me know if you benefit from this article.

Note: the examples used in this article are from JavaScript, one of the most popular programming languages.
