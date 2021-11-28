const express = require("express");
const Razorpay = require("razorpay");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const port = process.env.PORT || 3000;

let posts = [];
const razorpay = new Razorpay({
    key_id:"rzp_test_SvHWKkiDjVAfMv",
    key_secret:"91HmCPNeubDmoricjo0faU2A"
});

const app = express();

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));




let blog ={
    image:"https://image.freepik.com/free-photo/male-indian-programmer-working-desktop-computer-white-desk-office_231208-3636.jpg ",
    title:"Java programmin",
    date:"28 oct 2021",
    auther:"Sandeep Kumar Nayak",
    content:"Python is a high-level, general-purpose and a very popular programming language. Python programming language (latest Python 3) is being used in web development, Machine Learning applications, along with all cutting edge technology in Software Industry. Python Programming Language is very well suited for Beginners, also for experienced programmers with other programming languages like C++ and Java. This specially designed Python tutorial will help you learn Python Programming Language in most efficient way, with the topics from basics to advanced (like Web-scraping, Django, Deep-Learning, etc.) with examples."
}
posts.push(blog);
blog ={
    image:"https://image.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg ",
    title:"It is a Title",
    date:"28 oct 2021",
    auther:"Sandeep Kumar Nayak",
    content:"Python is a high-level, general-purpose and a very popular programming language. Python programming language (latest Python 3) is being used in web development, Machine Learning applications, along with all cutting edge technology in Software Industry. Python Programming Language is very well suited for Beginners, also for experienced programmers with other programming languages like C++ and Java. This specially designed Python tutorial will help you learn Python Programming Language in most efficient way, with the topics from basics to advanced (like Web-scraping, Django, Deep-Learning, etc.) with examples."
}
posts.push(blog);
blog ={
    image:"https://image.freepik.com/free-photo/ai-disruptive-technology-background-blue-with-robotic-hands-remixed-media_53876-110821.jpg ",
    title:"Data science by saty",
    date:"28 oct 2021",
    auther:"Sandeep Kumar Nayak",
    content:"Python is a high-level, general-purpose and a very popular programming language. Python programming language (latest Python 3) is being used in web development, Machine Learning applications, along with all cutting edge technology in Software Industry. Python Programming Language is very well suited for Beginners, also for experienced programmers with other programming languages like C++ and Java. This specially designed Python tutorial will help you learn Python Programming Language in most efficient way, with the topics from basics to advanced (like Web-scraping, Django, Deep-Learning, etc.) with examples."
}
posts.push(blog);
blog ={
    image:"https://image.freepik.com/free-photo/various-computer-equipment-with-programming-code-screens-table-dark-room-cyber-security-concept-copy-space_236854-23136.jpg",
    title:"C Programming language",
    date:"28 oct 2021",
    auther:"Sandeep Kumar Nayak",
    content:"C is a procedural programming language. It was initially developed by Dennis Ritchie as a system programming language to write operating system. The main features of C language include low-level access to memory, simple set of keywords, and clean style, these features make C language suitable for system programming like operating system or compiler development."
}
posts.push(blog);
blog ={
    image:"https://image.freepik.com/free-photo/computer-program-coding-screen_53876-138060.jpg ",
    title:"Python in our life",
    date:"28 oct 2021",
    auther:"Sandeep Kumar Nayak",
    content:"Python is a high-level, general-purpose and a very popular programming language. Python programming language (latest Python 3) is being used in web development, Machine Learning applications, along with all cutting edge technology in Software Industry. Python Programming Language is very well suited for Beginners, also for experienced programmers with other programming languages like C++ and Java. This specially designed Python tutorial will help you learn Python Programming Language in most efficient way, with the topics from basics to advanced (like Web-scraping, Django, Deep-Learning, etc.) with examples."
}
posts.push(blog);
blog ={
    image:" https://image.freepik.com/free-photo/ai-digital-transformation-background-blue-with-robotic-hands-remixed-media_53876-108540.jpg",
    title:"Machine learning using python",
    date:"28 oct 2021",
    auther:"Sandeep Kumar Nayak",
    content:"Python is a high-level, general-purpose and a very popular programming language. Python programming language (latest Python 3) is being used in web development, Machine Learning applications, along with all cutting edge technology in Software Industry. Python Programming Language is very well suited for Beginners, also for experienced programmers with other programming languages like C++ and Java. This specially designed Python tutorial will help you learn Python Programming Language in most efficient way, with the topics from basics to advanced (like Web-scraping, Django, Deep-Learning, etc.) with examples."
}
posts.push(blog);
blog ={
    image:"https://image.freepik.com/free-photo/winsome-beautiful-young-woman-posing-brown-wall-close-up-shot-wonderful-brunette-girl_197531-13994.jpg ",
    title:"Webdevlopement free course",
    date:"28 oct 2021",
    auther:"Sandeep Kumar Nayak",
    content:"Python is a high-level, general-purpose and a very popular programming language. Python programming language (latest Python 3) is being used in web development, Machine Learning applications, along with all cutting edge technology in Software Industry. Python Programming Language is very well suited for Beginners, also for experienced programmers with other programming languages like C++ and Java. This specially designed Python tutorial will help you learn Python Programming Language in most efficient way, with the topics from basics to advanced (like Web-scraping, Django, Deep-Learning, etc.) with examples."
}
posts.push(blog);
blog ={
    image:"https://image.freepik.com/free-photo/it-girl-looking-codes_539387-38.jpg ",
    title:"Iska to mujhe bhi pta nhi",
    date:"28 oct 2021",
    auther:"Sandeep Kumar Nayak",
    content:"Python is a high-level, general-purpose and a very popular programming language. Python programming language (latest Python 3) is being used in web development, Machine Learning applications, along with all cutting edge technology in Software Industry. Python Programming Language is very well suited for Beginners, also for experienced programmers with other programming languages like C++ and Java. This specially designed Python tutorial will help you learn Python Programming Language in most efficient way, with the topics from basics to advanced (like Web-scraping, Django, Deep-Learning, etc.) with examples."
}
posts.push(blog);
blog ={
    image:"https://image.freepik.com/free-photo/php-coding-computer-css-data-digital-function-concept_53876-125415.jpg ",
    title:"Computer science and engineering",
    date:"28 oct 2021",
    auther:"Sandeep Kumar Nayak",
    content:"Python is a high-level, general-purpose and a very popular programming language. Python programming language (latest Python 3) is being used in web development, Machine Learning applications, along with all cutting edge technology in Software Industry. Python Programming Language is very well suited for Beginners, also for experienced programmers with other programming languages like C++ and Java. This specially designed Python tutorial will help you learn Python Programming Language in most efficient way, with the topics from basics to advanced (like Web-scraping, Django, Deep-Learning, etc.) with examples."
}
posts.push(blog);
blog ={
    image:"https://image.freepik.com/free-photo/php-programming-html-coding-cyberspace-concept_53876-120453.jpg ",
    title:"Logo designing",
    date:"28 oct 2021",
    auther:"Sandeep Kumar Nayak",
    content:"Python is a high-level, general-purpose and a very popular programming language. Python programming language (latest Python 3) is being used in web development, Machine Learning applications, along with all cutting edge technology in Software Industry. Python Programming Language is very well suited for Beginners, also for experienced programmers with other programming languages like C++ and Java. This specially designed Python tutorial will help you learn Python Programming Language in most efficient way, with the topics from basics to advanced (like Web-scraping, Django, Deep-Learning, etc.) with examples."
}
posts.push(blog);
blog ={
    image:"https://image.freepik.com/free-photo/young-programmers_236854-21690.jpg ",
    title:"Information technology",
    date:"28 oct 2021",
    auther:"Sandeep Kumar Nayak",
    content:"Python is a high-level, general-purpose and a very popular programming language. Python programming language (latest Python 3) is being used in web development, Machine Learning applications, along with all cutting edge technology in Software Industry. Python Programming Language is very well suited for Beginners, also for experienced programmers with other programming languages like C++ and Java. This specially designed Python tutorial will help you learn Python Programming Language in most efficient way, with the topics from basics to advanced (like Web-scraping, Django, Deep-Learning, etc.) with examples."
}
posts.push(blog);
blog ={
    image:"https://media.istockphoto.com/photos/concept-of-the-popular-programming-language-c-plus-plus-picture-id1293425730?s=2048x2048",
    title:"C++ programming language",
    date:"28 oct 2021",
    auther:"Sandeep Kumar Nayak",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium omnisimpedit dolor, obcaecati commodi aliquam necessitatibus nulla voluptatemdistinctio odio alias consequatur sint atque molestiae iste ea tenetur.Suscipit, modi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium omnisimpedit dolor, obcaecati commodi aliquam necessitatibus nulla voluptatemdistinctio odio alias consequatur sint atque molestiae iste ea tenetur.Suscipit, modi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium omnisimpedit dolor, obcaecati commodi aliquam necessitatibus nulla voluptatemdistinctio odio alias consequatur sint atque molestiae iste ea tenetur.Suscipit, modi!"
}
posts.push(blog);
blog ={
    image:"https://image.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg ",
    title:"It is a Title",
    date:"28 oct 2021",
    auther:"Sandeep Kumar Nayak",
    content:"Python is a high-level, general-purpose and a very popular programming language. Python programming language (latest Python 3) is being used in web development, Machine Learning applications, along with all cutting edge technology in Software Industry. Python Programming Language is very well suited for Beginners, also for experienced programmers with other programming languages like C++ and Java. This specially designed Python tutorial will help you learn Python Programming Language in most efficient way, with the topics from basics to advanced (like Web-scraping, Django, Deep-Learning, etc.) with examples."
}
posts.push(blog);
blog ={
    image:"https://image.freepik.com/free-photo/ai-disruptive-technology-background-blue-with-robotic-hands-remixed-media_53876-110821.jpg ",
    title:"Data science by saty",
    date:"28 oct 2021",
    auther:"Sandeep Kumar Nayak",
    content:"Python is a high-level, general-purpose and a very popular programming language. Python programming language (latest Python 3) is being used in web development, Machine Learning applications, along with all cutting edge technology in Software Industry. Python Programming Language is very well suited for Beginners, also for experienced programmers with other programming languages like C++ and Java. This specially designed Python tutorial will help you learn Python Programming Language in most efficient way, with the topics from basics to advanced (like Web-scraping, Django, Deep-Learning, etc.) with examples."
}
posts.push(blog);
blog ={
    image:"https://image.freepik.com/free-photo/various-computer-equipment-with-programming-code-screens-table-dark-room-cyber-security-concept-copy-space_236854-23136.jpg",
    title:"C Programming language",
    date:"28 oct 2021",
    auther:"Sandeep Kumar Nayak",
    content:"C is a procedural programming language. It was initially developed by Dennis Ritchie as a system programming language to write operating system. The main features of C language include low-level access to memory, simple set of keywords, and clean style, these features make C language suitable for system programming like operating system or compiler development."
}
posts.push(blog);
blog ={
    image:"https://image.freepik.com/free-photo/computer-program-coding-screen_53876-138060.jpg ",
    title:"Python in our life",
    date:"28 oct 2021",
    auther:"Sandeep Kumar Nayak",
    content:"Python is a high-level, general-purpose and a very popular programming language. Python programming language (latest Python 3) is being used in web development, Machine Learning applications, along with all cutting edge technology in Software Industry. Python Programming Language is very well suited for Beginners, also for experienced programmers with other programming languages like C++ and Java. This specially designed Python tutorial will help you learn Python Programming Language in most efficient way, with the topics from basics to advanced (like Web-scraping, Django, Deep-Learning, etc.) with examples."
}
posts.push(blog);
blog ={
    image:" https://image.freepik.com/free-photo/ai-digital-transformation-background-blue-with-robotic-hands-remixed-media_53876-108540.jpg",
    title:"Machine learning using python",
    date:"28 oct 2021",
    auther:"Sandeep Kumar Nayak",
    content:"Python is a high-level, general-purpose and a very popular programming language. Python programming language (latest Python 3) is being used in web development, Machine Learning applications, along with all cutting edge technology in Software Industry. Python Programming Language is very well suited for Beginners, also for experienced programmers with other programming languages like C++ and Java. This specially designed Python tutorial will help you learn Python Programming Language in most efficient way, with the topics from basics to advanced (like Web-scraping, Django, Deep-Learning, etc.) with examples."
}
posts.push(blog);
blog ={
    image:"https://image.freepik.com/free-photo/winsome-beautiful-young-woman-posing-brown-wall-close-up-shot-wonderful-brunette-girl_197531-13994.jpg ",
    title:"Webdevlopement free course",
    date:"28 oct 2021",
    auther:"Sandeep Kumar Nayak",
    content:"Python is a high-level, general-purpose and a very popular programming language. Python programming language (latest Python 3) is being used in web development, Machine Learning applications, along with all cutting edge technology in Software Industry. Python Programming Language is very well suited for Beginners, also for experienced programmers with other programming languages like C++ and Java. This specially designed Python tutorial will help you learn Python Programming Language in most efficient way, with the topics from basics to advanced (like Web-scraping, Django, Deep-Learning, etc.) with examples."
}
posts.push(blog);
blog ={
    image:"https://image.freepik.com/free-photo/it-girl-looking-codes_539387-38.jpg ",
    title:"Iska to mujhe bhi pta nhi",
    date:"28 oct 2021",
    auther:"Sandeep Kumar Nayak",
    content:"Python is a high-level, general-purpose and a very popular programming language. Python programming language (latest Python 3) is being used in web development, Machine Learning applications, along with all cutting edge technology in Software Industry. Python Programming Language is very well suited for Beginners, also for experienced programmers with other programming languages like C++ and Java. This specially designed Python tutorial will help you learn Python Programming Language in most efficient way, with the topics from basics to advanced (like Web-scraping, Django, Deep-Learning, etc.) with examples."
}
posts.push(blog);
blog ={
    image:"https://image.freepik.com/free-photo/php-coding-computer-css-data-digital-function-concept_53876-125415.jpg ",
    title:"Computer science and engineering",
    date:"28 oct 2021",
    auther:"Sandeep Kumar Nayak",
    content:"Python is a high-level, general-purpose and a very popular programming language. Python programming language (latest Python 3) is being used in web development, Machine Learning applications, along with all cutting edge technology in Software Industry. Python Programming Language is very well suited for Beginners, also for experienced programmers with other programming languages like C++ and Java. This specially designed Python tutorial will help you learn Python Programming Language in most efficient way, with the topics from basics to advanced (like Web-scraping, Django, Deep-Learning, etc.) with examples."
}
posts.push(blog);
blog ={
    image:"https://image.freepik.com/free-photo/php-programming-html-coding-cyberspace-concept_53876-120453.jpg ",
    title:"Logo designing",
    date:"28 oct 2021",
    auther:"Sandeep Kumar Nayak",
    content:"Python is a high-level, general-purpose and a very popular programming language. Python programming language (latest Python 3) is being used in web development, Machine Learning applications, along with all cutting edge technology in Software Industry. Python Programming Language is very well suited for Beginners, also for experienced programmers with other programming languages like C++ and Java. This specially designed Python tutorial will help you learn Python Programming Language in most efficient way, with the topics from basics to advanced (like Web-scraping, Django, Deep-Learning, etc.) with examples."
}
posts.push(blog);
blog ={
    image:"https://image.freepik.com/free-photo/young-programmers_236854-21690.jpg ",
    title:"Information technology",
    date:"28 oct 2021",
    auther:"Sandeep Kumar Nayak",
    content:"Python is a high-level, general-purpose and a very popular programming language. Python programming language (latest Python 3) is being used in web development, Machine Learning applications, along with all cutting edge technology in Software Industry. Python Programming Language is very well suited for Beginners, also for experienced programmers with other programming languages like C++ and Java. This specially designed Python tutorial will help you learn Python Programming Language in most efficient way, with the topics from basics to advanced (like Web-scraping, Django, Deep-Learning, etc.) with examples."
}
posts.push(blog);
blog ={
    image:"https://media.istockphoto.com/photos/concept-of-the-popular-programming-language-c-plus-plus-picture-id1293425730?s=2048x2048",
    title:"C++ programming language",
    date:"28 oct 2021",
    auther:"Sandeep Kumar Nayak",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium omnisimpedit dolor, obcaecati commodi aliquam necessitatibus nulla voluptatemdistinctio odio alias consequatur sint atque molestiae iste ea tenetur.Suscipit, modi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium omnisimpedit dolor, obcaecati commodi aliquam necessitatibus nulla voluptatemdistinctio odio alias consequatur sint atque molestiae iste ea tenetur.Suscipit, modi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium omnisimpedit dolor, obcaecati commodi aliquam necessitatibus nulla voluptatemdistinctio odio alias consequatur sint atque molestiae iste ea tenetur.Suscipit, modi!"
}
posts.push(blog);
blog ={
    image:"https://image.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg ",
    title:"It is a Title",
    date:"28 oct 2021",
    auther:"Sandeep Kumar Nayak",
    content:"Python is a high-level, general-purpose and a very popular programming language. Python programming language (latest Python 3) is being used in web development, Machine Learning applications, along with all cutting edge technology in Software Industry. Python Programming Language is very well suited for Beginners, also for experienced programmers with other programming languages like C++ and Java. This specially designed Python tutorial will help you learn Python Programming Language in most efficient way, with the topics from basics to advanced (like Web-scraping, Django, Deep-Learning, etc.) with examples."
}
posts.push(blog);
blog ={
    image:"https://image.freepik.com/free-photo/ai-disruptive-technology-background-blue-with-robotic-hands-remixed-media_53876-110821.jpg ",
    title:"Data science by saty",
    date:"28 oct 2021",
    auther:"Sandeep Kumar Nayak",
    content:"Python is a high-level, general-purpose and a very popular programming language. Python programming language (latest Python 3) is being used in web development, Machine Learning applications, along with all cutting edge technology in Software Industry. Python Programming Language is very well suited for Beginners, also for experienced programmers with other programming languages like C++ and Java. This specially designed Python tutorial will help you learn Python Programming Language in most efficient way, with the topics from basics to advanced (like Web-scraping, Django, Deep-Learning, etc.) with examples."
}
posts.push(blog);
blog ={
    image:"https://image.freepik.com/free-photo/various-computer-equipment-with-programming-code-screens-table-dark-room-cyber-security-concept-copy-space_236854-23136.jpg",
    title:"C Programming language",
    date:"28 oct 2021",
    auther:"Sandeep Kumar Nayak",
    content:"C is a procedural programming language. It was initially developed by Dennis Ritchie as a system programming language to write operating system. The main features of C language include low-level access to memory, simple set of keywords, and clean style, these features make C language suitable for system programming like operating system or compiler development."
}
posts.push(blog);
blog ={
    image:"https://image.freepik.com/free-photo/computer-program-coding-screen_53876-138060.jpg ",
    title:"Python in our life",
    date:"28 oct 2021",
    auther:"Sandeep Kumar Nayak",
    content:"Python is a high-level, general-purpose and a very popular programming language. Python programming language (latest Python 3) is being used in web development, Machine Learning applications, along with all cutting edge technology in Software Industry. Python Programming Language is very well suited for Beginners, also for experienced programmers with other programming languages like C++ and Java. This specially designed Python tutorial will help you learn Python Programming Language in most efficient way, with the topics from basics to advanced (like Web-scraping, Django, Deep-Learning, etc.) with examples."
}
posts.push(blog);
blog ={
    image:" https://image.freepik.com/free-photo/ai-digital-transformation-background-blue-with-robotic-hands-remixed-media_53876-108540.jpg",
    title:"Machine learning using python",
    date:"28 oct 2021",
    auther:"Sandeep Kumar Nayak",
    content:"Python is a high-level, general-purpose and a very popular programming language. Python programming language (latest Python 3) is being used in web development, Machine Learning applications, along with all cutting edge technology in Software Industry. Python Programming Language is very well suited for Beginners, also for experienced programmers with other programming languages like C++ and Java. This specially designed Python tutorial will help you learn Python Programming Language in most efficient way, with the topics from basics to advanced (like Web-scraping, Django, Deep-Learning, etc.) with examples."
}
posts.push(blog);
blog ={
    image:"https://image.freepik.com/free-photo/winsome-beautiful-young-woman-posing-brown-wall-close-up-shot-wonderful-brunette-girl_197531-13994.jpg ",
    title:"Webdevlopement free course",
    date:"28 oct 2021",
    auther:"Sandeep Kumar Nayak",
    content:"Python is a high-level, general-purpose and a very popular programming language. Python programming language (latest Python 3) is being used in web development, Machine Learning applications, along with all cutting edge technology in Software Industry. Python Programming Language is very well suited for Beginners, also for experienced programmers with other programming languages like C++ and Java. This specially designed Python tutorial will help you learn Python Programming Language in most efficient way, with the topics from basics to advanced (like Web-scraping, Django, Deep-Learning, etc.) with examples."
}
posts.push(blog);
blog ={
    image:"https://image.freepik.com/free-photo/it-girl-looking-codes_539387-38.jpg ",
    title:"Iska to mujhe bhi pta nhi",
    date:"28 oct 2021",
    auther:"Sandeep Kumar Nayak",
    content:"Python is a high-level, general-purpose and a very popular programming language. Python programming language (latest Python 3) is being used in web development, Machine Learning applications, along with all cutting edge technology in Software Industry. Python Programming Language is very well suited for Beginners, also for experienced programmers with other programming languages like C++ and Java. This specially designed Python tutorial will help you learn Python Programming Language in most efficient way, with the topics from basics to advanced (like Web-scraping, Django, Deep-Learning, etc.) with examples."
}
posts.push(blog);
blog ={
    image:"https://image.freepik.com/free-photo/php-coding-computer-css-data-digital-function-concept_53876-125415.jpg ",
    title:"Computer science and engineering",
    date:"28 oct 2021",
    auther:"Sandeep Kumar Nayak",
    content:"Python is a high-level, general-purpose and a very popular programming language. Python programming language (latest Python 3) is being used in web development, Machine Learning applications, along with all cutting edge technology in Software Industry. Python Programming Language is very well suited for Beginners, also for experienced programmers with other programming languages like C++ and Java. This specially designed Python tutorial will help you learn Python Programming Language in most efficient way, with the topics from basics to advanced (like Web-scraping, Django, Deep-Learning, etc.) with examples."
}
posts.push(blog);
blog ={
    image:"https://image.freepik.com/free-photo/php-programming-html-coding-cyberspace-concept_53876-120453.jpg ",
    title:"Logo designing",
    date:"28 oct 2021",
    auther:"Sandeep Kumar Nayak",
    content:"Python is a high-level, general-purpose and a very popular programming language. Python programming language (latest Python 3) is being used in web development, Machine Learning applications, along with all cutting edge technology in Software Industry. Python Programming Language is very well suited for Beginners, also for experienced programmers with other programming languages like C++ and Java. This specially designed Python tutorial will help you learn Python Programming Language in most efficient way, with the topics from basics to advanced (like Web-scraping, Django, Deep-Learning, etc.) with examples."
}
posts.push(blog);
blog ={
    image:"https://image.freepik.com/free-photo/young-programmers_236854-21690.jpg ",
    title:"Information technology",
    date:"28 oct 2021",
    auther:"Sandeep Kumar Nayak",
    content:"Python is a high-level, general-purpose and a very popular programming language. Python programming language (latest Python 3) is being used in web development, Machine Learning applications, along with all cutting edge technology in Software Industry. Python Programming Language is very well suited for Beginners, also for experienced programmers with other programming languages like C++ and Java. This specially designed Python tutorial will help you learn Python Programming Language in most efficient way, with the topics from basics to advanced (like Web-scraping, Django, Deep-Learning, etc.) with examples."
}
posts.push(blog);
blog ={
    image:"https://media.istockphoto.com/photos/concept-of-the-popular-programming-language-c-plus-plus-picture-id1293425730?s=2048x2048",
    title:"C++ programming language",
    date:"28 oct 2021",
    auther:"Sandeep Kumar Nayak",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium omnisimpedit dolor, obcaecati commodi aliquam necessitatibus nulla voluptatemdistinctio odio alias consequatur sint atque molestiae iste ea tenetur.Suscipit, modi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium omnisimpedit dolor, obcaecati commodi aliquam necessitatibus nulla voluptatemdistinctio odio alias consequatur sint atque molestiae iste ea tenetur.Suscipit, modi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium omnisimpedit dolor, obcaecati commodi aliquam necessitatibus nulla voluptatemdistinctio odio alias consequatur sint atque molestiae iste ea tenetur.Suscipit, modi!"
}
posts.push(blog);

app.get("/",function(req,res){
    res.render("home");
})
app.get("/join",function(req,res){
    res.render("join");
})
app.get("/blog",function(req,res){
    res.render("blog",({blogs:posts}));
})

app.get("/blogs/:newblog",function(req,res){
    let title = req.params.newblog;
    for(var i=0;i<posts.length;i++)
    {
        if(posts[i].title === title){
            res.render("post",({image:posts[i].image,title:posts[i].title,auther:posts[i].auther,date:posts[i].date,content:posts[i].content}))
        }
    }
    res.send("404 error page not found");
})

app.post("/order",function(req,res){
    const options = {
        amount: 10000,
        currency: "INR"
    };
    razorpay.orders.create(options,function(err,order){
        // console.log(order)
        res.json(order);
    })
})
app.post("/complete",function(req,res){
    razorpay.payments.fetch(req.body.razorpay_payment_id).then(function(d){
        if(d.status == "captured"){
            // alert("your payment is success full");
            res.render("home");
        }else{
            res.send("Payments fail");
        }
    })
})

app.listen(port);