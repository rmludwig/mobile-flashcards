# My "Mobile Flashcards" project

This was project 3 for the React Nano Degree coursework. Read the details below.

----------------------------------------------------------------
## Installing the Would You Rather application

1. Clone the repo from https://github.com/rmludwig/would-you-rather.git. For example:
``` git clone https://github.com/rmludwig/mobile-flashcards.git ```
2. Change to the directory where it was cloned. For example:
```cd mobile-flashcards```
3. Install all needed dependencies with yarn. For example:
```yarn install```
4. Start the application and enjoy!
    - Running with expo / metro on local machine ```yarn web``` **-preferred-**
    - Running in react-native ```yarn start```
    - Running with ios simulator ```yarn ios```


----------------------------------------------------------------
## Development Environments Used

1. **Web** I developed the application using yarn web and in a browser simulating
the mobile phone. This was because I had extraordinary problems getting the
android emulator to work on my PC. Read more about that below.

2. **IOS Device** After the app was nearly complete I started testing using the expo/metro
tunnel option and running it on my iPhone 10 running ios 14. I ran into some ios
specific issues and made needed updates. When complete I had my son test successfully
on the iPhone.

3. **IOS Emulator in Xcode** I was able to load the app on an IOS emulator on my daughters Mac
but I had to take some extra install steps like running ```pod install``` from the ios
directory in my project. I did not fully test the app on the ios emulator as it worked
well on my ios device.

4. **android** I do not have access to an android device, and after hours of attempts I
could not get either of the android emulators working on my PC using the instructions in the
course materials. So this was not tested on android.

5. **expo snack** This is where I actually started my work and where I attempted to
complete the in class project. Because I was having so much trouble with the instructions
for installing the emulators I found this was an easy way to get going. However as I
started my project I found the code editor was insufficient. So I abandoned snack and
have not tested my final project there.


----------------------------------------------------------------
# Citations
- The course content and in class project got me started, I referred to Tyler's code
at the beginning, but moved away from it as the versions I was using did not line up
with the fitness app.
- I researched on stackoverflow, YouTube videos, and other online posts.
- The online documentation for expo and react-native was used heavily.


----------------------------------------------------------------
## Features

1. I created the project using the **create-react-native-app** as specified.

2. The coursework and class project was from 2017 so much of the code and examples
would not run in my environment. In order to make my project work with the current
version of **expo (4.5.2)** I had to use updated dependencies / packages like
@react-native-async-storage/async-storage, @react-navigation/bottom-tabs,
expo-constants, and others. See the package.json for the full details.

2. I used **nested tab and stack navigators** as well as some other features not
covered in the coursework.

3. I created a **Settings** tab with a few features like resetting all data in The
app / local storage as well as **installing a test data set** to make testing the app
easier. I hope you enjoy using the test data set.

4. I had to build **react native Alerts** to support the confirmation handling on
the options in settings.

5. For the notifications in the class project and in my project I found that the
expo.notification is no longer available in current version of expo. I kept that
code in place but commented it out. I spent 10+ hours trying to find alternatives
and reached out to a mentor for help. The mentor deleted my question??? So I built
notification using alert. The **notification will fire** a few minutes after the app
is opened. And one minute after adding a new deck. I use the react-native-async-storage
to track if the notification needs to be sent again. I'm hoping my "work around" is
sufficient given that the course materials and class project use versions and techniques
that are no longer available in updated expo/react-native versions.


----------------------------------------------------------------
# Summary

I found this part of the React course very challenging. I spent significantly more
time on this project than the other two combined. After all that I do feel like I
learned quite a lot. I'm excited to get back to web development with React and intend
to use it in my projects at work. Thank you for reading. *Please pass my project.*


----------------------------------------------------------------
## Project Overview
For the UdaciCards project, you will build a mobile application (Android or iOS - or
both) that allows users to study collections of flashcards. The app will allow users
to create different categories of flashcards called "decks", add flashcards to those
decks, then take quizzes on those decks.


----------------------------------------------------------------
## Data (from project description)

We'll use AsyncStorage to store our decks and flashcards.

Using AsyncStorage you'll manage an object whose shape is similar to this:
```javascript
{
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}
```

Notice each deck creates a new key on the object. Each deck has a title and a questions
key. title is the title for the specific deck and questions is an array of questions and
answers for that deck.

### Tip
To manage your AsyncStorage database, you'll want to create four different helper methods.

**getDecks**: return all of the decks along with their titles, questions, and answers.
**getDeck**: (omitted) take in a single id argument and return the deck associated with that id.
**saveDeckTitle**: take in a single title argument and add it to the decks.
**addCardToDeck**: take in two arguments, title and card, and will add the card to the
list of questions for the deck with the associated title.


