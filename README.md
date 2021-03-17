# Food Quiz #

You need to eat food every day to keep your body going. It is nice to know some interesting facts about food which is so necessary to grow, 
play games and be healthy. Especially now with many people spending the pandemic cooking up a storm in the kitchen.

# UX #

## Strategy plane ##
The aim of the project is to create an interactive website quiz that would be fully responsive on all devices and screens. The quiz will target 
people 18+, who is interested in food. The website should be easy to use and that user would fully enjoy game.

## Scope plane ##
The game will be styled in a minimalistic design. Customers should easily use a website with no difficulties and enjoy food quiz.
You will be able to see straight away if the answer is right or wrong and the website will automatically redirect you to another question.

## Structure plane ##
The website will be 3 pages. The welcome page will have the name of the game, start button and simple rule of only one answer available.
With the press of the start button customer will be taken to the game page. On the top will be a question followed by 4 possible answers and a progress bar at the bottom.
After answering 10 questions, the user will be able to see their results, try to improve it one more time by clicking try again button or leave feedback in form below. 

## Skeleton plane ##
All website will be created in same design. On mobile version, possible answers will be displayed in rows, but for tablets
and bigger screens, possible answers will be displayed in 2 columns to take over the whole screen.

The wireframe for [mobile version](https://postimg.cc/grjSfCdP) and [desktop version](https://postimg.cc/N22x5wf9) of the food quiz.

## Surfuce plane ##
Main background colour will be purple. Purple colour stimulate imagination and has the highest vibration in the visible spectrum.
This colour is perfect for attracting customers attention for this food quiz.

# User Stories: #
1. As a user, I would like to see clear instruction for the quiz.
2. As a user, I would like to know if my answer is right.
3. As a user, I would like to see my results at the end of the quiz.
4. As a user, I would like to be able to try again.

Mockup
[![responsive.png](https://i.postimg.cc/ZqcxPJ1K/responsive.png)](https://postimg.cc/VSJtmPf3)

The live version of projet you can see [here.](https://vkirijanova.github.io/Food-Quiz/)

# Features #

### Existing features ###
Website has a simple structure and minimalistic design.
Buttons and answer options have hover effect for customers to see more clearly what they are choosing.
With JavaScript, answer options have turn green colour when answer is right and red colour when answer is wrong.
Once you answer question, website will load next question which will make customer experience more smooth.
On the last page score will be displayed along with try again button. There is form below if customer feels like leaving
their feedback about game.


### Future features ###
In the future would like to add usernames and hight scoreboard, that friends could compete with each other and 
see who is best.


# Technology used #
- HTML 
- CSS (the language to style HTML and make bootstrap more individual)
- JavaScript
- Balsamic framework (page layot)
- Google Fonts
- EmailJS API
- Jshint
- W3C school
- W3C mark up validation service (to test HTML and CSS)

# Testing #
- HTML tested with W3C mark up validation service. It showed that script in game.html is not necessary, however 
  without it you cannot submit form.
- CSS have been tested with W3C mark up validation service and been succesfully passed.
- JavaScript code passed through Jshint with no major issues
- Live project's (responsiveness passed through the Google Developer tool)
    Please see [mobile responsiveness](https://postimg.cc/XpzWyRcj) and [iPad responsiveness](https://postimg.cc/Jsp1KyLL)
- Project's responsiveness has been also manually checked on iPhone, Google Chrome, Microsoft Edge
- Feedback has been asked from friends, who interacted with the live project manually. Clear instruction of the game, easy to use, questions changing very smooth.  

## Testing user stories ##
1. As a user, I would like to see clear instruction for the quiz.

    First page is very clear about how to use the game. The user can see a note in the bottom that there is only one possible
    answer. As soon as start button will be pressed, the game will start.

2. As a user, I would like to know if my answer is right.

    The user will see green colour button if the answer will be right, otherwise the button will turn red.

3. As a user, I would like to see my results at the end of the quiz.

    The user will see results of the game as soon as he finishes answering 10 questions.

4. As a user, I would like to be able to try again.

    The user have to try again button, which will direct him to beginning of the game.

### Issues ###
Wrong import link been copied in css file, spotted only during css validation 

While doing responsivness on google development tool, website on iPad looked perfect, however when friend was
cheking on iPad, website was a bit lower than expected. Couldn't find issue.

HTML validation showed warning that script in final.html on line 13-16 in not required, however when tried 
to to remove it, was not able to submit form. 

# Deployment #
### Managing Git ###
1. I started with creating a local git repo using the command `git init`; 
2. I then added to my local repo using `git add .`;
3. And then commit them to my local repo using `git commit -m "message"`;
4. Once that was done I push my local repo to the remote (Github) using `git push`.

### GitHub Pages ###
I deploy my website in these following steps:
1. Log in on GitHub;
2. Navigate to needed repositary;
3. Click Setting on the right corner under repositary name;
4. Scroll down to GitHub Pages;
5. Click None and choose Master Branch;
6. Click Save and link will be created that says "Your site is published at ...".

### Cloning a repositary ###
If you would like to clone a repositary follow theese steps:
1. Log in on GitHub;
2. Navigate to needed repositary;
3. Above the list of the files, click green button Code;
4. On the dropdown selection, you will find a link to clone the code with HHTPS;
5. Open Git Bash;
6. Open new location where you want to clone repositary;
7. Type git clone, and then paste the URL you copied earlier.
8. Press Enter.

# Credits # 
Project idea and JavaScript code comes from [Brian Design channel.](https://www.youtube.com/watch?v=f4fB9Xg2JEY&ab_channel=BrianDesign)
The script loader order for EmailJS API comes from the relative lesson from the Code Institute.

### Content ###
The quiz questions been choosen from [Food and Drink Quiz Website](https://www.funquizzes.uk/food-and-drink-quiz/).

### Media ###
Images were taken from [Unsplash](https://unsplash.com/) website, where stored free high-resolution photos.

### Acknowledgements ###
My mentor Spencer Barriball for his support.